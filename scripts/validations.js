function verifyIfValidValue(guess){
    const number = +guess

    if (invalidGuess(number)) {
        guessElement.innerHTML += `
        <div>Inválido!! Não há somente números</div>
        `
    }else if(numberHigherOrLowerThanAlowed(number)){
        guessElement.innerHTML += `
        <div>O número está fora da adivinhação, precisa estar entre ${minNumber} e ${maxNumber}</div>
        `
    }else if(numberHigherThanRandom(number)){
        guessElement.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `
    }else if(numberLowerThanRandom(number)){
        guessElement.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    }else if(number === randomNumber){
        document.body.innerHTML = `
        <div class="container">
            <h1 class="title">Você acertou!!</h1>
            <h3 class="subtitle">o número secreto era ${randomNumber}</span></h3>

            <button id="restart">Jogar Novamente</button>
        </div>
        `
    }
}

function invalidGuess(number){
    return Number.isNaN(number)
}

function numberHigherOrLowerThanAlowed(number){
    return maxNumber < number || minNumber > number
}

function numberHigherThanRandom(number){
    return number < randomNumber;
}

function numberLowerThanRandom(number){
    return number > randomNumber;
}

document.body.addEventListener('click',e => {
    if(e.target.id == 'restart'){
        window.location.reload()
    }
})