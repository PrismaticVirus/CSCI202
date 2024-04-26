function setup(){
    var canvas = createCanvas(400,400);
    canvas.parent('sketchContainer');
}

function draw() {
    strokeWeight(1);
    stroke(0);
    frameRate(1);

    // Red Triangle

    if (isMouseOver(400, 0, 150, 250)) {
        fill(random(255), random(255), random(255));
    } else {
        fill(255, 0, 0);
    }
    triangle(400, 0, 150, 250, 400, 475);

    // Black Triangle

    if (isMouseOver(150, -5, -32, 200)) {
        fill(random(255), random(255), random(255));
    } else {
        fill(0);
    }
    triangle(150, -5, -32, 200, 150, 400);

    // Yellow Triangle
 
    if (isMouseOver(0, 235, 77, 321)) {
        fill(random(255), random(255), random(255));
    } else {
        fill(255, 255, 0);
    }
    triangle(0, 235, 77, 321, 0, 400);

    // Bottom White Triangle
 
    if (isMouseOver(0, 400, 77, 321)) {
        fill(random(255), random(255), random(255));
    } else {
        fill(255);
    }
    triangle(0, 400, 77, 321, 137, 389);

    // Top White Triangle

    if (isMouseOver(150, -70, 150, 250)) {
        fill(random(255), random(255), random(255));
    } else {
        fill(255);
    }
    triangle(150, -70, 150, 250, 300, 100);

    // Top Right Trianlge

    if (isMouseOver(10, 10, 10, 150)) {
        fill(random(255), random(255), random(255));
    } else {                                                                                                                                                                                                                                                                                                    
        fill(175);
    }
    triangle(10, 10, 10, 150, 140, 10);

    // Top Left Triangle

    if (isMouseOver(390, 10, 300, 100)) {
        fill(random(255), random(255), random(255));
    } else {
        fill(175);
    }
    triangle(390, 10, 300, 100, 200, 10);
    // Bottom Gray Triangle

    if (isMouseOver(150, 250, 150, 387)) {
        fill(random(255), random(255), random(255));
    } else {
        fill(175);
    }
    triangle(150, 250, 150, 387, 303, 388);

    // Border
    noFill();
    stroke(0);
    strokeWeight(25);
    rect(0, 0, 400, 400);
}

function isMouseOver(x1, y1, x2, y2) {
    return mouseX >= min(x1, x2) && mouseX <= max(x1, x2) && mouseY >= min(y1, y2) && mouseY <= max(y1, y2);
}