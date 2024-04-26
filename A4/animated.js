function setup(){
    var canvas = createCanvas(400,400);
    canvas.parent('sketchContainer');

}
function draw() {

    strokeWeight(1);
    stroke(0);
    
    frameRate(1);
    // Red Triangle
    fill(random(255), random(255), random(255));
    triangle(400, 0, 150, 250, 400, 475);

    // Black Triangle
    fill(random(255), random(255), random(255));
    triangle(150, -5, -32, 200, 150, 400);
  
    // Yellow Triangle
    fill(random(255), random(255), random(255));
    triangle(0, 235, 77, 321, 0, 400);

    // Bottom White Triangle
    fill(random(255), random(255), random(255));
    triangle(0, 400, 77, 321, 137, 389);

    // Top White Triangle
    fill(random(255), random(255), random(255));
    triangle(150, -70, 150, 250, 300, 100);

    // Top Right Triangle
    fill(random(255), random(255), random(255));
    triangle(10, 10, 10, 150, 140, 10);

    // Top Left Triangle
    fill(random(255), random(255), random(255));
    triangle(390, 10, 300, 100, 200, 10);

    // Bottom Gray Triangle
    fill(random(255), random(255), random(255));
    triangle(150, 250, 150, 387, 303, 388);

    // Border
    noFill();
    stroke(0);
    strokeWeight(25);
    rect(0, 0, 400, 400);

}