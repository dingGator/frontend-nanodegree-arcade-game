frontend-nanodegree-arcade-game
===============================

1.  Game Objective:
	A.  From the starting position:
		a.	Move the player toward the water.
		b.	Avoid collision with the traffic of bugs.

2.  HOW TO PLAY:
	A.	Open the    index.html    to the browser.
	B.	Player will be at the starting position:
		1.	Center lowest square, in the grass area
	C.	The bugs will automatically move across the screen on the three stone pathways.
	D.	The player will be moved by:
		1.	Using the keys:
			a. 	"up" - move the player up.
			b.	"down" - move the player down.
			c.  "left" - move the player left.
			d.  "right" - move the player right.
	E.	Your score will start at zero.
	F.	There are three bugs at any moment in time, moving across the screen.
	G.  There are three Gems at any moment in time, moving across the screen.
	H.	When the player collides with a bug, the player will get the message:
		1.  "Collision. MINUS 1." at the top of the page.
		2.	1 points will be MINUS from the total score.
		3.	The player will be sent back to the player's starting position.
	I.  When player get to the water, the player will get the message:
		1.  "You Won.  ADD 5." at the top of the page.
		2.	 5 points will be ADD to the total score.
		3.	 The player will be sent back to the player's starting position.
	J.  When player collect a Gem, the player will get a message:
		1.   "Collected Gem.  ADD 2." at the top of the page.
		2.	 2 points will be ADD to the total score.
		3.	 The Gem will display and start back at the beginning the row it was on.

	In Chrome browser:  The player will not appear in the water.
	In Firefox browser:  The player will appear in the water before the ALERT message appears.

3.	SCORE:
	A.  When the player collides with a bug, the player will get the message:
		1.  1 point will be subtracted from the total score.
		2.  "Your Score is: XXX" at the bottom of the page.
			a.  XXX is the player's total score.

	B.  When the player get to the water,
		1.  5 points will be added to the total score.
		2.  "Your Score is: XXX" at the bottom of the page.
			a.  XXX is the player's total score.

	C.  When the player get to a Gem,
		1.  2 points will be added to the total score.
		2.  "Your Score is: XXX" at the bottom of the page.
			a.  XXX is the player's total score.

4.  GAME RESET:
	A.  The player will go back to the starting position,
		1.	when the player collides with a bug.
		2.  when the player reaches the water.

5.	MESSAGES:
	A. 	When you reach the water:
		1.  "You won.  ADD 5.
		2.  "Your score is:  XXX "
			a.	XXX is your total score.
	B.  When you collide with a bug:
		1.	"Collision.  MINUS 1.
		2.  "Your score is:  XXX "
			a.  XXX is your total score.
	C.  When you collect a Gem:
		1.	"Collected Gem.  ADD 2.
		2.  "Your score is: XXX "
			a.  XXX is your total score.

6.  Enjoy the game.