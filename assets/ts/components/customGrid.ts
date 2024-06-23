import { createDiv } from "../helpers/functions"

export function customGrid():void {
    const grid: HTMLDivElement = document.querySelector('#gridCustom')
    grid.innerHTML

    const width: number = grid.offsetWidth
    const nbOfPixels: number = width == 400? width : width*0.5

    const lifeArray: Array<Array<number>> = []

    for(let i = 0; i < Math.sqrt(nbOfPixels); i++) {
        const row: Array<number> = []
        for(let j = 0; j < Math.sqrt(nbOfPixels); j++) {
            row.push(0)
            createCell(grid,i,j)
        }
        lifeArray.push(row)
    }

    const tempArray: Array<Array<number>> = Array.from(lifeArray)

    // for(let i = 0; i < nbOfPixels; i++) {
    //    const div: HTMLElement =  createDiv('div',grid,'','cell',null,null)
    //    div.setAttribute('alive','false')
    //    div.addEventListener('click', () => {
    //     cellActivated(div)
    //    })
    // }
}

function createCell(grid: HTMLElement,x: number,y: number): void {
    const div: HTMLElement =  createDiv('div',grid,'','cell',null,null)
    div.setAttribute('alive','false')
    div.setAttribute('posX',x.toString())
    div.setAttribute('posY',y.toString())
    div.addEventListener('click', () => {
    cellActivated(div)
    })
}

function cellActivated(div): void {
    const alive: string = div.getAttribute('alive')

    if(alive == 'false') {
        div.setAttribute('alive','true')
        div.classList.add('alive')
    } else {
        div.setAttribute('alive','false')
        div.classList.remove('alive')
    }
}