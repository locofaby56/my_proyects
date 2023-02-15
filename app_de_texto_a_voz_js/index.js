const $containerVoices = document.getElementById("containerVoices"),
    $btn = document.getElementById("btn"),
    $text = document.getElementById("text");

let voices = [];
let utterance = new SpeechSynthesisUtterance();

function textToSpeak(){
    utterance.text = $text.value;
    window.speechSynthesis.speak(utterance);
}

document.addEventListener("DOMContentLoaded", (e)=>{
    window.speechSynthesis.addEventListener("voiceschanged", (e)=>{
       voices = window.speechSynthesis.getVoices();
       //console.log(voices);

       voices.forEach(el =>{
           const $option = document.createElement("option");
           $option.value = el.name;
           $option.textContent = `${el.name} - ${el.lang}`;
           $containerVoices.appendChild($option);
       });
    });
});

document.addEventListener("click", (e)=>{
   if (e.target === $btn){
       textToSpeak();
   }
});

document.addEventListener("change", (e)=>{
    if (e.target === $containerVoices) utterance.voice = voices.find(voice => voice.name === e.target.value)
});