const calculate = (firstNum, secondNum, operator) =>{
    [firstNum, secondNum, operator].forEach((parameter) =>{
        if(parameter == null){
            throw new Error('Parameter Shouldnt be Null');
        }
    });
    const operators = ['+', '-', '*', '/'];

    if(_isInteger(firstNum) != true || _isInteger(secondNum) != true){
        throw new Error('Input Have to be an Integer');
    }
    if(operators.includes(operator) != true){
        throw new Error('Operator Should Have been [+,-,*,/]');
    }
    if(operator == '+'){
        return firstNum+secondNum;
    }
    if(operator == '-'){
        return firstNum-secondNum;
    }
    if(operator == '*'){
        return firstNum * secondNum;
    }
    if(operator == '/'){
        return firstNum / secondNum;
    }
    
}

const _isInteger = (value) =>{
    if(Number.isInteger(value)){
        return true;
    }else{
        return false;
    }
}

module.exports = calculate;