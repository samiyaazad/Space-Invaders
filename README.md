## Introduction 

This is a web-game project named Space Invaders. I made it in JavaScript, HTML and CSS. I'm on a mission to make all my favourite games from when I was a kid. So, this project is part of my mission. 
I mainly focused on keeping the game as simple and easy as possible so that everyone can enjoy it.


## Technologies 

I used :
        - VS Code
        - JavaScript
        - CSS
        - HTML


## Features 

I did add some features, but I might also add :
                                              - Some effects 
                                              - More levels
                                              - Have to work on the visual


## KeyBoard Shortcuts 

To  play :
          - Arrow Left  → Move ship left
          - Arrow Right → Move ship right
          - Space       → Shoot bullet
          - R           → Restart game


## The Process 

               - Set up Canvas

                        * Created an HTML canvas element
                        * Set width and height using JavaScript
                        * Got the drawing context (2D)

               - Create Game Variables

                        * Defined tile size, rows, columns
                        * Set up player (ship) position and size
                        * Created arrays for aliens and bullets

                        ![Calculation](images/Calculation.jpg)

               - Load Images

                        * Loaded ship and alien images using JavaScript Image()
                        * Drew them on the canvas

               - Game Loop

                        * Used requestAnimationFrame(update)
                        * Cleared the canvas every frame
                        * Redrew all elements (ship, aliens, bullets)

               - Player Movement

                        * Used keyboard events (ArrowLeft, ArrowRight)
                        * Updated ship position with boundaries

               - Shooting System

                        * Created bullets when the spacebar is pressed
                        * Stored bullets in an array
                        * Updated bullet movement every frame

               - Enemy System

                        * Generated aliens in rows and columns
                        * Made them move left and right
                        * Dropped them down when hitting walls

               - Collision Detection

                        * Checked if the bullet hits the alien
                        * Removed alien and increased score

               - Game Over Logic

                        * Ended the game when the aliens reach player
                        * Displayed “Game Over” message

               - Restart Feature

                        * Reset game variables
                        * Restarted game loop


## What I learned 

In this project, I learned how to build a complete 2D game using JavaScript, HTML, and CSS. I used the HTML canvas to draw and animate game elements in real time.

I learned how to:

                * Set up and control a canvas using JavaScript
                * Load and display images (like the ship and aliens)
                * Create a game loop using requestAnimationFrame
                * Move the player using keyboard input
                * Shoot bullets and manage multiple objects dynamically
                * Detect collisions between bullets and enemies
                * Generate enemies in rows and columns
                * Keep track of the score and update it in real time
                * Handle game states like game over and restart

This project helped me understand how real-time games work, including rendering, animation, and event handling.


##Preview : 



https://github.com/user-attachments/assets/36e7c3f8-28ce-4bb4-82b6-8f12f5649b36

