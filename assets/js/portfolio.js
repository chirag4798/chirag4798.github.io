(() => {
 const files={
 'README.md':`# Chirag Shetty\n\n<div class="meta">AI / ML ENGINEER · MUMBAI, INDIA</div>\n\nI build **AI systems that make it to production.**\n\nFrom generative image pipelines to real-time vision at the edge, I work across the full journey: model, product, platform, and the systems that keep them running.\n\n<div class="callout"><span class="metric">5+</span> years building AI　 <span class="metric">225 FPS</span> vision inference　 <span class="metric">50 FPS</span> Jetson ALPR</div>\n\n## The through-line\n\nUseful AI is an engineering discipline. The interesting part isn’t only the model. It’s making the whole thing useful: the data, latency, product surface, deployment, and what happens when something breaks.\n\nThat’s the thread across my work: shipping computer vision and generative AI into products people use, then making those systems faster, steadier, and easier to operate.\n\n## Explore this workspace\n\nChoose a file in the Explorer to open a project, career chapter, open-source repository, article, or contact details.\n\n> Start with **work/impetus-design.md** for the AI-powered fashion design platform, or **open-source/projects.md** for my public projects.`,
 'about.md':`# About me\n\n<img class="portrait" src="images/chirag-passport.jpg" alt="Chirag Shetty">\n\n<div class="meta">AI / ML ENGINEER · MUMBAI, INDIA</div>\n\nI’m Chirag Shetty, an AI/ML engineer focused on turning machine learning into products and services that hold up in real use.\n\nMy work spans **generative AI, computer vision, model serving, and edge deployment**. I enjoy the seams between disciplines: translating a product need into an AI workflow, making inference fit the hardware, and building the observability and recovery that production needs.\n\n## How I work\n\n- Start from the real problem and its constraints.\n- Design the complete system around the model.\n- Measure quality, latency, and cost.\n- Ship, observe, and improve with evidence.\n\n## Current focus\n\nProduction AI platforms, multimodal and agentic workflows, efficient inference, and real-time computer vision.`,
 'impetus-design.md':`# Fashion design, with a bigger canvas\n\n<div class="meta">JIO FYND · 2023—NOW · GENAI / MULTI-AGENT / PLATFORM</div>\n\nBuilding an AI-powered design platform that helps teams explore trends, plan collections, and move from a brief to a range of generated styles.\n\n## The challenge\n\nMake a complex design workflow feel like one coherent creative tool, with structured inputs and outputs teams can work from.\n\n## The system\n\nI defined platform architecture and built a multi-agent workflow to gather requirements, plan range architectures, and generate styles. The backend brings together **LangChain, multimodal LLMs, Flux, Stable Diffusion, and vLLM services**.\n\n## My focus\n\nConnect AI planning and generation into a modular product workflow, while keeping the underlying steps inspectable and useful to designers.\n\n<div class="callout">PRODUCT · AGENTS · MULTIMODAL AI · FASHION TECHNOLOGY</div>`,
 'genai-platform.md':`# A CDN that can think in images\n\n<div class="meta">JIO FYND · 2023—NOW · GENAI / INFERENCE / RELIABILITY</div>\n\nArchitected and led an AI-powered image delivery platform for Ajio, JioMart, and Tira, bringing real-time transformation into the shopping experience.\n\n## The pipeline\n\nAutomated product tagging, Stable Diffusion background generation, U2Net foreground extraction, and SRGAN upscaling run as coordinated image services.\n\n## The engineering\n\nPython and FastAPI APIs orchestrate processing and platform integrations. I applied post-training quantization to lower latency and GPU memory use, and added token-usage tracking and efficiency improvements to reduce operating costs.\n\n## Outcome\n\nThe platform contributed to a **5% increase in product engagement**. I also owned production reliability work, including monitoring, incident response, and database recovery.\n\n<div class="callout">Stable Diffusion · FastAPI · Model optimization · Production operations</div>`,
 'computer-vision.md':`# Video analytics, at real-time speed\n\n<div class="meta">ADAGRAD AI · 2021—2023 · COMPUTER VISION / C++ / TENSORRT</div>\n\nBuilt production video analytics for retail and access control: people counting, re-identification, semantic matching, and license-plate recognition.\n\n## Throughput\n\nC++ inference pipelines using YOLO, PyTorch, and TensorRT reached **225 FPS on NVIDIA T4 GPUs** for high-volume video analytics.\n\n## At the edge\n\nAn ALPR system on NVIDIA Jetson TX2 NX sustained **50 FPS at 90–95% accuracy** and connected to backend services for traffic-enforcement workflows.\n\n## Keeping it efficient\n\nI used PTQ and QAT to compress detection models to INT8 while preserving accuracy across distributed deployments.\n\n<div class="callout">YOLO · NVIDIA DeepStream · TensorRT · C++ · Jetson</div>`,
 'edge-ai.md':`# Make the model fit the world\n\n<div class="meta">OPTISOL · 2020—2021 · VISION / EDGE / OPTIMIZATION</div>\n\nDeveloped computer-vision systems for automated power-pole inspection and defect detection, then brought inference cost down through model optimization.\n\n## From model to workflow\n\nTensorFlow and OpenCV powered automated inspection, with FastAPI and Flask services connecting models to practical ML workflows.\n\n## Optimization\n\nQuantization-aware training and model sparsity reduced latency by **50%**. This work built my grounding in the tradeoffs between latency, memory, and accuracy on the device that has to run the model.\n\n<div class="callout">TensorFlow · OpenCV · FastAPI · QAT · Model sparsity</div>`,
 'projects.md':`# Open-source & selected projects\n\n<div class="meta">CODE · PROTOTYPES · EXPERIMENTS</div>\n\n- [ByteTrack → DeepStream](https://github.com/chirag4798/ByteTrack) — C++ port integrated with NVIDIA DeepStream for GPU-accelerated video analytics; linked repository is my public ByteTrack fork.\n- [DeepStream 101](https://github.com/chirag4798/DeepStream101) — code and practical notes for getting started with NVIDIA DeepStream and real-time video pipelines.\n- [Shop the Look](https://github.com/chirag4798/Shop-The-Look) — visual product discovery using object detection and image embeddings to find similar catalog items.\n- [Multi-layered perceptron](https://github.com/chirag4798/Multi-Layered-Perceptron) — neural network built with vector and matrix operations to explore backpropagation and optimization.\n- [SLAM](https://github.com/chirag4798/SLAM) — hands-on exploration of simultaneous localization and mapping in Python.\n- [Greener manufacturing](https://github.com/chirag4798/Mercedes-Benz-Greener-Manufacturing) — modeling vehicle testing bench time using Daimler manufacturing data.\n- [Clustering locations](https://github.com/chirag4798/Clustering-Locations) — exploring business locations through locality clustering and data mining.\n\n## More code\n\nBrowse [github.com/chirag4798](https://github.com/chirag4798) for repositories and current activity.`,
 'articles.md':`# Articles & field notes\n\n<div class="meta">COMPUTER VISION · NVIDIA DEEPSTREAM</div>\n\n- [NVIDIA DeepStream 101](https://chirag4798.medium.com/nvidia-deepstream-101-a-beginners-guide-to-real-time-computer-vision-afefcb5d7fba) — A beginner’s guide to real-time computer vision.\n- [Build your first DeepStream application](https://medium.com/@chirag4798/nvidia-deepstream-101-a-step-by-step-guide-to-creating-your-first-deepstream-application-68148753cf96) — A step-by-step walkthrough of the video pipeline.\n- [Shop the Look](https://chirag4798.medium.com/shop-the-look-8d686bde7de8) — End-to-end fashion recommendations through visual similarity.\n\n## Read more\n\n[chirag4798.medium.com](https://chirag4798.medium.com/)`,
 'experience.md':`# Experience\n\n<div class="meta">BUILDING AI PRODUCTS · 2020—NOW</div>\n\n## Jio Fynd · AI/ML engineering\n**2023—Now**\n\nArchitecting generative AI platforms and multi-agent workflows for fashion design and image delivery. Focus areas include platform design, multimodal AI, inference optimization, production reliability, and operational ownership.\n\n## Adagrad AI · Computer vision\n**2021—2023**\n\nBuilt real-time video analytics and edge ALPR systems. Delivered C++/TensorRT pipelines up to 225 FPS on NVIDIA T4 and 50 FPS on Jetson TX2 NX, with quantized models for distributed deployments.\n\n## Optisol · Computer vision and edge AI\n**2020—2021**\n\nDeveloped automated power-pole inspection and defect detection systems, applying quantization-aware training and sparsity to reduce latency.\n\n## The continuing thread\n\nMove useful AI from the model into the product, then keep improving the complete system.`,
 'toolkit.md':`# Toolkit\n\n<div class="meta">MODELS · SYSTEMS · PRODUCTION</div>\n\n## Models & intelligence\n\nComputer vision, multimodal models, generative image systems, and model development.\n\n**PyTorch · TensorFlow · YOLO · Stable Diffusion · Flux · Multimodal LLMs · LangChain**\n\n## Serving & platform\n\nAPIs, orchestration, model serving, and service boundaries for real products.\n\n**Python · C++ · FastAPI · vLLM · ONNX Runtime · PostgreSQL · GCP**\n\n## Inference & operations\n\nOptimization and operational ownership: fitting models to hardware, observing system behavior, and responding to production issues.\n\n**TensorRT · DeepStream · PTQ / QAT · INT8 · Docker · Kubernetes · Monitoring**`,
 'contact.md':`# Let’s build something useful\n\n<div class="meta">OPEN TO GOOD PROBLEMS</div>\n\nIf you’re working on production AI, GenAI platforms, or real-time computer vision, I’d like to hear what you’re building.\n\n- Email: [chirag4798@gmail.com](mailto:chirag4798@gmail.com)\n- [LinkedIn](https://www.linkedin.com/in/chirag--shetty/)\n- [GitHub](https://github.com/chirag4798)\n- [Medium](https://chirag4798.medium.com/)`
 };
 files['portfolio-profile.md']=`# Chirag Shetty — resume and profile reference

Use this compact reference to answer direct questions about Chirag, including questions focused on one employer or project. This profile is always supplied to the assistant alongside the most relevant portfolio section. Use only these facts; when something is absent, say so.

## Professional summary

Software Development Engineer with 5+ years of experience building production generative AI systems, including diffusion pipelines, LLM serving, and agentic workflows. Designed and deployed GenAI infrastructure for ecommerce platforms Ajio, JioMart, and Tira. Experience with Python/FastAPI services on GCP, Docker, and Kubernetes, and model inference optimization.

## Experience

- Jio Fynd — SDE-2 (ML Engineer), September 2023–present. Architecting an AI-powered fashion design platform for design generation, variations, and trend exploration. Designed agentic workflows using LangChain and LangGraph; built grounded RAG patterns; worked on LoRA/PEFT fine-tuning and evaluation; integrated Flux, Stable Diffusion, multimodal LLMs, and vLLM. Also architected GenAI image delivery for Ajio, JioMart, and Tira, contributing to a 5% increase in product engagement. Work includes tagging, Stable Diffusion backgrounds, U2Net foreground extraction, SRGAN upscaling, FastAPI services, PTQ, and production operations.
- Adagrad AI — Machine Learning Engineer, September 2021–August 2023. Built retail video analytics and ALPR systems. C++/YOLO/PyTorch/TensorRT inference reached 225 FPS on NVIDIA T4 GPUs. Jetson TX2 NX ALPR reached 50 FPS at 90–95% accuracy. Applied PTQ and QAT to INT8 models and worked with Fortune 500 clients.
- Optisol Business Solutions — Machine Learning Engineer, November 2020–September 2021. Built TensorFlow/OpenCV power-pole inspection and defect detection, a Q-learning website-testing system, and FastAPI/Flask workflows. QAT and sparsity reduced model latency by 50%.

## Education

Vellore Institute of Technology (VIT), Vellore, 2016–2020. Bachelor of Technology in Mechanical Engineering. CGPA: 8.33/10.

## Personal facts — answer only when directly asked

- Date of birth: 4 July 1998. Age: 28 as of October 2026. Use the birth date to calculate age when a current date is available; do not volunteer the birth date unless directly asked for it.
- Ethnicity: Indian.
- Blood group: A+.

## Skills from the resume

Generative AI: Stable Diffusion, Flux, vLLM, multimodal LLMs, Super Resolution GAN. LLM frameworks: LangChain, LangGraph, LlamaIndex, Hugging Face, agentic systems, RAG. Languages: Python, C++. Backend: FastAPI, Flask, REST APIs, JWT/OAuth2. Optimization: TensorRT, ONNX/ONNX Runtime, PTQ, QAT. Cloud/DevOps: GCP, Docker, Kubernetes, CI/CD. Databases: PostgreSQL, SQL. Also Git, Linux, logging, monitoring, and production debugging.

## Selected projects

Contributed a C++ BYTETrack port integrated with NVIDIA DeepStream; built Shop the Look fashion recommendations; Mercedes-Benz Greener Manufacturing Kaggle project (top 100 leaderboard KPI score); and locality clustering using data mining and web scraping. Portfolio open-source section also links DeepStream 101, MLP, SLAM, and Clustering Locations.

## Public links and contact

- Portfolio: [chirag4798.github.io](https://chirag4798.github.io/)
- GitHub profile and repositories: [github.com/chirag4798](https://github.com/chirag4798)
- BYTETrack: [GitHub repository](https://github.com/chirag4798/ByteTrack)
- DeepStream 101: [GitHub repository](https://github.com/chirag4798/DeepStream101)
- Shop the Look: [GitHub repository](https://github.com/chirag4798/Shop-The-Look)
- Multi-layered perceptron: [GitHub repository](https://github.com/chirag4798/Multi-Layered-Perceptron)
- SLAM: [GitHub repository](https://github.com/chirag4798/SLAM)
- Mercedes-Benz Greener Manufacturing: [GitHub repository](https://github.com/chirag4798/Mercedes-Benz-Greener-Manufacturing)
- Clustering Locations: [GitHub repository](https://github.com/chirag4798/Clustering-Locations)
- Articles and blog: [chirag4798.medium.com](https://chirag4798.medium.com/)
- NVIDIA DeepStream 101 article: [Medium article](https://chirag4798.medium.com/nvidia-deepstream-101-a-beginners-guide-to-real-time-computer-vision-afefcb5d7fba)
- Build your first DeepStream application: [Medium article](https://medium.com/@chirag4798/nvidia-deepstream-101-a-step-by-step-guide-to-creating-your-first-deepstream-application-68148753cf96)
- Shop the Look article: [Medium article](https://chirag4798.medium.com/shop-the-look-8d686bde7de8)
- LinkedIn: [linkedin.com/in/chirag--shetty](https://www.linkedin.com/in/chirag--shetty/)
- Email: chirag4798@gmail.com
- Resume PDF: assets/files/Chirag_Shetty_Resume.pdf
- Phone listed on the resume: +91-9092866690`;
 files['jio-fynd.md']=`# Jio Fynd

<div class="meta">SOFTWARE DEVELOPMENT ENGINEER II (MACHINE LEARNING) · SEPTEMBER 2023—PRESENT</div>

I work across generative AI product development and production image infrastructure for Ajio, JioMart, and Tira.

## Impetus · Fashion Design Platform

Designed platform architecture for AI-assisted design generation and variation. The workflow connects collection planning and style generation through LangChain, multimodal large language models, Flux, Stable Diffusion, and vLLM services.

## Generative AI image delivery

Architected and led AI image-transformation services for Ajio, JioMart, and Tira, contributing to a **5% increase in product engagement**. The pipeline includes automated product tagging, Stable Diffusion background generation, U2Net foreground extraction, and SRGAN upscaling.

## Production engineering

Built Python and FastAPI services for image-processing orchestration. Applied post-training quantization to reduce inference latency and GPU memory use, improved token efficiency, and owned monitoring, incident response, and database recovery.`;
 files['adagrad-ai.md']=`# Adagrad AI

<div class="meta">MACHINE LEARNING ENGINEER · SEPTEMBER 2021—AUGUST 2023</div>

Built real-time computer-vision systems for retail analytics, access control, and traffic enforcement.

## People analytics

Developed YOLO-based people analytics for person counting, person re-identification, and semantic matching.

## Real-time video analytics

Built C++ inference pipelines with YOLO, PyTorch, and TensorRT reaching **225 FPS on NVIDIA T4 GPUs**. Compressed detection models to INT8 with post-training quantization and quantization-aware training while preserving accuracy across distributed deployments.

## Edge ALPR

Developed Automated License Plate Recognition on NVIDIA Jetson TX2 NX, sustaining **50 FPS at 90–95% accuracy**, integrated with backend traffic-enforcement workflows.`;
 files['optisol.md']=`# Optisol Business Solutions

<div class="meta">MACHINE LEARNING ENGINEER · NOVEMBER 2020—SEPTEMBER 2021</div>

Built computer-vision and machine-learning workflows for infrastructure inspection and automated testing.

## Power-pole inspection

Developed TensorFlow and OpenCV defect-detection systems for automated power-pole inspection. Quantization-aware training and model sparsity reduced latency by **50%**.

## ML backend workflows

Built FastAPI and Flask services for ML pipelines, plus a Q-learning system for automated website testing.`;
 files['resume.md']=`# Resume

Download my current AI/ML and GenAI resume below. It includes my experience, technical strengths, selected open-source work, and articles.`;
 function render(md){let raw=md.replace(/^### (.*)$/gm,'<h3>$1</h3>').replace(/^## (.*)$/gm,'<h2>$1</h2>').replace(/^# (.*)$/gm,'<h1>$1</h1>').replace(/^<div class="meta">(.*?)<\/div>$/gm,'<div class="meta">$1</div>').replace(/^> (.*)$/gm,'<blockquote>$1</blockquote>').replace(/^- (.*)$/gm,'<li>$1</li>');raw=raw.split(/\n\n+/).map(block=>{if(/^<(h[1-3]|div|blockquote|li|img)/.test(block))return block;if(block.startsWith('<li>'))return `<ul>${block}</ul>`;return `<p>${block}</p>`}).join('\n');return raw.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/`([^`]+)`/g,'<code>$1</code>').replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank" rel="noreferrer">$1 ↗</a>')}
 const tree=[...document.querySelectorAll('.tree-file')],response=document.getElementById('response'),welcome=document.querySelector('.welcome');
 let chatGeneration=0,lastCloudFailure=null;
 const dailyQuotaStorageKey=`portfolio-llm-quota-${new Date().toISOString().slice(0,10)}`;
 function readDailyQuotaState(){try{return localStorage.getItem(dailyQuotaStorageKey)==='exhausted'}catch(_error){return false}}
 function rememberDailyQuotaState(){try{localStorage.setItem(dailyQuotaStorageKey,'exhausted')}catch(_error){}}
 let dailyLlmQuotaExhausted=readDailyQuotaState();
 const resumePath='assets/files/Chirag_Shetty_Resume.pdf';
 const approvedExternalLinks=[...new Set(Object.values(files).flatMap(content=>[...content.matchAll(/\]\((https:\/\/[^)\s]+)\)/g)].map(match=>match[1])))];
 function renderResourceLinks(sectionNames,excludedUrls=[]){
  const relevant=['projects.md','articles.md'].filter(name=>sectionNames.includes(name));
  if(!relevant.length)return '';
  const excluded=new Set(excludedUrls);
  const links=relevant.flatMap(name=>[...files[name].matchAll(/^- \[([^\]]+)\]\((https:\/\/[^)\s]+)\)/gm)].filter(([, ,url])=>!excluded.has(url)).map(([,label,url])=>`- [${label}](${url})`));
  return links.length?`<div class="portfolio-resource-links"><p><strong>Explore the links</strong></p>${window.PortfolioAI.renderAnswer(links.join('\n'),Object.keys(files),approvedExternalLinks)}</div>`:'';
 }
 function buildStaticTopicAnswer(topics){
  const html=topics.map(topic=>render(files[topic.key])).join('<hr>');
  const text=topics.map(topic=>{const section=document.createElement('div');section.innerHTML=render(files[topic.key]);return (section.innerText||section.textContent||'').trim()}).filter(Boolean).join('\n\n');
  return {html,text};
 }
 const resumeCard=()=>`<a class="attachment-card" href="${resumePath}" download="Chirag_Shetty_Resume.pdf"><span class="pdf-badge">PDF</span><span class="attachment-name"><strong>Chirag_Shetty_Resume.pdf</strong><small>AI / ML Engineer · 2 pages</small></span><span class="download-icon" aria-hidden="true">↓</span></a>`;
 const sectionPrompts={'README.md':'Give me an overview','about.md':'Tell me about Chirag','jio-fynd.md':'Tell me about Chirag’s work at Jio Fynd','adagrad-ai.md':'Tell me about Chirag’s work at Adagrad AI','optisol.md':'Tell me about Chirag’s work at Optisol Business Solutions','projects.md':'Show me Chirag’s open-source work','articles.md':'Show me Chirag’s articles','experience.md':'Give me Chirag’s experience overview','toolkit.md':'What tools does Chirag work with?','resume.md':'Can you share Chirag’s resume?','contact.md':'How can I contact Chirag?'};
 function showFile(name){if(!files[name])return;tree.forEach(b=>b.classList.toggle('selected',b.dataset.file===name));welcome.hidden=true;response.hidden=false;const body=render(files[name])+(name==='resume.md'?resumeCard():'');response.innerHTML=`<div class="user-message">${sectionPrompts[name]||'Give me an overview'}</div><div class="assistant-message"><div class="assistant-avatar">✳</div><div class="assistant-content">${body}</div></div>`;if(innerWidth<=720)setSidebarOpen(false);document.querySelector('.chat-scroll').scrollTop=document.querySelector('.chat-scroll').scrollHeight}
 tree.forEach(button=>button.addEventListener('click',()=>showFile(button.dataset.file)));
 const chatInput=document.getElementById('chatInput'),sendButton=document.getElementById('sendButton');
 function resizeComposer(){chatInput.style.height='auto';chatInput.style.height=`${Math.min(chatInput.scrollHeight,130)}px`;chatInput.style.overflowY=chatInput.scrollHeight>130?'auto':'hidden'}
 function updateSendButton(){sendButton.disabled=chatInput.disabled||!chatInput.value.trim()}
 chatInput.addEventListener('input',()=>{resizeComposer();updateSendButton()});
 function startNewChat(){chatGeneration++;response.hidden=true;response.replaceChildren();welcome.hidden=true;tree.forEach(button=>button.classList.remove('selected'));chatInput.value='';chatInput.disabled=false;resizeComposer();updateSendButton();resetAiStatus();chatInput.focus();if(innerWidth<=720)setSidebarOpen(false)}
 document.getElementById('newChatButton').addEventListener('click',startNewChat);
 document.querySelector('.codex-brand').addEventListener('click',()=>showFile('README.md'));
 const searchButton=document.getElementById('searchButton'),searchDialog=document.getElementById('searchDialog'),searchInput=document.getElementById('searchInput'),searchResults=document.getElementById('searchResults');
 function renderSearchResults(query=''){
  const normalized=normalizeText(query);searchResults.replaceChildren();
  const matches=tree.filter(button=>!normalized||normalizeText(`${button.textContent} ${files[button.dataset.file]}`).includes(normalized));
  if(!matches.length){const empty=document.createElement('p');empty.className='search-empty';empty.textContent=`No sections found for “${query.trim()}”. Try a company, skill, article, or project.`;searchResults.append(empty);return}
  matches.forEach(button=>{const result=document.createElement('button');result.type='button';result.className='search-result';result.setAttribute('role','option');result.textContent=button.textContent.replace('◌','').trim();result.addEventListener('click',()=>{showFile(button.dataset.file);searchDialog.close()});searchResults.append(result)});
 }
 function openSearch(){renderSearchResults();searchButton.setAttribute('aria-expanded','true');searchDialog.showModal();searchInput.value='';searchInput.focus()}
 document.getElementById('closeSearchButton').addEventListener('click',()=>searchDialog.close());
 searchButton.addEventListener('click',openSearch);
 searchInput.addEventListener('input',()=>renderSearchResults(searchInput.value));
 searchInput.addEventListener('keydown',event=>{if(event.key==='Enter'){const first=searchResults.querySelector('.search-result');if(first){event.preventDefault();first.click()}}});
 searchDialog.addEventListener('close',()=>{searchButton.setAttribute('aria-expanded','false');if(!document.getElementById('explorer').classList.contains('closed'))searchButton.focus()});
 searchDialog.addEventListener('click',event=>{if(event.target===searchDialog)searchDialog.close()});
 document.addEventListener('keydown',event=>{if((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==='k'){event.preventDefault();if(!searchDialog.open)openSearch()}});
 const toast=document.getElementById('toast'),shareDialog=document.getElementById('shareDialog'),shareInput=document.getElementById('shareLinkInput');
 shareInput.value=`${location.origin}${location.pathname}`;
 let toastTimer;
 function showToast(message){toast.textContent=message;toast.hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>{toast.hidden=true},2600)}
 function openShareDialog(){shareDialog.showModal();shareInput.focus();shareInput.select()}
 async function copyPortfolioLink(){try{if(!navigator.clipboard?.writeText)throw new Error('Clipboard unavailable');await navigator.clipboard.writeText(shareInput.value);showToast('Portfolio link copied.');return true}catch(_error){return false}}
 document.getElementById('shareButton').addEventListener('click',async()=>{
  if(typeof navigator.share==='function'){
   try{await navigator.share({title:document.title,text:'Chirag Shetty’s portfolio',url:shareInput.value});return}
   catch(error){if(error?.name==='AbortError')return}
  }
  openShareDialog();
 });
 document.getElementById('closeShareButton').addEventListener('click',()=>shareDialog.close());
 document.getElementById('copyShareLinkButton').addEventListener('click',async()=>{if(await copyPortfolioLink())shareDialog.close();else{shareInput.focus();shareInput.select();showToast('Link selected. Copy it to share.')}});
 shareDialog.addEventListener('close',()=>document.getElementById('shareButton').focus());
 shareDialog.addEventListener('click',event=>{if(event.target===shareDialog)shareDialog.close()});
 const moreButton=document.getElementById('moreButton'),moreMenu=document.getElementById('moreMenu');
 function closeMoreMenu(restoreFocus=false){moreMenu.hidden=true;moreButton.setAttribute('aria-expanded','false');if(restoreFocus)moreButton.focus()}
 moreButton.addEventListener('click',()=>{const opening=moreMenu.hidden;moreMenu.hidden=!opening;moreButton.setAttribute('aria-expanded',String(opening));if(opening)moreMenu.querySelector('[role="menuitem"]')?.focus()});
 moreMenu.addEventListener('click',async event=>{const item=event.target.closest('[role="menuitem"]');if(!item)return;const action=item.dataset.menuAction;closeMoreMenu(true);if(action==='copy-link'&&!await copyPortfolioLink())openShareDialog()});
 document.addEventListener('click',event=>{if(!event.target.closest('.more-wrap'))closeMoreMenu()});
 document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!moreMenu.hidden)closeMoreMenu(true)});
 document.querySelectorAll('.suggestions button').forEach(button=>button.addEventListener('click',()=>showFile(button.dataset.file)));
 const explorer=document.getElementById('explorer'),explorerToggle=document.getElementById('explorerToggle'),sidebarCollapseToggle=document.getElementById('sidebarCollapseToggle');
 function setSidebarOpen(isOpen){explorer.classList.toggle('closed',!isOpen);for(const button of [explorerToggle,sidebarCollapseToggle]){button.setAttribute('aria-expanded',String(isOpen));button.setAttribute('aria-label',isOpen?'Collapse sidebar':'Open sidebar');button.textContent=isOpen?'◧':'☰'}}
 explorerToggle.addEventListener('click',()=>setSidebarOpen(explorer.classList.contains('closed')));
 sidebarCollapseToggle.addEventListener('click',()=>setSidebarOpen(false));
 const topics=[
  {key:'jio-fynd.md',aliases:['jio fynd','fynd','impetus','ajio','jiomart','tira','fashion design','image delivery','image transformation','generative image','stable diffusion','flux'],keywords:['langchain','multimodal','vllm','u2net','srgan','quantization','engagement','agent','collection','design']},
  {key:'adagrad-ai.md',aliases:['adagrad','people analytics','person counting','person re identification','re identification','license plate','alpr','jetson','deepstream','t4 gpu','traffic enforcement'],keywords:['yolo','tensorrt','225 fps','50 fps','accuracy','retail','access control','video analytics']},
  {key:'optisol.md',aliases:['optisol','power pole','power poles','pole inspection','defect detection','website testing'],keywords:['tensorflow','opencv','sparsity','qat','50%','flask','q learning']},
  {key:'projects.md',aliases:['project','projects','open source','open-source','github','repositories','repository','repo','public code','side projects'],keywords:['bytetrack','slam','clustering','perceptron','shop the look','deepstream 101']},
  {key:'articles.md',aliases:['articles','article','blog','blogs','writing','wrote','medium','publications'],keywords:['beginner guide','step by step','walkthrough','shop the look']},
  {key:'experience.md',aliases:['experience','career','employment','work history','companies','organization','organizations','organisation','organisations','employer','employers','achievements','impact'],keywords:['2020','2021','2023','present','engineer']},
  {key:'toolkit.md',aliases:['toolkit','skills','skill','tech stack','technology','technologies','tools','programming language','programming languages','languages'],keywords:['python','c++','pytorch','tensorflow','fastapi','postgresql','kubernetes','docker','onnx','gcp','int8']},
  {key:'contact.md',aliases:['contact','email','reach chirag','linkedin','get in touch'],keywords:['gmail','linkedin','github','medium']},
  {key:'README.md',aliases:['overview','introduction','who is chirag','about chirag','about you','summary'],keywords:['production ai','machine learning','computer vision','generative ai']}
 ];
 const stopWords=new Set('a an and are as at be can could did do does for from give he her his how i in is it me my of on or tell that the their them this to what when where which who why with would you your chirag'.split(' '));
 function normalizeText(value){return value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9+#%]+/g,' ').trim().replace(/\s+/g,' ')}
 function matchTopics(question){
  const normalized=normalizeText(question),terms=[...new Set(normalized.split(' ').filter(word=>word.length>2&&!stopWords.has(word)))];
  const ranked=topics.map(topic=>{
   const aliases=topic.aliases.map(normalizeText),keywords=topic.keywords.map(normalizeText);
   const aliasHits=aliases.filter(phrase=>normalized.includes(phrase));
   const keywordHits=keywords.filter(phrase=>normalized.includes(phrase));
   const searchable=new Set(normalizeText(topic.key+' '+files[topic.key]).split(' '));
   const contentHits=terms.filter(term=>searchable.has(term));
   return {key:topic.key,score:aliasHits.reduce((n,phrase)=>n+(phrase.includes(' ')?5:4),0)+keywordHits.length*3+contentHits.length,aliasHits,keywordHits,contentHits};
  }).sort((a,b)=>b.score-a.score);
  const direct=ranked.filter(topic=>topic.aliasHits.length>0||topic.keywordHits.length>0);
  if(direct.length>1&&direct.slice(0,3).some(topic=>topic.aliasHits.length))return direct.slice(0,3);
  const best=ranked[0];
  return best&&(best.score>=4&&(best.aliasHits.length||best.keywordHits.length||best.contentHits.length>=2))?[best]:[];
 }
 async function send(){
  const input=document.getElementById('chatInput'),sendButton=document.getElementById('sendButton'),question=input.value.trim();if(!question||sendButton.disabled)return;
  const generation=chatGeneration;
  welcome.hidden=true;response.hidden=false;
  const safeQuestion=question.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const resumeRequest=/\b(resume|cv|curriculum vitae)\b/i.test(question);
  response.insertAdjacentHTML('beforeend',`<div class="user-message">${safeQuestion}</div>`);
  lastCloudFailure=null;
  const pending=document.createElement('div');pending.className='assistant-message';pending.innerHTML='<div class="assistant-avatar">✳</div><div class="assistant-content"><div class="thinking-indicator"><span class="thinking-label">Thinking…</span></div><div class="assistant-answer" aria-live="polite"></div></div>';response.append(pending);
  input.value='';resizeComposer();input.disabled=true;sendButton.disabled=true;
  const pendingContent=pending.querySelector('.assistant-content');
  const answerLine=pending.querySelector('.assistant-answer'),thinking=pending.querySelector('.thinking-indicator');let answerStarted=false;
  const streamer=window.PortfolioAI.createTextStreamer(chunk=>{if(generation!==chatGeneration)return;if(!answerStarted){answerStarted=true;thinking.hidden=true}answerLine.textContent+=chunk});
  let resourceFiles=[];
  try{
   let answer;
   if(resumeRequest)answer=`<p>Here’s my current resume. You can download the PDF here:</p>${resumeCard()}`;
   else {
    let matches=matchTopics(question);
    const asksAboutChirag=/\b(chirag|you|your|yourself|he|his|him|i|me|my|mine)\b/i.test(question);
    if(!matches.length&&asksAboutChirag)matches=['about.md','experience.md','toolkit.md'].map(key=>({key}));
    if(!matches.length){
     answer='<p>I’m Chirag’s portfolio assistant. I can help with his experience, projects, open-source work, articles, skills, contact details, or resume.</p>';
    }else if(matches.length===1&&matches[0].key==='contact.md'){
     setAiStatus('Portfolio · direct answer');
     answer=`<p>Here are Chirag’s contact details:</p>${render(files['contact.md'])}`;
    }else{
     const relevantFiles=matches.map(topic=>topic.key);
     resourceFiles=relevantFiles;
     const cloudAnswer=dailyLlmQuotaExhausted?null:await answerWithCloud(question,relevantFiles,chunk=>streamer.push(chunk));
     if(window.PortfolioAI.isDailyQuotaError(lastCloudFailure)){
      dailyLlmQuotaExhausted=true;
      rememberDailyQuotaState();
     }
     const upstreamRateLimited=dailyLlmQuotaExhausted||window.PortfolioAI.isUpstreamRateLimitError(lastCloudFailure);
     if(upstreamRateLimited){
      const dailyQuota= dailyLlmQuotaExhausted;
      const notice=dailyQuota?'The LLM quota for today is finished. You’re viewing the static answers.':'The LLM is rate-limited right now. You’re viewing the static answers.';
      setAiStatus(dailyQuota?'LLM daily quota finished · static answers':'LLM temporarily rate-limited · static answers');
      const noticeNode=document.createElement('p');noticeNode.className='llm-quota-notice';noticeNode.setAttribute('role','note');noticeNode.textContent=notice;
      pendingContent.insertBefore(noticeNode,thinking);
      streamer.reset();answerLine.textContent='';answerStarted=false;thinking.hidden=false;
      const staticAnswer=buildStaticTopicAnswer(matches);
      await window.PortfolioAI.streamStaticText(staticAnswer.text,chunk=>{if(generation!==chatGeneration)return false;streamer.push(chunk);return true});
      answer=`<p class="llm-quota-notice" role="note">${notice}</p>${staticAnswer.html}`;
     }else{
      if(!cloudAnswer){streamer.reset();answerLine.textContent=''}
      const nanoAnswer=cloudAnswer||await answerWithNano(question,chunk=>streamer.push(chunk));
      if(nanoAnswer)await streamer.finish();
      else {streamer.reset();answerLine.textContent=''}
      if(nanoAnswer){const renderedAnswer=window.PortfolioAI.renderAnswer(nanoAnswer,Object.keys(files),approvedExternalLinks);const linkedUrls=[...renderedAnswer.matchAll(/href="([^"]+)"/g)].map(([,url])=>url);answer=renderedAnswer+renderResourceLinks(resourceFiles,linkedUrls)}
      else{
       const rateLimited=lastCloudFailure?.status===429||lastCloudFailure?.code==='RATE_LIMITED';
       setAiStatus(rateLimited?'AI request limit reached · try again later':lastCloudFailure?'AI temporarily unavailable · try again':'On-device AI unavailable · browse sections');
       answer=window.PortfolioAI.renderAnswer(window.PortfolioAI.buildFallbackAnswer(relevantFiles,rateLimited?'rate-limited':'unavailable'),Object.keys(files),approvedExternalLinks)+renderResourceLinks(resourceFiles);
      }
     }
    }
   }
   if(generation!==chatGeneration)return;
   pending.remove();response.insertAdjacentHTML('beforeend',`<div class="assistant-message"><div class="assistant-avatar">✳</div><div class="assistant-content">${answer}</div></div>`);
  }catch(_error){
   if(generation===chatGeneration){pendingContent.classList.remove('ai-thinking');pendingContent.textContent='I couldn’t finish that response. Please try again.'}
  }finally{
   pending.remove();if(generation===chatGeneration){input.disabled=false;updateSendButton();resizeComposer();document.querySelector('.chat-scroll').scrollTop=document.querySelector('.chat-scroll').scrollHeight}
  }
 }

 const aiStatus=document.getElementById('aiStatus');
 const chatEndpoint=document.querySelector('meta[name="portfolio-chat-endpoint"]')?.content.trim()||'';
 let aiAvailability='checking',nanoSession=null,sessionPromise=null;
 function setAiStatus(message){if(aiStatus)aiStatus.textContent=message}
 function setModelStatus(status){
  aiAvailability=status;
  if(status==='available')setAiStatus('Gemini Nano · on-device AI ready');
  else if(status==='downloadable')setAiStatus('Gemini Nano · downloads on first question');
  else if(status==='downloading')setAiStatus('Gemini Nano · preparing on-device AI');
  else setAiStatus('On-device AI unavailable · local guide active');
 }
 function resetAiStatus(){if(chatEndpoint)setAiStatus(dailyLlmQuotaExhausted?'LLM daily quota finished · static answers':'AI assistant ready');else setModelStatus(aiAvailability)}
 async function checkNanoAvailability(){
  const status=await window.PortfolioAI.getAvailability(window.LanguageModel);
  setModelStatus(status);
 }
 async function answerWithCloud(question,relevantFiles,onDelta){
  if(!chatEndpoint)return null;
  try{
   setAiStatus('Asking the portfolio assistant…');
   const answer=await window.PortfolioAI.requestCloudAnswer(chatEndpoint,question,window.PortfolioAI.buildPortfolioContext(files,relevantFiles),globalThis.fetch,onDelta);
   if(answer)setAiStatus('AI assistant ready');
   return answer;
  }catch(_error){
   lastCloudFailure=_error;
   setAiStatus(_error.status===429?'AI request limit reached · try again later':'AI temporarily unavailable · trying another option…');
   return null;
  }
 }
 async function answerWithNano(question,onDelta){
  if(!window.LanguageModel||aiAvailability==='unsupported'||aiAvailability==='unavailable')return null;
  try{
   if(!nanoSession){
    if(!sessionPromise){
     setAiStatus('Preparing Gemini Nano…');
     sessionPromise=window.PortfolioAI.createSession(window.LanguageModel,files,loaded=>setAiStatus(`Downloading Gemini Nano · ${Math.round(loaded*100)}%`));
    }
    nanoSession=await sessionPromise;sessionPromise=null;
   }
   if(!nanoSession){setModelStatus('unsupported');return null}
   setAiStatus('Answering on this device…');
   let answer='';
   if(typeof nanoSession.promptStreaming==='function'){
    const stream=nanoSession.promptStreaming(question);
    for await(const chunk of stream){if(typeof chunk==='string'){answer+=chunk;if(typeof onDelta==='function')onDelta(chunk)}}
   }else{
    answer=await nanoSession.prompt(question);
    if(typeof answer==='string'&&answer&&typeof onDelta==='function')onDelta(answer);
   }
   setModelStatus('available');
   return typeof answer==='string'&&answer.trim()?answer.trim():null;
  }catch(_error){
   if(nanoSession&&typeof nanoSession.destroy==='function')nanoSession.destroy();
   nanoSession=null;sessionPromise=null;setModelStatus('unsupported');
   return null;
  }
 }
 if(chatEndpoint)setAiStatus(dailyLlmQuotaExhausted?'LLM daily quota finished · static answers':'AI assistant ready');
 else checkNanoAvailability();
 response.addEventListener('click',event=>{
  const link=event.target.closest('a[data-file]');
  if(link&&files[link.dataset.file]){event.preventDefault();showFile(link.dataset.file)}
 });
 document.getElementById('sendButton').addEventListener('click',send);document.getElementById('chatInput').addEventListener('keydown',event=>{if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();send()}});
 let wasMobile=innerWidth<=720;if(wasMobile)setSidebarOpen(false);window.addEventListener('resize',()=>{const isMobile=innerWidth<=720;if(isMobile!==wasMobile){setSidebarOpen(!isMobile);wasMobile=isMobile}});
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const welcomeText=document.getElementById('welcomeTitleText');const welcomeCursor=document.getElementById('welcomeTitleCursor');
 function typeWelcomeTitle(){const prompt='What would you like to explore?';if(!reduced)welcomeCursor.classList.add('is-active');let position=0;const typing=setInterval(()=>{welcomeText.textContent=prompt.slice(0,++position);if(position===prompt.length)clearInterval(typing)},reduced?32:55)}
 setTimeout(()=>{document.body.classList.add('ready');document.body.classList.remove('booting');typeWelcomeTitle()},reduced?80:950);
})();
