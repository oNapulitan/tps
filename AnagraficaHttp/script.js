const tbody = document.getElementById("body");
const selectFilter = document.getElementById("filter");
let studenti = [];


function mostraStudenti(lista) {
  tbody.innerHTML = ""; 
  tbody.append(document.createElement("br"))
  lista.forEach(s => {
    const riga = document.createElement("tr");
    riga.innerHTML = `<td>${s.nome}</td><td>${s.cognome}</td><td>${s.data_di_nascita}</td>`;
    tbody.appendChild(riga);
  });
}

function filtraPerLettera(lettera) {
  if (!lettera) {
    mostraStudenti(studenti);
    return;
  }
  const filtrati = studenti.filter(s =>
    s.cognome.toUpperCase().startsWith(lettera.toUpperCase())
  );
  mostraStudenti(filtrati);
}



//Crea una richiesta HTTP per scaricare il file studenti.json.

//Quando la risposta arriva (readyState === 4 e status === 200):

//Converte (parse) il testo JSON in un array di oggetti JavaScript.

//Lo salva in studenti

const xhr = new XMLHttpRequest();
xhr.open("GET", "studenti.json", true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      try {
        studenti = JSON.parse(xhr.responseText);
        mostraStudenti(studenti);
      } catch (err) {
        console.error("Errore nel parsing del JSON:", err);
      }
    } else {
      console.error("Errore nel caricamento:", xhr.status);
    }
  }
};
xhr.send();


selectFilter.addEventListener("change", e => {
  filtraPerLettera(e.target.value);
});

function mostraMaggiorenni() {
    console.log("Filtra maggiorenni")
  }


