const minNumber = 1;
const maxNumber = 100;
const randomNumber = generateNumber(minNumber,maxNumber);

const spanMinNumber = document.querySelector('#menor-valor')
const spanMaxNumber = document.querySelector('#maior-valor')

spanMinNumber.textContent = minNumber
spanMaxNumber.textContent = maxNumber

function generateNumber(min,max){
    return parseInt((Math.random()*(max-min))+min)
}

console.log(randomNumber)