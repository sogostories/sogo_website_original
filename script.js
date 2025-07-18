const translations=[
 "May 188 is Norway’s National Day.",
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
  

  /* numbers & dates */
  {word:'17. mai',             translation:'May 17'},
  {word:'17.mai',              translation:'May 17'},
  {word:'1814',                translation:'1814'},
  {word:'1905',                translation:'1905'},

  /* A */
  {word:'aldri',               translation:'never'},
  {word:'alle',                translation:'everyone'},
  {word:'august',              translation:'August'},
  {word:'av',                  translation:'of'},
  {word:'også',                translation:'also'},
  {word:'at',                  translation:'that'},
  {word:'å',                   translation:'to'},
  {word:'august',              translation:'August'},

  /* B */
  {word:'bare',                translation:'only'},
  {word:'barn',                translation:'children'},
  {word:'Barn',                translation:'children'},
  {word:'barnetoget',          translation:"children’s parade"},
  {word:'Barnehager',          translation:'kindergartens'},
  {word:'begynnelsen',         translation:'beginning'},
  {word:'bli',                 translation:'become'},
  {word:'blomster',            translation:'flowers'},
  {word:'blå',                 translation:'blue'},
  {word:'bordene',             translation:'the tables'},
  {word:'bunader',             translation:'national costumes'},
  {word:'Bunader',             translation:'national costumes'},
  {word:'både',                translation:'both'},
  
  /* D */
  {word:'da',                  translation:'then'},
  {word:'dagen',               translation:'day'},
  {word:'dag',                 translation:'day'},
  {word:'De',                  translation:'They'},
  {word:'dem',                 translation:'them'},
  {word:'denne',               translation:'this'},
  {word:'Det',                 translation:'It'},
  {word:'deler',               translation:'parts'},
  {word:'Danmark',             translation:'Denmark'},
  {word:'del',                 translation:'part'},
  {word:'dekorert',            translation:'decorated'},
  {word:'denne',               translation:'this'},
  {word:'drums',               translation:'trommer'},   /* English->Norwegian placeholder */

  /* E */
  {word:'egen',                translation:'own'},
  {word:'eller',               translation:'or'},
  {word:'en',                  translation:'a'},
  {word:'et',                  translation:'a'},
  {word:'etter',               translation:'after'},
  {word:'Eidsvoll',            translation:'Eidsvoll'},
  {word:'fikk',                translation:'got'},
  {word:'finnes',              translation:'exists'},    /* if needed */

  /* F */
  {word:'familie',             translation:'family'},
  {word:'feirer',              translation:'celebrate'},
  {word:'feiringen',           translation:'the celebration'},
  {word:'feiret',              translation:'celebrated'},
  {word:'festlig',             translation:'festive'},
  {word:'flagget',             translation:'flag'},
  {word:'flagg',               translation:'flags'},
  {word:'fløyter',             translation:'flutes'},
  {word:'for',                 translation:'for'},
  {word:'foreldre',            translation:'parents'},
  {word:'fri',                 translation:'free'},
  {word:'frihet',              translation:'freedom'},
  {word:'friheten',            translation:'the freedom'},
  {word:'fremdeles',           translation:'still'},
  {word:'frokost',             translation:'breakfast'},
  {word:'frokoster',           translation:'breakfasts'},
  {word:'fulle',               translation:'full'},

  /* G */
  {word:'gatene',              translation:'the streets'},
  {word:'glede',               translation:'joy'},
  {word:'glad',                translation:'fond'},
  {word:'gikk',                translation:'went'},
  {word:'gjennom',             translation:'through'},
  {word:'Grunnloven',          translation:'the constitution'},
  {word:'grunnloven',          translation:'the constitution'},
  {word:'grunnlov',            translation:'constitution'},

  /* H */
  {word:'har',                 translation:'have'},
  {word:'hjalp',               translation:'helped'},
  {word:'hisp',                translation:'hip'},           /* for “hipp” */
  {word:'hvert',               translation:'each'},
  {word:'hurra',               translation:'hooray'},
  {word:'Hipp',                translation:'Hip'},
  {word:'hører',               translation:'hear'},
  {word:'hus',                 translation:'house'},
  {word:'husene',              translation:'the houses'},

  /* I */
  {word:'I',                   translation:'In'},
  {word:'ikke',                translation:'not'},
  {word:'inn',                 translation:'into'},
  {word:'is',                  translation:'ice-cream'},

  /* K */
  {word:'kaker',               translation:'cakes'},
  {word:'klær',                translation:'clothes'},
  {word:'korps',               translation:'marching band'},
  {word:'kretser',             translation:'circles'},
  {word:'landet',              translation:'the country'},
  {word:'lang',                translation:'long'},
  {word:'lange',               translation:'long'},
  {word:'lag',                 translation:'make/create'},
  {word:'lager',               translation:'create'},
  {word:'Ledende',             translation:'leading'},
  {word:'lenge',               translation:'long'},
  {word:'lunsj',               translation:'lunch'},
  {word:'lunsjer',             translation:'lunches'},

  /* M */
  {word:'mai-feiringen',       translation:'May-17 celebration'},
  {word:'man',                 translation:'one/people'},
  {word:'Mat',                 translation:'food'},
  {word:'mange',               translation:'many'},
  {word:'Mange',               translation:'many'},
  {word:'med',                 translation:'with'},
  {word:'menn',                translation:'men'},
  {word:'mennesker',           translation:'people'},
  {word:'mer',                 translation:'more'},         /* optional */
  {word:'møttes',              translation:'met'},
  {word:'musikk',              translation:'music'},

  /* N */
  {word:'nasjonaldag',         translation:'national day'},
  {word:'Norge',               translation:'Norway'},
  {word:'Norges',              translation:"Norway’s"},
  {word:'norske',              translation:'Norwegian'},
  {word:'ny',                  translation:'new'},
  {word:'nummer',              translation:'number'},       /* if needed */

  /* O */
  {word:'og',                  translation:'and'},
  {word:'Overalt',             translation:'everywhere'},
  {word:'ønsket',              translation:'wanted'},

  /* P */
  {word:'på',                  translation:'on'},
  {word:'pølser',              translation:'sausages'},
  {word:'pynter',              translation:'decorate'},
  {word:'pyntet',              translation:'decorated'},

  /* R */
  {word:'røde',                translation:'red'},
  {word:'rundt',               translation:'around'},
  {word:'russetog',            translation:'russ parade'},

  /* S */
  {word:'seg',                 translation:'themselves'},
  {word:'Selvstendigheten',    translation:'the independence'},
  {word:'selvstendig',         translation:'independent'},
  {word:'selvstendighet',      translation:'independence'},
  {word:'Sverige',             translation:'Sweden'},
  {word:'små',                 translation:'small'},
  {word:'spesiell',            translation:'special'},
  {word:'spiser',              translation:'eat'},
  {word:'ste',                 translation:'step'},         /* optional typo fix */
  {word:'stemning',            translation:'atmosphere'},
  {word:'stolte',              translation:'proud (adj)'},
  {word:'stolthet',            translation:'pride'},
  {word:'stor',                translation:'big'},          /* root */
  {word:'store',               translation:'big'},
  {word:'synger',              translation:'sing'},
  {word:'sanger',              translation:'songs'},
  {word:'ser',                 translation:'see'},
  {word:'skole',               translation:'school'},
  {word:'skoler',              translation:'schools'},
  {word:'skrevet',             translation:'written'},
  {word:'skrev',               translation:'wrote'},

  /* T */
  {word:'til',                 translation:'to'},
  {word:'tiden',               translation:'time'},
  {word:'tog',                 translation:'parade'},
  {word:'toget',               translation:'the parade'},
  {word:'trommer',             translation:'drums'},
  {word:'trompeter',           translation:'trumpets'},

  /* U */
  {word:'ulike',               translation:'various'},
  {word:'union',               translation:'union'},
  {word:'ungdommer',           translation:'youth'},
  {word:'utbredt',             translation:'widespread'},

  /* V */
  {word:'var',                 translation:'was'},
  {word:'varte',               translation:'lasted'},
  {word:'vår',                 translation:'our'},
  {word:'vi',                  translation:'we'},
  {word:'visse',               translation:'certain'},
  {word:'vite',                translation:'know'},         /* optional */
  {word:'viktig',              translation:'important'},
  {word:'vifter',              translation:'wave'},
  {word:'videregående',        translation:'upper secondary'},

  /* Ø */
  {word:'ønsket',              translation:'wanted'}


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
