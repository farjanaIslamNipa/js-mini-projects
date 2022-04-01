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

// review scripts
const reviews = [
    {
        id: 1,
        name: 'sarah jones',
        job: 'web developer',
        img: 'https://randomuser.me/api/portraits/women/26.jpg',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora ratione laboriosam, odit iusto maiores qui sunt sapiente architecto, provident quaerat suscipit consequuntur ut, facilis nulla porro enim quibusdam quisquam quidem! Dolore temporibus reiciendis laudantium delectus.'
    },
    {
        id: 2,
        name: 'david warner',
        job: 'software engineer',
        img: 'https://randomuser.me/api/portraits/men/4.jpg',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora ratione laboriosam, odit iusto maiores qui sunt sapiente architecto, suscipit consequuntur ut, facilis nulla porro enim quibusdam quisquam quidem! laudantium delectus. Fugiat distinctio reprehenderit exercitationem ut.'
    },
    {
        id: 3,
        name: 'mili ayer',
        job: 'UX Designer',
        img: 'https://randomuser.me/api/portraits/women/63.jpg',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora ratione laboriosam, odit iusto maiores qui sunt sapiente architecto, provident quaerat suscipit consequuntur ut, facilis nulla porro enim quibusdam quisquam quidem! Dolore temporibus reiciendis laudantium delectus. Fugiat distinctio reprehenderit.'
    },
    {
        id: 4,
        name: 'Andrew flintof',
        job: 'Managing director',
        img: 'https://randomuser.me/api/portraits/men/92.jpg',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora ratione laboriosam, odit iusto maiores qui sunt quaerat suscipit consequuntur ut, facilis nulla porro enim quibusdam quisquam quidem! Dolore temporibus reiciendis laudantium delectus. Fugiat distinctio reprehenderit exercitationem ut.'
    },
    {
        id: 5,
        name: 'farjana islam',
        job: 'web developer',
        img: 'https://randomuser.me/api/portraits/women/44.jpg',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora ratione laboriosam, odit iusto maiores qui sunt sapiente architecto, provident quaerat suscipit consequuntur ut, facilis nullbus reiciendis laudantium delectus. Fugiat distinctio reprehenderit exercitationem ut. Dolore temporibus reiciendis laudantium delectus. Fugiat distinctio reprehenderit exercitationem ut'
    },
    {
        id: 6,
        name: 'rayan dull',
        job: 'programmer',
        img: 'https://randomuser.me/api/portraits/men/11.jpg',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora ratione laboriosam, odit iusto maiores qui sunt sapiente architecto, provident consequuntur ut, facilis nulla porro enim quibusdam quisquam quidem! Dolore temporibus reiciendis reprehenderit exercitationem ut.'
    },
    {
        id: 7,
        name: 'anas ahmed',
        job: 'banker',
        img: 'https://randomuser.me/api/portraits/men/57.jpg',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora ratione laboriosam, odit iusto maiores qui sunt sapiente architecto, provident quaerat suscipit consequuntur ut, facilis nulla porro enim quibusdam quisquam quidem! '
    },
    {
        id: 8,
        name: 'sadman ahnaf',
        job: 'cricketer',
        img: 'https://randomuser.me/api/portraits/women/60.jpg',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora ratione laboriosam, odit iusto maiores qui sunt sapiente emporibus reiciendis laudantium delectus. Fugiat distinctio reprehenderit exercitationem ut. Dolore temporibus reiciendis laudantium delectus. Fugiat distinctio reprehenderit exercitationem ut'
    },
    {
        id: 9,
        name: 'Yasha khan',
        job: 'Beautician',
        img: 'https://randomuser.me/api/portraits/women/84.jpg',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora ratione laboriosam, odit iusto maiores qui sunt sapiente architecto, provident quaerat suscipit consequuntur ut, facilis nulla porro enim quibusdam quisquam quidem! Dolore temporibus reiciendis laudantium delectus. Fugiat distinctio reprehenderit exer.'
    },
    {
        id: 10,
        name: 'mahveer nawshad',
        job: 'robot scientist',
        img: 'https://randomuser.me/api/portraits/men/86.jpg',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora ratione laboriosam, odit iusto maiores qui sunt sapiente  ut, facilis nulla porro enim quibusdam quisquam quidem! Dolore temporibus reiciendis laudantium delectus. Fugiat distinctio reprehenderit exercitationem ut reprehenderit exercitationem ut.'
    },
]
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function(){
    showReview()
})

// reusable function
function showReview(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text
}

// show next 
nextBtn.addEventListener('click', function(){
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showReview();
    console.log(reviews.length );
})
// show prev 
prevBtn.addEventListener('click', function(){
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showReview();
})

// random person
randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showReview();
})