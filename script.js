const translations=[
 "May 17 is Norway’s National Day.",
 "On this day in 1814, Norway got its own constitution.",
 "The constitution was written at Eidsvoll.",
 "At that time, Norway was in a union with Denmark but wanted to become a free country.",
 "Leading men from different parts of Norway met and wrote the constitution.",
 "Norway then became an independent country.",
 "The independence didn’t last long, and Norway entered a new union with Sweden in August 1814.",
 "The 1814 constitution was still valid and helped Norway to independence in 1905.",
 "In the beginning, May 17 was only celebrated in certain private circles before the celebration gradually spread.",
 "Today we celebrate May 17 with joy and pride throughout the country.",
 "People decorate their houses with Norwegian flags and the streets are full of people.",
 "The children's parade is an important part of the May 17 celebration.",
 "Children from schools and kindergartens walk in the parade through the city.",
 "They sing songs and shout hooray.",
 "Many children wear traditional Norwegian costumes called bunads.",
 "Bunads are traditional Norwegian clothes.",
 "Parents, grandparents, and friends watch the children's parade and wave flags.",
 "Marching bands play music in the parade.",
 "Drums, flutes, and trumpets create a festive atmosphere.",
 "There is also the russ parade, where youth who have finished upper secondary school walk in the parade.",
 "They wear red or blue clothes.",
 "Food is an important part of the celebration.",
 "We eat sausages, ice cream, and cakes.",
 "Many also have breakfasts and lunches with family and friends.",
 "The tables are decorated with flags and flowers.",
 "It is a day to be with those you love.",
 "May 17 is a day full of joy.",
 "Everywhere you hear people shout: 'Hip hip hooray, hooray, hooray!'",
 "It is a day for everyone in Norway, both big and small.",
 "We celebrate our freedom and our proud history.",
 "May 17 is truly a special day in Norway, a day we never forget."
];

const startTimes=[5,9,15,19,29,36,42,52,62,75,79,87,93,98,102,105,110,117,122,127,133,139,142,146,151,156,160,164,172,177,182];

const vocabulary = [
  {word:'17. mai', translation:'May 17'},
  {word:'grunnlov', translation:'constitution'},
  {word:'Norge', translation:'Norway'},
  {word:'nasjonaldag', translation:'National Day'},
  {word:'skrevet', translation:'written'},
  {word:'Eidsvoll', translation:'Eidsvoll'},
  {word:'union', translation:'union'},
  {word:'Danmark', translation:'Denmark'},
  {word:'fri', translation:'free'},
  {word:'land', translation:'country'},
  {word:'menn', translation:'men'},
  {word:'forskjellige', translation:'different'},
  {word:'deler', translation:'parts'},
  {word:'selvstendig', translation:'independent'},
  {word:'august', translation:'August'},
  {word:'gyldig', translation:'valid'},
  {word:'hjalp', translation:'helped'},
  {word:'begynnelsen', translation:'beginning'},
  {word:'feiret', translation:'celebrated'},
  {word:'private kretser', translation:'private circles'},
  {word:'spredte', translation:'spread'},
  {word:'glede', translation:'joy'},
  {word:'stolthet', translation:'pride'},
  {word:'hus', translation:'houses'},
  {word:'dekorert', translation:'decorated'},
  {word:'flagget', translation:'flag'},
  {word:'gatene', translation:'streets'},
  {word:'fulle', translation:'full'},
  {word:'barnetoget', translation:'children’s parade'},
  {word:'barn', translation:'children'},
  {word:'skoler', translation:'schools'},
  {word:'barnehager', translation:'kindergartens'},
  {word:'går', translation:'walk'},
  {word:'sanger', translation:'songs'},
  {word:'roper', translation:'shout'},
  {word:'hurra', translation:'hooray'},
  {word:'bunader', translation:'national costumes'},
  {word:'tradisjonelle', translation:'traditional'},
  {word:'norske klær', translation:'Norwegian clothes'},
  {word:'foreldre', translation:'parents'},
  {word:'besteforeldre', translation:'grandparents'},
  {word:'venner', translation:'friends'},
  {word:'vinker', translation:'wave'},
  {word:'korps', translation:'marching band'},
  {word:'musikk', translation:'music'},
  {word:'trommer', translation:'drums'},
  {word:'fløyter', translation:'flutes'},
  {word:'trompeter', translation:'trumpets'},
  {word:'festlig', translation:'festive'},
  {word:'stemning', translation:'atmosphere'},
  {word:'russ', translation:'graduating students'},
  {word:'videregående skole', translation:'upper secondary school'},
  {word:'rødt', translation:'red'},
  {word:'blått', translation:'blue'},
  {word:'klær', translation:'clothes'},
  {word:'mat', translation:'food'},
  {word:'pølser', translation:'sausages'},
  {word:'iskrem', translation:'ice cream'},
  {word:'kaker', translation:'cakes'},
  {word:'frokost', translation:'breakfast'},
  {word:'lunsj', translation:'lunch'},
  {word:'familie', translation:'family'},
  {word:'bordene', translation:'tables'},
  {word:'blomster', translation:'flowers'},
  {word:'dag', translation:'day'},
  {word:'elsker', translation:'love'},
  {word:'overalt', translation:'everywhere'},
  {word:'små', translation:'small'},
  {word:'store', translation:'big'},
  {word:'frihet', translation:'freedom'},
  {word:'stolt', translation:'proud'},
  {word:'historie', translation:'history'},
  {word:'spesiell', translation:'special'},
  {word:'glemmer aldri', translation:'never forget'}
];


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

function playStory(){exitWordMode();audio.currentTime=startTimes[readingIndex];audio.play()}
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
  const span=e.target;
  span.classList.add('highlight');
  const clean=span.textContent.toLowerCase().replace(/[^a-zæøåA-ZÆØÅ]/g,'');
  const entry=vocabulary.find(v=>v.word.toLowerCase()===clean);
  toast.textContent=entry?`${entry.word} = ${entry.translation}`:'Translation not available';
  toast.style.display='block';
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

/**************  MODAL  ****************/ 
function showDialog(){document.getElementById('overlay').style.display='block';document.getElementById('storyDialog').style.display='block'}
