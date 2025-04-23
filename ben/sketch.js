let x_h_offset = 0;
let y_h_offset = 0;
let r = 70;
let g = 70;
let b = 70;
let backgroundr = 255;
let backgroundg = 255;
let backgroundb = 255;
let move = false;
let fps = 1;
let backgroundModePrompted = false;
let backgroundMode;
let angle1 = 0;
let angle2 = 90;
let xspacing = 12;
let w;
let theta = 0.60;
let amplitude = 51.0;
let period = 200.0;
let dx;
let yvalues;
let y_offset = 176;
let x_offset = 230;
const time1 = 1000; //1000 millis = 1 second
const time2 = 2000;
const time3 = 3000;
const time4 = 4000

let ball1r = 250;
let ball2r = 250;
let ball3r = 250;
let ball4r = 250;

let ball1g = 178;
let ball2g = 178;
let ball3g = 178;
let ball4g = 178;

let ball1b = 83;
let ball2b = 83;
let ball3b = 83;
let ball4b = 83;

let y1 = 11;
let y2 = 11;
let y3 = 11;
let y4 = 11;

let x1 = 320;
let x2 = 340;
let x3 = 360;
let x4 = 380;

let down1 = false;
let down2 = false;
let down3 = false;
let down4 = false;

const circle_w = 20;

function releaseBackground() {
    if (backgroundModePrompted === false) {
        backgroundMode = prompt(
            'For switching the background color, do you want to use manual mode or random mode? Type either "manual" or "random".'
        );

        backgroundMode = backgroundMode.toLowerCase();

        if (backgroundMode === "manual") {
            alert("Manual mode selected.");
        } else if (backgroundMode === "random") {
            alert("Random mode selected.");
        } else {
            alert("Invalid input. Defaulting to random mode.");
            backgroundMode = "random";
        }

        backgroundModePrompted = true;
    }
    if (backgroundMode === "random") {
        backgroundr = Math.floor(Math.random() * 256);
        backgroundg = Math.floor(Math.random() * 256);
        backgroundb = Math.floor(Math.random() * 256);
        console.log(
            `Background: rgb(${backgroundr}, ${backgroundg}, ${backgroundb})`
        );
    } else if (backgroundMode === "manual") {
        manualr = Number(prompt("Enter R value as a number."));
        manualg = Number(prompt("Enter G value as a number."));
        manualb = Number(prompt("Enter B value as a number."));
        if (
            0 <= manualr <= 255 &&
            0 <= manualg <= 255 &&
            0 <= manualb <= 255 &&
            Number.isFinite(manualr) &&
            Number.isFinite(manualg) &&
            Number.isFinite(manualb)
        ) {
            backgroundr = manualr;
            backgroundg = manualg;
            backgroundb = manualb;
            console.log(
                `Background: rgb(${backgroundr}, ${backgroundg}, ${backgroundb})`
            );
            alert(
                `Background color set to rgb(${backgroundr}, ${backgroundg}, ${backgroundb}).`
            );
        } else {
            alert("Invalid number, defaulting to white.");
            backgroundr = 255;
            backgroundg = 255;
            backgroundb = 255;
            console.log(
                `Background: rgb(${backgroundr}, ${backgroundg}, ${backgroundb})`
            );
        }
    }
}

function iWantToMove() {
    if (move === false) {
        fps = 60;
        move = true;
        console.log("Mobility on.");
        document.getElementById("onoroff").textContent = "Mobility On";
    } else if (move === true) {
        fps = 1;
        move = false;
        console.log("Mobility off.");
        document.getElementById("onoroff").textContent = "Mobility Off";
    }
}

function nameRobot() {
    let robotName = prompt(
        'What would you like to name the robot? Type the name or "none" for no name.'
    );
    if (robotName && robotName !== "none") {
        document.getElementById("title").textContent = robotName;
        alert(`Name successfully changed to ${robotName}.`);
    } else if (robotName === "none") {
        alert("Name removed.");
        document.getElementById("title").textContent = "";
    } else {
        alert("Name change canceled.");
    }
}

function setup() {
    createCanvas(400, 400);
    document.getElementById("onoroff").textContent = "Mobility Off";
    //keeps mobility on from start, i'll change this later
    iWantToMove();
    w = 400;
    dx = (TWO_PI / period) * xspacing;
    yvalues = new Array(floor(w / xspacing));
}

function draw() {
    frameRate(fps);
    angleMode(DEGREES);
    background(backgroundr, backgroundg, backgroundb);
    fill(255);
    stroke(0);
    strokeWeight(1);

    //control panel
    push();
    stroke(70, 70, 70);
    fill(0);
    rect(0, 0, 100, 100, 10);
    rect(300, 0, 100, 100, 10);
    fill("#FCEF85");
    noStroke();
    ellipse(50, 50, 40, 40);

    //radar sweep
    // need arc code here
    fill(255, 11, 0, 60);
    arc(50, 50, 40, 40, angle1, angle2);

    angle1 += 1;
    angle2 += 1;
    pop();

    //body
    ellipse(200 + x_h_offset, 250 + y_h_offset, 250, 250);

    push();
    noStroke();
    for (let y = 200; y <= 280; y += 40) {
        for (let x = 160; x <= 240; x += 40) {
            fill(random(255), random(255), random(255));
            ellipse(x + x_h_offset, y + y_h_offset, 40, 40);
        }
    }
    pop();

    //head
    arc(200 + x_h_offset, 125 + y_h_offset, 200, 200, 180, 0);
    fill(188, 107, 41);
    rect(110 + x_h_offset, 115 + y_h_offset, 10, 10);
    rect(130 + x_h_offset, 115 + y_h_offset, 10, 10);
    rect(150 + x_h_offset, 115 + y_h_offset, 10, 10);
    rect(240 + x_h_offset, 115 + y_h_offset, 10, 10);
    rect(260 + x_h_offset, 115 + y_h_offset, 10, 10);
    rect(280 + x_h_offset, 115 + y_h_offset, 10, 10);
    beginShape();
    vertex(100 + x_h_offset, 125 + y_h_offset);
    vertex(125 + x_h_offset, 150 + y_h_offset);
    vertex(275 + x_h_offset, 150 + y_h_offset);
    vertex(300 + x_h_offset, 125 + y_h_offset);
    endShape(CLOSE);
    ellipse(200 + x_h_offset, 37.5 + y_h_offset, 75, 25);

    //eyes
    fill(0);
    ellipse(185 + x_h_offset, 75 + y_h_offset, 40, 40);
    push();
    fill(100, 0, 0);
    ellipse(185 + x_h_offset, 75 + y_h_offset, 10, 10);
    pop();
    ellipse(215 + x_h_offset, 100 + y_h_offset, 20, 20);
    push();
    fill(100, 0, 0);
    ellipse(215 + x_h_offset, 100 + y_h_offset, 5, 5);
    pop();
    stroke(0);
    strokeWeight(3);
    fill(r, g, b);
    ellipse(185 + x_h_offset, 115 + y_h_offset, 10, 10);

    //body markings
    strokeWeight(1);
    stroke(0);
    fill(215, 120, 39);
    rect(100 + x_h_offset, 230 + y_h_offset, 50, 37.5);
    rect(155 + x_h_offset, 175 + y_h_offset, 37.5, 50);
    rect(200 + x_h_offset, 230 + y_h_offset, 50, 37.5);
    rect(155 + x_h_offset, 275 + y_h_offset, 37.5, 50);
    stroke(0);
    fill(150, 161, 164);
    ellipse(175 + x_h_offset, 250 + y_h_offset, 75, 75);
    fill(255, 255, 255, 0);
    strokeWeight(25);
    stroke(215, 120, 39);
    ellipse(175 + x_h_offset, 250 + y_h_offset, 150, 150);

    if (r === 255 && g === 255 && b === 255) {
        r = 70;
        g = 70;
        b = 70;
    } else if (r === 70 && g === 70 && b === 70) {
        r = 255;
        g = 255;
        b = 255;
    } else {
        console.log(
            `Invalid color detected. Incorrect values are: r = ${r}, g = ${g}, b = ${b}.`
        );
        r = 255;
        g = 255;
        b = 255;
        console.log(`Corrected to: r = ${r}, g = ${g}, b = ${b}.`);
    }
    if (keyIsPressed) {
        if (keyCode === DOWN_ARROW) {
            y_h_offset = y_h_offset + 5;
        } else if (keyCode === UP_ARROW) {
            y_h_offset = y_h_offset - 5;
        } else if (keyCode === RIGHT_ARROW) {
            x_h_offset = x_h_offset + 5;
        } else if (keyCode === LEFT_ARROW) {
            x_h_offset = x_h_offset - 5;
        } else {
            //nothing
        }
    }

    calcWave();
    renderWave();
    antennea();

    // robot status panel
    push();
    var currentTime = millis();
    fill('#FAB253');

    if (currentTime > time1 && down1 === false) {
        //code to move the ball down goes here
        y1 += 1;
    } else if (currentTime > time1 && down1 === true) {
        y1 -= 1;
    }

    if (currentTime > time2 && down2 === false) {
        //code to move the ball down goes here
        y2 += 5;
    } else if (currentTime > time2 && down2 === true) {
        y2 -= 5;
    }

    if (currentTime > time3 && down3 === false) {
        //code to move the ball down goes here
        y3 += 4;
    } else if (currentTime > time3 && down3 === true) {
        y3 -= 4;
    }

    if (currentTime > time4 && down4 === false) {
        //code to move the ball down goes here
        y4 += 2;
    } else if (currentTime > time4 && down4 === true) {
        y4 -= 2;
    }

    if (y1 >= 100 - circle_w / 2) {
        down1 = true;
        ball1r = random(255);
        ball1g = random(255);
        ball1b = random(255);
    }

    if (y2 >= 100 - circle_w / 2) {
        down2 = true;
        ball2r = random(255);
        ball2g = random(255);
        ball2b = random(255);
    }

    if (y3 >= 100 - circle_w / 2) {
        down3 = true;
        ball3r = random(255);
        ball3g = random(255);
        ball3b = random(255);
    }

    if (y4 >= 100 - circle_w / 2) {
        down4 = true;
        ball4r = random(255);
        ball4g = random(255);
        ball4b = random(255);
    }


    if (y1 <= 0 + circle_w / 2) {
        down1 = false;
        ball1r = random(255);
        ball1g = random(255);
        ball1b = random(255);
    }

    if (y2 <= 0 + circle_w / 2) {
        down2 = false;
        ball2r = random(255);
        ball2g = random(255);
        ball2b = random(255);
    }

    if (y3 <= 0 + circle_w / 2) {
        down3 = false;
        ball3r = random(255);
        ball3g = random(255);
        ball3b = random(255);
    }

    if (y4 <= 0 + circle_w / 2) {
        down4 = false;
        ball4r = random(255);
        ball4g = random(255);
        ball4b = random(255);
    }

    fill(ball1r, ball1g, ball1b);
    ellipse(x1, y1, circle_w, circle_w);
    fill(ball2r, ball2g, ball2b);
    ellipse(x2, y2, circle_w, circle_w);
    fill(ball3r, ball3g, ball3b);
    ellipse(x3, y3, circle_w, circle_w);
    fill(ball4r, ball4g, ball4b);
    ellipse(x4, y4, circle_w, circle_w);
    pop();
}

function mousePressed() {
    if (mouseX > 0 && mouseX < 380 && mouseY > 400 && mouseY < 450) {
    } else {
        console.log(`(${Math.floor(mouseX)}, ${Math.floor(mouseY)})`);
    }
}


function antennea(){


    // Antennae01
    strokeWeight(10);
    stroke(245, 149, 66);
    line(96,65 + y_offset, 100, 65+ y_offset);

    strokeWeight(6);
    line(98, y_offset, 98, 65+ y_offset);

    strokeWeight(2);
    fill(245, 236, 66);
    ellipse(98,y_offset-6, 15, 15);
    //--------------------------------------------

    // Antennae02
    strokeWeight(10);
    stroke(245, 149, 66);
    line(100 + x_offset,65 + y_offset, 105+ x_offset, 65+ y_offset);

    strokeWeight(5);
    line(102.5 + x_offset, y_offset, 102.5 + x_offset, 65+ y_offset);

    strokeWeight(2);
    fill(245, 236, 66);
    ellipse(102.5 + x_offset, y_offset-6, 15, 15);
}

//sinewave functions
//these functions will be called in draw()
function calcWave() {
    // Increment theta (try different values for
    // 'angular velocity' here)
    theta += 0.05;

    // For every x value, calculate a y value with sine function
    let x = theta;
    for (let i = 9; i < yvalues.length-5; i++) {
        yvalues[i] = sin(x) * amplitude;
        x += dx;
    }
}


function renderWave() {
    noStroke();
    fill(0);
    // A simple way to draw the wave with an ellipse at each location
    for (let x = 0; x < yvalues.length; x++) {
        ellipse(x * xspacing, height / 2 + yvalues[x], 4, 16);
    }
}