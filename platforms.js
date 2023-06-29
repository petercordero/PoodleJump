let platformArray = [];
let platformX = boardWidth/2.4;
let platformY = boardHeight - 60;
let platformWidth = 60;
let platformHeight = 10;

function platforms() {
    platformArray = [];
    let platform = {
      img : platformImg,
      x : boardWidth/2,
      y : boardHeight - 75,
      width : platformWidth,
      height : platformHeight,
    }
  
    platformArray.push(platform);
  
  
    for (let i = 0; i < 6; i++) {
      let randomX = Math.floor(Math.random() * boardWidth*3/4);
      let platform = {
        img : platformImg,
        x : randomX,
        y : boardHeight - 65*i - 150,
        width : platformWidth,
        height : platformHeight,
      }
      platformArray.push(platform);
    }
  
  }
  
  function newPlatform () {
    let randomX = Math.floor(Math.random() * boardWidth*3/4);
    let platform = {
      img : platformImg,
      x : randomX,
      y : -platformHeight,
      width : platformWidth,
      height : platformHeight,
    }
    platformArray.push(platform);
  }
  
  function collision(a, b) {
    return a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.y + a.height > b.y;
  }