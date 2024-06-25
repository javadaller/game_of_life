import { customStart } from './customGrid/customStart.js'

export function nav() {
    const custom = document.querySelector('#customNav')
    const random = document.querySelector('#randomNav')
    const customDisplay = document.querySelector('#customDisplay')
    const randomDisplay = document.querySelector('#randomDisplay')
    custom.addEventListener('click', () => {
        customDisplay.style.display = 'flex'
        randomDisplay.style.display = 'none'
    });
    random.addEventListener('click', () => {
        customDisplay.style.display = 'none'
        randomDisplay.style.display = 'flex'
    });

    //CUSTOM CONTROLLERS
    const customPlay = document.querySelector('#customPlay')
    customPlay.addEventListener('click', () => {
        customStart()
    })
}
