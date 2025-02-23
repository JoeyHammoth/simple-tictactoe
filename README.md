## Simple Tic-Tac-Toe Game

### Overview
This is a simple **Tic-Tac-Toe** game built using **HTML, CSS, and JavaScript**. It allows two players to take turns marking spaces on a 3x3 grid. The first player to align three marks in a row, column, or diagonal wins!

### Features
- Built with **vanilla HTML, CSS, and JavaScript** (no libraries or frameworks required).
- Supports **two players** (Player 1: X, Player 2: O).
- **Automatic win detection** with an alert notifying the winner.
- Minimalistic UI with a responsive grid layout.
- Simple and clean codebase.

### Installation
To play the game, you can either:
1. Clone this repository:
   ```sh
   git clone https://github.com/your-username/simple-tic-tac-toe.git
   cd simple-tic-tac-toe
   ```
2. Open `index.html` in any modern web browser.

### How to Play
1. The first player (`X`) clicks on an empty box.
2. The second player (`O`) then takes their turn.
3. The game checks for a winner after every move.
4. If a player wins, an alert will notify them.
5. Refresh the page to restart the game.

### File Structure
```
/simple-tic-tac-toe
│── index.html      # Main HTML file
│── style.css       # Styling for the game board
│── function.js     # JavaScript logic for game interaction
```

### Code Breakdown
#### `index.html`
- Defines the board layout using a **3x3 grid**.
- Includes player instructions and copyright information.
- Loads `style.css` and `function.js`.

#### `style.css`
- Uses **CSS Grid** to create the board layout.
- Styles the game with **seagreen and white colors**.
- Ensures a clean and modern look.

#### `function.js`
- Handles **player turns** and **click events**.
- Implements **win-checking logic** to detect victory conditions.
- Displays an alert when a player wins.

### Screenshots


### License
This project is licensed under the **MIT License**.
