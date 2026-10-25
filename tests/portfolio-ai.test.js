const test = require('node:test');
const assert = require('node:assert/strict');
const PortfolioAI = require('../assets/js/portfolio-ai.js');

const files = {
  'README.md': '# Overview\nProduction AI work. [Portfolio](https://chirag4798.github.io/)',
  'jio-fynd.md': '# Jio Fynd\nFashion design platform.',
  'projects.md': '# Open source\nByteTrack and DeepStream.',
  'portfolio-profile.md': '# Profile\nVellore Institute of Technology. Age: 28 as of October 2026. Born July 4, 1998. Ethnicity: Indian. Blood group: A+. [GitHub](https://github.com/chirag4798)',
};

function eventStream(events, onFirstChunk) {
  const encoder = new TextEncoder();
  let completed = false;
  return new Response(new ReadableStream({
    async start(controller) {
      controller.enqueue(encoder.encode(events[0]));
      onFirstChunk?.(() => completed);
      await new Promise(resolve => setTimeout(resolve, 5));
      for (const event of events.slice(1)) controller.enqueue(encoder.encode(event));
      controller.close();
      completed = true;
    },
  }), { headers: { 'Content-Type': 'text/event-stream' } });
}

function delta(text) {
  return `event: delta\ndata: ${JSON.stringify({ text })}\n\n`;
}

test('system prompt includes all portfolio files and grounding/navigation rules', () => {
  const prompt = PortfolioAI.buildSystemPrompt(files);

  assert.match(prompt, /jio-fynd\.md/);
  assert.match(prompt, /Fashion design platform/);
  assert.match(prompt, /projects\.md/);
  assert.match(prompt, /ByteTrack and DeepStream/);
  assert.match(prompt, /Do not invent/);
  assert.match(prompt, /Open source/);
  assert.match(prompt, /only when directly asked/i);
  assert.match(prompt, /Do not volunteer/i);
});

test('portfolio context contains every section as plain text', () => {
  const context = PortfolioAI.buildPortfolioContext(files);

  assert.match(context, /### README\.md/);
  assert.match(context, /### jio-fynd\.md/);
  assert.match(context, /### projects\.md/);
  assert.match(context, /### portfolio-profile\.md/);
  assert.match(context, /Blood group: A\+/);
  assert.doesNotMatch(context, /<[^>]+>/);
});

test('portfolio context can be limited to only relevant sections', () => {
  const context = PortfolioAI.buildPortfolioContext(files, ['jio-fynd.md']);

  assert.match(context, /Fashion design platform/);
  assert.match(context, /Vellore Institute of Technology/);
  assert.match(context, /https:\/\/github\.com\/chirag4798/);
  assert.doesNotMatch(context, /Multi-layered perceptron/);
  assert.doesNotMatch(context, /README\.md/);
});

test('text streamer forwards provider chunks immediately without extra pacing', async () => {
  const output = [];
  const streamer = PortfolioAI.createTextStreamer(chunk => output.push(chunk));
  streamer.push('hello ');
  streamer.push('world');

  assert.deepEqual(output, ['hello ', 'world']);
  await streamer.finish();
  assert.equal(output.join(''), 'hello world');
  streamer.reset();
  streamer.push('next');
  assert.deepEqual(output, ['hello ', 'world', 'next']);
});

test('daily LLM quota exhaustion is distinguished from other rate limits', () => {
  assert.equal(PortfolioAI.isDailyQuotaError({ code: 'UPSTREAM_DAILY_QUOTA_EXHAUSTED' }), true);
  assert.equal(PortfolioAI.isDailyQuotaError({ code: 'UPSTREAM_RATE_LIMITED' }), false);
  assert.equal(PortfolioAI.isDailyQuotaError({ code: 'RATE_LIMITED' }), false);
  assert.equal(PortfolioAI.isUpstreamRateLimitError({ code: 'UPSTREAM_DAILY_QUOTA_EXHAUSTED' }), true);
  assert.equal(PortfolioAI.isUpstreamRateLimitError({ code: 'UPSTREAM_RATE_LIMITED' }), true);
  assert.equal(PortfolioAI.isUpstreamRateLimitError({ code: 'RATE_LIMITED' }), false);
});

test('static fallback text streams in readable chunks without changing its content', async () => {
  const chunks = [];
  const waits = [];
  const source = 'Static portfolio answers remain available when the model quota ends.';
  await PortfolioAI.streamStaticText(source, chunk => chunks.push(chunk), async () => waits.push(true));

  assert.ok(chunks.length > 1);
  assert.equal(chunks.join(''), source);
  assert.ok(waits.length > 0);
});

test('cloud chat sends the user question and context, then streams answer chunks', async () => {
  let request;
  let observedBeforeStreamCompleted = false;
  const deltas = [];
  const answer = await PortfolioAI.requestCloudAnswer(
    'https://example.supabase.co/functions/v1/portfolio-chat',
    'Tell me about Jio Fynd',
    PortfolioAI.buildPortfolioContext(files),
    async (url, options) => {
      request = { url, options };
      const firstEvent = delta('Jio Fynd builds ');
      return eventStream([
        firstEvent.slice(0, 17),
        firstEvent.slice(17),
        delta('a fashion design platform.'),
        'event: done\ndata: {}\n\n',
      ], isCompleted => { observedBeforeStreamCompleted = !isCompleted() });
    },
    chunk => deltas.push(chunk),
  );

  assert.equal(request.url, 'https://example.supabase.co/functions/v1/portfolio-chat');
  assert.equal(request.options.method, 'POST');
  assert.deepEqual(JSON.parse(request.options.body), {
    question: 'Tell me about Jio Fynd',
    context: PortfolioAI.buildPortfolioContext(files),
  });
  assert.equal(answer, 'Jio Fynd builds a fashion design platform.');
  assert.deepEqual(deltas, ['Jio Fynd builds ', 'a fashion design platform.']);
  assert.equal(observedBeforeStreamCompleted, true);
});

test('cloud chat can send only the context selected for a personal question', async () => {
  let request;
  const answer = await PortfolioAI.requestCloudAnswer(
    'https://example.supabase.co/functions/v1/portfolio-chat',
    'Tell me about Jio Fynd',
    PortfolioAI.buildPortfolioContext(files, ['jio-fynd.md']),
    async (_url, options) => {
      request = JSON.parse(options.body);
      return eventStream([delta('Jio Fynd builds a fashion design platform.'), 'event: done\ndata: {}\n\n']);
    },
  );

  assert.equal(answer, 'Jio Fynd builds a fashion design platform.');
  assert.match(request.context, /Fashion design platform/);
  assert.doesNotMatch(request.context, /ByteTrack|README\.md/);
});

test('cloud chat fails closed when the endpoint returns an error', async () => {
  const failure = await PortfolioAI.requestCloudAnswer('https://example.supabase.co/chat', 'hello', 'context', async () => ({
    ok: false,
    status: 503,
    json: async () => ({ error: 'Portfolio AI is temporarily unavailable', code: 'UPSTREAM_UNAVAILABLE' }),
  })).then(() => null, error => error);

  assert.equal(failure.status, 503);
  assert.equal(failure.code, 'UPSTREAM_UNAVAILABLE');
  await assert.rejects(
    PortfolioAI.requestCloudAnswer('https://example.supabase.co/chat', 'hello', 'context', async () => ({ ok: false, status: 429 })),
    /request failed \(429\)/,
  );
});

test('cloud chat rejects an upstream stream error after clearing any streamed partial answer', async () => {
  const deltas = [];
  const failure = await PortfolioAI.requestCloudAnswer(
      'https://example.supabase.co/chat',
      'Tell me about Jio Fynd',
      'context',
      async () => eventStream([delta('Partial answer'), 'event: error\ndata: {"error":"unavailable","code":"UPSTREAM_STREAM_INTERRUPTED"}\n\n']),
      chunk => deltas.push(chunk),
  ).then(() => null, error => error);
  assert.match(failure.message, /stream failed/);
  assert.equal(failure.code, 'UPSTREAM_STREAM_INTERRUPTED');
  assert.deepEqual(deltas, ['Partial answer']);
});

test('unavailable cloud chat fallback only links relevant sections and does not invent an answer', () => {
  const answer = PortfolioAI.buildFallbackAnswer(['about.md', 'experience.md', 'about.md'], 'unavailable');

  assert.match(answer, /temporarily unavailable/i);
  assert.match(answer, /try again in a moment/i);
  assert.match(answer, /\[About me\]\(about\.md\)/);
  assert.match(answer, /\[Experience\]\(experience\.md\)/);
  assert.doesNotMatch(answer, /university|degree|education/i);
  assert.match(PortfolioAI.buildFallbackAnswer(['contact.md'], 'rate-limited'), /request limit/i);
});

test('availability checks request English text input and output', async () => {
  let options;
  const model = {
    availability: async value => {
      options = value;
      return 'available';
    },
  };

  assert.equal(await PortfolioAI.getAvailability(model), 'available');
  assert.deepEqual(options.expectedInputs, [{ type: 'text', languages: ['en'] }]);
  assert.deepEqual(options.expectedOutputs, [{ type: 'text', languages: ['en'] }]);
});

test('availability safely degrades when the browser API is missing or rejects', async () => {
  assert.equal(await PortfolioAI.getAvailability(undefined), 'unsupported');
  assert.equal(await PortfolioAI.getAvailability({ availability: async () => { throw new Error('blocked'); } }), 'unsupported');
});

test('session receives the complete context and reports model download progress', async () => {
  let options;
  const progress = [];
  const model = {
    create: async value => {
      options = value;
      value.monitor({ addEventListener: (_, callback) => callback({ loaded: 0.5 }) });
      return { prompt: async question => `Answer: ${question}` };
    },
  };

  const session = await PortfolioAI.createSession(model, files, value => progress.push(value));

  assert.match(options.initialPrompts[0].content, /Fashion design platform/);
  assert.match(options.initialPrompts[0].content, /ByteTrack and DeepStream/);
  assert.deepEqual(progress, [0.5]);
  assert.equal(await session.prompt('Tell me about Fynd'), 'Answer: Tell me about Fynd');
});

test('answer rendering escapes model HTML and allows only HTTPS or known section links', () => {
  const html = PortfolioAI.renderAnswer(
    '<img src=x onerror=alert(1)>\n\n[Open projects](projects.md) [unsafe](javascript:alert(1)) [Portfolio](https://chirag4798.github.io/) [fake](https://example.com/)',
    Object.keys(files),
    ['https://chirag4798.github.io/'],
  );

  assert.doesNotMatch(html, /<img|javascript:/i);
  assert.match(html, /&lt;img/);
  assert.match(html, /data-file="projects\.md"/);
  assert.match(html, /href="https:\/\/chirag4798\.github\.io\//);
  assert.doesNotMatch(html, /href="https:\/\/example\.com/);
});
