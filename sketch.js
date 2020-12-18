
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;
var engine, roof;

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	roof = new Roof(350, 100, 300, 20);
	World.add(world, roof);

	bobObject1 = new Pendulum(240, 350, 30, 30);
	bobObject2 = new Pendulum(300, 350, 30, 30);
	bobObject3 = new Pendulum(360, 350, 30, 30);
	bobObject4 = new Pendulum(420, 350, 30, 30);
	bobObject5 = new Pendulum(480, 350, 30, 30);

	rope1 = new Sling(bobObject1.body, roof.body, -100, 0);
	World.add(world, rope1);

	rope2 = new Sling(bobObject2.body, roof.body, -50, 0);
	World.add(world, rope2);

	rope3 = new Sling(bobObject3.body, roof.body, 0, 0);
	World.add(world, rope3);
 
	rope4 = new Sling(bobObject4.body, roof.body, +50, 0);
	World.add(world, rope4);

	rope5 = new Sling(bobObject5.body, roof.body, +100, 0);
	World.add(world, rope5);


  
}


function draw() {
  rectMode(CENTER);
  background("pink");

  roof.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
	   Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x: -730, y: 0});
	   Matter.Body.setStatic(bobObject1, false);
	}
}


