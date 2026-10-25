const test = require('node:test');
const assert = require('node:assert/strict');
const PortfolioAI = require('../assets/js/portfolio-ai.js');

const files = {
  'README.md': '# Overview\nProduction AI work. [Portfolio](https://chirag4798.github.io/)',
  'jio-fynd.md': '# Jio Fynd\nFashion design platform.',
  'projects.md': '# Open source\nByteTrack and DeepStream.',
};

test('system prompt includes all portfolio files and grounding/navigation rules', () => {
  const prompt = PortfolioAI.buildSystemPrompt(files);

  assert.match(prompt, /jio-fynd\.md/);
  assert.match(prompt, /Fashion design platform/);
  assert.match(prompt, /projects\.md/);
  assert.match(prompt, /ByteTrack and DeepStream/);
  assert.match(prompt, /Do not invent/);
  assert.match(prompt, /Open source/);
});

test('portfolio context contains every section as plain text', () => {
  const context = PortfolioAI.buildPortfolioContext(files);

  assert.match(context, /### README\.md/);
  assert.match(context, /### jio-fynd\.md/);
  assert.match(context, /### projects\.md/);
  assert.doesNotMatch(context, /<[^>]+>/);
});

test('portfolio context can be limited to only relevant sections', () => {
  const context = PortfolioAI.buildPortfolioContext(files, ['jio-fynd.md']);

  assert.match(context, /Fashion design platform/);
  assert.doesNotMatch(context, /ByteTrack/);
  assert.doesNotMatch(context, /README\.md/);
});

test('cloud chat sends the user question and full portfolio context, then returns the answer', async () => {
  let request;
  const answer = await PortfolioAI.requestCloudAnswer(
    'https://example.supabase.co/functions/v1/portfolio-chat',
    'Tell me about Jio Fynd',
    PortfolioAI.buildPortfolioContext(files),
    async (url, options) => {
      request = { url, options };
      return { ok: true, json: async () => ({ answer: 'Jio Fynd builds a fashion design platform.' }) };
    },
  );

  assert.equal(request.url, 'https://example.supabase.co/functions/v1/portfolio-chat');
  assert.equal(request.options.method, 'POST');
  assert.deepEqual(JSON.parse(request.options.body), {
    question: 'Tell me about Jio Fynd',
    context: PortfolioAI.buildPortfolioContext(files),
  });
  assert.equal(answer, 'Jio Fynd builds a fashion design platform.');
});

test('cloud chat can send only the context selected for a personal question', async () => {
  let request;
  const answer = await PortfolioAI.requestCloudAnswer(
    'https://example.supabase.co/functions/v1/portfolio-chat',
    'Tell me about Jio Fynd',
    PortfolioAI.buildPortfolioContext(files, ['jio-fynd.md']),
    async (_url, options) => {
      request = JSON.parse(options.body);
      return { ok: true, json: async () => ({ answer: 'Jio Fynd builds a fashion design platform.' }) };
    },
  );

  assert.equal(answer, 'Jio Fynd builds a fashion design platform.');
  assert.match(request.context, /Fashion design platform/);
  assert.doesNotMatch(request.context, /ByteTrack|README\.md/);
});

test('cloud chat fails closed when the endpoint returns an error', async () => {
  await assert.rejects(
    PortfolioAI.requestCloudAnswer('https://example.supabase.co/chat', 'hello', 'context', async () => ({ ok: false, status: 429 })),
    /request failed \(429\)/,
  );
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
