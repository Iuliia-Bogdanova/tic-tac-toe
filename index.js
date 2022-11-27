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

function Calculator() {

    this.read = function() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    };

    this.sum = function() {
        return this.a + this.b;
    };

    this.sub = function() {
        return this.a - this.b;
    };

    this.mul = function() {
      return this.a * this.b;
    };

    this.div = function() {
        return this.a / this.b;
    };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Sub=" + calculator.sub() );
alert( "Mul=" + calculator.mul() );
alert( "Div=" + calculator.div() );