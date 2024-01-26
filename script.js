
console.log('test')
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
    console.log(tabBtnId);

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

// dropdown
const dropdownContainer = document.querySelector('.dropdown-box');


// dropdownContainer.style.display = 'none';
window.addEventListener('click', function(e){
    const dropdownBtn = e.target.dataset.id;
    console.log(dropdownBtn);
    if(dropdownBtn){
        dropdownContainer.classList.toggle('d-block')
    }else{
        dropdownContainer.classList.remove('d-block')
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

  let tempDate = new Date();

  let tempYear = tempDate.getFullYear();
  let tempMonth = tempDate.getMonth();
  let tempDay = tempDate.getDate();

//   let futureDate = new Date(2022,4,24,11,30,0);
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0)

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

// lorem ipsam script
const text = [
    `Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.`,
    `Next level tbh everyday carry, blog copper mug forage kitsch roof party pickled hammock kale chips tofu. Etsy shoreditch 8-bit microdosing, XOXO viral butcher banh mi humblebrag listicle woke bicycle rights brunch before they sold out ramps. Twee shabby chic taiyaki flannel, enamel pin venmo vape four loko. Hexagon kale chips typewriter kitsch 8-bit organic plaid small batch keffiyeh ethical banh mi narwhal echo park cronut.`,
    `Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.`,
    `Cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers kitty power ignore the squirrels, you'll never catch them anyway for what a cat-ass-trophy! or purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table. Pretend you want to go out but then don't bite off human's toes, yet disappear for four days and return home with an expensive injury; bite the vet so catch eat throw up catch eat throw up bad birds. `,
    `This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Anyhoo, your net-suits will allow you to experience Fry's worm infested bowels as if you were actually wriggling through them.
  I just told you! You've killed me! Fry! Quit doing the right thing, you jerk! Michelle, I don't regret this, but I both rue and lament it. Morbo can't understand his teleprompter because he forgot how you say that letter that's shaped like a man wearing a hat.`,
    `Airedale hard cheese mozzarella. Pecorino melted cheese port-salut emmental babybel cheese and wine melted cheese manchego. Everyone loves blue castello everyone loves fromage cheese slices airedale cheddar cream cheese. Bavarian bergkase who moved my cheese halloumi port-salut gouda jarlsberg ricotta rubber cheese. Stinking bishop smelly cheese brie.`,
    `Salvia glossier subway tile, leggings mustache YOLO semiotics chia. Pitchfork tbh af blog church-key meggings vaporware PBR&B master cleanse post-ironic man bun pabst mustache letterpress synth. Snackwave raw denim godard, 3 wolf moon shaman offal kitsch unicorn live-edge selvage schlitz fashion axe vaporware drinking vinegar prism. Shabby chic tacos artisan, chambray chicharrones cardigan leggings typewriter af pop-up williamsburg meditation PBR&B viral. You probably haven't heard of them DIY jean shorts subway tile fashion axe bushwick kitsch tumeric cloud bread vaporware freegan franzen pork belly chicharrones banh mi.`,
    `Man braid celiac synth freegan readymade, pitchfork fam salvia waistcoat lomo bitters gentrify four loko. Pitchfork semiotics post-ironic vegan. Tofu meditation microdosing hashtag semiotics venmo. Flexitarian vape tilde taiyaki. Prism poutine farm-to-table, messenger bag vegan taxidermy tattooed sartorial squid jean shorts fixie selvage trust fund vape.`,
    `Rutters Plate Fleet boom chandler Brethren of the Coast handsomely lookout marooned brigantine knave. Buccaneer gangway jack rum loot spyglass line Jack Tar fore gaff. Gaff topmast scuttle ballast swab draught measured fer yer chains dance the hempen jig Chain Shot yardarm.`,
  ];

const form = document.querySelector('.lorem-form');
const amount = document.getElementById('amount');
const result = document.querySelector('.lorem-text');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const value = parseInt(amount.value);

    if(isNaN(value) || value < 0 || value > 9){
        result.innerHTML = `<p class="mt-4 px-5">${text[0]}</p>`
    }
})





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

let counts =0;
(function immediate(){
    if(counts === 0){
        let counts = 1;
        console.log(counts)
    }
    console.log(counts)
})();


// console.log('just go =>', arr(10))