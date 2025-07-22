// Stories data with multiple stories (hytta and nationaldag)
const storiesData = {
  hytta: {
    title: "HYTTA - et hjem borte fra hjemmet",
    translations: [
      "Hyttekulturen i Norge er en viktig del av det norske livet.",
      "Mange nordmenn har en hytte, som er et lite hus i naturen.",
      "Hytter kan være på fjellet, ved sjøen, i skogen eller på øyer.",
      "Hytter kan være gamle eller nye, store eller små, enkle eller luksuriøse.",
      "Ordet ‘hytte’ kommer fra det gamle norrøne ordet ‘hýtti’, som betyr ‘lite hus’.",
      "Det første beviset på at nordmenn hadde hytter er fra 1100-tallet.",
      "Da var hyttene brukt av bønder, jegere og fiskere.",
      "Senere ble hyttene brukt av kunstnere, forfattere og kongelige.",
      "I dag har nesten 400 000 nordmenn en hytte.",
      "Nordmenn liker å dra på hyttetur for å slappe av, kose seg og være ute.",
      "De drar ofte på hyttetur på fredager, og blir der til søndag.",
      "Mange nordmenn kaller det for ‘fredagsturen’.",
      "På kontoret er det dermed veldig få som kommer på jobb på fredager, ellers slutter de fleste nordmenn tidligere, slik at de slipper å stå i kø på vei til hytta.",
      "De drar også på hyttetur i høytider som påske, jul og 17. mai.",
      "De drar på hyttetur både sommer og vinter.",
      "Når nordmenn er på hyttetur, gjør de mange forskjellige aktiviteter.",
      "De går på tur i naturen, fisker, bader, sykler, spiller spill, leser bøker og lager mat.",
      "Typisk turmat på hytta er for eksempel kvikklunsj, klementiner, brødskiver med ost og skinke, pølser etc.",
      "Hyttekulturen i Norge er sentral fordi den viser hvordan nordmenn elsker naturen og familien sin.",
      "Hytta er et sted der nordmenn kan være seg selv, og ha det gøy sammen.",
      "Hytta er et symbol på det norske folket og deres verdier.",
      "I Norge er det mange fjell og vakker natur, så hyttene gir en mulig mulighet til å nyte dette."
    ],
    startTimes: [5,9,15,19,29,36,42,52,62,75,79,87,93,98,102,105,110,117,122,127,133,139],
    vocabulary: [ /* Add hytta vocabulary here if needed */ ],
    audioSrc: "hytta et hjem borte fra hjemmet.mp3"
  },
  nationaldag: {
    title: "17.mai – Norges nasjonaldag",
    translations: [
      "17. mai er Norges nasjonaldag.",
      "Det var på denne dagen i 1814 at Norge fikk sin egen grunnlov.",
      "Grunnloven ble skrevet på Eidsvoll.",
      "På denne tiden var Norge i union med Danmark, men ønsket å bli et fritt land.",
      "Ledende menn fra ulike deler av Norge møttes og skrev grunnloven.",
      "Norge ble da et selvstendig land.",
      "Selvstendigheten varte ikke lenge og Norge gikk inn i en ny union med Sverige i august 1814.",
      "Grunnloven fra 1814 var fremdeles gyldig og hjalp Norge til selvstendighet i 1905.",
      "I begynnelsen ble 17.mai bare feiret i visse private kretser, før feiringen etter hvert ble utbredt.",
      "I dag feirer vi 17. mai med glede og stolthet landet rundt.",
      "Folk pynter husene sine med norske flagg og gatene er fulle av mennesker.",
      "Barnetoget er en viktig del av 17. mai‑feiringen.",
      "Barn fra skoler og barnehager går i tog gjennom byen.",
      "De synger sanger og roper hurra.",
      "Mange barn har på seg bunader.",
      "Bunader er tradisjonelle norske klær.",
      "Foreldre, besteforeldre og venner ser på barnetoget og vifter med flagg.",
      "Korps spiller musikk i toget.",
      "Trommer, fløyter og trompeter lager festlig stemning.",
      "Det er også russetog, hvor ungdommer som er ferdige med videregående skole, går i tog.",
      "De har på seg røde eller blå klær.",
      "Mat er en viktig del av feiringen.",
      "Vi spiser pølser, is og kaker.",
      "Mange har også frokoster og lunsjer med familie og venner.",
      "Bordene er pyntet med flagg og blomster.",
      "Det er en dag for å være sammen med dem man er glad i.",
      "17. mai er en dag full av glede.",
      "Overalt hører man folk rope: 'Hipp hipp hurra, hurra, hurra!'",
      "Det er en dag for alle i Norge, både store og små.",
      "Vi feirer friheten vår og vår stolte historie.",
      "17. mai er virkelig en spesiell dag i Norge, en dag vi aldri glemmer."
    ],
    startTimes: [5,9,15,19,29,36,42,52,62,75,79,87,93,98,102,105,110,117,122,127,133,139,142,146,151,156,160,164,172,177,182],
    vocabulary: [ /* Add nationaldag vocabulary here if needed */ ],
    audioSrc: "17 mai n.mp3"
  }
};

// DOM and State
let segments = [];
let readingIndex = 0;
let wordMode = false;
let translations = [];
let startTimes = [];
let vocabulary = [];

const toast = document.getElementById('toast');
const audio = document.getElementById('storyAudio');
const wordBtn = document.getElementById('wordModeBtn');
const flashcard = document.getElementById('flashcard');
const flashcardContent = document.getElementById('flashcardContent');

// Audio Playback
function clearHighlight() {
  segments.forEach(s => s.classList.remove('highlight'));
}

function handleTimeUpdate() {
  if (wordMode) return;
  const cur = audio.currentTime;
  const idx = startTimes.findIndex((s, i) => cur >= s && (i === startTimes.length - 1 || cur < startTimes[i + 1]));
  if (idx !== -1 && idx !== readingIndex) {
    clearHighlight();
    segments[idx].classList.add('highlight');
    toast.textContent = translations[idx];
    toast.style.display = 'block';
    readingIndex = idx;
  }
}

audio.addEventListener('timeupdate', handleTimeUpdate);
audio.addEventListener('ended', () => { clearHighlight(); toast.style.display = 'none'; readingIndex = 0; });

function playStory() {
  if (wordMode) exitWordMode();
  audio.currentTime = startTimes[readingIndex] || 0;
  audio.play();
  highlightCurrentSentence();
}

function highlightCurrentSentence() {
  clearHighlight();
  if (segments[readingIndex]) segments[readingIndex].classList.add('highlight');
  toast.textContent = translations[readingIndex] || '';
  toast.style.display = 'block';
}

function pauseStory() {
  audio.pause();
  toast.style.display = 'none';
  clearHighlight();
}

// Word Mode
function toggleWordMode() {
  wordMode = !wordMode;
  wordMode ? enterWordMode() : exitWordMode();
}

function enterWordMode() {
  wordBtn.textContent = 'Exit Word Mode';
  pauseStory();
  toast.style.display = 'none';
  segments.forEach(seg => {
    const words = seg.textContent.split(/(\s+)/);
    seg.innerHTML = words.map(w => /\s+/.test(w) ? w : `<span class='word'>${w}</span>`).join('');
    seg.querySelectorAll('span.word').forEach(wspan => {
      wspan.style.cursor = 'pointer';
      wspan.addEventListener('click', wordClickHandler);
    });
  });
}

function exitWordMode() {
  wordBtn.textContent = 'Word Translation Mode';
  toast.style.display = 'none';
  segments.forEach(seg => seg.textContent = seg.innerText);
  clearHighlight();
}

function wordClickHandler(e) {
  e.stopPropagation();
  clearHighlight();
  const span = e.target;
  span.classList.add('highlight');
  const clean = span.textContent.toLowerCase().replace(/[^a-zæøåA-ZÆØÅ]/g, '');
  const entry = vocabulary.find(v => v.word.toLowerCase() === clean);
  toast.textContent = entry ? `${entry.word} = ${entry.translation}` : 'Translation not available';
  toast.style.display = 'block';
  const parentSegment = span.closest('span');
  const idx = segments.indexOf(parentSegment);
  if (idx !== -1) {
    readingIndex = idx;
    audio.currentTime = startTimes[idx];
    audio.play();
  }
}

// Flashcard Mode
let currentWordIdx = 0;
function startVocabMode() {
  exitWordMode();
  flashcard.style.display = 'flex';
  currentWordIdx = 0;
  updateFlashcard();
}

function updateFlashcard() {
  flashcardContent.textContent = vocabulary[currentWordIdx].word;
  flashcardContent.dataset.side = 'word';
}

function revealMeaning() {
  if (flashcardContent.dataset.side === 'word') {
    flashcardContent.textContent = vocabulary[currentWordIdx].translation;
    flashcardContent.dataset.side = 'translation';
  } else {
    updateFlashcard();
  }
}

function nextWord() {
  currentWordIdx = (currentWordIdx + 1) % vocabulary.length;
  updateFlashcard();
}

function prevWord() {
  currentWordIdx = (currentWordIdx - 1 + vocabulary.length) % vocabulary.length;
  updateFlashcard();
}

function closeFlashcard() {
  flashcard.style.display = 'none';
}

// Modal
function showDialog() {
  document.getElementById('overlay').style.display = 'block';
  document.getElementById('storyDialog').style.display = 'block';
}

function closeDialog() {
  pauseStory();
  if (wordMode) exitWordMode();
  closeFlashcard();
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('storyDialog').style.display = 'none';
}

document.getElementById('overlay').addEventListener('click', closeDialog);

// Show Story (makes cards clickable)
function showStory(storyKey) {
  const s = storiesData[storyKey];
  if (!s) return;

  translations = s.translations;
  startTimes = s.startTimes;
  vocabulary = s.vocabulary;
  readingIndex = 0;
  wordMode = false;

  document.getElementById('storyTitle').textContent = s.title;

  const storyTextEl = document.getElementById('storyText');
  storyTextEl.innerHTML = translations.map(line => `<span>${line}</span>`).join('');
  audio.src = s.audioSrc;
  audio.pause();
  clearHighlight();

  segments = Array.from(storyTextEl.querySelectorAll('span'));
  segments.forEach((segment, idx) => {
    segment.style.cursor = 'pointer';
    segment.addEventListener('click', () => {
      readingIndex = idx;
      audio.currentTime = startTimes[idx] || 0;
      clearHighlight();
      segment.classList.add('highlight');
      toast.textContent = translations[idx];
      toast.style.display = 'block';
      playStory();
    });
  });

  showDialog();
}
