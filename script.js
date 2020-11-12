
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
        document.getElementById(`check_input_${cur.inputNumber.toString()}`).addEventListener("click", function(){
            checkAnswer(cur.inputNumber);
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
            console.log('correct');            
        } else {
            console.log('no')
        }
        
    };
    

init = function(){
    setUpEventListeners();
    console.log('App has started.');
};
init();

// pruebas *************
html = '<div>1) I <input type="text" id="input_text_1"> (hear) a new song on the radio.<br><input type="button" id="check_input_1" value="Check"><button class="show_answer">Show answer</button>[.]</div>'
document.getElementById('input_text_1').insertAdjacentHTML('beforeend', function(){
    html.replace('[.]', 'it works');
});

// planning
// - show result in HTML