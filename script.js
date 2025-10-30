let randomNumber = Math.floor(Math.random() * 10) + 1;
    //console.log(randomNumber);

    let maxCount = 6;
    let attemptCount = 0;
    let button = document.getElementById('button');

function guessNumber(){
    let guess= Number(document.getElementById('number').value);
    //console.log(guess);

    attemptCount =  attemptCount + 1;
    let count = maxCount - attemptCount;

    if(guess==0){
        console.log('Start Game');
    }
    else if(guess===randomNumber && attemptCount < maxCount){
        alert('YOU WIN. Refresh to Continue');
        document.getElementById('number').disabled = true;
        button.disabled = true;
    }
    else if(guess>randomNumber && attemptCount < maxCount){
        alert(`Try a lesser number. And you have ${count} guesses left`);
    }
    else if(guess<randomNumber && attemptCount < maxCount){
        alert(`Try a higher number. And you have ${count} guesses left`);
    }
    else{
        alert(`YOU LOSE. Refresh to Continue`);
        document.getElementById('number').disabled = true;
        button.disabled = true;
    }
}
guessNumber();
