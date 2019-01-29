var txtOffset = 25;
var offset = 100;

// Using ellipse and rectangle to create cup
var cupW = 300;
var cupH = 400;

// White part of cup handle
var wHandleL = 150; // length
var wHandleW = 110; // width
var wHandleXpt = 400 // x-pos
var wHandleYpt = 250; // y-pos

// Background colored part of cup handle
var bHandleL = 90; // length
var bHandleW = 22; // width
var bHandleXpt = 410; // x-pos
var bHandleYpt = 205; // y-pos

function setup() {
    createCanvas(500, 600);
}

// Fills up the cup with coffee as the day goes on!
function draw() {
    // Get the current time
    var H = hour();
    var M = minute();
    var S = second();

    // Calculating heights of rectangles corresponding to H, M, S values
    // Looked at course code example for reference with mapping
    var hourBar = map(H, 0, 23, cupH, 0);
    var minuteBar = map(M, 0, 59, cupH, 0);
    var secondBar = map(S, 0, 59, cupH, 0);
    var barW = cupW/3;

    background(135, 206, 250);
    noStroke();
    // Main part of cup
    fill(255);
    rect(offset, offset, cupW, cupH);
    // Ellipse to draw white part of cup handle
    ellipse(wHandleXpt, wHandleYpt, wHandleW, wHandleL);
    // Ellipse to draw background color part of cup handle
    fill(135, 206, 250);
    rect(bHandleXpt, bHandleYpt, bHandleW, bHandleL, 5);

    // Fills up cup in relation to seconds
    fill(99, 49, 0);
    rect(offset, offset, barW, secondBar);

    // Fills up cup in relations to minutes
    fill(139, 115, 85);
    rect(offset+barW, offset, barW, minuteBar);

    // Fills up cup in relations to hours
    fill(139, 90, 43);
    rect(offset+2*barW, offset, barW, hourBar);
    
    // Display current time (24-hr time)
    fill(0);
    textAlign(RIGHT);
    text("Current Hour: " + H, width-txtOffset, 25);
    text("Current Minute: " + M, width-txtOffset, 35);
    text("Current Second: " + S, width-txtOffset, 45);

    fill(255);
    textAlign(CENTER);
    text("No more coffee = Day is over! ", width/2, height-txtOffset);
}
