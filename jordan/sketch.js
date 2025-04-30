//--------------------Global variables------------
let dx = 0; // Horizontal position of the ball
let dy = 0; // Vertical position of the ball
let dot_speed = .9; // Speed of the ball

let x = 200; // Initial head x position
let y = 100; // Initial head y position
let headSize = 100; // Size of the head

let button;
let val = 250, val1 = 200, val2 = 0; // Default background colors

let scaleFactor = 1; // Scaling factor for the robot

// New variables for the moving ball
let ballY = 20;
let ballDirection = 1;
let ballColor = 0;

function setup() {
    createCanvas(400, 400);
    button = createButton('click me');
    button.position(10, 10);
    button.mousePressed(changeBG); // Assign click function to button
    background(val, val1, val2); // Initial background color

    dx = x - 20; // Start ball between the eyes
    dy = y; // Place ball on the robot's head between the eyes

    colorMode(RGB); // Set color mode to RGB for the robot
}

function changeBG() {
    val = random(255);
    val1 = random(250);
    val2 = random(250);
    background(val, val1, val2); // Change background when button pressed
}

function draw() {
    background(val, val1, val2); // Ensure the background reflects the current values

    // Apply scaling when drawing the robot
    push();
    translate(x, y); // Move the drawing origin to the robot's position
    scale(scaleFactor); // Scale everything based on scaleFactor

    // Offsets
    let offsetX = 0;
    let offsetY = 0;

    // Body
    fill(50);
    rectMode(CENTER);
    rect(offsetX, offsetY + 120, 100, 150);

    // Body details
    fill(150);
    rect(offsetX, offsetY + 100, 60, 10); // First detail
    rect(offsetX, offsetY + 120, 60, 10); // Second detail
    rect(offsetX, offsetY + 140, 60, 10); // Third detail

    // Arms
    stroke(0);
    strokeWeight(3);
    line(offsetX - 55, offsetY + 90, offsetX - 90, offsetY + 60); // Left arm
    line(offsetX + 55, offsetY + 90, offsetX + 90, offsetY + 120); // Right arm

    // Hands
    fill(0);
    ellipse(offsetX - 90, offsetY + 60, 15, 15); // Left hand
    ellipse(offsetX + 90, offsetY + 120, 15, 15); // Right hand

    // Legs
    line(offsetX - 30, offsetY + 200, offsetX - 30, offsetY + 260); // Left leg
    line(offsetX + 30, offsetY + 200, offsetX + 30, offsetY + 260); // Right leg

    // Feet
    rect(offsetX - 30, offsetY + 270, 20, 10); // Left foot
    rect(offsetX + 30, offsetY + 270, 20, 10); // Right foot

    // Head
    fill(50);
    rect(offsetX, offsetY, headSize, headSize);

    // Antenna
    line(offsetX, offsetY - 50, offsetX, offsetY - 70);
    fill(0);
    ellipse(offsetX, offsetY - 70, 10, 10); // Antenna ball

    // Eyes
    fill(200, 250, 250);
    rect(offsetX - 20, offsetY, 20, 20); // Left eye
    rect(offsetX + 20, offsetY, 20, 20); // Right eye

    // Antenna sides
    line(offsetX - 40, offsetY - 20, offsetX - 60, offsetY - 30);
    line(offsetX + 40, offsetY - 20, offsetX + 60, offsetY - 30);
    ellipse(offsetX - 60, offsetY - 30, 10, 10); // Left side ball
    ellipse(offsetX + 60, offsetY - 30, 10, 10); // Right side ball

    // Mouth
    strokeWeight(3);
    line(offsetX - 20, offsetY + 30, offsetX + 20, offsetY + 30); // Mouth line

    pop(); // Reset transformations so scaling doesn't affect other objects

    // Draw the ball on top of the robot
    fill(10, 0, 0);
    ellipse(dx, dy, 10, 10); // Draw the ball at (dx, dy)

    dx += dot_speed; // Move the ball horizontally

    // Reverse direction between the eyes (-20 to +20 around the head's center)
    if (dx >= x + 20 || dx <= x - 20) {
        dot_speed *= -1; // Reverse the direction
    }

    // Switch to HSB color mode for the bouncing ball
    colorMode(HSB, 360, 100, 100);

    // Draw and update the moving ball
    if (millis() > 1000) { // Start moving after 1 second
        ballY += 1 * ballDirection;

        if (ballY > height - 20) {
            ballDirection = -1;
            ballColor = random(360);
        } else if (ballY < 20) {
            ballDirection = 1;
            ballColor = random(360);
        }
    }

    fill(ballColor, 100, 100);
    ellipse(width - 50, ballY, 40, 40);

    // Switch back to RGB color mode
    colorMode(RGB);
}

// Move the head
function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        x -= 10; // Move left
    } else if (keyCode === RIGHT_ARROW) {
        x += 10; // Move right
    } else if (keyCode === UP_ARROW) {
        y -= 10; // Move up
    } else if (keyCode === DOWN_ARROW) {
        y += 10; // Move down
    }
}

// Scale robot when mouse is pressed
function mousePressed() {
    scaleFactor = 1.2; // Enlarge the robot
}

// Reset scaling when mouse is released
function mouseReleased() {
    scaleFactor = 1; // Return to normal size
}
