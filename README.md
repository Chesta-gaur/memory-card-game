# memory-card-game
A simple and interactive Memory Matching Card Game built using HTML, CSS, and JavaScript. This project tests and enhances the user’s memory skills through a fun card-flipping gameplay experience.

# 🧩 Overview :
The Memory Card Game is a browser-based puzzle game where users flip two cards at a time to find matching pairs. The game includes animations, shuffle functionality, and a smooth reset mechanism.
It’s designed for beginners and intermediate web developers looking to strengthen their DOM manipulation and JavaScript event handling skills.

# ✨ Features :
1. Flip animation for each card
2. Match detection logic
3. Shake animation for mismatched cards
4. Auto-shuffle after each win
5. Responsive grid layout
6. Randomized card order every time
7. Lightweight and fast (no external frameworks)

# ⚙️ Game Logic Explanation :
The JavaScript file (script.js) powers the game logic using DOM manipulation and event listeners.

# 🔹 Key Variables 
1. cardOne & cardTwo: Store the two selected cards for comparison.
2. disableDeck: Prevents further clicks while animations are running.
3. matchCard: Tracks the number of matched pairs.

# 🔹 Main Functions
flipCard(e):
Handles user clicks and flips the selected card.
Stores the first and second cards for comparison.

matchCards(img1, img2):
Checks if both flipped cards match.
If matched → keeps them flipped.
If not → applies a shake animation and flips them back.

shuffleCard():
Randomly shuffles images each round and resets the board after the player wins.

# 🔹 Winning Condition
When all 8 pairs are matched, a congratulatory message is displayed and the deck reshuffles automatically.

# 🎮 How to Play :
1. Click on any card to flip it.
2. Try to find and match pairs of identical images.
3. Matched cards will stay flipped; mismatched ones will shake and flip back.
4. Once all 8 pairs are matched, the game resets automatically with shuffled cards.

# live link : 
https://chesta-gaur.github.io/memory-card-game/
