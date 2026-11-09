function setup() {
  createCanvas(1920, 1080);
}
var pageIndex = 0;

function draw() {
  if (pageIndex == 0) {
    pageOne();

  } else if (pageIndex == 1) {
    if (colorChoice == "pink") {
      pagePinkA();
    } else {
      pagePurpA();
    }

  } else if (pageIndex == 2) {
    if (colorChoice == "pink") {
      pagePinkB();
    } else {
      pagePurpB();
    }

  } else if (pageIndex == 3) {
    if (colorChoice == "pink") {
      pagePinkC();
    } else {
      pagePurpC();
    }

  } else if (pageIndex == 4) {
    if (colorChoice == "pink") {
      pagePinkD();
    } else {
      pagePurpD();
    }

  } else if (pageIndex == 5) {
    if (colorChoice == "pink") {
      pagePink();
    } else {
      pagePurp();
    }
  }

  console.log("Current Index: " + pageIndex);
}

function mousePressed() {

  if (pageIndex == 0) {

    if (dist(mouseX, mouseY, 0, 540) < 540) {
      colorChoice = "pink";
      pageIndex = 1;

    } else if (dist(mouseX, mouseY, width, 540) < 540) {
      colorChoice = "purple";
      pageIndex = 1;
    }

  }


  else if (colorChoice == "pink" && pageIndex >= 1 && pageIndex <= 4) {

    let circleX = [270, 540, 810, 960];

    if (dist(mouseX, mouseY, circleX[pageIndex - 1], 540) < 540) {
      pageIndex++;
    }

  }

  else if (colorChoice == "purple" && pageIndex >= 1 && pageIndex <= 4) {

    let circleX = [1650, 1380, 1110, 960];

    if (dist(mouseX, mouseY, circleX[pageIndex - 1], 540) < 540) {
      pageIndex++;
    }

  }

  else if (pageIndex == 5) {

    if (mouseX > 1700 && mouseY > 990) {
      pageIndex = 0;
      colorChoice = "";
    }

  }
}

function pageOne(){
  background(0);
  fill(255)
  textSize(48);
  textAlign(CENTER, CENTER);
  textFont("Georgia");
  text("Fill the Page with the Right Color", width/2, 100);
  text("Click a circle to Continue", width/2, 200);
  fill (237, 76, 178)
  circle(0, 540, 1080)
  fill (173, 56, 245)
  circle(width, 540, 1080)
}

function pagePinkA(){
  background(0);
  fill(255)
  textSize(48);
  textAlign(CENTER, CENTER);
  textFont("Georgia");
  text("Are you sure?", width/2+270, 100);
  fill (237, 76, 178)
  circle(270, 540, 1080)
  fill (173, 56, 245)
  circle(width+270, 540, 1080)  
}

function pagePinkB(){
  background(0);
  fill(255)
  textSize(48);
  textAlign(CENTER, CENTER);
  textFont("Georgia");
  text("Are you really sure?", width/2+270+270, 100);
  fill (237, 76, 178)
  circle(270+270, 540, 1080)
  fill (173, 56, 245)
  circle(width+270+270, 540, 1080)   
}

function pagePinkC(){
  background(0);
  fill(255)
  textSize(48);
  textAlign(CENTER, CENTER);
  textFont("Georgia");
  text("Almost there", width/2+270+270+270, 100);
  fill (237, 76, 178)
  circle(270+270+270, 540, 1080)
  fill (173, 56, 245)
  circle(width+270+270+270, 540, 1080)   
}

function pagePinkD(){
 background(0);
  fill (237, 76, 178)
  circle(960, 540, 1080)
}

function pagePink(){
background(237, 76, 178);
  fill(0)
  textSize(48);
  textAlign(CENTER, CENTER);
  textFont("Georgia");
  text("You Did it!", width/2, height/2);
  textSize(30);
  textAlign(CENTER, CENTER);
  text("Restart", 1800, 1040);
}

function pagePurpA() {
  background(0);
  fill(255)
  textSize(48);
  textAlign(CENTER, CENTER);
  textFont("Georgia");
  text("Are you sure?", width/2-270, 100);
  fill (237, 76, 178)
  circle(0-270, 540, 1080)
  fill (173, 56, 245)
  circle(width-270, 540, 1080)
}

function pagePurpB() {
  background(0);
  fill(255)
  textSize(48);
  textAlign(CENTER, CENTER);
  textFont("Georgia");
  text("Are you really sure?", width/2-270-270, 100);
  fill (237, 76, 178)
  circle(0-270-270, 540, 1080)
  fill (173, 56, 245)
  circle(width-270-270, 540, 1080)
}

function pagePurpC() {
  background(0);
  fill(255)
  textSize(48);
  textAlign(CENTER, CENTER);
  textFont("Georgia");
  text("Almost there", width/2-270-270-270, 100);
  fill (237, 76, 178)
  circle(0-270-270-270, 540, 1080)
  fill (173, 56, 245)
  circle(width-270-270-270, 540, 1080)
}

function pagePurpD() {
  background(0);
  fill (173, 56, 245)
  circle(960, 540, 1080)
}

function pagePurp() {
background(0);
  fill(255)
  textSize(48);
  textAlign(CENTER, CENTER);
  textFont("Georgia");
  text("Sorry, You Failed", width/2, height/2);
  textSize(30);
  textAlign(CENTER, CENTER);
  text("Restart", 1800, 1040);
}