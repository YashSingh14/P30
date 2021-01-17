const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box1, slingshot;

function preload() {
    hexImg = loadImage("sprite/polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    ground1 = new Ground(380, 250, 190, 20)
    ball1 = new Ball(800, 200, 50, 50)
    fill("blue")
    box1 = new Box(330, 195, 30, 40)
    box2 = new Box(360, 195, 30, 40)
    box3 = new Box(390, 195, 30, 40)
    box4 = new Box(420, 195, 30, 40)
    box5 = new Box(450, 195, 30, 40)
    fill("silver")
    box6 = new Box2(360, 155, 30, 40)
    box7 = new Box2(390, 155, 30, 40)
    box8 = new Box2(420, 155, 30, 40)
    fill("white")
    box9 = new Box3(390, 115, 30, 40)
    sling1 = new SlingShot(ball1.body, {x: 1000, y:100})
}

    function draw(){
        background("red")
        Engine.update(engine);
        ball1.display();
        ground1.display();
        box1.display();
        box2.display();
        box3.display();
        box4.display();
        box5.display();
        box6.display();
        box7.display();
        box8.display();
        box9.display();
        sling1.display();
    ground.display();
    }

    function mouseDragged(){
        Matter.Body.setPosition(ball1.body, {x: mouseX, y: mouseY})
    }
    
    function mouseReleased(){
        sling1.fly()
    }

    function keyPressed(){
        if(keyCode === 32){
        sling1.attatched(ball1.body)
        }
        }
    