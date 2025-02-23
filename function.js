const boxes = document.querySelectorAll(".board div");
let firstTurn = true;

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function () {
        if (firstTurn) {
            boxes[i].innerText = 'X';
        } else {
            boxes[i].innerText = 'O';
        }
        firstTurn = firstTurn ? false : true;
    })
}