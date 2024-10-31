let value1;
let value2;

let operatore;

function getValues() {
    value1 = parseFloat(document.getElementById("value1").value)
    value2 = parseFloat(document.getElementById("value2").value)
}

function add() {
    operatore = "+"
}

function sott() {
    operatore = "-"
}

function molt() {
    operatore = "*"
}

function divi() {
    operatore = "/"
}

function calcolo() {
    getValues()
    if (operatore == "+") {
        document.getElementById("result").innerHTML = String(value1 + " + " + value2 + " = " + parseFloat(value1+value2))
    } else if (operatore == "-") {
        document.getElementById("result").innerHTML = String(value1 + " - " + value2 + " = " + parseFloat(value1-value2))
    } else if (operatore == "*") {
        document.getElementById("result").innerHTML = String(value1 + " * " + value2 + " = " + parseFloat(value1*value2))
    } else if (operatore == "/") {
        document.getElementById("result").innerHTML = String(value1 + " / " + value2 + " = " + parseFloat(value1/value2))
    }
}