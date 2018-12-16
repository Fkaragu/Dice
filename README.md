# Francis Thande Karagu
#### This is my Pig Dice Program, Friday 14th November 2018
#### By **{Francis T Karagu}**

## Description

The Pig Dice program is designed to be a fun game and compete with your partner:

* The game is designed to have 3 sections
	*  Player 1 section.
	*  Control section (New Game, Dice & Hold).
	*  Player 2 section.	

## Application link
Here is a live working link https://fkaragu.github.io/Dice/.

## Setup / Installation Requirements
* Requires a Web browser
* May require the user to have a github account to access it

## Behavior Driven Development BDD
### Who is the target User?
* Anyone who wants to have fun.

### Front-end/User Interface Logic Objectives
* A dice has numbers between 1 and 6. So there can only be values generated between those values.
* Player needs to roll the dice as many times as possible without rolling a 1. 
* Each dice roll needs to be added to the previous
* If hold is pressed points accumulated are to be added on total score.
* If 1 rolled then points accumaluted are lost and you are left with total score. It then becomes player two's turn.
* The first to reach 100 points wins and the game starts again.

### Back-end/Business logic Objectives
* Hide dice2  and hold 2.
* Generate random number between 1 and 6 randomly.
* Allocate points the player who rolls the dice.
* If hold is pressed then acculated points are added to total score and it becomes player two's turn.
* Enable dice and hold to next player and vice versa.
* Which ever player Total score reaches 100 points first wins and the game resets to start.

## Behaviour
| Behaviour                              | Input Example     | Output Example    |
|----               | :---:             |---: |
| The program should handle:    | When it receives:     | It should return  |                             
|:----:               | :---:             |:---: |
| Hide dice 2             | Button          | Invisible              |
| Hide hold 2             | Button          | Invisible              |
| If 1 is rolled          | Dice click          | Hide dice and hold button. Enable next player Dice and Hold    |
| If 1 is not rolled          | Dice click          | Accumulate points        |
| If hold is clicked          | Hold click          | Add accumulated points to score  |
| If 100 is reached          | Hold click          | Player wins  |

## Known Bugs
Nil at the moment.

## Technologies Used
I have used HTML, CSS, JavaScript and Jquery to develop the Pig Dice program. This was typed using Atom text-editor

## Support and contact details
In case of any problems reach me through my email:fkaragu@gmail.com

### License
Copyright (c) {2018} **{Francis Thande Karagu}**
Permission is hereby granted, free of charge, to any person willing to obtain a copy of this program for personal use. However if the program will be used for commercial gain then a royalty fee will have to be paid to the author of the program.
