
function main() {
    for (let p in planets) {
        drawPlanet(planets[p]);
    }
    //let neptune = new Planet("Neptune", 2, 10, 16);
    let c = getCanvas('orrery');
    //c.font = "30px Arial";
    //c.fillText(`${neptune.getName()} is ${neptune.getDistanceFromSun()} AU distance from the sun`, 10, 50);
}

function drawArc(x, y, r, sAngle, eAngle, colour, name) {
    const c = getCanvas('orrery');
    c.fillStyle = colour;
    c.beginPath();
    c.arc(x, y, r, sAngle, eAngle * Math.PI);
    c.fill();
    c.font = '20pt';
    c.fillStyle = 'black';
    c.textAlign = 'center';
    c.fillText(name, x, y+4);

}

function getCanvas(name) {
    const canvas = document.getElementById(name);
    const ctx = canvas.getContext("2d");
    return ctx;
}

function drawPlanet(planet) {
    drawArc(planet[4], planet[5], planet[6], planet[7], planet[8], planet[9], planet[0]);
    if (planet[0] != "Sun") {
        drawOrbit(planet[4], planet[5], ((planet[6])/(planets.sun[6])), planet[7], planet[8]);
    }
}

function drawOrbit(x, y, r, sAngle, eAngle) {
    const c = getCanvas('orrery');
    c.beginPath();
    c.arc(x, y, r, sAngle, eAngle * Math.PI);
    c.lineWidth = 2;
    c.strokeStyle = "white";
    c.stroke();

}