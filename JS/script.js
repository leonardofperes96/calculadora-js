const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const allButtons = document.querySelectorAll('#buttons-container button');

class Calculator {
    constructor(previousOperation, currentOperation){
        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = "";
    }
    //add digit to calculator screen
    addDigit(digit){
    //chef if currentOperation already has a dot
    if(digit ==='.' && this.currentOperationText.innerText.includes('.')){
    return;
    }

    this.currentOperation = digit;
    this.updateScreen();
    }
    //process all calculator operations
    processOperation(operation){
    




    // get current and previous value
    let operationValue;    
    let previous = +this.previousOperationText.innerText;
    let current = +this.currentOperationText.innerText;
    switch (operation){
    case "+":
    break;
    default:
        return;
    }


    }




    //change values of calculator screen    
    updateScreen(){
        this.currentOperationText.innerText += this.currentOperation;
    }

}






const calc = new Calculator(previousOperationText, currentOperationText)

allButtons.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
    const value = e.target.innerText;
    if (+value >= 0 ||  value === "."){
        calc.addDigit(value);
    }
    else {
        calc.processOperation(value);
    }
    });
});


