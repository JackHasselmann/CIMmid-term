var myLogo,
    radiusX,
    radiusY,
    magnets = [],
    triesForTarget;


function preload(){
      myLogo = loadImage(setImageSize());
}

function setImageSize(){
  if(windowHeight = 500 || (window.orientation !==0)){
    triesForTarget = 30;
    return "http://i.imgur.com/gdWaDih.jpg";
  } 
}

function setup(){
     createCanvas(800, 800)
    
    colorMode(HSB, 100, 100, 100, 100);
    noStroke();
}
  
function draw(){
  background(60,25,50,100)
  
  var position = createVector(mouseX, mouseY);
  
  var position = createVector(0, 0) && createVector(mouseX, mouseY);
  var target = findTarget();
  
  var magnet = new Magnet(position,target);
  magnets.push(magnet);
  


if(magnets.length > 500) magnets.pop();
 
  
  for(var i = 0; i < magnets.length; i++){
    magnets[i].update();
    magnets[i].draw();
  }
}

function findTarget (){
  var x, y;
  for(var i = 0; i< triesForTarget; i++) {
    x = floor(random(myLogo.width));
    y = floor(random(myLogo.height));
    if(red(myLogo.get(x, y)) < 255) break;
  }
  
  return createVector(x +(width / 2 - myLogo.width / 2), y + (height / 2 - myLogo.height / 2));
}

function Magnet(position, target) {
    this.position = position;
    this.target = target;
    this.diameter = random(8, 22);
}

Magnet.prototype.update = function() {
  
  this.position = p5.Vector.lerp(
    this.position,
    this.target,
    0.07
  );
};  


Magnet.prototype.draw = function(){
  
  var elapsedSeconds = millis() / 100.0;
  var alpha = noise(this.target.x, this. target.y, 10);
  
  var time = millis() % 20000;
  var hue = map (time, 0, 20000, 0, 100);
  
  
  fill(hue, 70, alpha * 200);
  
  rect(
    this.position.x, this.position.y,
    this.diameter, this.diameter);
};
