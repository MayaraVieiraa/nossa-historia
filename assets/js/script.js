/* ══════════════════════════════════════════════════════
   CONFIGURAÇÃO — edite aqui as suas músicas!
══════════════════════════════════════════════════════ */
const TRACKS = [
  {
    title: "Um Amor Puro",
    artist: "Djavan",
    note: "porque traduz exatamente a pureza e a verdade do que sinto por você",
    videoId: "Af7ieNv0wXY"
  },
  {
    title: "Tempo Perdido",
    artist: "Legião Urbana",
    note: "para nos lembrar que o tempo nunca é perdido quando escolhemos vivê-lo juntos",
    videoId: "YPLQHeUSX2g"
  },
  {
    title: "A Vida É Boa Com Você",
    artist: "Bryan Behr",
    note: "porque os meus dias ganharam muito mais cor desde que você chegou",
    videoId: "w3l6mWtvS4g"
  },
  {
    title: "Partilhar",
    artist: "Rubel",
    note: "um lembrete de que o amor é a nossa escolha diária de partilhar a vida",
    videoId: "WkLpoUiasZ8"
  },
  {
    title: "Se Essa Rua Fosse Minha",
    artist: "Trio Amadeus",
    note: "porque por amor, eu faria muito mais do que apenas ladrilhar uma rua de brilhantes por você",
    videoId: "A1C7GY0U3iw"
  }
];

/* ══════════════════════════════════════════════════════
   TEXTOS DA HISTÓRIA — edite aqui para personalizar!
══════════════════════════════════════════════════════ */
const STORY = {
  beginning: {
    intro: `Querido Justin, gosto muito da memória do nosso início. Gosto quando me lembro da primeira vez que te vi, e de como aquele burrinho ao seu lado na foto me fez te achar fofo e carismático. Começou assim, de mansinho, e quando vi já estávamos conversando com carinho.`,
    p2: `Gosto de como temos evoluído. Gosto dos fogos de artifício que estouram no meu subconsciente quando lembro que estamos namorando. Gosto de que você esteja aberto a me conhecer como sou, e de quando me pego pensando em você antes de dormir.`,
    p3: `Gosto da simplicidade e da alegria da vida, e estou especialmente feliz por compartilhar isso com você. Estou muito feliz e grata pelo tempo que passo contigo.`,
    quote: `Você foi um começo que eu não esperava, estou tão feliz por termos nos encontrado. Agradeço a Deus e sou feliz por o universo ter nos unido no mesmo momento, hora e plataforma para nos conhecermos.`
  },
  loveItems: [
    "a forma como você me trata com cuidado",
    "sua presença leve, mesmo à distância",
    "seu jeito de me fazer sorrir sem esforço",
    "a personalidade única que você carrega",
    "sua atenção nas pequenas coisas",
    "como você torna o ordinário especial",
    "sua honestidade e sua ternura"
  ],
  feelings: [
    { word: "paz", size: "large" },
    { word: "leveza", size: "medium" },
    { word: "carinho", size: "large" },
    { word: "segurança", size: "medium" },
    { word: "alegria", size: "large" },
    { word: "presença", size: "medium" },
    { word: "calma", size: "small" },
    { word: "ternura", size: "small" },
    { word: "gratidão", size: "medium" }
  ],
  gratitude: {
    p1: `Pelos momentos simples que se tornaram meus favoritos. Pelas conversas que começaram
com "oi" e terminaram tarde demais. Pela leveza que você trouxe sem precisar fazer nada
demais — só sendo você.`,
    p2: `A distância ensina a valorizar. E eu aprendi, neste mês, que o que construímos com
calma e verdade dura mais do que qualquer coisa que chegou fácil.`,
    poem: `Feliz 1 mês pra nós 💜`,
    date: `03 de maio, para sempre`
  },
  invitation: {
    p1: `Este é apenas o primeiro capítulo de um livro lindo que estamos começando a escrever juntos, linha por linha, dia após dia.`,
    p2: `Cada detalhe seu, cada conversa que se estende pela noite e cada sorriso que você me arranca já faz parte de algo muito maior. E o meu maior desejo é continuar preenchendo estas páginas vazias ao seu lado, construindo uma história que seja inteiramente nossa.`,
    p3: `Espero que queira continuar escrevendo os próximos capítulos comigo. Prometo encher cada um deles com todo o amor, cuidado e cumplicidade do mundo.`,
    love: `Eu amo você.`,
    signature: `- Atenciosamente, sua Mayara.`
  }
};

/* ══════════════════════════════════════════════════════
   LÓGICA DE TEMPO
══════════════════════════════════════════════════════ */
const START = new Date("2026-05-03T00:00:00");
const MONTHS = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];

function pad(n) { return String(n).padStart(2, "0"); }

function getElapsed() {
  const now = new Date();
  const diff = Math.max(0, now.getTime() - START.getTime());
  const totalSec = Math.floor(diff / 1000);
  return {
    days:    Math.floor(totalSec / 86400),
    hours:   Math.floor((totalSec % 86400) / 3600),
    minutes: Math.floor((totalSec % 3600) / 60),
    seconds: totalSec % 60
  };
}

function updateTimer() {
  const now = new Date();
  const e = getElapsed();

  const hh = pad(now.getHours()), mm = pad(now.getMinutes()), ss = pad(now.getSeconds());
  const dateStr = `${now.getDate()} ${MONTHS[now.getMonth()].toUpperCase()}`;

  // Desktop
  if (el("clockTime")) el("clockTime").textContent = `${hh}:${mm}`;
  if (el("clockSec")) el("clockSec").textContent = `${ss}s`;
  if (el("clockDateDisp")) el("clockDateDisp").textContent = dateStr;
  if (el("timerDays")) el("timerDays").textContent = e.days;
  if (el("timerH")) el("timerH").textContent = pad(e.hours);
  if (el("timerM")) el("timerM").textContent = pad(e.minutes);
  if (el("timerS")) el("timerS").textContent = pad(e.seconds);

  // Mobile
  if (el("clockTimeMob")) el("clockTimeMob").textContent = `${hh}:${mm}`;
  if (el("clockSecMob")) el("clockSecMob").textContent = `${ss}s`;
  if (el("clockDateMob")) el("clockDateMob").textContent = dateStr;
  if (el("timerDaysMob")) el("timerDaysMob").textContent = e.days;
  if (el("timerHMob")) el("timerHMob").textContent = pad(e.hours);
  if (el("timerMMob")) el("timerMMob").textContent = pad(e.minutes);
  if (el("timerSMob")) el("timerSMob").textContent = pad(e.seconds);
}

setInterval(updateTimer, 1000);
updateTimer();

/* ══════════════════════════════════════════════════════
   ESTRELAS E PARTÍCULAS
══════════════════════════════════════════════════════ */
function el(id) { return document.getElementById(id); }

(function initStars() {
  const canvas = el("starCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let stars = [];
  let raf;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    stars = Array.from({length: 220}, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2 + 0.2,
      alpha: Math.random(),
      speed: Math.random() * 0.015 + 0.005,
      phase: Math.random() * Math.PI * 2
    }));
  }

  let t = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(s => {
      const a = 0.3 + 0.7 * Math.abs(Math.sin(t * s.speed + s.phase));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(220,200,255,${a * s.alpha})`;
      ctx.fill();
    });
    t++;
    raf = requestAnimationFrame(draw);
  }

  resize();
  draw();
  window.addEventListener("resize", resize);
})();

(function bookStars() {
  const wrap = el("bookStars");
  if (wrap) {
    for (let i = 0; i < 40; i++) {
      const d = document.createElement("div");
      const size = Math.random() * 1.5 + 0.5;
      Object.assign(d.style, {
        position: "absolute",
        width: size + "px",
        height: size + "px",
        borderRadius: "50%",
        background: "rgba(200,180,255,0.4)",
        left: (Math.random() * 100) + "%",
        top: (Math.random() * 100) + "%"
      });
      wrap.appendChild(d);
    }
  }

  const leftStars = el("bookLeftStars");
  if (leftStars) {
    for (let i = 0; i < 30; i++) {
      const d = document.createElement("div");
      const size = Math.random() * 1.5 + 0.5;
      Object.assign(d.style, {
        position: "absolute",
        width: size + "px",
        height: size + "px",
        borderRadius: "50%",
        background: "rgba(200,180,255,0.35)",
        left: (Math.random() * 100) + "%",
        top: (Math.random() * 100) + "%"
      });
      leftStars.appendChild(d);
    }
  }
})();

(function particles() {
  const colors = ["#D4AF37", "#7B5EA7", "#C8B8E8"];
  for (let i = 0; i < 12; i++) {
    const d = document.createElement("div");
    d.className = "particle";
    const size = 3;
    Object.assign(d.style, {
      left: (10 + Math.random() * 80) + "%",
      top:  (10 + Math.random() * 80) + "%",
      width: size + "px",
      height: size + "px",
      background: colors[i % 3],
      animationDuration: (3 + i * 0.5) + "s",
      animationDelay: (i * 0.4) + "s"
    });
    document.body.appendChild(d);
  }
})();

(function runeRing() {
  const ring = el("runeRing");
  if (!ring) return;
  for (let i = 0; i < 12; i++) {
    const d = document.createElement("div");
    d.className = "rune-dot";
    d.textContent = "✦";
    d.style.transform = `rotate(${i * 30}deg) translateX(106px) translateY(-8px)`;
    ring.appendChild(d);
  }
})();

/* ══════════════════════════════════════════════════════
   BOOK PAGES
══════════════════════════════════════════════════════ */
const PAGES = [
  { id: "beginning", label: "I",   title: "O Começo" },
  { id: "love",      label: "II",  title: "O Que Eu Amo em Você" },
  { id: "soundtrack",label: "III", title: "Músicas que marcam nossa história" },
  { id: "feelings",  label: "IV",  title: "O Que Você Me Faz Sentir" },
  { id: "invitation",label: "V",   title: "Os Próximos Capítulos" },
  { id: "gratitude", label: "VI",  title: "Gratidão" }
];

let currentPage = 0;
let direction = 1;
let shouldPlayBg = false;

window.openBook = function() {
  currentPage = 0; // Reset to page 0 when opening
  shouldPlayBg = true;
  initAudio();
  startBackgroundMusic();
  playPageTurnSound();
  el("cover").classList.add("hidden");
  el("book-screen").classList.remove("hidden");
  renderPage();
  buildNav();
}

function buildNav() {
  const nav = el("chaptersNav");
  const dots = el("progressDots");
  if (!nav || !dots) return;
  nav.innerHTML = "";
  dots.innerHTML = "";

  PAGES.forEach((p, i) => {
    const btn = document.createElement("button");
    btn.className = "chapter-btn" + (i === currentPage ? " active" : "");
    btn.innerHTML = `<span class="chapter-roman">${p.label}</span>${p.title}`;
    btn.onclick = () => { playClickSound(); direction = i > currentPage ? 1 : -1; currentPage = i; renderPage(); buildNav(); };
    nav.appendChild(btn);

    const dot = document.createElement("button");
    dot.className = "dot" + (i === currentPage ? " active" : "");
    dot.setAttribute("aria-label", `Ir para página ${i+1}`);
    dot.onclick = () => { playClickSound(); direction = i > currentPage ? 1 : -1; currentPage = i; renderPage(); buildNav(); };
    dots.appendChild(dot);
  });

  if (el("pageNumLeft")) el("pageNumLeft").textContent = currentPage + 1;
  if (el("pageNumRight")) el("pageNumRight").textContent = currentPage + 2;
  if (el("navNext")) el("navNext").style.display = currentPage < PAGES.length - 1 ? "flex" : "none";
  if (el("mobileNext")) el("mobileNext").style.display = currentPage < PAGES.length - 1 ? "block" : "none";
}

function renderPage() {
  const content = el("pageContent");
  if (!content) return;
  const id = PAGES[currentPage].id;
  const dir = direction > 0 ? "" : " left";

  let html = `<div class="page-content${dir}">`;

  if (id === "beginning") {
    html += `
      <div class="section-label"><div class="section-label-line"></div><span class="section-label-text">o começo</span><div class="section-label-line"></div></div>
      <h2 class="page-h2">03 de Maio</h2>
      <div class="page-body">
        <p>${STORY.beginning.intro}</p>
        <p>${STORY.beginning.p2}</p>
        <p>${STORY.beginning.p3}</p>
        <p class="page-quote">${STORY.beginning.quote}</p>
      </div>`;
  }

  else if (id === "love") {
    html += `
      <div class="section-label"><div class="section-label-line"></div><span class="section-label-text">o que eu amo em você</span><div class="section-label-line"></div></div>
      <h2 class="page-h2" style="font-size:20px;">Coisas que guardo<br>em mim sobre você</h2>
      <div class="love-list">`;
    STORY.loveItems.forEach(item => {
      html += `<div class="love-item"><span class="love-gem">✦</span><span>${item}</span></div>`;
    });
    html += `</div>`;
  }

  else if (id === "soundtrack") {
    html += `
      <div class="section-label"><div class="section-label-line"></div><span class="section-label-text">músicas que marcam nossa história</span><div class="section-label-line"></div></div>
      <h2 class="page-h2" style="font-size:20px;">Músicas que marcam<br>a nossa história</h2>
      <div class="track-list">`;
    TRACKS.forEach((t, i) => {
      html += `
        <div class="track" id="track-${i}" onclick="playTrack(${i})">
          <div class="track-icon" id="track-icon-${i}">▶</div>
          <div class="track-info">
            <div class="track-name">${t.title}</div>
            <div class="track-artist">— ${t.artist}</div>
            <div class="track-note" id="track-note-${i}">${t.note}</div>
          </div>
        </div>`;
    });
    html += `</div>
      <p class="track-hint">clique em uma música para ouvir no YouTube</p>`;
  }

  else if (id === "feelings") {
    html += `
      <div class="section-label"><div class="section-label-line"></div><span class="section-label-text">o que você me faz sentir</span><div class="section-label-line"></div></div>
      <div class="feelings-cloud">`;
    STORY.feelings.forEach(f => {
      html += `<span class="feeling-word feeling-${f.size}">${f.word}</span>`;
    });
    html += `</div>
      <div class="feelings-divider"></div>
      <p class="feelings-caption">Não é fácil explicar o que acontece quando duas pessoas encontram uma à outra dessa forma.
Só sei que com você, o dia parece mais fácil de atravessar.</p>`;
  }

  else if (id === "invitation") {
    html += `
      <div class="section-label"><div class="section-label-line"></div><span class="section-label-text">um convite especial</span><div class="section-label-line"></div></div>
      <h2 class="page-h2" style="font-size:22px;">Os Próximos Capítulos</h2>
      <div class="page-body">
        <p>${STORY.invitation.p1}</p>
        <p>${STORY.invitation.p2}</p>
        <p>${STORY.invitation.p3}</p>
        <p class="page-quote" style="border-left: 2px solid var(--gold); padding-left: 22.4px; font-weight: 500; color: var(--gold); font-size: 23px;">
          ${STORY.invitation.love}
        </p>
      </div>
      <div class="gratitude-closing" style="margin-top:28px; padding-top:20px; border-top: 1px solid rgba(180,150,255,0.12); text-align: right;">
        <p class="gratitude-date" style="font-size:18.2px; color:var(--text-muted); font-style:italic;">${STORY.invitation.signature}</p>
      </div>`;
  }

  else if (id === "gratitude") {
    html += `
      <div class="section-label"><div class="section-label-line"></div><span class="section-label-text">gratidão</span><div class="section-label-line"></div></div>
      <h2 class="page-h2" style="font-size:22px;">Obrigado por esse<br>primeiro mês</h2>
      <div class="page-body">
        <p>${STORY.gratitude.p1}</p>
        <p>${STORY.gratitude.p2}</p>
      </div>
      <div class="gratitude-closing" style="margin-top:32px;">
        <p class="gratitude-poem">${STORY.gratitude.poem}</p>
        <p class="gratitude-date">${STORY.gratitude.date}</p>
      </div>`;
  }

  html += `</div>`;
  content.innerHTML = html;
}

window.goNext = function() {
  playPageTurnSound();
  if (currentPage < PAGES.length - 1) {
    direction = 1;
    currentPage++;
    renderPage();
    buildNav();
  }
}

window.goPrev = function() {
  playPageTurnSound();
  if (currentPage > 0) {
    direction = -1;
    currentPage--;
    renderPage();
    buildNav();
  } else {
    el("book-screen").classList.add("hidden");
    el("cover").classList.remove("hidden");
  }
}

window.goToHome = function() {
  playPageTurnSound();
  el("book-screen").classList.add("hidden");
  el("cover").classList.remove("hidden");
}

/* ══════════════════════════════════════════════════════
   YOUTUBE REDIRECT
══════════════════════════════════════════════════════ */
window.playTrack = function(i) {
  playClickSound();
  const track = TRACKS[i];
  if (track.videoId) {
    window.open(`https://www.youtube.com/watch?v=${track.videoId}`, '_blank');
  }
}

/* ══════════════════════════════════════════════════════
   ÁUDIOS E EFEITOS (Web Audio API & YouTube BG)
══════════════════════════════════════════════════════ */
let audioCtx;

function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

window.playClickSound = function() {
  if (!audioCtx) return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(800, audioCtx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.08);
  gain.gain.setValueAtTime(0.015, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.12);
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + 0.12);
}

window.playPageTurnSound = function() {
  if (!audioCtx) return;
  const duration = 0.12;
  const bufferSize = audioCtx.sampleRate * duration;
  const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = (Math.random() * 2 - 1) * 0.3;
  }
  const source = audioCtx.createBufferSource();
  source.buffer = buffer;
  const lpFilter = audioCtx.createBiquadFilter();
  lpFilter.type = 'lowpass';
  lpFilter.frequency.setValueAtTime(1200, audioCtx.currentTime);
  lpFilter.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + duration);
  const gain = audioCtx.createGain();
  gain.gain.setValueAtTime(0, audioCtx.currentTime);
  gain.gain.linearRampToValueAtTime(0.02, audioCtx.currentTime + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
  source.connect(lpFilter);
  lpFilter.connect(gain);
  gain.connect(audioCtx.destination);
  source.start();
}

// ═══════════════════════════════════════════════════
//  ORQUESTRA DE FUNDO — Web Audio API
// ═══════════════════════════════════════════════════
let bgMusicPlaying = false;
let bgMusicGain = null;

// Melodia lenta — Clair de Lune inspired
const MELODY = [
  { note: 329.63, dur: 2.5 }, { note: 0, dur: 0.6 },
  { note: 392.00, dur: 2.0 }, { note: 0, dur: 0.4 },
  { note: 440.00, dur: 3.0 }, { note: 0, dur: 1.0 },
  { note: 392.00, dur: 2.0 }, { note: 0, dur: 0.5 },
  { note: 349.23, dur: 2.5 }, { note: 0, dur: 0.8 },
  { note: 329.63, dur: 3.0 }, { note: 0, dur: 1.5 },

  { note: 293.66, dur: 2.0 }, { note: 0, dur: 0.5 },
  { note: 329.63, dur: 2.5 }, { note: 0, dur: 0.6 },
  { note: 349.23, dur: 2.0 }, { note: 0, dur: 0.4 },
  { note: 329.63, dur: 2.5 }, { note: 0, dur: 0.8 },
  { note: 293.66, dur: 3.0 }, { note: 0, dur: 1.5 },
  { note: 261.63, dur: 3.5 }, { note: 0, dur: 2.0 },

  { note: 349.23, dur: 2.0 }, { note: 0, dur: 0.5 },
  { note: 392.00, dur: 2.5 }, { note: 0, dur: 0.6 },
  { note: 440.00, dur: 2.0 }, { note: 0, dur: 0.4 },
  { note: 392.00, dur: 3.0 }, { note: 0, dur: 1.0 },
  { note: 349.23, dur: 2.5 }, { note: 0, dur: 0.8 },
  { note: 329.63, dur: 3.5 }, { note: 0, dur: 3.0 },
];

function createStringVoice(freq, startTime, duration, detuneCents, vol) {
  const osc = audioCtx.createOscillator();
  osc.type = 'sawtooth';
  osc.frequency.value = freq;
  osc.detune.value = detuneCents;
  // Vibrato
  const vib = audioCtx.createOscillator();
  vib.type = 'sine';
  vib.frequency.value = 4.5 + Math.random() * 2;
  const vibG = audioCtx.createGain();
  vibG.gain.value = 3;
  vib.connect(vibG);
  vibG.connect(osc.frequency);
  // Lowpass to soften sawtooth
  const lp = audioCtx.createBiquadFilter();
  lp.type = 'lowpass';
  lp.frequency.value = freq * 3;
  lp.Q.value = 0.5;
  // Gain envelope
  const g = audioCtx.createGain();
  g.gain.setValueAtTime(0, startTime);
  g.gain.linearRampToValueAtTime(vol, startTime + duration * 0.25);
  g.gain.setValueAtTime(vol, startTime + duration * 0.65);
  g.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);
  osc.connect(lp);
  lp.connect(g);
  g.connect(bgMusicGain);
  osc.start(startTime);
  vib.start(startTime);
  osc.stop(startTime + duration + 0.1);
  vib.stop(startTime + duration + 0.1);
}

function playOrchestraNote(freq, startTime, duration) {
  if (!audioCtx || freq === 0) return;
  // String section: 4 detuned voices (like a real ensemble)
  createStringVoice(freq, startTime, duration, -8, 0.012);
  createStringVoice(freq, startTime, duration, 0, 0.014);
  createStringVoice(freq, startTime, duration, 6, 0.012);
  createStringVoice(freq, startTime, duration, 12, 0.010);
  // Cello: one octave below
  createStringVoice(freq / 2, startTime, duration, -3, 0.010);
  // Flute: sine, one octave above, very soft
  const flute = audioCtx.createOscillator();
  flute.type = 'sine';
  flute.frequency.value = freq * 2;
  const fGain = audioCtx.createGain();
  fGain.gain.setValueAtTime(0, startTime);
  fGain.gain.linearRampToValueAtTime(0.004, startTime + duration * 0.4);
  fGain.gain.setValueAtTime(0.004, startTime + duration * 0.6);
  fGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);
  flute.connect(fGain);
  fGain.connect(bgMusicGain);
  flute.start(startTime);
  flute.stop(startTime + duration + 0.1);
}

// Drone pad: continuous warm chord underneath
function startDronePad() {
  if (!audioCtx) return;
  const chordFreqs = [130.81, 164.81, 196.00]; // C3, E3, G3 — Cmaj
  chordFreqs.forEach(f => {
    const osc = audioCtx.createOscillator();
    osc.type = 'sine';
    osc.frequency.value = f;
    const g = audioCtx.createGain();
    g.gain.value = 0.008;
    // Slow gentle LFO for movement
    const lfo = audioCtx.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.value = 0.1 + Math.random() * 0.15;
    const lfoG = audioCtx.createGain();
    lfoG.gain.value = 0.003;
    lfo.connect(lfoG);
    lfoG.connect(g.gain);
    osc.connect(g);
    g.connect(bgMusicGain);
    osc.start();
    lfo.start();
  });
}

function scheduleMelody() {
  if (!audioCtx || !bgMusicPlaying) return;
  let time = audioCtx.currentTime + 0.3;
  let totalDuration = 0;
  MELODY.forEach(({ note, dur }) => {
    if (note > 0) playOrchestraNote(note, time, dur);
    time += dur;
    totalDuration += dur;
  });
  setTimeout(() => {
    if (bgMusicPlaying) scheduleMelody();
  }, (totalDuration - 0.5) * 1000);
}

function startBackgroundMusic() {
  if (bgMusicPlaying) return;
  if (!audioCtx) return;
  bgMusicPlaying = true;
  bgMusicGain = audioCtx.createGain();
  bgMusicGain.gain.value = 0.10;  // Volume geral bem baixo
  // Reverb (simula sala de concerto)
  const delay1 = audioCtx.createDelay(); delay1.delayTime.value = 0.12;
  const delay2 = audioCtx.createDelay(); delay2.delayTime.value = 0.25;
  const fb1 = audioCtx.createGain(); fb1.gain.value = 0.15;
  const fb2 = audioCtx.createGain(); fb2.gain.value = 0.10;
  const wet = audioCtx.createGain(); wet.gain.value = 0.25;
  bgMusicGain.connect(audioCtx.destination);
  bgMusicGain.connect(delay1);
  delay1.connect(fb1); fb1.connect(delay1);
  delay1.connect(delay2);
  delay2.connect(fb2); fb2.connect(delay2);
  delay2.connect(wet);
  wet.connect(audioCtx.destination);
  startDronePad();
  scheduleMelody();
}
