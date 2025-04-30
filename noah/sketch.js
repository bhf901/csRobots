// Variables for bouncing balls
var time1 = 500;
var time2 = 1000;
var time3 = 1500;
var time4 = 2000;
var x = 20, y = 20, x1 = 20, y1 = 20, x2 = 20, y2 = 20, x3 = 20, y3 = 20;
var circle_w = 40, speed = 1;
var dir1 = 1, dir2 = 1, dir3 = 1, dir4 = 1;
var color1, color2, color3, color4;

// Variables for robot and wave
let offsetA = 0, offsetB = 0;
let button, eyeColor, doSomethingSwitch = false;
let val1, val2, val3;
let xspacing = 12, w, theta = 0.60, amplitude = 51.0, period = 200.0, dx, yvalues;
let y_offset = 176, x_offset = 230;

function setup() {
    createCanvas(400, 400);
    colorMode(HSB, 360, 100, 100, 100);

    // Initialize colors for balls
    color1 = color(random(360), 100, 100);
    color2 = color(random(360), 100, 100);
    color3 = color(random(360), 100, 100);
    color4 = color(random(360), 100, 100);

    // Initialize sinewave variables
    w = width;
    dx = (TWO_PI / period) * xspacing;
    yvalues = new Array(floor(w / xspacing));

    // Create button
    button = createButton('click me');
    button.position(10, 10);
    button.mousePressed(changeBG);

    eyeColor = color(27, 94, 32);
}

function draw() {
    if (mouseIsPressed) {
        scale(1);
    } else {
        scale(0.5);
    }
    translate(mouseX, mouseY);
    background(val1, val3, val2);

    var currentTime = millis();

    // Ball movement and drawing logic
    moveBalls(currentTime);
    drawBalls();

    // Robot and wave drawing
    drawRobot();
    calcWave();
    renderWave();
    antennea();
}

function moveBalls(currentTime) {
    // Ball 1 (y)
    if (currentTime > time1) {
        if (y < height - circle_w / 2 && dir1 == 1) {
            y += speed;
        } else if (y >= height - circle_w / 2 && dir1 == 1) {
            dir1 = -1;
            color1 = color(random(360), 100, 100);
        }
        if (y > 20 && dir1 == -1) {
            y -= speed;
        } else if (y <= 20 && dir1 == -1) {
            dir1 = 1;
        }
    }

    // Ball 2 (y1)
    if (currentTime > time2) {
        if (y1 < height - circle_w / 2 && dir2 == 1) {
            y1 += speed + 1;
        } else if (y1 >= height - circle_w / 2 && dir2 == 1) {
            dir2 = -1;
            color2 = color(random(360), 100, 100);
        }
        if (y1 > 20 && dir2 == -1) {
            y1 -= speed + 1;
        } else if (y1 <= 20 && dir2 == -1) {
            dir2 = 1;
        }
    }

    // Ball 3 (y2)
    if (currentTime > time3) {
        if (y2 < height - circle_w / 2 && dir3 == 1) {
            y2 += speed + 2;
        } else if (y2 >= height - circle_w / 2 && dir3 == 1) {
            dir3 = -1;
            color3 = color(random(360), 100, 100);
        }
        if (y2 > 20 && dir3 == -1) {
            y2 -= speed + 2;
        } else if (y2 <= 20 && dir3 == -1) {
            dir3 = 1;
        }
    }

    // Ball 4 (y3)
    if (currentTime > time4) {
        if (y3 < height - circle_w / 2 && dir4 == 1) {
            y3 += speed + 3;
        } else if (y3 >= height - circle_w / 2 && dir4 == 1) {
            dir4 = -1;
            color4 = color(random(360), 100, 100);
        }
        if (y3 > 20 && dir4 == -1) {
            y3 -= speed + 3;
        } else if (y3 <= 20 && dir4 == -1) {
            dir4 = 1;
        }
    }
}

function drawBalls() {
    fill(color1);
    ellipse(x, y, circle_w, circle_w);
    fill(color2);
    ellipse(x1 + 40, y1, circle_w, circle_w);
    fill(color3);
    ellipse(x2 + 80, y2, circle_w, circle_w);
    fill(color4);
    ellipse(x3 + 120, y3, circle_w, circle_w);
}

function antennea() {
    // Antennae01
    strokeWeight(10);
    stroke(245, 149, 66);
    line(96, 65 + y_offset, 100, 65 + y_offset);

    strokeWeight(6);
    line(98, y_offset, 98, 65 + y_offset);

    strokeWeight(2);
    fill(245, 236, 66);
    ellipse(98, y_offset - 6, 15, 15);

    // Antennae02
    strokeWeight(10);
    stroke(245, 149, 66);
    line(100 + x_offset, 65 + y_offset, 105 + x_offset, 65 + y_offset);

    strokeWeight(5);
    line(102.5 + x_offset, y_offset, 102.5 + x_offset, 65 + y_offset);

    strokeWeight(2);
    fill(245, 236, 66);
    ellipse(102.5 + x_offset, y_offset - 6, 15, 15);
}

function drawRobot() {
    // Antennae
    strokeWeight(10);
    stroke("#FF5722");
    line(200 + offsetA, 65 + offsetB, 200 + offsetA, 87 + offsetB);

    fill("#FF9800");
    noStroke();
    ellipse(180 + offsetA, 65 + offsetB, 32, 20);
    ellipse(220 + offsetA, 65 + offsetB, 32, 20);

    // Head
    fill("#4CAF50");
    rect(127 + offsetA, 87 + offsetB, 145, 75, 10);
    fill("#8BC34A");
    stroke("#388E3C");
    rect(143 + offsetA, 94 + offsetB, 115, 60, 10);

    // Eyes
    fill(eyeColor);
    noStroke();
    ellipse(165 + offsetA, 125 + offsetB, 20, 20);

    // Body
    fill("#2196F3");
    square(135 + offsetA, 170 + offsetB, 130, 6);

    fill("#1976D2");
    rect(142 + offsetA, 195 + offsetB, 118, 63, 7);

    noStroke();
    ellipse(245 + offsetA, 187 + offsetB, 9, 9);
    ellipse(235 + offsetA, 187 + offsetB, 5, 5);

    // Inner triangles
    fill("#FFCDD2");
    triangle(150 + offsetA, 205 + offsetB, 180 + offsetA, 205 + offsetB, 165 + offsetA, 228 + offsetB);
    fill("#F8BBD0");
    triangle(185 + offsetA, 205 + offsetB, 215 + offsetA, 205 + offsetB, 200 + offsetA, 228 + offsetB);
    fill("#E1BEE7");
    triangle(220 + offsetA, 205 + offsetB, 250 + offsetA, 205 + offsetB, 235 + offsetA, 228 + offsetB);

    // Bottom row
    fill("#C5CAE9");
    triangle(182 + offsetA, 210 + offsetB, 166 + offsetA, 235 + offsetB, 200 + offsetA, 235 + offsetB);
    fill("#BBDEFB");
    triangle(218 + offsetA, 210 + offsetB, 205 + offsetA, 235 + offsetB, 233 + offsetA, 235 + offsetB);

    fill("#0D47A1");
    rect(150 + offsetA, 275 + offsetB, 100, 4, 10);

    // Arms
    fill("#388E3C");
    rect(105 + offsetA, 175 + offsetB, 25, 120, 8);
    rect(270 + offsetA, 175 + offsetB, 25, 120, 8);

    // Dark shadow
    fill("#311B92");
    rect(120 + offsetA, 305 + offsetB, 160, 35, 8);

    // Second layer
    fill("#673AB7");
    rect(125 + offsetA, 307 + offsetB, 150, 30, 8);

    // Yellow shadow
    fill("#FFEB3B");
    rect(133 + offsetA, 311 + offsetB, 135, 23, 8);

    // Inner rectangle
    fill("#FFC107");
    rect(135 + offsetA, 313 + offsetB, 130, 19, 8);

    // Inner circles
    fill(val1, val2, val3);
    ellipse(170 + offsetA, 322 + offsetB, 15, 15);
    ellipse(190 + offsetA, 322 + offsetB, 15, 15);
    ellipse(210 + offsetA, 322 + offsetB, 15, 15);
    ellipse(230 + offsetA, 322 + offsetB, 15, 15);

    push();
    strokeWeight(4);
    stroke(255);
    for (var x3 = 350; x3 <= 360; x3 += 30) {
        for (var y3 = 150; y3 <= 160; y3 += 30) {
            fill(random(255), random(255), random(255));
            ellipse(x3 - 184, y3 - 25, 22, 22);
        }
    }
    pop();
}

function calcWave() {
    theta += 0.04;
    let x = theta;
    for (let i = 9; i < yvalues.length - 5; i++) {
        yvalues[i] = sin(x) * amplitude;
        x += dx;
    }
}

function renderWave() {
    noStroke();
    fill(255);
    for (let x = 0; x < yvalues.length; x++) {
        ellipse(x * xspacing, height / 2 + yvalues[x], 4, 16);
    }
}

function changeBG() {
    val1 = random(255);
    val2 = random(255);
    val3 = random(255);
    background(val1, val3, val2);
    eyeColor = color(val2, val1, val3);
}
