import { randomIntFromInterval } from '../../helpers/functions.js'

export function customStart() {
    const gridManagerJSON = localStorage.getItem('gridManager')
    const gridManager = JSON.parse(gridManagerJSON);
    console.log(gridManager)
    const rowLength = gridManager.lifeArray.length
    const columnLength = gridManager.lifeArray[0].length

    for(let y=0; y<columnLength; y++) {
        for(let x=0; x< rowLength; x++) {
            checkNeighbors(gridManager,x,y)
        }
    }
}

function checkNeighbors(gridManager,x,y) {
    if(gridManager.lifeArray[x][y] == 1) {
        let total = 0
        for(let i=-1; i<3; i++) {
            for(let j=-1; j<3; j++) {
                const newX = i >= 0? x+i : 0
                const newY = j >= 0? y+j : 0
                console.log('#cell'+newX+newY)
                const isAlive = document.querySelector('#cell'+newX+newY).getAttribute('alive')
                total = isAlive == 'true'? total+1 : total+0
            }
        }

        if(total == 2) {
            //live
        } else if(total == 3) {
            //duplicate
            duplicate(gridManager,x,y)
        } else {
            //die
            gridManager.tempArray[x][y] = 0
            const deadCell = document.querySelector('#cell'+x+y)
            deadCell.setAttribute('alive', 'false')
            deadCell.classList.remove('alive')
        }
    }
}

function duplicate(gridManager,x,y) {
    let random = randomIntFromInterval()
    for(let i=-1; i<3; i++) {
        for(let j=-1; j<3; j++) {
            const newX = i >= 0? x+i : 0
            const newY = j >= 0? y+j : 0
            const isAlive = document.querySelector('#cell'+newX+newY).getAttribute('alive')
            if(isAlive == 'false' && random <= 0) {
                gridManager.tempArray[x][y] = 1
                const newCell = document.querySelector('#cell'+x+y)
                newCell.setAttribute('alive', 'true')
                newCell.classList.add('alive')
            }
        }
        random-=1
    }
}