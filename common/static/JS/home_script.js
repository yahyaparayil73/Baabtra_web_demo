

window.addEventListener('DOMContentLoaded', (event) => {
    const numberDivs = document.querySelectorAll('.number_effect');
    const numbers = [20, 8, 1000, 1000]; // Custom numbers for each div
    numberDivs.forEach((div, index) => {
        const value = numbers[index];
        div.style.setProperty('--num', value);
        if (index === 1) {
            div.classList.add('no-plus'); // Add a class to the second div
        }
    });
});