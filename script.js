const container = document.querySelector('.grid');
let holding = false;
let erase = false;
let randomize = false;
const clearBtn = document.getElementById('clear');
function randomizeColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(numSquares) {
    container.innerHTML = '';
    let row;
    let square;
    let heightRow;
    let widthSquare;
    for (let i = 0; i < numSquares; i++) {
        row = document.createElement('div');
        row.classList.add('row');
        heightRow = 400 / numSquares;
        row.setAttribute('style', `height: ${heightRow}px;`)
        container.appendChild(row);
        for (let j = 0; j < numSquares; j++) {
            square = document.createElement('div');
            square.classList.add('square');
            widthSquare = 500 / numSquares;
            square.setAttribute('style', `width: ${widthSquare}px;`)
            row.appendChild(square);
        }
    }
    const squares = document.querySelectorAll('.square');
    clearBtn.addEventListener('click', () => {
        squares.forEach((square) => {
            square.style.backgroundColor = 'blanchedalmond';
        })
    });
}
function enableDraw() {
    const boxes = document.querySelectorAll('.square');
    boxes.forEach((square) => {
        square.addEventListener('dblclick', () => {
            event.preventDefault()
            holding = true;
            if (erase) {
                square.style.backgroundColor = 'blanchedalmond';
            }
            else if (randomize) {
                square.style.backgroundColor = randomizeColor();
            }
            else {
                square.style.backgroundColor = 'rgb(142, 78, 201)';
            }
        });

        square.addEventListener('mouseup', () => {
            holding = false;
        });

        square.addEventListener('mouseover', () => {
            if (holding) {
                if (erase) {
                    square.style.backgroundColor = 'blanchedalmond';
                }
                else if (randomize) {
                    square.style.backgroundColor = randomizeColor();
                }
                else {
                    square.style.backgroundColor = 'rgb(142, 78, 201)';
                }
            }
        });

    });
}

createGrid(16);
enableDraw();

const numSquaresRange = document.getElementById('slider');
const pixel = document.getElementById('pixels');
const eraserBtn = document.getElementById('eraser');
const pencilBtn = document.getElementById('pencil');
const randomBtn = document.getElementById('random');

numSquaresRange.addEventListener('input', () => {
    const currentVal = parseInt(numSquaresRange.value);
    pixel.textContent = currentVal + ' x ' + currentVal;
    createGrid(currentVal);
    enableDraw();
});

eraserBtn.addEventListener('click', () => {
    erase = true;
});

pencilBtn.addEventListener('click', () => {
    erase = false;
    randomize = false;
});

randomBtn.addEventListener('click', () => {
    randomize = true;
    erase = false;
});
