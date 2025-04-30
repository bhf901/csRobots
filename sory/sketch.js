let ante_x = 0;
let ante_y = 0;
var angle1 = 0.0;
var angle2 = 90.0;
let dx = 195;
let dy = 75;
let x = 1000;
let y = 50;

let scaleFactor = 1;

function setup() {
    createCanvas(400, 400);
    background(0);
//   button = createButton("Party");
//   button.position(0, 0);

//   // Circle Button
//   circleButton = createButton("Spots");
//   circleButton.position(50, 0);
//   circleButton.mousePressed(drawCircle);
}

function draw() {
    // button.mousePressed(changeBG);
    // circleButton.mousePressed(drawCircle)

    translate(mouseX, y);

    if (mouseIsPressed) {
        background(255, 100, 100)
        scale(1.0);
    } else {
        background(100, 255, 100)
        scale(0.6);  // 60% size when mouse is pressed
    }

    push();
    // Calculate center offsets
    let centerX = width / 2;
    let centerY = height / 2;

    let movement = sin(millis()/ 500) * 50; //kinda like a sine wave and uses millis
    dx = 195 + movement;

    // Antenna
    ellipse(dx, dy, 0.5, 30);
    ellipse(dx, dy, 10, 10);
    ellipse(dx, dy, 30, 10);
    pop();

    // Tire
    rect(180, 240, 40, 50, 20);
    rect(125, 265, 150, 60, 20);
    fill(245, 245, 29);
    rect(130, 270, 140, 50, 10);
    fill(167, 115, 207);
    rect(137, 275, 127, 40, 10);
    fill(120, 49, 158);
    ellipse(150, 295, 20, 20);
    ellipse(175, 295, 20, 20);
    ellipse(200, 295, 20, 20);
    ellipse(225, 295, 20, 20);
    ellipse(250, 295, 20, 20);

    // Face
    fill(206, 171, 224);
    strokeWeight(0);
    rect(centerX - 60, centerY - 114, 120, 60, 9);
    strokeWeight(7);
    rect(centerX - 50, centerY - 105, 100, 40, 7);

    // Eyes
    stroke(0);
    strokeWeight(1);
    fill(0);
    ellipse(170, 115, 25, 25);
    ellipse(225, 115, 20, 20);

    fill(186, 3, 252);
    arc(170, 115, 25, 25, angle1, angle2);
    arc(225, 115, 20, 20, angle1, angle2);
    angle1 += 0.05;
    angle2 += 0.05;

    // Body #1
    fill(167, 115, 207);
    stroke(120, 49, 158);
    strokeWeight(2);
    rect(centerX - 50, centerY - 50, 100, 100, 20);
    fill(120, 49, 158);
    rect(centerX - 45, centerY - 30, 90, 50, 9);
    ellipse(200, 230, 75, 0.5);

    // Buttons
    fill(230, 150, 100);
    triangle(
        width / 2 - 12.5 + 25,
        height / 2 - 18.33 + 25,
        width / 2 - 12.5 + 12.5,
        height / 2 - 18.33 + 5,
        width / 2 - 12.5 + 0,
        height / 2 - 18.33 + 25
    );

    // Arms
    fill(120, 49, 158);
    rect(centerX - 73, centerY - 40, 17, 90, 7); // Left arm
    rect(centerX + 56, centerY - 40, 17, 90, 7); // Right arm
}

// Background
function changeBG() {
    let val1 = random(255);
    let val2 = random(255);
    let val3 = random(255);
    background(val1, val2, val3);
}

// Draw circle
function drawCircle() {
    fill(random(255), random(255), random(255));
    ellipse(random(10, width - 50), random(50, height - 50), 50, 50);
}