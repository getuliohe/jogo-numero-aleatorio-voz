const guessElement = document.querySelector('#chute')

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result',onSpeak)

function onSpeak(e){
    let guess = e.results[0][0].transcript
    exibeNaTela(guess)
    verifyIfValidValue(guess)
}

function exibeNaTela(guess){
    guessElement.innerHTML = `
    <div>voce disse:</div>
    <span class="box">${guess}</span>
    `
}

recognition.addEventListener('end',() => recognition.start())