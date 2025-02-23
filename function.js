const boxes = document.querySelectorAll(".board div");
let firstTurn = true;
let end = false;

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function () {
        if (!end) {
            if (firstTurn) {
                boxes[i].innerText = 'X';
            } else {
                boxes[i].innerText = 'O';
            }
            firstTurn = firstTurn ? false : true;
            checkBoard('X');
            checkBoard('O');
        }
    })
}

function checkBoard(char) {
    let win = false;
    if (boxes[0].innerText == char &&
        boxes[1].innerText == char &&
        boxes[2].innerText == char) {
            win = true;
    }

    if (boxes[3].innerText == char &&
        boxes[4].innerText == char &&
        boxes[5].innerText == char) {
            win = true;
    }

    if (boxes[6].innerText == char &&
        boxes[7].innerText == char &&
        boxes[8].innerText == char) {
            win = true;
    }

    if (boxes[0].innerText == char &&
        boxes[3].innerText == char &&
        boxes[6].innerText == char) {
            win = true;
    }

    if (boxes[1].innerText == char &&
        boxes[4].innerText == char &&
        boxes[7].innerText == char) {
            win = true;
    }

    if (boxes[2].innerText == char &&
        boxes[5].innerText == char &&
        boxes[8].innerText == char) {
            win = true;
    }

    if (boxes[0].innerText == char &&
        boxes[4].innerText == char &&
        boxes[8].innerText == char) {
            win = true;
    }

    if (boxes[2].innerText == char &&
        boxes[4].innerText == char &&
        boxes[6].innerText == char) {
            win = true;
    }

    if (win) {
        alert(`Player ${char} wins!!! Congratulations!!!`);
        end = true;
    }
}