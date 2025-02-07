let result = []

let yDivisor = 10

let dotEnable = false;

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
    draw();
}

function draw() {
        let c = document.getElementById("canva");
        var w = c.width;
        var h = c.height;
        let ctx = c.getContext("2d");
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 2;
        ctx.font = "bold 8px Verdana";
        ctx.fillStyle = "#FFE62D"
        
        ctx.moveTo(w/15, h/6);
        ctx.lineTo(w/15, h/1.1);
        
        ctx.moveTo(w/20, h/15*13);
        ctx.lineTo(w/1.05, h/15*13);

        let csv = result.split("\n")

        let lenX = Math.round(Math.sqrt(Math.abs((w/15)**2-(w/1.1)**2)))
        const divisoreX = Math.round(lenX / csv.length)

        let lenY = Math.round(Math.sqrt(Math.abs((w/12)**2-(w/1.15)**2)))
        const divisoreY = Math.round(lenY / yDivisor)

        let max = Number(csv[1][1].replaceAll('"', ''))
        
        for (let i in csv) {
            if (i!=0) {
                let effData = csv[i].split(",")

                ctx.moveTo(w/15+divisoreX*i,h/15*13)
                ctx.lineTo(w/15+divisoreX*i, h/30*27)
                ctx.fillText(effData[0].replaceAll('"', ''), w/15+divisoreX*i+2, h/30*27+2);

                if (Number(effData[1].replaceAll('"', '')) > max) {
                    max = Number(effData[1].replaceAll('"', ''))
                }
            }
        }

        let newMax = ((Number(max.toString()[0])+1) * (10**(getPow(max)-1))) 
        for (let i of Array(yDivisor).keys()) {
            ctx.moveTo(w/15, h/15*12-(divisoreY*i)/3)
            ctx.lineTo(w/15-30, h/15*12-(divisoreY*i)/3)
            ctx.fillText((newMax/yDivisor)*(i+1), w/15-50, (h/15*12-(divisoreY*i)/3)-5)
        }
        ctx.stroke()
        
        ctx.moveTo(w/15,h/1.155)

        for (let i in csv) {
            i++
            let effData = csv[i].split(",")
            ctx.lineTo(w/15+divisoreX*i, h/1.155 - 45*(Number(effData[1].replaceAll('"', '')) / (newMax/yDivisor)))
            ctx.stroke()
        }
        ctx.stroke()
    
}

function getPow(numb) {
    return(Number(numb.toString().length))
}
