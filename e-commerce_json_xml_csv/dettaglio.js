window.onload = function() {
    var carrelloGre = localStorage.getItem("carrello");
    var n = 0;
    if (carrelloGre != null) { 
        n = JSON.parse(carrelloGre).length; 
    }
    var el = document.getElementById("cart-count");
    if (el != null) { 
        el.innerText = n; 
    }

    var dati = localStorage.getItem("prodotto_corrente");
    
    if (dati != null) {
        var p = JSON.parse(dati);
        var divContenuto = document.getElementById("contenuto");

        var img = p.immagine || p.image;
        var tit = p.titolo || p.title;
        var prz = p.prezzo || p.price;

        var html = "";
            
        html += "<div class='foto'>";
        html += "<img src='" + img + "' alt='" + tit + "'>";
        html += "</div>";

        html += "<div class='testi'>";
        html += "<h2>" + tit + "</h2>";
        html += "<div class='prezzo'>" + prz + " €</div>";
        html += "<p class='info'>Orologio di alta qualità realizzato con materiali premium e finiture curate nei minimi dettagli. Dotato di un design raffinato e senza tempo, unisce eleganza e funzionalità, rendendolo adatto sia all’uso quotidiano che alle occasioni speciali. Il movimento preciso e affidabile garantisce prestazioni elevate, mentre il comfort al polso assicura un’esperienza di utilizzo eccellente. Un accessorio iconico pensato per chi apprezza stile, precisione e prestigio.</p>";
        html += "</div>";

        divContenuto.innerHTML = html;
    } else {
        document.getElementById("contenuto").innerHTML = "<h2>Dati non trovati.</h2>";
    }
};