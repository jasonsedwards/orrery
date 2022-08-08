function main() {
    draw();
    /*let neptune = new Planet("Neptune", 2, 10, 16);
    //let alertText = `${neptune.getName()} takes ${neptune.getDistanceFromSun} days to orbit the sun.`;
    let c = getCanvas('orrery');
    c.font = "30px Arial";
    c.fillText("alertText", 10, 50);*/
}
function draw() {
    let c = getCanvas('orrery');
    c.beginPath();
    c.arc(100, 75, 50, 0, 2 * Math.PI);
    c.stroke();
}

function getCanvas(name){
    let canvas = document.getElementById(name);
    let ctx = canvas.getContext("2d");
    return ctx;
}