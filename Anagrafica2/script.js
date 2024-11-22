document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formDati');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const cognome = document.getElementById('cognome').value;
        const indirizzo = document.getElementById('indirizzo').value;
        const citta = document.getElementById('citta').value;
        const email = document.getElementById('email').value;

        const nuovoUtente = { nome, cognome, indirizzo, citta, email };

        
        let utenti = JSON.parse(localStorage.getItem('utenti')) || [];

        utenti.push(nuovoUtente);

    
        localStorage.setItem('utenti', JSON.stringify(utenti));

  
        form.reset();
    });
});