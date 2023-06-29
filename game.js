let canvas;
let boardWidth = 360;
let boardHeight = 545;
let ctx;

let gameOver = false;

window.onload = function () {
  canvas = document.getElementById("board");
  canvas.height = boardHeight;
  canvas.width = boardWidth;
  ctx = board.getContext("2d");

  backgroundImg = new Image();
  backgroundImg.src = "./images/eiffelbg.png"

  poodleImg = new Image();
  poodleImg.src = "./images/poodle.png"
  poodle.img = poodleImg;
  poodleImg.onload = function () {
    ctx.drawImage(backgroundImg, 0, 0, boardWidth, boardHeight)
    ctx.drawImage(poodle.img, poodle.x, poodle.y, poodle.width, poodle.height);
  }
  
  velocityY = initialVelocityY;

  platformImg = new Image();
  platformImg.src = "./images/baguetteplatform.png";

  platforms();

  requestAnimationFrame(update);
  document.addEventListener("keydown", movePoodle);
}

function update() {
  requestAnimationFrame(update);
  
  if (gameOver){
    return;
  }

  ctx.clearRect(0, 0, board.width, board.height);
 
  poodle.x += velocityX;
 
  if (poodle.x > boardWidth) {
    poodle.x = 0
  }
  else if (poodle.x + poodle.width < 0){
    poodle.x = boardWidth;
  }
  
  velocityY += gravity;
  poodle.y += velocityY;
  
  ctx.drawImage(poodle.img, poodle.x, poodle.y, poodle.width, poodle.height);

  for (let i = 0; i < platformArray.length; i++){
  let platform = platformArray[i];
  if (velocityY < 0 && poodle.y < boardHeight*3/4){
    platform.y -= initialVelocityY;
  }
  if (collision (poodle, platform) && velocityY >= 0){
    velocityY = initialVelocityY;
  }
  ctx.drawImage(platform.img, platform.x, platform.y, platform.width, platform.height);
  }
  while (platformArray.length > 0 && platformArray[0].y >= boardHeight){
    platformArray.shift();
    newPlatform();
  }

  if (poodle.y > boardHeight){
    gameOver = true;
  }
  ctx.fillStyle = "white";
  ctx.font = "15px verdana";
  if (gameOver) {
    ctx.fillText("GAME OVER: PRESS 'SPACE' TO RESTART", boardWidth/14, boardHeight*1/2);
  }
}