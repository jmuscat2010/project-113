function preload() {}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
}

function draw() {
    rect(30, 20, 70, 80, 20);
    ellipse(56, 46, 55, 55);
    circle(30, 30, 20)
}

function take_snapshot() {
    save('myFilterImage.png');
}