var speechRecognition = window.webkitSpeechRecognition;

var recognition = new speechRecognition();

var textBox = document.getElementById('textbox');

var startButton = document.getElementById('start-btn');

var pauseButton = document.getElementById('pause-btn');

var instruction = document.getElementById('instruction');

var content = ' ';

recognition.continuous = true;
recognition.interimResults = false;

recognition.onstart = function(){
    instruction.innerHTML = "Voice Recognition is ON";
}

recognition.onspeechend = function(){
    instruction.innerHTML = "No Activity";
}

recognition.onerror = function(){
    instruction.innerHTML = "Click onl start button or Refresh you page"
}

recognition.onresult = function(event){
    var current = event.resultIndex;

    var transcript = event.results[current][0].transcript;

    content += transcript;

    textBox.value = content;
}

startButton.addEventListener('click',function(){

    if(content.length){

        content += '';

    }

    recognition.start();

});

pauseButton.addEventListener('click',function(){

    recognition.abort();
    instruction.innerHTML = "Voice Recognition is Paused";
    

});