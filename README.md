frontend-nanodegree-arcade-game
===============================

Students should use this rubric: https://www.udacity.com/course/viewer#!/c-ud015/l-3072058665/m-3072588797

for self-checking their submission.


1.  Game Objective:
	A.  From the starting position:
		a.	Move the player toward the water.
		b.	Avoid collision with the traffic of bugs.

2.  HOW TO PLAY:
	A.	Open the index.html in the browser.
	B.	Player will be at the starting position:
		1.	Center lowest square, in the grass area
	C.	The bugs will automatically move across the screen on the three stone pathway.
	D.	The player will be moved by:
		1.	Using the keys:
			a. 	"up" - move the player up
			b.	"down" - move the player down
			c.  "left" - move the player left
			d.  "right" - move the player right
	C.	Total score will start at zero.
	D.	There are three bugs at any moment in time, moving across the screen.
	E.	When the player collide with a bug, the player will get an ALERT message.
		a.	1 points will be MINUS from the total score.
		b.	The player will be sent back to the starting position.
	F.  When player get to the water, the player will get an ALERT message.
		a.	5 points will be ADD to to the total score.
		b.	The player will be sent back to the starting position.
	In Chrome browser:  The player will not appear in the water.
	In Firefox browser:  The player will appear in the water before the ALERT message appears.

3.	SCORE:
	A.  When the player collide with a bug
		a.  1 point will be subtracted from the total score.
	B.  When the player get to the water
		b.  5 points will be added to the total score.

4.  GAME RESET:
	A.  The player will go back to the starting position
		1.	if player collides with a bug
		2.  if player reaches the water

5.	ALERT MESSAGES:
	A. 	When you reach the water:
		1.  "You won!! ADD 5!! Your score is:  X "
			a.	X is your total score.
	B.  When you collide with a bug:
		1.	"'Collision!! MINUS 1; Your score is:  X "
			a.  X is your total score.

6.  Enjoy the game.