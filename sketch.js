var ball,ball_img,paddle,paddle_img,Edge;
function preload() {
  ball_img=loadImage("ball.png");
  paddle_img=loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  paddle=createSprite(350,200,20,20);
  paddle.addImage("paddle1",paddle_img);
  ball=createSprite(50,200,20,20);
  ball.addImage("ball1",ball_img);
  
  ball.velocityY=9;
  ball.velocityX=5;

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  Edge=createEdgeSprites();
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  ball.bounceOff(Edge[0]);
  ball.bounceOff(Edge[3]);
  ball.bounceOff(Edge[2]);


  /* Allow the ball to bounceoff from the paddle */
  if(ball.bounceOff(paddle)){
    
    randomVelocity();
    
  }
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
  
 
  /* Prevent the paddle from going out of the edges */ 
  paddle.bounce(Edge[2]);
  paddle.bounce(Edge[3]);
  
  if(keyDown(UP_ARROW))
  {
    paddle.velocityY=-5;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.velocityY=5;
  }
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  ballspeed=random(1,2,3,4);
  
  switch(ballspeed){
    case 1:ball.velocityY=10;
      break;
      case 2:ball.velocityY=11;
      break;
    case 3:ball.velocityY=13;
      break;
      case 4:ball.velocityY=15;
      break;
      default:break;
  }
  
  
  
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

