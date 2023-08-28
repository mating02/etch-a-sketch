const container = document.querySelector('.grid');
let holding = false;
function createGrid(numSquares) {
    let row;
    let square;
    let heightRow;
    let widthSquare;
    for (let i = 0; i < numSquares; i++) {
        row = document.createElement('div');
        row.classList.add('row');
        heightRow = parseInt(400 / numSquares);
        row.setAttribute('style', `height: ${heightRow}px;`)
        container.appendChild(row);
        for (let j = 0; j < numSquares; j++) {
            square = document.createElement('div');
            square.classList.add('square');
            square.classList.add(`square-${i}-${j}`);
            widthSquare = parseInt(400 / numSquares);
            square.setAttribute('style', `width: ${widthSquare}px;`)
            row.appendChild(square);
        }
    }
}
createGrid(16);


const boxes = document.querySelectorAll('.square');
squares = Array.from(boxes);
squares.forEach((square) => {
    square.addEventListener('mousedown', () => {
        event.preventDefault()
        holding = true;
        if (holding) {
            square.style.backgroundColor = 'rgb(142, 78, 201)';
        }
    });

    square.addEventListener('mouseup', () => { 
        holding = false;
    });

    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'rgb(142, 78, 201)';
    });
});

