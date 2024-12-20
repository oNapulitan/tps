let result = []
let iter = 1
function readFile(input) {
    let file = input.files[0];
  
    let reader = new FileReader();
  
    reader.readAsText(file);
  
    reader.onload = function() {
      result = reader.result;
    };
  
    reader.onerror = function() {
      alert(reader.error);
    };
}

function table() {
    let csv = result.split("\n")
    let categorie = csv[0].split(",")
    for (let i in categorie) {
        let th = document.createElement("th")
        th.style.cssText = "color: #0bf7ff;"
        th.innerHTML = categorie[i].replaceAll('"', '')
        document.getElementById("intab").append(th)
    }
    for (let i in csv) {
        if (i!=0) {
            const data = csv[i].replaceAll('"', '')
            let effData = csv[i].split(",")
            const tableRow = document.createElement("tr")
            const tableHead = document.createElement("th")
            tableHead.innerHTML = iter
            tableRow.appendChild(tableHead)
            iter++
            for (let i = 0; i<effData.length; i++) {
                const tableD = document.createElement("td")
                tableD.innerHTML = effData[i].replaceAll('"', '')
                tableRow.appendChild(tableD)
            }
            document.getElementById("tabella").appendChild(tableRow)
        }
    }
}
