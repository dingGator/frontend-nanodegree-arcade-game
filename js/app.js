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
}

// All enemies objects are in an array called allEnemies
    var amy = new Enemy();
    var ben = new Enemy();
    var joe = new Enemy();
    var allEnemies =[amy,ben,joe];

// Draw the enemy on the screen
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

Player.prototype.update = function() {

    //********** Calculate score****
    // width for player is 50
    // height for player is 50
    // width for amy,joe,ben is 50
    // height for amy, joe, ben is 50
    //***********************************
    var playerXMax = this.x + 50;
    var playerYMax = this.y + 50;

    var amyXMax = amy.x + 50;
    var amyYMax = amy.y + 50;

    var joeXMax = joe.x + 50;
    var joeYMax = joe.y + 50;

    var benXMax = ben.x + 50;
    var benYMax = ben.y + 50;


    var playerYPos = player.y;
    var playerXPos = player.x;

    var amyXPos = amy.x;
    var amyYPos = amy.y;

    var joeXPos = joe.x;
    var joeYPos = joe.y;

    var benXPos = ben.x;
    var benYPos = ben.y;


    //***********Win ******score *****************
    if ( player.y < 20) {
        scoreBump = 5;
    //**********  Collision *****score *************
    } else if    (amyXPos < playerXMax
            &&    amyXMax > playerXPos
            &&    amyYPos < playerYMax
            &&    amyYMax > playerYPos)
            {   scoreBump = -1;

    } else if    (benXPos < playerXMax
            &&    benXMax > playerXPos
            &&    benYPos < playerYMax
            &&    benYMax > playerYPos)
            {   scoreBump = -1;

    } else if    ( joeXPos < playerXMax
            &&    joeXMax > playerXPos
            &&    joeYPos < playerYMax
            &&    joeYMax > playerYPos)
            {   scoreBump = -1;

    } else {player.y = player.y;
            player.x = player.x;
            };

    //***********************/

};


Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    //**********keep score
    totalScore = totalScore + scoreBump;
    //**********  Winning  *****score *************

    if (scoreBump >= 5) {
        alert ('You won!! ADD 5!! Your score is: ' + totalScore)
        player.x = 200;
        player.y = 380;
        score = 0;
        scoreBump = 0;

    //**********  Collision *****score *************

    } else if (scoreBump < 0) {
        alert ('Collision!! MINUS 1; Your score is: ' + totalScore)
        player.x = 200;
        player.y = 380;
        score = 0;
        scoreBump = 0;
    };

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



