let factory;
let bgColor;
let bgButton;

// Head position offsets
let x_h_offset = 10;
let y_h_offset = 60;

function preload() {
    // You can replace this with your local file if running in the p5 Web Editor:
    // factory = loadImage("fact_675_461.png");
    factory = loadImage("https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png");
}

function setup() {
    createCanvas(675, 461);

    // Default background color (shown when no image is loaded or user changes it)
    bgColor = color(75);

    // Button to change background color
    bgButton = createButton("Change Background");
    bgButton.position(10, 10);
    bgButton.mousePressed(changeBackground);
}

function draw() {
    if (factory) {
        background(factory);
    } else {
        background(bgColor);
    }

    drawFlashingLights(130, 160);
    drawFlashingLights(230, 160);

    drawRobot();
}

function changeBackground() {
    bgColor = color(random(255), random(255), random(255));
}

// Lights animation
function drawFlashingLights(xOffset, yOffset) {
    push();
    strokeWeight(4);
    stroke(255);
    for (let x3 = xOffset; x3 <= xOffset + 30; x3 += 30) {
        for (let y3 = yOffset; y3 <= yOffset + 30; y3 += 30) {
            fill(random(255), 0, random(255));
            ellipse(x3, y3 + 20, 25, 25);
        }
    }
    pop();
}

// Robot Drawing
function drawRobot() {
    // Antennae
    stroke(0);
    strokeWeight(10);
    line(200 + x_h_offset, 105 + y_h_offset, 200 + x_h_offset, 60 + y_h_offset);

    strokeWeight(5);
    line(200 + x_h_offset, 105 + y_h_offset, 200 + x_h_offset, 60 + y_h_offset);

    strokeWeight(2);
    fill(255, 0, 255);
    ellipse(200 + x_h_offset, 50 + y_h_offset, 15, 15);

    // Head
    stroke(0);
    strokeWeight(10);
    fill(0, 250, 250);
    rect(100 + x_h_offset, 100 + y_h_offset, 200, 200, 20);

    // Nose
    fill(100, 0, 200);
    strokeWeight(10);
    triangle(
        190 + x_h_offset,
        230 + y_h_offset,
        200 + x_h_offset,
        220 + y_h_offset,
        210 + x_h_offset,
        230 + y_h_offset
    );

    // Eyes
    fill(252, 61, 57);
    ellipse(145 + x_h_offset, 150 + y_h_offset, 20, 20);
    ellipse(245 + x_h_offset, 150 + y_h_offset, 20, 20);

    // Arms
    stroke(255, 192, 208);
    strokeWeight(10);
    line(100 + x_h_offset, 200 + y_h_offset, 50 + x_h_offset, 200 + y_h_offset);
    line(300 + x_h_offset, 200 + y_h_offset, 350 + x_h_offset, 200 + y_h_offset);

    // Mouth
    stroke(0);
    fill(0, 250, 250);
    arc(200 + x_h_offset, 250 + y_h_offset, 50, 20, TWO_PI, PI);
}