const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];
var score = 0;
var turn = 0;
var DIVISIONHEIGHT = 300;
var particles;
var slider;
var gameState;

function setup() {
  createCanvas(490,500);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width / 2, height, width, 20);

  for (var k = 10; k <= width; k += 80) {
    divisions.push(new Division(k, height-DIVISIONHEIGHT/1.90, 5, DIVISIONHEIGHT))
  }

  for (var j = 40; j <= width; j+= 50) {
    plinkos.push(new Plinko(j, 85, 10))
  }
  for (var j = 15; j <= width - 10; j+= 50) {
    plinkos.push(new Plinko(j, 185, 10))
  }

  //Creating the slider that will tell how many particles to drop
  slider = createSlider(10, 100, 20, 10);
  //plinko = new Plinko(width / 2, height / 2, 10);
}

function draw() {
  background(0);

  Engine.update(engine);

  ground.display();
  
  //Displaying all of the divisions
  divisions[0].display();
  divisions[1].display();
  divisions[2].display();
  divisions[3].display();
  divisions[4].display();
  divisions[5].display();
  divisions[6].display();

  //Displaying the Plinkos
  for (var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();
  }

  //Routinely adding more particles
  if (frameCount % 90 == 0) {
    for (var j = 0; j <= slider.value(); j++) {
      particles.push(new Particles(random(width / 2 - 50, width / 2 + 50), 0, 8))
    }
  }

  //Displaying the particles
  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }

  //displaying the scores
  textSize(35);
  text("500", 10, 225);
  text("500", 90, 225);
  text("200", 170, 225);
  text("200", 250, 225);
  text("100", 330, 225);
  text("100", 410, 225);

  //scoring system
    if (particles.body.position.y >= 225) 
    {
      if (particles.body.position.x < 100) {
        score = score+500;
        particles = null;
  }
  
    if (particles.body.position.y >= 225)
    {
  
      if (particles.body.position.x > 100 && particles.body.position.x < 300) {
        score = score+200;
        particles = null;
    }

    if (particles.body.position.y >= 225)
    {
      if (particles.body.position.x > 300 && particles.body.position.x < 450) {
        score = score+100;
        particles = null;
    }

  textSize(10);
  text("Score : "+ score, 10, 15)
}
 
mousePressed() 

  if (gameState!==end) 
  {
    count++;
    particles = new Particles(mouseX, 10, 10, 10);
  }
