
class Element{
    constructor (verb, correctAnswer, inputNumber){
        this.verb = verb;
        this.correctAnswer = correctAnswer;
        this.inputNumber = inputNumber;
    }
}

const allElements = [
    new Element ("hear", "heard", 1),
    new Element ("read", "read", 2),
    new Element ("speak", "spoke", 3),
    new Element ("understand", "understood", 4),
    new Element ("forget", "forgot", 5)
];

let setUpEventListeners = function(){    
    
    // setting up check button
    allElements.forEach((cur) => {
        let inputNumberString;        
        
        inputNumberString = cur.inputNumber.toString();
        document.getElementById(`check_input_${inputNumberString}`).addEventListener("click", function(){
            checkAnswer(cur.inputNumber);
        });
        document.getElementById(`show_answer_${inputNumberString}`).addEventListener("click", function(){
            showAnswer(cur.inputNumber);
        });
    });

}

let DOMinputText = function() {

    // input text listener
    let inputTextArr = [];
    allElements.forEach(cur => {        
        inputTextArr.push(document.getElementById(`input_text_${cur.inputNumber}`).value);
        return inputTextArr;
    });
    return inputTextArr;
};

// reading input data    
let checkAnswer = function (inputNumber) {

        // checking answer  
        let DOMinput, currentInput;

        DOMinput = DOMinputText()[inputNumber - 1];
        currentInput = allElements[inputNumber - 1];

        if (currentInput.correctAnswer === DOMinput){
            document.getElementById(`check_${inputNumber}`).innerHTML = "Correct!";
        } else {
            document.getElementById(`check_${inputNumber}`).innerHTML = "Wrong answer. Try again.";
        }
        
    };

// show correct answer
let showAnswer = function (inputNumber) {
    
    currentInput = allElements[inputNumber - 1];
    
    document.getElementById(`show_${inputNumber}`).innerHTML = `Correct answer: ${currentInput.correctAnswer}`;

}

init = function(){
    setUpEventListeners();
    console.log('App has started.');
};
init();

// pruebas *************

// *******PLANNING*********
// show correct answer