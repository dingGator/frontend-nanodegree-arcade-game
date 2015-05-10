// Enemies our player must avoid
var Enemy = function () {
    // Variables applied to each of our instances go here,
    var enemy;

    this.x = Math.floor((Math.random() * 500) + 0);
    var yRandom = Math.floor((Math.random() * 3) + 1);
    this.y = yRandom * (73);
    // The image/sprite for the enemies, this uses
    this.sprite = 'images/enemy-bug.png';
    };

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // Multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers. loc

    amy.x = amy.x + 30 *dt ;
    if (amy.x > 500 ) {
        amy.x =  0;
        yRandom = Math.floor((Math.random() * 3) + 1);
        amy.y = yRandom * (73);
        };

    joe.x = joe.x + 30 *dt ;
    if (joe.x > 500 ) {
        joe.x = 0;
        yRandom = Math.floor((Math.random() * 3) + 1);
        joe.y = yRandom * (73);
        };

    ben.x = ben.x + 30 *dt ;
    if (ben.x > 500 ) {
        ben.x = 0;
        yRandom = Math.floor((Math.random() * 3) + 1);
        ben.y = yRandom * (73);
        };
};

// Draw the enemy on the screen
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Draw the enemy on the screen
    var amy = new Enemy();
    var ben = new Enemy();
    var joe = new Enemy();

// All enemies objects are in an array called allEnemies
    var allEnemies =[amy,ben,joe];

var Gem = function () {
    // Variables applied to each of our instances go here,
    var gem;

    this.x = Math.floor((Math.random() * 500) + 0);
    var yRandom = Math.floor((Math.random() * 4) + 1);
    this.y = yRandom * (73);
    //*** The image/sprite for the Gem
    this.sprite = 'images/Gem Blue.png';
    };

// Update the Gem's position
// Parameter: dt, a time delta between ticks
Gem.prototype.update = function(dt) {
    // Multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers. loc

    gemGreen.x = gemGreen.x + 5 * dt;
    if (gemGreen.x > 500 ) {
        this.sprite = 'images/Gem Green.png';
        gemGreen.x =  0;
        yRandom = Math.floor((Math.random() * 4) + 1);
        gemGreen.y = yRandom * (73);
        };

    gemOrange.x = gemOrange.cx + 5 * dt;
    if (gemOrange.x > 500 ) {
        this.sprite = 'images/Gem Orange.png';
        gemOrange.x = 0;
        yRandom = Math.floor((Math.random() * 4) + 1);
        gemOrange.y = yRandom * (73);
        };

    gemBlue.x = gemBlue.x + 5 * dt;
    if (gemBlue.x > 500 ) {
        this.sprite = 'images/Gem Blue.png';
        gemBlue.x = 0;
        yRandom = Math.floor((Math.random() * 4) + 1);
        gemBlue.y = yRandom * (73);
        };
};

Gem.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var gemBlue = new Gem();
var gemGreen = new Gem();
var gemOrange = new Gem();

var allGems =[gemBlue,gemGreen,gemOrange];

// All Gem objects are in an array called allGems
// Player class requires an update(), render() and
// a handleInput() method.

var Player = function() {

    this.x = 200;
    this.y = 380;
    var score = 0;

    //The image/sprite for our player, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-pink-girl.png';
};

// Place the player object in a variable called player
    var player = new Player();
    var totalScore = 0;
    var scoreBump = 0;
    var oldMsg ="                              ";
    var oldScore =0;

Player.prototype.update = function() {

    //********** Calculate score****
    // width for player is 50
    // height for player is 50
    // width for amy,joe,ben is 50
    // height for amy, joe, ben is 50
    //***********************************
    var playerXMax = this.x + 50;
    var playerYMax = this.y + 50;

    var playerYPos = player.y;
    var playerXPos = player.x;

    var amyXPos = amy.x;
    var amyYPos = amy.y;

    var joeXPos = joe.x;
    var joeYPos = joe.y;

    var benXPos = ben.x;
    var benYPos = ben.y;

    var amyXMax = amy.x + 50;
    var amyYMax = amy.y + 50;

    var joeXMax = joe.x + 50;
    var joeYMax = joe.y + 50;

    var benXMax = ben.x + 50;
    var benYMax = ben.y + 50;

    var gemGreenXPos = gemGreen.x;
    var gemGreenYPos = gemGreen.y;

    var gemBlueXPos = gemBlue.x;
    var gemBlueYPos = gemBlue.y;

    var gemOrangeXPos = gemOrange.x;
    var gemOrangeYPos = gemOrange.y;

    var gemGreenXMax = gemGreen.x + 50;
    var gemGreenYMax = gemGreen.y + 50;

    var gemBlueXMax = gemBlue.x + 50;
    var gemBlueYMax = gemBlue.y + 50;

    var gemOrangeXMax = gemOrange.x + 50;
    var gemOrangeYMax = gemOrange.y + 50;

//*
    var youWonMsg = "You Won.  ADD 5.";
    var collisionMsg = "Collision. MINUS 1.";
    var collectedGem = "Collected Gem.  ADD 2."

    //***********Win ******score *****************
    if ( player.y < 20) {
        scoreBump = 5;

        ctx.fillStyle = '#FFFFFF';
        ctx.font ="20px Verdana";
        ctx.fillText (oldMsg, 50, 40);

      totalScore = totalScore + scoreBump;

        ctx.fillStyle ="#0000FF";
        ctx.font ="20px Verdana";
        ctx.fillText (youWonMsg,50, 40);
        oldMsg = youWonMsg;

    //**********  Collision *****score *************
    } else if    (amyXPos < playerXMax
            &&    amyXMax > playerXPos
            &&    amyYPos < playerYMax
            &&    amyYMax > playerYPos)
            {   scoreBump = -1;

                ctx.fillStyle = '#FFFFFF';
                ctx.font ="20px Verdana";
                ctx.fillText (oldMsg, 50, 40);

                totalScore = totalScore + scoreBump;

                ctx.fillStyle ="#FF0000";
                ctx.font ="20px Verdana";
                ctx.fillText (collisionMsg,50, 40);
                oldMsg = collisionMsg;

    } else if    (benXPos < playerXMax
            &&    benXMax > playerXPos
            &&    benYPos < playerYMax
            &&    benYMax > playerYPos)
            {   scoreBump = -1;

                ctx.fillStyle = '#FFFFFF';
                ctx.font ="20px Verdana";
                ctx.fillText (oldMsg, 50, 40);

                totalScore = totalScore + scoreBump;

                ctx.fillStyle ="#FF0000";
                ctx.font ="20px Verdana";
                ctx.fillText (collisionMsg,50, 40);
                oldMsg = collisionMsg;

    } else if    (joeXPos < playerXMax
            &&    joeXMax > playerXPos
            &&    joeYPos < playerYMax
            &&    joeYMax > playerYPos)
            {   scoreBump = -1;

                ctx.fillStyle = '#FFFFFF';
                ctx.font ="20px Verdana";
                ctx.fillText (oldMsg, 50, 40);

                totalScore = totalScore + scoreBump;

                ctx.fillStyle ="#FF0000";
                ctx.font ="20px Verdana";
                ctx.fillText (collisionMsg,50, 40);
                oldMsg = collisionMsg;

//    ************Gem Collected*** score**********
    } else if    (gemGreenXPos < playerXMax
            &&    gemGreenXMax > playerXPos
            &&    gemGreenYPos < playerYMax
            &&    gemGreenYMax > playerYPos)
            {   scoreBump = 2;

                ctx.fillStyle = '#FFFFFF';
                ctx.font ="20px Verdana";
                ctx.fillText (oldMsg, 50, 40);

                totalScore = totalScore + scoreBump;

                ctx.fillStyle ="#008000";
                ctx.font ="20px Verdana";
                ctx.fillText (collectedGem,50, 40);
                oldMsg = collectedGem;

                gemGreen.sprite = 'images/Gem Green.png';
                gemGreen.x = 0;
                yRandom = Math.floor((Math.random() * 4) + 1);
                gemGreen.y = yRandom * (73);

    } else if    (gemOrangeXPos < playerXMax
            &&    gemOrangeXMax > playerXPos
            &&    gemOrangeYPos < playerYMax
            &&    gemOrangeYMax > playerYPos)
            {   scoreBump = 2;

                ctx.fillStyle = '#FFFFFF';
                ctx.font ="20px Verdana";
                ctx.fillText (oldMsg, 50, 40);

                totalScore = totalScore + scoreBump;

                ctx.fillStyle ="#008000";
                ctx.font ="20px Verdana";
                ctx.fillText (collectedGem,50, 40);
                oldMsg = collectedGem;

                gemOrange.sprite = 'images/Gem Orange.png';
                gemOrange.x = 0;
                yRandom = Math.floor((Math.random() * 4) + 1);
                gemOrange.y = yRandom * (73);


    } else if    (gemBlueXPos < playerXMax
            &&    gemBlueXMax > playerXPos
            &&    gemBlueYPos < playerYMax
            &&    gemBlueYMax > playerYPos)
            {   scoreBump = 2;

                ctx.fillStyle = '#FFFFFF';
                ctx.font ="20px Verdana";
                ctx.fillText (oldMsg, 50, 40);

                totalScore = totalScore + scoreBump;

                ctx.fillStyle ="#008000";
                ctx.font ="20px Verdana";
                ctx.fillText (collectedGem,50, 40);
                oldMsg = collectedGem;

                gemBlue.sprite = 'images/Gem Blue.png';
                gemBlue.x = 0;
                yRandom = Math.floor((Math.random() * 4) + 1);
                gemBlue.y = yRandom * (73);

    } else {player.y = playerYPos;
            player.x = playerXPos;
            };
};

Player.prototype.render = function() {
    //**********keep score
    var yourScore = "Your score is: ";

  //*********  Winning  *****score *************
        if (scoreBump === 5) {

        player.x = 200;
        player.y = 380;
        score = 0;
        scoreBump = 0;

        ctx.fillStyle = '#FFFFFF';
        ctx.font ="20px Verdana";
        ctx.fillText (yourScore + oldScore, 50, 600);

        ctx.fillStyle ="#000000";
        ctx.font ="20px Verdana";
        ctx.fillText (yourScore + totalScore, 50, 600);
        oldScore = totalScore;

//    *********  Collision *****score *************
    } else if (scoreBump === -1) {

        player.x = 200;
        player.y = 380;
        score = 0;
        scoreBump = 0;

        ctx.fillStyle = '#FFFFFF';
        ctx.font ="20px Verdana";
        ctx.fillText (yourScore + oldScore, 50, 600);

        ctx.fillStyle ="#000000";
        ctx.font ="20px Verdana";
        ctx.fillText (yourScore + totalScore, 50, 600);
        oldScore = totalScore;

    } else if (scoreBump === 2 ) {

        player.x = player.x;
        player.y = player.y;
        score = 0;
        scoreBump = 0;

        ctx.fillStyle = '#FFFFFF';
        ctx.font ="20px Verdana";
        ctx.fillText (yourScore + oldScore, 50, 600);

        ctx.fillStyle ="#000000";
        ctx.font ="20px Verdana";
        ctx.fillText (yourScore + totalScore, 50, 600);
        oldScore = totalScore;

    } else {

        ctx.fillStyle = '#FFFFFF';
        ctx.font ="20px Verdana";
        ctx.fillText (yourScore + oldScore, 50, 600);

        ctx.fillStyle ="#000000";
        ctx.font ="20px Verdana";
        ctx.fillText (yourScore + totalScore, 50, 600);
        oldScore = totalScore;

        player.x = player.x;
        player.y = player.y;
    };

ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(keys) {
//********handle keys input
//*The player will be moved by:
//        1.  Using the keys:
//            a.  "up" - move the player up
//            b.  "down" - move the player down
//            c.  "left" - move the player left
//            d.  "right" - move the player right
//*************************/

    switch(keys) {

        case 'left' :
        {   player.y = player.y;
            if (player.x > 50) {
                player.x = player.x - 100;
            } else {
                player.x = player.x;
            }
            break;
        }

        case 'right' :
        {  player.y = player.y;

           if (player.x < 380) {
                player.x = player.x + 100;
            } else {
                player.x = player.x;
            }
            break;
        }

        case 'up' :
        {   player.x = player.x;
            if (player.y > 83){
                player.y = player.y - 83;
            } else {
                player.y = -10;
                }
            break;
            }

        case 'down':
        {  player.x = player.x;
            if (player.y < 380) {
                player.y = player.y + 83;
            break;
            };
         };

     };

};
// This listens for key presses and sends the keys to your
// Player.handleInput() method.
document.addEventListener('keyup', function(e) {

    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
}
);




