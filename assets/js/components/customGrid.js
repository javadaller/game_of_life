import { createDiv } from "../helpers/functions";
export function customGrid() {
    const grid = document.querySelector('#gridCustom');
    grid.innerHTML;
    const width = grid.offsetWidth;
    const nbOfPixels = width == 400 ? width : width * 0.5;
    const lifeArray = [];
    for (let i = 0; i < Math.sqrt(nbOfPixels); i++) {
        const row = [];
        for (let j = 0; j < Math.sqrt(nbOfPixels); j++) {
            row.push(0);
            createCell(grid, i, j);
        }
        lifeArray.push(row);
    }
    const tempArray = Array.from(lifeArray);
    // for(let i = 0; i < nbOfPixels; i++) {
    //    const div: HTMLElement =  createDiv('div',grid,'','cell',null,null)
    //    div.setAttribute('alive','false')
    //    div.addEventListener('click', () => {
    //     cellActivated(div)
    //    })
    // }
}
function createCell(grid, x, y) {
    const div = createDiv('div', grid, '', 'cell', null, null);
    div.setAttribute('alive', 'false');
    div.setAttribute('posX', x.toString());
    div.setAttribute('posY', y.toString());
    div.addEventListener('click', () => {
        cellActivated(div);
    });
}
function cellActivated(div) {
    const alive = div.getAttribute('alive');
    if (alive == 'false') {
        div.setAttribute('alive', 'true');
        div.classList.add('alive');
    }
    else {
        div.setAttribute('alive', 'false');
        div.classList.remove('alive');
    }
}
