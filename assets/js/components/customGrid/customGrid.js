import { createDiv } from "../../helpers/functions.js"

export function customGrid() {
    //INIT
    const grid = document.querySelector('#customGrid')
    grid.innerHTML = ''

    //GRID SIZE
    const width = grid.offsetWidth - grid.offsetWidth%100
    const pixelSize = 20 //* Pixel size
    const nbOfPixels = (width/pixelSize)*(width/pixelSize)

    //ARRAY INIT
    const gridManager = {
        lifeArray : [],
        tempArray : []
    }

    for (let i = 0; i < Math.sqrt(nbOfPixels); i++) {
        const row = []
        for (let j = 0; j < Math.sqrt(nbOfPixels); j++) {
            row.push(0)
            createCell(grid,gridManager, i, j)
        }
        gridManager.lifeArray.push(row)
        gridManager.tempArray.push(row)
    }
    localStorage.setItem('gridManager',JSON.stringify(gridManager))
}

function createCell(grid,gridManager, x, y) {
    const div = createDiv('div', grid, '', 'cell', null, null)
    div.setAttribute('alive', 'false')
    div.setAttribute('posX', x.toString())
    div.setAttribute('posY', y.toString())
    div.id = 'cell'+x+y
    div.addEventListener('click', () => {
        cellActivated(div,gridManager,x,y)
    });
}

function cellActivated(div,gridManager,x,y) {
    const alive = div.getAttribute('alive')
    if (alive == 'false') {
        div.setAttribute('alive', 'true')
        div.classList.add('alive')
        gridManager.lifeArray[x][y] = 1
        gridManager.tempArray[x][y] = 1
        localStorage.setItem('gridManager',JSON.stringify(gridManager))
    }
    else {
        div.setAttribute('alive', 'false')
        div.classList.remove('alive')
        gridManager.lifeArray[x][y] = 0
        gridManager.tempArray[x][y] = 0
        localStorage.setItem('gridManager',JSON.stringify(gridManager))
    }
}
