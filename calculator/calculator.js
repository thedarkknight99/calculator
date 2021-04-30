class Calculator{
    constructor(){
        this.numOne = ""
        this.numTwo = ""
        this.result = ""
        this.operation = ""
        this.prevResult = ""
    }
    add(){
        this.result = Number(this.numOne) + Number(this.numTwo)
    }
    subtract(){
        this.result = this.numOne - this.numTwo
    }
    multiply(){

    }
    divide(){

    }
    setNumOne (value){
        this.numOne += value
    }
    setNumTwo (value){
        this.numTwo += value
    }
    setOperation (operation){
        this.operation = operation
    }
    clearCalculator(){ //reset original condition
        this.numOne = ""
        this.numTwo = ""
        this.result = ""
        this.operation = ""
        this.prevResult = ""
    }
    changeSign(forNumOne){
        if(forNumOne){
            this.numOne = String(Number(this.numOne)*-1)
            return
        }
        this.numTwo = String(Number(this.numTwo)*-1)
    }
}

const signObject = {
    ADD : "+",
    SUBTRACT : "-",
    MULTIPLY : "x",
    DIVIDE : "&#x00F7"
}

const calculator = new Calculator()

const updateMainDisplay = () => {
    const main = document.getElementById("main-display")
    main.innerText = calculator.operation ? (calculator.numTwo ?  calculator.numTwo : 0) : (calculator.numOne || 0)
}
const updateSecondaryDisplay = () => {
    const secondary = document.getElementById("secondary-display")
    secondary.innerHTML = `${calculator.numOne} <span class="operand"> ${signObject[calculator.operation] ? signObject[calculator.operation]  : ""} </span> ${calculator.numTwo}`
}

const numkeyClickHandler = (num) => {
    if(calculator.operation){
        calculator.setNumTwo(num)
    }else{
        calculator.setNumOne(num)
    }
    
    updateMainDisplay()
    updateSecondaryDisplay()
    //console.log(num)
    //console.log(calculator)
}
const operandkeyClickHandler = (operation) => {
    //console.log(operation)
    calculator.setOperation(operation)
    updateMainDisplay()
    updateSecondaryDisplay()
}

const resultClickHandler = () => {
    switch (calculator.operation) {
        case "ADD":
            calculator.add();
            break;
        case "SUBTRACT":
            calculator.subtract();
            break;
        case "DIVIDE":
            calculator.divide();
            break;
        case "MULTIPLY":
            calculator.multiply();
            break;
        default:
            break;
    }
    const main = document.getElementById("main-display");
    main.innerText = calculator.result  
}


const actionkeyClickHandler = (action) => {
    switch (action) {
        case "CLEAR-ALL":
            calculator.clearCalculator() 
            updateMainDisplay()
            updateSecondaryDisplay()
            break;
        case "CHANGE-SIGN":
            calculator.changeSign(calculator.operation ? false : true)
            updateMainDisplay()
            updateSecondaryDisplay()
            break;
    
        default:
            break;
    }
}



