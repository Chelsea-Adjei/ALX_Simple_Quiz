function checkAnswer(){
    let correctAnswer = '4';
    let userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    /*let answerValue = userAnswer.value;*/ // this can be used to run it.

    /*if (userAnswer) {   // this fomula also can be used to make it work.
        answerValue = userAnswer.value
        console.log( answerValue)
    }*/



    let feedbackElement = document.getElementById("feedback");
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done";
        console.log(userAnswer, correctAnswer)

    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
        console.log(userAnswer, correctAnswer)
    }
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer);


