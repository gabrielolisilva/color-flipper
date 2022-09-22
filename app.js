const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    const randomValue = randomNumber();

    document.body.style.backgroundColor = colors[randomValue];
    color.textContent = colors[randomValue]
})


function randomNumber(){
    return Math.floor(Math.random() * colors.length);
}