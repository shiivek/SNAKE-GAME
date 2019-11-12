const PLAY =1;
const END=0;
var gamestate = PLAY;
var backgroundtexture,food,edges,poison,restartpic;
var snakeup,snake,snakedown,snakeright,snakeleft,restart;
function setup() {
  createCanvas(displayWidth,displayHeight-142);
   backgroundtexture = loadImage("Images/bg.jpg")
   snake = createSprite(displayWidth-350,displayHeight-250,10,100)
   snake.shapeColor = "black"
   food = createSprite(random(100,1500),random(100,700),20,20)
   food.shapeColor = "blue";
   poison = createSprite(random(100,1500),random(100,700),20,20)
   poison.shapeColor = "red";
   restart = createSprite(displayWidth/2,displayHeight/2-25,50,50)
   restart.visible = false;
   restartpic = loadImage("Images/restart.png")
   restart.addImage("restart",restartpic)
   restart.scale = 0.3;

}
function foodeat(){
  food = createSprite(random(100,1500),random(100,700),20,20)
  food.shapeColor = "blue";
}
function poisoneat(){
  poison = createSprite(random(100,1500),random(100,700),20,20)
}

function draw() {
  background(backgroundtexture); 
  edges=createEdgeSprites()
  if(gamestate===PLAY) 
  {
    if(snake.isTouching(food)){
      food.destroy();
      snake.height+=10;
      foodeat()
        }
        
        fill("red");
        textSize(30)
        text("RED IS POISON",displayWidth-300,displayHeight-800)
        fill("blue");
        text("BLUE IS FOOD",displayWidth-300,displayHeight-770)
  
 
      if(snake.isTouching(poison)){
       gamestate=END
          }
      if(snake.isTouching(edges)){
        gamestate=END


      }

  if(keyDown ("UP_ARROW"))
  {
  snake.velocityY =-20; 
  snake.velocityX =0; 
  snake.rotation = 180;
 
  }
  if(keyDown ("DOWN_ARROW")){

  snake.velocityY =20; 
  snake.velocityX =0; 
  snake.rotation = 180;
  
  }
  if(keyDown ("RIGHT_ARROW"))
  {
  snake.velocityX =20; 
  snake.velocityY =0; 
  snake.rotation = 90;

  }
  if(keyDown ("LEFT_ARROW"))
  {
  snake.velocityX =-20; 
  snake.velocityY =0; 
  snake.rotation = 90;
  
  }
  }
  else if (gamestate===END){
        poison.destroy();
        snake.destroy();
        fill("black");
        textSize(100)
        text("GAME OVER",displayWidth/2-250,displayHeight/2-100)
        restart.visible = true;
        food.destroy();
  }

  if(mousePressedOver(restart)){
    reset();

    
  }
  drawSprites();

  
}
function reset () {
  gamestate = PLAY;
    restart.visible = false;
    console.log("hi")
    
}
