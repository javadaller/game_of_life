export function nav(): void {
    const custom: HTMLDivElement = document.querySelector('#customNav')
    const random: HTMLDivElement = document.querySelector('#randomNav')

    const customDisplay: HTMLDivElement = document.querySelector('#displayCustom')
    const randomDisplay: HTMLDivElement = document.querySelector('#displayRandom')

    custom.addEventListener('click', () => {
        customDisplay.style.display = 'flex'
        randomDisplay.style.display = 'none'
    })

    random.addEventListener('click', () => {
        customDisplay.style.display = 'none'
        randomDisplay.style.display = 'flex'
    })
}

