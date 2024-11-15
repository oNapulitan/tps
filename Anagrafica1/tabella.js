const users = []

let iter = 1
let table = document.getElementById("tabella")

function pushUsers(nome, cognome, indirizzo, citta, email) {
    const user = []
    user.push(nome)
    user.push(cognome)
    user.push(indirizzo)
    user.push(citta)
    user.push(email)

    users.push(user)
}

function createUser() {
    pushUsers(document.getElementById("nome").value, document.getElementById("cognome").value, document.getElementById("indirizzo").value, document.getElementById("citta").value, document.getElementById("email").value)
    const user = users[users.length-1]
    const tableRow = document.createElement("tr")
    const tableHead = document.createElement("th")
    tableHead.innerHTML = iter
    tableRow.appendChild(tableHead)
    iter++
    for (let i = 0; i<user.length; i++) {
        const tableD = document.createElement("td")
        tableD.innerHTML = user[i]
        tableRow.appendChild(tableD)
    }
    document.getElementById("tabella").appendChild(tableRow)
}
