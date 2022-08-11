
function main() {
    const c = initCanvas();

    generateStars(c);

    for (let p in planets) {
        drawOrbit(c, planets[p]);
        drawPlanet(c, planets[p]);
    }
    infoTable();
}

function initCanvas () {
    const canvas = document.getElementById(properties.canvasName);
    canvas.width = properties.canvasWidth;
    canvas.height = properties.canvasHeight;
    var ctx = canvas.getContext(properties.canvasContext);
    return ctx;
}

function generateStars(c) {
    var x, y = Math.random();
    var dia = c.canvas.clientWidth;

    for(; y < dia; y++) {
        for(x = Math.random(); x < dia; x++) {
            c.fillStyle = "white";
            c.fillRect(
                (Math.floor(Math.random() * c.canvas.clientWidth)*(200* Math.random())), 
                (Math.floor(Math.random() * c.canvas.clientHeight)*(150* Math.random())), 1, 1);
        }
    }
}

function drawArc(c, x, y, r, sAngle, eAngle, colour, name, textColour) {
    c.fillStyle = colour;
    c.beginPath();
    c.arc(x, y, r, sAngle, eAngle * Math.PI);
    c.fill();
    c.font = '20pt';
    c.fillStyle = textColour;
    c.textAlign = 'center';
    c.fillText(name, x, y);

}

function drawPlanet(c, planet) {
    drawArc(c, planet[4], planet[5], planet[6], planet[7], planet[8], planet[9], planet[0], planet[10]);
}

function drawOrbit(c, planet) {
    if (planet[0] !='Sun') {
        c.beginPath();
        c.arc(planets.sun[4], planets.sun[5], planets.sun[6]+((planet[5]-planet[4])-planet[6])-(planets.sun[6]-planet[6]), 0, 2 * Math.PI);
        c.lineWidth = 1;
        c.strokeStyle = "white";
        c.stroke();
    }
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