console.log("hello from the script");
const synth = window.speechSynthesis;

var voices = [];



console.log(synth);


let startPeer;

let partnerTextInput = ["I am sure Simon and Caroline are secretly dating", "I think Trump and Putin are friends", "My professor had a part in a low budget Hollywood film", "My best friend is getting on my nerves", "Jack had a salary raise but never told his girlfriend", "John is such a womanizer", "I believe Jane like her sister's boyfriend"]
let item = partnerTextInput[(Math.random()*partnerTextInput.length)|0];
console.log('item:', item);


// WebRTCPeerClient.initSocketClient();
// WebRTCPeerClient.initPeerClient();

//let utterThis = new SpeechSynthesisUtterance("hello");
//synth.speak(utterThis);

const speak = text => {
if(synth.speaking) {

    console.error("already talking");
    return;   
}
    voices = synth.getVoices();
    let voicePick = voices[Math.floor(Math.random() * voices.length)];
    let utterThis = new SpeechSynthesisUtterance(text);
    utterThis.voice = voicePick;
    
    synth.speak(utterThis);
   
    

}


//const newData = WebRTCPeerClient.getData();



document.querySelector("#button").onclick = () => {

console.log("button clicked");
//synth.speak(utterThis);
let textInput = document.querySelector("#text-input").value;
speak("Wow! That's so juicy!");
//WebRTCPeerClient.sendData(textInput);
console.log(textInput);
};


document.querySelector("#button2").onclick = () => {
console.log("button 2 clicked");
//let partnerTextInput = newData.data;
 speak(item); 
     };


     

     
