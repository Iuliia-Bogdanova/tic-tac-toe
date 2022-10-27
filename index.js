function calcAdd() {
    let a = +prompt(`First number`); 
    let b = +prompt(`Second number`);
    
    alert(`Result ${a + b}`);
}

function calcSub() {
    let a = +prompt(`First number`); 
    let b = +prompt(`Second number`);

    alert(`Result ${a - b}`);
}

function calcMult() {
    let a = +prompt(`First number`); 
    let b = +prompt(`Second number`);

    alert(`Result ${a * b}`);
}

function calcDiv() {
    let a = +prompt(`First number`); 
    let b = +prompt(`Second number`);
    
        if (b == 0) {
            alert('You can not divide by 0');
        } else {
            alert(`Result ${a / b}`);
        }
}