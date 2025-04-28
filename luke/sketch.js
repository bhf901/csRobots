let bgColor;
let clearButton,changeBgButton;

function setup() {
    createCanvas(400, 400);
    bgColor = color(75);
    background(75);//just the 1st time through


    // Clear Button
    clearButton = createButton("Clear Canvas");
    clearButton.position(220, 10);
    clearButton.mousePressed(clearCanvas);

    function clearCanvas(){
        clear();
        background(bgColor);
    }

    changeBgButton = createButton("Change Background");
    changeBgButton.position(50,10);
    changeBgButton.mousePressed(changeBk)
}

function changeBk(){
    bgColor = color(random(255),random(100),random(100));
    background(bgColor);
}

function draw() {
    background(bgColor);

    stroke(0)
    fill(133,91,2);
    rect(170,75,70);
    rect(170,50,20,25);
    rect(220,50,20,25);
    fill(100)
    rect(190,145,30,60);
    fill(133,91,2)
    rect(190,65,5,10);
    rect(215,65,5,10);
    rect(180,110,50,35);
    line(180,130,230,130);
    fill(0);
    rect(175,87,20,10);
    rect(215,87,20,10);
    noFill()
    stroke(255,0,0)
    arc(220,145,30,80,0,90)
    stroke(0,0,255)
    arc(190,160,70,80,90,240)
    stroke(0)
    angleMode(DEGREES)
    arc(190,145,23,40,90,180)
    rect(55,75,60,70)
    rect(67,50,15,25)
    rect(5,110,50,20)
    line(10,150,55,130)
    line(55,145,14,165)
    line(14,165,10,150)
    triangle(5,130,7,140,9,130)
    triangle(9,130,11,135,13,130)
    fill(100)
    rect(70,145,30,60)
    rect(100,205,180,30)
    rect(280,145,30,60)
    fill(0)
    ellipse(85,220,50,50)
    ellipse(205,220,50,50)
    ellipse(295,220,50,50)
    fill(133,91,2)

}