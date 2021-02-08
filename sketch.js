const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, trash1, trash2, trash3, paper, border, imageDustbin, dustbin;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	// ground = Bodies.rectangle(width / 2, 670, width, 10, { isStatic: true });
	// World.add(world, ground);

	trash1 = new Trash(700, 665, 130, 15);
	trash2 = new Trash(640, 605, 15, 140);
	trash3 = new Trash(760, 605, 15, 140);

	border = new Box(805, height / 2, 10, height * 2);

	paper = new Paper(150, 600, 60, 60);

	ground = new Box(width / 2, 680, width * 2, 10);

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(180);
	Engine.update(engine);
	paper.display();
	trash1.display();
	trash2.display();
	trash3.display();

	fill("white");
	ground.display();

	drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, { y: -400, x: 690 });
	}
}
