document.addEventListener('DOMContentLoaded', function () {

    const utenti = JSON.parse(localStorage.getItem('utenti')) || [];

    const tabella = document.getElementById('tabellaDati').getElementsByTagName('tbody')[0];

    
    utenti.forEach((utente, index) => {
        const riga = tabella.insertRow();
        const cellaIndice = riga.insertCell(0);
        const cellaNome = riga.insertCell(1);
        const cellaCognome = riga.insertCell(2);
        const cellaIndirizzo = riga.insertCell(3);
        const cellaCitta = riga.insertCell(4);
        const cellaEmail = riga.insertCell(5);

      
        cellaIndice.innerText = index + 1;
        cellaNome.innerText = utente.nome;
        cellaCognome.innerText = utente.cognome;
        cellaIndirizzo.innerText = utente.indirizzo;
        cellaCitta.innerText = utente.citta;
        cellaEmail.innerText = utente.email;
    });
});