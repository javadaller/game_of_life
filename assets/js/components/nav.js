export function nav() {
    const custom = document.querySelector('#customNav');
    const random = document.querySelector('#randomNav');
    const customDisplay = document.querySelector('#displayCustom');
    const randomDisplay = document.querySelector('#displayRandom');
    custom.addEventListener('click', () => {
        customDisplay.style.display = 'flex';
        randomDisplay.style.display = 'none';
    });
    random.addEventListener('click', () => {
        customDisplay.style.display = 'none';
        randomDisplay.style.display = 'flex';
    });
}
