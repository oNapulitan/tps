let calcolo = "";

function setValore(value) {
    calcolo+=value
    document.getElementById("valore").value = calcolo
}

function cancella() {
    calcolo = ""
    document.getElementById("valore").value = calcolo
}

function calc() {
    calcolo = document.getElementById("valore").value
    
    for (let i=0; i<calcolo.length;i++) {
        if (calcolo[i] == '+') {
            calcolo = String(parseFloat(calcolo.substring(0, i)) + parseFloat(calcolo.substring(i+1, calcolo.length)))
        } else if (calcolo[i] == '-') {
            calcolo = String(parseFloat(calcolo.substring(0, i)) - parseFloat(calcolo.substring(i+1, calcolo.length)))
        } else if (calcolo[i] == '*') {
            calcolo = String(parseFloat(calcolo.substring(0, i)) * parseFloat(calcolo.substring(i+1, calcolo.length)))
        } else if (calcolo[i] == '/') {
            calcolo = String(parseFloat(calcolo.substring(0, i)) / parseFloat(calcolo.substring(i+1, calcolo.length)))
        }
        document.getElementById("valore").value = calcolo
    }
}