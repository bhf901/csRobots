let bodyColor;
let armColor;
let headX = 165;
let isHeadCentered = false;
let scaleFactor = 1;

let headMoveTime = 3000;
let lightChangeTime = 1000;
let colorChangeTime = 5000;
let armChangeTime = 4000;

let lastLightChange = 0;
let lastColorChange = 0;
let lastArmChange = 0;

let lightColors = [];

function setup() {
    createCanvas(400, 400);
    colorMode(HSB, 360, 100, 100);

    bodyColor = color(150, 100, 100);
    armColor = color(200, 100, 100);
    lightColors = [
        color(300, 100, 100),
        color(240, 100, 100),
        color(60, 100, 100),
    ];

    let colorButton = createButton("Change Body Color");
    colorButton.position(10, height + 10);
    colorButton.mousePressed(changeBodyColor);

    let centerHeadButton = createButton("Center Head");
    centerHeadButton.position(150, height + 10);
    centerHeadButton.mousePressed(centerHead);
}

function draw() {
    background(220);
    let currentTime = millis();

    if (currentTime - lastColorChange > colorChangeTime) {
        changeBodyColor();
        lastColorChange = currentTime;
    }

    if (currentTime - lastArmChange > armChangeTime) {
        changeArmColor();
        lastArmChange = currentTime;
    }

    if (currentTime > headMoveTime) {
        headX = 150 + sin(currentTime * 0.002) * 30;
    }

    push();
    translate(width / 2, height / 2);
    scale(scaleFactor);
    translate(-width / 2, -height / 2);

    drawRobot();

    if (currentTime - lastLightChange > lightChangeTime) {
        for (let i = 0; i < lightColors.length; i++) {
            lightColors[i] = color(random(360), 100, 100);
        }
        lastLightChange = currentTime;
    }

    drawFlashingLights();
    pop();
}

function drawRobot() {
    fill(bodyColor);
    rect(150, 200, 100, 150);
    rect(170, 350, 20, 50);
    rect(210, 350, 20, 50);

    if (!isHeadCentered) {
        headX = constrain(mouseX, 125, 275);
    }

    fill(200, 100, 100);
    rect(headX, 140, 75, 75, 10);

    // Eyes
    fill(0);
    ellipse(headX + 20, 160, 10, 10);
    ellipse(headX + 55, 160, 10, 10);

    // Antenna
    stroke(0);
    line(headX + 37.5, 140, headX + 37.5, 110);

    // Robot Arms (Now with Color!)
    fill(armColor);
    rect(110, 230, 40, 15);
    rect(250, 230, 40, 15);
}

// Draw flashing lights
function drawFlashingLights() {
    push();
    strokeWeight(4);
    stroke(255);

    let startX = 170;
    let startY = 260;
    for (let i = 0; i < lightColors.length; i++) {
        fill(lightColors[i]);
        ellipse(startX + i * 30, startY, 25, 25);
    }
    pop();
}

function changeBodyColor() {
    bodyColor = color(random(360), 100, 100);
}

function changeArmColor() {
    armColor = color(random(360), 100, 100);
}

function centerHead() {
    headX = 165;
    isHeadCentered = true;
}

function mouseMoved() {
    isHeadCentered = false;
}

function mousePressed() {
    scaleFactor = 1.2;
}

function mouseReleased() {
    scaleFactor = 1;
}
