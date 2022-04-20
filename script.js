
// Toggle navbar scripts
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
    links.classList.toggle('show-links');
})


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
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora ratione laboriosam, odit iusto maiores qui sunt sapiente architecto, suscipit consequuntur ut, facilis nulla porro enim quibusdam quisquam quidem! laudantium delectus. Fugiat distinctio reprehenderit exercitationem.'
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
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora ratione laboriosam, odit iusto maiores qui sunt quaerat suscipit consequuntur ut, facilis nulla porro enim quibusdam quisquam quidem! Dolore temporibus reiciendis laudantium delectus. Fugiat distinctio reprehenderit exercitationem.'
    },
    {
        id: 5,
        name: 'farjana islam',
        job: 'web developer',
        img: 'https://randomuser.me/api/portraits/women/44.jpg',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora ratione laboriosam, odit iusto maiores qui sunt sapiente architecto, provident quaerat suscipit consequuntur ut, facilis nullbus reiciendis laudantium delectus. Fugiat distinctio reprehenderit exercitationem ut. Dolore temporibus reiciendis laudantium delectus. Fugiat distinctio reprehenderit exercitationem.'
    },
    {
        id: 6,
        name: 'rayan dull',
        job: 'programmer',
        img: 'https://randomuser.me/api/portraits/men/11.jpg',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora ratione laboriosam, odit iusto maiores qui sunt sapiente architecto, provident consequuntur ut, facilis nulla porro enim quibusdam quisquam quidem! Dolore temporibus reiciendis reprehenderit exercitationem.'
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
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora ratione laboriosam, odit iusto maiores qui sunt sapiente emporibus reiciendis laudantium delectus. Fugiat distinctio reprehenderit exercitationem ut. Dolore temporibus reiciendis laudantium delectus. Fugiat distinctio reprehenderit exercitationem.'
    },
    {
        id: 9,
        name: 'Yasha khan',
        job: 'Beautician',
        img: 'https://randomuser.me/api/portraits/women/84.jpg',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora ratione laboriosam, odit iusto maiores qui sunt sapiente architecto, provident quaerat suscipit consequuntur ut, facilis nulla porro enim quibusdam quisquam quidem! Dolore temporibus reiciendis laudantium delectus. Fugiat distinctio reprehenderit.'
    },
    {
        id: 10,
        name: 'mahveer nawshad',
        job: 'robot scientist',
        img: 'https://randomuser.me/api/portraits/men/86.jpg',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora ratione laboriosam, odit iusto maiores qui sunt sapiente  ut, facilis nulla porro enim quibusdam quisquam quidem! Dolore temporibus reiciendis laudantium delectus. Fugiat distinctio reprehenderit exercitationem ut reprehenderit exercitationem.'
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


// sidebar
const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-sidebar');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', function(){
    // if (sidebar.classList.contains('show-sidebar')) {
    //     sidebar.classList.remove('show-sidebar')
    // }
    // else{
    //     sidebar.classList.add('show-sidebar')
    // }
    sidebar.classList.toggle('show-sidebar');
})

closeBtn.addEventListener('click', function(){
    sidebar.classList.remove('show-sidebar')
})



// MOdal scripts
const openModalBtn = document.querySelector('.create-modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const modalCloseBtn = document.querySelector('.modal-close-btn');

openModalBtn.addEventListener('click', function(){
    modalOverlay.classList.toggle('open-modal')
})

modalCloseBtn.addEventListener('click', function(){
    modalOverlay.classList.remove('open-modal')
})

// collapse scripts

const questions = document.querySelectorAll('.question');
questions.forEach(function(question){
    const collapseBtn = question.querySelector('.question-btn');
    collapseBtn.addEventListener('click', function(){

        questions.forEach(function(item){
            if(item !== question) {
                item.classList.remove('show-text');
            }
        })
        question.classList.toggle('show-text');
    })
})


// video project css
const videoBtn = document.querySelector('.switch-btn');
const videoContainer = document.querySelector('.video-container');

videoBtn.addEventListener('click', function(){
    if(!videoBtn.classList.contains('slide')){
        videoBtn.classList.add('slide');
        videoContainer.pause();
    }else{
        videoBtn.classList.remove('slide');
        videoContainer.play();
    }
})

// preloader
const preloader = document.querySelector('.preloader');

window.addEventListener('load', function(){
    preloader.classList.add('hide-preloader')
})
// traversing the dom
// const collapseBtns = document.querySelectorAll('.question-btn');

// collapseBtns.forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text')
//     })
// })




// tabs scripts
const tabBtns = document.querySelectorAll('.tab-btn');
const tabs = document.querySelector('.tabs');
const tabContent = document.querySelectorAll('.content');

tabs.addEventListener('click', function(e){
    const tabBtnId = e.target.dataset.id;

    if (tabBtnId) {
        // remove active from other buttons
        tabBtns.forEach(function(btn){
            btn.classList.remove('active');
            e.target.classList.add('active');
        });
        // hide other tab content 
        tabContent.forEach(function(content){
            content.classList.remove('active')
        });

        const element = document.getElementById(tabBtnId);
        element.classList.add('active');
    }
})

// countdown timer js
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const giveawsy = document.querySelector('.giveaway');
  const deadline = document.querySelector('.deadline');
  const items = document.querySelectorAll('.deadline-format h4');

  let futureDate = new Date(2022,4,24,11,30,0);

  const year = futureDate.getFullYear();
  const hours = futureDate.getHours();
  const mins = futureDate.getMinutes();

  let month = futureDate.getMonth();
  month = months[month];

  const date = futureDate.getDate();

  const weekday = weekdays[futureDate.getDay()];

  giveawsy.textContent = `Giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${mins}am`;

//   future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime(){
    const today = new Date().getTime();
    const t = futureTime - today;

    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60min
    // 1d = 24hr

    // values in ms
    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;
    // calculate values
    let days = t / oneDay;
    days = Math.floor(days);
    let hours = (t % oneDay) / oneHour;
    hours = Math.floor(hours);
    let minutes = Math.floor((t % oneHour) / oneMinute)
    let seconds = Math.floor((t % oneMinute) / 1000);

    // set values array

    const values = [days, hours, minutes, seconds];
    function format (item){
        if(item<10){
            return (item = `0${item}`);
        }
        return item
    }
    items.forEach(function(item, index){
        item.innerHTML = format(values[index])
    });
    if(t<0){
        clearInterval(countdown);
        deadline.innerHTML = `<h4>Sorry, this giveaway has expired</h4>`
    }
}

// countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();





// Getting current date and time
// var today = new Date();
//   var day = today.getDay();
  
//   var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
//   console.log("Today is : " + daylist[day] + ".");
//   var hour = today.getHours();
//   console.log(hour);
//   var minute = today.getMinutes();
//   var second = today.getSeconds();
//   var prepand = (hour >= 12)? " PM ":" AM ";
//   hour = (hour >= 12)? hour - 12: hour;
//   if (hour===0 && prepand===' PM ') 
//   { 
//   if (minute===0 && second===0)
//   { 
//   hour=12;
//   prepand=' Noon';
//   } 
//   else
//   { 
//   hour=12;
//   prepand=' PM';
//   } 
//   } 
//   if (hour===0 && prepand===' AM ') 
//   { 
//   if (minute===0 && second===0)
//   { 
//   hour=12;
//   prepand=' Midnight';
//   } 
//   else
//   { 
//   hour=12;
//   prepand=' AM';
//   } 
//   } 
// console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);

// 