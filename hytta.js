const translations = [
  "The cabin culture in Norway is an important part of Norwegian life.",
  "Many Norwegians have a cabin, which is a small house in nature.",
  "Cabins can be in the mountains, by the sea, in the forest, or on islands.",
  "Cabins can be old or new, large or small, simple or luxurious.",
  "The word 'hytte' comes from the old Norse word 'hýtti', which means 'small house'.",
  "The first evidence that Norwegians had cabins is from the 1100s.",
  "Back then, cabins were used by farmers, hunters, and fishermen.",
  "Later, the cabins were used by artists, writers, and royalty.",
  "Today, nearly 400,000 Norwegians have a cabin.",
  "Norwegians like to go on cabin trips to relax, enjoy themselves, and be outdoors.",
  "They often go on cabin trips on Fridays and stay until Sunday. Many Norwegians call it the 'Friday trip'.",
  "At the office, very few people come to work on Fridays, or most Norwegians leave early so they can avoid traffic on the way to the cabin.",
  "They also go on cabin trips during holidays such as Easter, Christmas, and May 17th.",
  "They go on cabin trips in both summer and winter.",
  "When Norwegians are on a cabin trip, they do many different activities.",
  "They go hiking in nature, fish, swim, bike, play games, read books, and cook food.",
  "Typical hiking food at the cabin includes for example Kvikk Lunsj, clementines, sandwiches with cheese and ham, sausages, etc.",
  "The cabin culture in Norway is central because it shows how Norwegians love nature and their families.",
  "The cabin is a place where Norwegians can be themselves and have fun together.",
  "The cabin is a symbol of the Norwegian people and their values.",
  "In Norway, there are many mountains and beautiful nature, so the cabins provide an opportunity to enjoy this."
];

const startTimes = [5,9,15,19,29,36,42,52,62,75,79,87,93,98,102,105,110,117,122,127,133,139,142,146,151,156,160,164,172,177,182];

const vocabulary = [
  // Numbers & Dates
  { word: '400 000', translation: 'four hundred thousand' },
  // A
  { word: 'Hytte', translation: 'cabin' },
  { word: 'Hytta', translation: 'the cabin' },
  { word: 'Hyttene', translation: 'the cabins' },
  { word: 'Hyttekulturen', translation: 'cabin culture' },
  { word: 'Norge', translation: 'Norway' },
  { word: 'er', translation: 'is' },
  { word: 'en', translation: 'a' },
  { word: 'viktig', translation: 'important' },
  { word: 'å', translation: 'to' },
  // B
  { word: 'bønder', translation: 'farmers' },
  { word: 'bader', translation: 'bathe' },
  { word: 'bøker', translation: 'books' },
  { word: 'brødskiver', translation: 'slices of bread' },
  // D
  { word: 'Da', translation: 'Then' },
  { word: 'dermed', translation: 'therefore' },
  { word: 'dra', translation: 'go' },
  { word: 'drar', translation: 'go/are going' },
  // E
  { word: 'eller', translation: 'or' },
  { word: 'eksempel', translation: 'example' },
  { word: 'enkel', translation: 'simple' },
  // F
  { word: 'fjellet', translation: 'the mountain' },
  { word: 'fjell', translation: 'mountains' },
  { word: 'for', translation: 'for' },
  { word: 'forfattere', translation: 'authors' },
  { word: 'familien', translation: 'the family' },
  // G
  { word: 'gamle', translation: 'old' },
  { word: 'går', translation: 'walk' },
  // H
  { word: 'har', translation: 'have' },
  { word: 'hus', translation: 'house' },
  { word: 'huset', translation: 'the house' },
  { word: 'hytter', translation: 'cabins' },
  { word: 'hyttetur', translation: 'cabin trip' },
  // J
  { word: 'jegere', translation: 'hunters' },
  { word: 'jul', translation: 'Christmas' },
  // K
  { word: 'komme', translation: 'come' },
  { word: 'kommer', translation: 'comes' },
  { word: 'kose seg', translation: 'enjoy oneself' },
  { word: 'kunstnere', translation: 'artists' },
  { word: 'klementiner', translation: 'clementines' },
  // L
  { word: 'livet', translation: 'life' },
  { word: 'liten', translation: 'small' },
  { word: 'lite', translation: 'little/small (neutral)' },
  { word: 'luksuriøse', translation: 'luxurious' },
  { word: 'lager', translation: 'make/prepare' },
  // M
  { word: 'mat', translation: 'food' },
  { word: 'Mange', translation: 'Many' },
  { word: 'mulighet', translation: 'opportunity' },
  { word: 'mange', translation: 'many' },
  // N
  { word: 'natur', translation: 'nature' },
  { word: 'norske', translation: 'Norwegian' },
  { word: 'norrøne', translation: 'Old Norse' },
  { word: 'nordmenn', translation: 'Norwegians' },
  // O
  { word: 'og', translation: 'and' },
  { word: 'Ordet', translation: 'The word' },
  { word: 'ost', translation: 'cheese' },
  // P
  { word: 'på', translation: 'on' },
  { word: 'påske', translation: 'Easter' },
  { word: 'pølser', translation: 'sausages' },
  // S
  { word: 'seg', translation: 'themselves' },
  { word: 'skogen', translation: 'the forest' },
  { word: 'skinke', translation: 'ham' },
  { word: 'søndag', translation: 'Sunday' },
  { word: 'slappe av', translation: 'relax' },
  { word: 'spiller', translation: 'play' },
  { word: 'symbol', translation: 'symbol' },
  { word: 'stor', translation: 'big' },
  { word: 'store', translation: 'big (plural/def)' },
  // T
  { word: 'tur', translation: 'hike/trip' },
  { word: 'turmat', translation: 'trip food' },
  { word: 'typisk', translation: 'typical' },
  // V
  { word: 'være', translation: 'to be' },
  { word: 'vakker', translation: 'beautiful' },
  { word: 'verdier', translation: 'values' },
  { word: 'viser', translation: 'shows' },
  { word: 'vinter', translation: 'winter' }
];

const startTimes = [5,9,15,19,29,36,42,52,62,75,79,87,93,98,102,105,110,117,122,127,133,139,142,146,151,156,160,164,172,177,182]; // Adjusted for hytta (use your actual timings if different)

 /**************  DOM  ****************/ 
const segments=Array.from(document.querySelectorAll('#storyText span'));
const toast=document.getElementById('toast');
const audio=document.getElementById('storyAudio');
const wordBtn=document.getElementById('wordModeBtn');

 /**************  STATE  ****************/ 
let readingIndex=0;
let wordMode=false;

 /**************  AUDIO PLAYBACK  ****************/ 
function clearHighlight(){segments.forEach(s=>s.classList.remove('highlight'))}

function handleTimeUpdate(){
  if(wordMode) return; // ignore in word mode
  const cur=audio.currentTime;
  const idx=startTimes.findIndex((s,i)=>cur>=s&&(i===startTimes.length-1||cur<startTimes[i+1]));
  if(idx!==-1&&idx!==readingIndex){
    clearHighlight();
    segments[idx].classList.add('highlight');
    toast.textContent=translations[idx];
    toast.style.display='block';
    readingIndex=idx;
  }
}

audio.addEventListener('timeupdate',handleTimeUpdate);
audio.addEventListener('ended',()=>{clearHighlight();toast.style.display='none';readingIndex=0});
function playStory() {
  exitWordMode(); // exit word mode if active
  audio.currentTime = startTimes[readingIndex];
  audio.play();
  highlightCurrentSentence(); // ⬅️ manually highlight on play
}
function highlightCurrentSentence() {
  clearHighlight();
  segments[readingIndex].classList.add('highlight');
  toast.textContent = translations[readingIndex];
  toast.style.display = 'block';
}
function pauseStory(){audio.pause();toast.style.display='none';clearHighlight()}

 /**************  SEGMENT CLICK – sentence playback  ****************/
/* ----------  CLICK-TO-READ SUPPORT ---------- */
segments.forEach((segment, idx) => {
  segment.style.cursor = 'pointer';
  segment.addEventListener('click', () => {
    readingIndex = idx;
    audio.currentTime = startTimes[idx];
    
    // Highlight immediately on click
    clearHighlight();
    segments[idx].classList.add('highlight');
    
    // Show translation immediately
    toast.textContent = translations[idx];
    toast.style.display = 'block';
    
    playStory();
  });
});

 /**************  WORD MODE  ****************/
function toggleWordMode(){
  wordMode?exitWordMode():enterWordMode();
}

function enterWordMode(){
  wordMode=true;
  wordBtn.textContent='Exit Word Mode';
  pauseStory();
  toast.style.display='none';
  // wrap every word in each sentence with span.word
  segments.forEach(seg=>{
    const words=seg.textContent.split(/(\s+)/); // keep spaces
    seg.innerHTML=words.map(w=>/\s+/.test(w)?w:`<span class='word'>${w}</span>`).join('');
    seg.querySelectorAll('span.word').forEach(wspan=>{
      wspan.style.cursor='pointer';
      wspan.addEventListener('click',wordClickHandler);
    });
  });
}

function exitWordMode(){
  if(!wordMode) return;
  wordMode=false;
  wordBtn.textContent='Word Translation Mode';
  toast.style.display='none';
  // restore original text (remove inner spans)
  segments.forEach((seg,i)=>{seg.textContent=seg.innerText});
  clearHighlight();
}

function wordClickHandler(e){
  e.stopPropagation();
  clearHighlight();

  const span = e.target;
  span.classList.add('highlight');

  // Clean the word and look up in vocabulary
  const clean = span.textContent.toLowerCase().replace(/[^a-zæøåA-ZÆØÅ]/g, '');
  const entry = vocabulary.find(v => v.word.toLowerCase() === clean);
  toast.textContent = entry ? `${entry.word} = ${entry.translation}` : 'Translation not available';
  toast.style.display = 'block';

  // ▶️ Play the sentence that contains the clicked word
  const parentSegment = span.closest('span');
  const idx = segments.indexOf(parentSegment);
  if (idx !== -1) {
    readingIndex = idx;
    audio.currentTime = startTimes[idx];
    audio.play();
  }
}

/**************  FLASH‑CARD MODE  ****************/ 
const flashcard=document.getElementById('flashcard');
const flashcardContent=document.getElementById('flashcardContent');
let currentWordIdx=0;
function startVocabMode(){exitWordMode();flashcard.style.display='flex';currentWordIdx=0;updateFlashcard()}
function updateFlashcard(){flashcardContent.textContent=vocabulary[currentWordIdx].word;flashcardContent.dataset.side='word'}
function revealMeaning(){if(flashcardContent.dataset.side==='word'){flashcardContent.textContent=vocabulary[currentWordIdx].translation;flashcardContent.dataset.side='translation'}else{updateFlashcard()}}
function nextWord(){currentWordIdx=(currentWordIdx+1)%vocabulary.length;updateFlashcard()}
function prevWord(){currentWordIdx=(currentWordIdx-1+vocabulary.length)%vocabulary.length;updateFlashcard()}
function closeFlashcard(){
  flashcard.style.display='none';
}

/**************  MODAL  ****************/ 
function showDialog(){document.getElementById('overlay').style.display='block';document.getElementById('storyDialog').style.display='block'}
function closeDialog(){
  pauseStory();              // stop audio & highlight
  exitWordMode();            // make sure word mode is reset
  flashcard.style.display='none';
  document.getElementById('overlay').style.display='none';
  document.getElementById('storyDialog').style.display='none';
}

/* allow a tap on the dark backdrop to close as well */
document.getElementById('overlay').addEventListener('click', closeDialog);

