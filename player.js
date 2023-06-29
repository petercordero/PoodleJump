let poodleWidth = 46;
let poodleHeight = 46;
let poodleX = boardWidth/2 - poodleWidth/2;
let poodleY = boardHeight*7/8 - poodleHeight;
let poodleImg;

let poodle = {
  img : null,
  x : poodleX,
  y : poodleY,
  width : poodleWidth,
  height : poodleHeight,
}

let velocityX = 0;
let velocityY = 0;
let initialVelocityY = -8;
let gravity = 0.4;

function movePoodle(e) {
    if (e.code == "ArrowRight") {
      velocityX = 4;
    }
  
    else if (e.code == "ArrowLeft"){
      velocityX = -4;
    }
    else if (e.code == "Space" && gameOver){
        poodle = {
            img : poodleImg,
            x : poodleX,
            y : poodleY,
            width : poodleWidth,
            height : poodleHeight,
          }   
        
          velocityX = 0;
          velocityY = initialVelocityY;
          gameOver = false;
          platforms();
    }
  }