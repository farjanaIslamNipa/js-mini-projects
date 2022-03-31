// const colors = ['rgba(133, 122, 200)', '#f15025', '#79c2fa', '#79fae9', '#79fa8e', '#e7fa79', '#faad79', '#eb79fa', '#fa7979'];
const colors = ['aqua', 'azure', 'bisque', 'brown', 'cadetblue', 'darkcyan', 'darkolivegreen', 'hotpink', 'mediumslateblue'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const background = document.getElementById('background_color');
background.style.backgroundColor = 'white';

btn.addEventListener('click', function() {
    let randomColor = getRandomNumber();
    background.style.backgroundColor = colors[randomColor];
    color.textContent = colors[randomColor];
    color.style.color = colors[randomColor];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}


// counter script

let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const counterBtn = document.querySelectorAll('.counterBtn');

counterBtn.forEach(function (counterBtn) {
    counterBtn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }else if(styles.contains('increase')){
            count++;
        }else{
            count = 0;
        }
        if (count < 0) {
            value.style.color = 'red';
        }else if(count > 0){
            value.style.color = 'green';
        }else {
            value.style.color = '#222'
        }
        value.textContent = count;
    }) 
})