const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const operator = document.querySelector('.opp')


document.addEventListener('DOMContentLoaded', () => {
    for(let i =0; i < 10; i++) {
        const num = document.querySelector(`.num${i}`);
        if(num) {
            num.addEventListener('click', () => {
                if (operator.textContent === '') {
                    input1.textContent += i;
                }
                else {
                    input2.textContent += i;
                }
            })
        }
    }
});

function operation() {
    const op = operator.textContent;
    const num1 = parseFloat(input1.textContent)
    const num2 = parseFloat(input2.textContent)
    const sumDiv = document.querySelector('.sum')
    let result
    if(op === '+') {
        result = num1 + num2
    } else if (op === '-'){
        result = num1 - num2
    } else if (op === '*') {
        result = num1 * num2
    } else if (op === '/') {
        result = num2 !== 0 ? num1 / num2 : 'diving by zero error'
    }
    sumDiv.textContent = result;
}

function insertOperator(opp) {
    if(input1.textContent != "") {
        operator.textContent = opp
    }
    
}

function deleteFunc() {
    if (input2.textContent != '') {
        input2.textContent = ''
    } else if (operator.textContent != '') {
        operator.textContent = ''
    } else if (input1.textContent != '') {
        input1.textContent = ''
    }
    document.querySelector('.sum').textContent = '';
}

function clearFunc() {
    sum = document.querySelector('.sum')
    input1.textContent = ''
    input2.textContent = ''
    operator.textContent = ''
    sum.textContent = ''
}