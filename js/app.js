/*jslint sloppy:true, white:true, plusplus:true*/

// Define global variables
var totalScore,scoreBump,i;

var Enemy = function () {
	// Variables applied to each of our instances go here,
	this.x = Math.floor((Math.random() * 500));
	var yRandom = Math.floor((Math.random() * 3) + 1);
	this.y = yRandom * (73);
	// The image/sprite for the enemies, this uses
	this.sprite = 'images/enemy-bug.png';
};

// Setup enemies
// All enemies objects are in an array called allEnemies
var allEnemies = [];
// Draw the enemy on the screen
for (i = 0; i < 3; i++) {
	allEnemies[i] = new Enemy();
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
	// Multiply any movement by the dt parameter
	// which will ensure the game runs at the same speed for
	// all computers. loc
    var enemyIdx = 0, enemyRandom = 0;
	for (enemyIdx = 0; enemyIdx < 3; enemyIdx++) {
		allEnemies[enemyIdx].x = allEnemies[enemyIdx].x + 30 * dt;

		if (allEnemies[enemyIdx].x > 500) {
			allEnemies[enemyIdx].x = 0;
			enemyRandom = Math.floor((Math.random() * 3) + 1);
			allEnemies[enemyIdx].y = enemyRandom * (73);
		}
	}

};

// Draw the enemy on the screen
Enemy.prototype.render = function () {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// ********* send random gem images to canvas *************
function randomSprite(gem, gemRandom) {
	if (gemRandom === 1) {
		gem.sprite = 'images/Gem Green.png';
	} else if (gemRandom === 2) {
		gem.sprite = 'images/Gem Blue.png';
	} else {
		gem.sprite = 'images/Gem Orange.png';
	}

}

var Gem = function () {
	// Variables applied to each of our instances go here,
	this.x = Math.floor((Math.random() * 500));
	var gemRandom = Math.floor((Math.random() * 4) + 1);
	this.y = gemRandom * (73);
	randomSprite(this, gemRandom);
	// this.sprite = 'images/Gem Blue.png';
};

// Setup Gems
var allGems = [];
for (i = 0; i < 4; i++) {
	allGems[i] = new Gem();
}

// Update the Gem's position
// Parameter: dt, a time delta between ticks
Gem.prototype.update = function (dt) {
	// Multiply any movement by the dt parameter
	// which will ensure the game runs at the same speed for
	// all computers. loc
    var gemIdx, gemRandom;
	for (gemIdx = 0; gemIdx < 4; gemIdx++) {

		allGems[gemIdx].x = allGems[gemIdx].x + 5 * dt;
		if (allGems[gemIdx].x > 500) {
			gemRandom = Math.floor((Math.random() * 4) + 1);

			randomSprite(allGems[gemIdx], gemRandom);
			allGems[gemIdx].y = gemRandom * (73);
			allGems[gemIdx].x = 0;
		}
	}
};

Gem.prototype.render = function () {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// All Gem objects are in an array called allGems
// Player class requires an update(), render() and
// a handleInput() method.

var Player = function () {

	this.x = 200;
	this.y = 380;

	// The image/sprite for our player, this uses
	// a helper we've provided to easily load images
	this.sprite = 'images/char-pink-girl.png';
};

// ********* send msg to canvas *************

// Place the player object in a variable called player
var player = new Player();

Player.prototype.update = function () {
	// ********** Calculate score****
	// width for player is 50
	// height for player is 50
	// width for amy,joe,ben is 50
	// height for amy, joe, ben is 50
	// ***********************************
	// *
    // check for enemy collision
    var enemyIdx, gemIdx;
    
	for (enemyIdx = 0; enemyIdx < 3; enemyIdx++) {
		// ***********Win ******score ****in water*************
		if (player.y < 30) {

			scoreBump = 5;
			totalScore = totalScore + scoreBump;

			enemyIdx = 5;
			// ********** Collision *****score *************
		} else if (
            Math.floor( (allEnemies[enemyIdx].x + 55) / 100) === Math.floor(player.x / 100) &&
            Math.floor(allEnemies[enemyIdx].y / 83) === Math.floor(player.y / 83)) {

			scoreBump = -1;
			totalScore = totalScore + scoreBump;

			enemyIdx = 5;
		}   //rc else {
			//rc player.y = player.y;
			//rc player.x = player.x;
		    //rc }
	}

	// check for gem collision
	for (gemIdx = 0; gemIdx < 4; gemIdx++) {
		// ***********Win ******score ****in water*************
		if (Math.floor(allGems[gemIdx].x / 100) === Math.floor(player.x / 100) &&
            Math.floor(allGems[gemIdx].y / 83) === Math.floor(player.y / 83)) {
			scoreBump = 2;
			totalScore = totalScore + scoreBump;

			allGems[gemIdx].x = 600;
			allGems[gemIdx].y = (Math.floor(Math.random() * 10) % 3 + 1) * 73;
		}
	}

};

Player.prototype.render = function () {

	// ********* Winning *****score *************
	if (scoreBump === 5) {

		player.x = 200;
		player.y = 380;
		scoreBump = 0;
		//rc i = 4;

		// ********* Collision *****score *************
	} else if (scoreBump === -1) {

		player.x = 200;
		player.y = 380;
		scoreBump = 0;

		// ********* Collected Gem *****score *************

	} else if (scoreBump === 2) {
		scoreBump = 0;

	} else {
		scoreBump = 0;

	}
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(keys) {
    "use strict";
	// ********handle keys input
	// *The player will be moved by:
	// 1. Using the keys:
	// a. "up" - move the player up
	// b. "down" - move the player down
	// c. "left" - move the player left
	// d. "right" - move the player right
	// *************************/

	switch (keys) {

	case 'left': {
		//rc player.y = player.y;
		if (player.x > 50) {
			player.x = player.x - 100;
		} //rc else {
          //rc player.x = player.x;
		  //rc }
		break;
	}

	case 'right': {
		//rc player.y = player.y;

		if (player.x < 380) {
			player.x = player.x + 100;
		}   //rc else {
			//rc player.x = player.x;
            //rc }
		break;
	}

	case 'up': {
		//rc player.x = player.x;
		if (player.y > 83) {
			player.y = player.y - 83;
		} else {
			player.y = -10;
		}
        break;
	}

	case 'down': {
		//rc player.x = player.x;
		if (player.y < 380) {
			player.y = player.y + 83;
		}
        break;
	}

	}

};
// This listens for key presses and sends the keys to your
// Player.handleInput() method.
document.addEventListener('keyup', function(e) {

	var allowedKeys = {
		37 : 'left',
		38 : 'up',
		39 : 'right',
		40 : 'down'
	};
	player.handleInput(allowedKeys[e.keyCode]);
});










