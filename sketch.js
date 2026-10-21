

function setup() {
  let cnv = createCanvas(800, 784,);
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  cnv.position(x, y);

  // Background cor degrade
  c1 = color('#F0F4EF');
  c2 = color('#CCC5C9');
  setGradient(c1, c2); 

  //frames
  frameRate(1);
  
}

function draw() {
 //formula de cores aleatorias

  let colors = ['#EE2400', '#FEDD00', '#1C1667'];
  let choices1 = random(colors);
  let choices2 = random(colors);
  let choices3 = random(colors);

  // quadrado
  strokeWeight(0);
 fill(choices1);
 rect(0,0,359, 312);
fill(choices2);
 rect(0,515,77, 268);
fill(choices3);
 rect(365,517, 248, 227);

 // linhas
 stroke('#000000');
strokeWeight(9);
 line(363, 0, 363, 784); 
 line(81, 511, 79, 784);
 line(614, 512, 614, 784);
 strokeWeight(14);
 line(0, 317, 800, 322);
 strokeWeight(15);
 line(0, 509, 800, 513);
 strokeWeight(12);
 line(365, 749, 612, 749);

  // texto
 strokeWeight(0);
 fill('#8d3729');
 textFont('Special Gothic Expanded One');
 text('P M   35', 568, 784);
  
}

// função faz o degrade
function setGradient(c1, c2) {

  noFill();
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

