// Enemies our player must avoid
var Enemy = function () {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    var enemy;


    //console.log("app1");
    this.x = Math.floor((Math.random() * 500) + 0);
    var yRandom = Math.floor((Math.random() * 3) + 1);
    this.y = yRandom * (73);

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    };

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers. loc

    amy.x = amy.x + 10 *dt ;
        if (amy.x > 500 ) {
            amy.x = 50;};
    joe.x = joe.x + 10 *dt ;
        if (joe.x > 500 ) {
            joe.x = 50;};
    ben.x = ben.x + 10 *dt ;
        if (ben.x > 500 ) {
            ben.x = 50;};
};

//console.log("app3");
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {

    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
    var amy = new Enemy();
    var ben = new Enemy();
    var joe = new Enemy();
    var allEnemies =[amy,ben,joe];

var Player = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = 200;
    this.y = 380;
    var score = 0;
    //The image/sprite for our player, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-pink-girl.png';
};
// Update the player's position, required method for game
// Parameter: dt, a time delta between ticks

// Now instantiate your objects.
// Place all enemies objects in an array called allEnemies
// Place the player object in a variable called player


    var player = new Player();
    var score = 0;
//    console.log("app person");

Player.prototype.update = function() {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers. loc
    //********** Calculate score****
    // width for player is 50
    // height for player is 50
    // width for amy,joe,ben is 50
    // height for amy, joe, ben is 50
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
        console.log(" winner ");
        score = score + 5;
        alert ('You won!! ADD 5!! Your score is: ' + score)

        player.x = 200;
        player.y = 380;

    //**********  Collision *****score *************
    } else if    (amyXPos < playerXMax
            &&    amyXMax > playerXPos
            &&    amyYPos < playerYMax
            &&    amyYMax > playerYPos)
            {   score = score -1;
                alert ('Collision!! MINUS 1; Your score is: ' + score)

                player.x = 200;
                player.y = 380;

    } else if    (benXPos < playerXMax
            &&    benXMax > playerXPos
            &&    benYPos < playerYMax
            &&    benYMax > playerYPos)
            {
                console.log("app collision");
                score = score -1;
                alert ('Collision!! MINUS 1; Your score is: ' + score)

                player.x = 200;
                player.y = 380;

   } else if    ( joeXPos < playerXMax
            &&    joeXMax > playerXPos
            &&    joeYPos < playerYMax
            &&    joeYMax > playerYPos)
            {
                score = score -1;
                alert ('Collision!! MINUS 1; Your score is: ' + score)

                player.x = 200;
                player.y = 380;


    } else {player.y = player.y;
            player.x = player.x;
            };

    //***********************/

};


Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

    };

Player.prototype.handleInput = function(keys) {
console.log( this.x +" HANDEL begin " + this.y );

    switch(keys) {

        case 'left' :
        {   player.y = player. y;
            if (player.x > 100) {
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
                player.y =0;
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
console.log( player.x + " end handle "  + player.y);

};
console.log("app  4")

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    console.log( " listener enemyymax, playerYpos " );

    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    console.log("app10")
    player.handleInput(allowedKeys[e.keyCode]);

    console.log("app11")
}
);



