var time1 = 1000; //1000 millis = 1 second
//var time2 = 2000; //1000 millis = 1 second

var time2 = 2000

//var time3 = 3000

var time4 = 3000

var x = 70;
var y = 20;

var x2 = 200
var y2 = 20

// var x3 = 100
// var y3 = 20

var x4 = 330
var y4 = 20


var circle_w = 40;

let button;
//let doSomethingSwitch = false; // This

function setup() {
    createCanvas(400, 400);
    // button = createButton('Change Background');
    //button.position(0, 0);
    frameRate(12)


    y_head = 30


}

function draw() {
//background(button.mousePressed(changeBG));
    background(0)
    //r2d2

    var currentTime = millis();


    if (currentTime > time1 && y < height - circle_w / 2) {
        //code to move the ball down goes here
        y += 4;
    } else if (currentTime > time1 && y < height - circle_w / 2)
        y += -4;

    if (currentTime > time2 && y2 < height - circle_w / 2) {
        y2 += 4;
    }else if (currentTime > time2)
        y2 -= 15;

    // if (currentTime > time3 && y3 < height - circle_w / 2){
    //   y3 += 2;
    // }else if (currentTime > time3)
    //   y3 +=0

    if (currentTime > time4 && y4 < height - circle_w / 2){
        y4+=4
    }else if (currentTime > time4)
        y4+=-4

    fill(255)
    ellipse(x, y, 40, 40);
    fill(180)
    ellipse(x2, y2, 40, 40);
    fill(51, 255, 197)
    // ellipse (x3, y3, 40, 40);
    fill(120)
    ellipse (x4, y4, 40,40);





    //head
    fill(200)
    angleMode(DEGREES);
    arc(200, 100 + y_head, 160, 160, 180, 360);

    beginShape();
    fill(255)
    vertex(120, 100 + y_head);
    vertex(120, 100 + y_head);
    vertex(280, 100 + y_head);
    vertex(280, 100 + y_head);
    endShape();


    //eyes
    fill(24, 48 + y_head, 158)
    square(180, 50 + y_head, 35)
    fill(0)
    circle(195, 70 + y_head, 25)

    //buttons
    fill(109, 114 + y_head, 122)
    circle(230, 90+ y_head, 15)
    fill(0)
    circle(230, 90+ y_head, 5)
    fill(24, 78, 158)
    rect(245, 65+y_head, 10, 30)
    rect(260, 65+y_head, 10, 30)
    rect(150, 65+y_head, 20, 30)
    square(155, 70+y_head, 10)
    square(155, 84+y_head, 10)



    //body
    fill(255)
    rect(120, 130, 160, 170)

    //body deatails
    stroke(24, 78, 158);
    stroke(0)
    strokeWeight(2)
    fill(24, 78, 158)
    rect(180, 185, 32, 50)
    fill(200, 202, 207)
    rect(185, 188, 20, 20)
    rect(185, 212, 20, 20)
    fill(255)
    rect(220, 185, 30,50 )
    rect(135, 185, 35,20 )
    rect(155, 210, 15,25 )
    stroke(24, 78, 158)
    strokeWeight(3)
    line(135,217,150,217)
    line(135,210,150,210)
    line(135,225,150,225)
    fill(28, 47, 94)
    noStroke()
    square(175, 250, 40)
    stroke(0)
    strokeWeight(2)
    fill(123, 130, 148)
    circle(245, 275, 25);
    fill(193, 198, 212)
    rect(135, 250, 30,35 )

    //legs
    stroke(0);
    strokeWeight(2);
    fill(200, 202, 207)
    rect(85,130,35,190);
    rect(280,130,35,190);

    //thrusters
    beginShape();
    vertex(128, 360);
    vertex(78, 360);
    vertex(90, 320);
    vertex(115, 320);
    endShape(CLOSE);

    beginShape();
    vertex(323, 360);
    vertex(273, 360);
    vertex(285, 320);
    vertex(310, 320);
    endShape(CLOSE);

    //--------------------flashing lights-----------------------
    push();
    strokeWeight(0);
    stroke(0);
    // // could be used for robot panel lights
    // // play around with the starting and ending
    // // x and y values
    for (var x3 = 285; x3 <= 345; x3 += 15) {
        for (var y3 = 110; y3 <= 145; y3 += 15) {
            fill(random(255), 0, random(255));
            ellipse(x3-115, y3+30, 70, 10);
        }
    }
    pop();
    //-------------end of flashing lights code-------------------



}// end of draw()

//   ellipse(width/2.5, height/2, 25,25);


//   button.mousePressed(changeBG);


// user defined function changeEllipse()
function changeColor(){
    let val1 = random(255);
    let val2 = random(255);
    fill(val1,val2,val1,val2);

}

// user defined function changeBG()
function changeBG() {
    let val1 = random(255);
    let val2 = random(255);
    background(val1,val2,val1);



}
