# memory-card-game
A simple and interactive Memory Matching Card Game built using HTML, CSS, and JavaScript. This project tests and enhances the user’s memory skills through a fun card-flipping gameplay experience.

🧩 Overview
The Memory Card Game is a browser-based puzzle game where users flip two cards at a time to find matching pairs. The game includes animations, shuffle functionality, and a smooth reset mechanism.
It’s designed for beginners and intermediate web developers looking to strengthen their DOM manipulation and JavaScript event handling skills.

✨ Features
✅ Flip animation for each card
✅ Match detection logic
✅ Shake animation for mismatched cards
✅ Auto-shuffle after each win
✅ Responsive grid layout
✅ Randomized card order every time
✅ Lightweight and fast (no external frameworks)

⚙️ Game Logic Explanation
The JavaScript file (script.js) powers the game logic using DOM manipulation and event listeners.

🔹 Key Variables
cardOne & cardTwo: Store the two selected cards for comparison.
disableDeck: Prevents further clicks while animations are running.
matchCard: Tracks the number of matched pairs.

🔹 Main Functions
flipCard(e):
Handles user clicks and flips the selected card.
Stores the first and second cards for comparison.

matchCards(img1, img2):
Checks if both flipped cards match.
If matched → keeps them flipped.
If not → applies a shake animation and flips them back.

shuffleCard():
Randomly shuffles images each round and resets the board after the player wins.

🔹 Winning Condition
When all 8 pairs are matched, a congratulatory message is displayed and the deck reshuffles automatically.

🎮 How to Play
Click on any card to flip it.
Try to find and match pairs of identical images.
Matched cards will stay flipped; mismatched ones will shake and flip back.
Once all 8 pairs are matched, the game resets automatically with shuffled cards.

live link : 
