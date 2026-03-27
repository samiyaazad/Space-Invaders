
let tileSize = 32;
let rows = 16;
let columns = 16;

let board;
let boardWidth = tileSize * columns;
let boardHeight = tileSize * rows;
let context;


let shipWidth = tileSize*2;
let shipHeight = tileSize;
let shipX = tileSize * columns/2 - tileSize;
let shipY = tileSize * rows - tileSize*2;

let ship = {
    x : shipX,
    y : shipY,
    width : shipWidth,
    height : shipHeight
}

let shipImg;
let shipVelocityX = tileSize;

let alienImages = [];
let alienArray = [];
let alienWidth = tileSize*2;
let alienHeight = tileSize;
let alienX = tileSize;
let alienY = tileSize;
let alienImg;

let alienRows = 2;
let alienColumns = 3;
let alienCount = 0;
let alienVelocityX = 1;


let bulletArray = [];
let bulletVelocityY = -10;

let gameOver = false;
let score = 0;

window.onload = function() {
    board = this.document.getElementById("board");
    board.width = boardWidth;
    board.height = boardHeight;
    context = board.getContext("2d");


    //context.fillStyle="green";
    //context.fillRect(ship.x, ship.y, ship.width, ship.height);


    shipImg = new Image();
    shipImg.src = "./ship.png";
    shipImg.onload = function()  {    
    context.drawImage(shipImg, ship.x, ship.y, ship.width, ship.height);
    }

    let colors = ["white", "cyan", "magenta", "yellow"];

    for (let color of colors) {
        let img = new Image();
        img.src = `./alien-${color}.png`;
        alienImages.push(img);
    }
    createAliens();

    this.requestAnimationFrame(update);
    this.document.addEventListener("keydown", moveShip);
    this.document.addEventListener("keyup", shoot);
    this.document.addEventListener("keydown", function(e){
        if (e.code === "KeyR") {
            resetGame();
        }
    });
}

function update() {
    if (gameOver) {
        context.fillStyle = "red";
        context.font = "32px courier";
        context.fillText("GAME OVER", board.width / 4, board.height / 2);

        context.font = "16px courier";
        context.fillText("Press R to Restart", board.width/4, board.height / 2 + 40);
        return;
    }
    requestAnimationFrame(update);

    context.clearRect(0, 0, board.width, board.height);


    context.drawImage(shipImg, ship.x, ship.y, ship.width, ship.height);


    for (let i = 0; i < alienArray.length; i++) {
        let alien = alienArray[i];
        if (alien.alive)  {
            alien.x += alienVelocityX;


            if (alien.x + alien.width >= board.width || alien.x <= 0) {
                alienVelocityX *= -1;
                alien.x += alienVelocityX*2;


                for (let j = 0; j < alienArray.length; j++) {
                    alienArray[j].y += alienHeight;
                }
            }
            context.drawImage(alien.img, alien.x, alien.y, alien.width, alien.height);

            if (alien.y + alien.height >= ship.y) {
                gameOver = true;
                break;
            }
        }
    }


    for (let i = 0; i < bulletArray.length; i++) {
        let bullet = bulletArray[i];
        bullet.y += bulletVelocityY;
        context.fillStyle="white";
        context.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);


        for (let j = 0; j < alienArray.length; j++)  {
            let alien = alienArray[j];
            if (!bullet.used && alien.alive && detectCollision(bullet, alien))  {
                bullet.used = true;
                alien.alive = false;
                alienCount--;
                score += 100;
            }
        }
    }


      while  (bulletArray.length > 0 && (bulletArray[0].used || bulletArray[0].y < 0)) {
            bulletArray.shift ();
      }


      if (alienCount == 0) {

        alienColumns = Math.min(alienColumns + 1, columns/2 -2);
        alienRows = Math.min(alienRows + 1, rows-4);
        alienArray = [];
        bulletArray = [];
        createAliens();
      }


      context.fillStyle="white";
      context.font="16px courier";
      context.fillText("Score: " + score, 5, 20);

}

function moveShip(e) {
    if (e.code == "ArrowLeft" && ship.x - shipVelocityX >= 0)  {
        ship.x -= shipVelocityX;
    }
    else if (e.code == "ArrowRight" && ship.x + shipVelocityX + ship.width <= board.width)  {
        ship.x += shipVelocityX;
    }
}

function createAliens()  {
    for (let c = 0; c < alienColumns; c++) {
        for (let r = 0; r < alienRows; r++) {
            let alien ={
                x : alienX + c*alienWidth,
                y : alienY + r*alienHeight,
                width : alienWidth,
                height : alienHeight,
                alive : true,
                img : alienImages[Math.floor(Math.random() * alienImages.length)]
            }
            alienArray.push(alien);
        }
    }
    alienCount = alienArray.length;
}

function shoot(e) {
    if (gameOver) {
        return;
    }

    if (e.code == "Space") {

        let bullet = {
            x : ship.x + shipWidth*15/32,
            y : ship.y,
            width : tileSize/8,
            height : tileSize/2,
            used : false
        }
        bulletArray.push(bullet);
    }
}

function detectCollision(a, b) {
    return a.x < b.x + b.width && 
           a.x + a.width > b.x &&
           a.y < b.y + b.height &&
           a.y + a.height > b.y;
}

function resetGame() {
    gameOver = false;
    score = 0;

    ship.x = shipX;
    ship.y = shipY;

    alienArray = [];
    bulletArray = [];

    alienRows = 2;
    alienColumns = 3;

    createAliens();

    requestAnimationFrame(update);
}