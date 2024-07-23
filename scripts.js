const buttonRandom = document.getElementById('buttonRandom');
const circleColor = document.getElementById('circle-result');
const result = document.getElementById('result');

const randomColor = () => {
    let hashtag = '#';  // Use 'let' instead of 'const'
    const numbers = '0123456789ABCDEF';

    for (let i = 0; i < 6; i++) {
        hashtag += numbers[Math.floor(Math.random() * 16)];
    }

    return hashtag;
};

buttonRandom.addEventListener('click', function () {
    const color = randomColor();
    circleColor.style.backgroundColor = color;  // Correct property
    document.body.style.color = color;
    result.style.color = color;  

});

