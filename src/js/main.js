
function main() {
    generateStars();
    for (let p in planets) {
        drawPlanet(planets[p]);
    }
    infoTable();
}

function drawArc(x, y, r, sAngle, eAngle, colour, name) {
    const canvas = document.getElementById(properties.canvasName);
    var ctx = canvas.getContext(properties.canvasContext);
    ctx.fillStyle = colour;
    ctx.beginPath();
    ctx.arc(x, y, r, sAngle, eAngle * Math.PI);
    ctx.fill();
    ctx.font = '20pt';
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.fillText(name, x, y+4);

}

function drawPlanet(planet) {
    drawArc(planet[4], planet[5], planet[6], planet[7], planet[8], planet[9], planet[0]);
    if (planet[0] != "Sun") {
        drawOrbit(planet[4], planet[5], ((planet[6])/(planets.sun[6])), planet[7], planet[8]);
    }
}

function drawOrbit(x, y, r, sAngle, eAngle) {
    const canvas = document.getElementById(properties.canvasName);
    var ctx = canvas.getContext(properties.canvasContext);
    ctx.beginPath();
    ctx.arc(x, y, r, sAngle, eAngle * Math.PI);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "white";
    ctx.stroke();

}

function infoTable() {
    var info = document.getElementById('info-table');
    info.innerHTML += `
    <tr>
        <th>Planet</th>
        <th>Size</th>
        <th>Distance from Sun</th>
        <th>Time for orbit</th>
        <th>Colour</th>
    </tr>
    `;
    for (let p in planets) {
        info.innerHTML += 
        "<tr>"+
           "<td>"+planets[p][0]+"</td>" +
           "<td>"+planets[p][1]+"</td>" +
           "<td>"+planets[p][2]+"</td>" +
           "<td>"+planets[p][3]+"</td>" +
           "<td>"+planets[p][9]+"</td>" + 
        "</tr>";
    }
}

function generateStars() {
    const canvas = document.getElementById(properties.canvasName);
    var ctx = canvas.getContext(properties.canvasContext);
    var x, y = Math.random();
    var dia = canvas.width;

    for(; y < dia; y++) {                           // walk x/y grid
        for(x = Math.random(); x < dia; x++) {
            ctx.fillStyle = "white";          // set random color
            ctx.fillRect((Math.floor(Math.random() * canvas.width)*(200* Math.random())), (Math.floor(Math.random() * canvas.height)*(150* Math.random())), 1, 1);               // draw a pixel
        }
    }
}