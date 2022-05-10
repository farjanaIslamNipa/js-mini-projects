// Time set challenge
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDay = document.querySelector('.current-day');
const currentTime = document.querySelector('.current-time');

const getDate = new Date();
const today = getDate.getDay();
let hours = getDate.getHours();
let minutes = getDate.getMinutes();
let seconds = getDate.getSeconds();


function getCurrentTime(){
    let amPm = (hours >= 12 && minutes > 0 && seconds > 0) ? 'PM' : 'AM'
    hours = hours % 12;
    hours = hours ? hours : 12;

    const timeFormat = hours + amPm + ' ' + ':' + ' ' + minutes + 'm' + ' ' + ': ' + seconds + 's';

    return timeFormat;
}


currentDay.textContent = weekdays[today];
currentTime.textContent = getCurrentTime();

// Printing current page
const printCurrentPage = () => {
    window.print();
}

// Rotating string
function animate_string(id){
    const element = document.getElementById(id);
    const textNode = element.childNodes[0];
    let text = textNode.data;
    
    setInterval(function(){
        text = text[text.length - 1] + text.substring(0, text.length -1);
        textNode.data = text;
    }, 100)

    // this code also worked
    // setInterval(function(){
    //     text = text[text.length - 1] + text.substring(0, text.length -1);
    //     element.textContent = text;
    // }, 100)

    // console.log(typeof element.textContent);
}



// finding leap year

function findLeapYear(e){
    e.preventDefault();
    let showResult = document.querySelector('.show-result');
    let leapYear = document.querySelector('.leap-year');
    let leapYearValue = leapYear.value;
    showResult.innerHTML = getLeapYear(leapYearValue);
    if(showResult.innerHTML == 'true'){
        showResult.classList.remove('text-danger');
        showResult.classList.add('text-success');
        showResult.innerHTML = 'Leap Year'
    }else{
        showResult.classList.remove('text-success');
        showResult.classList.add('text-danger');
        showResult.innerHTML = 'Not a Leap Year'
    }
}

function getLeapYear(year){
   return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}


// Finding first january sunday
for (let year = 2014; year <= 2050; year++)
    {
    let d = new Date(year, 0, 1);
    
    if ( d.getDay() === 0 ){
        console.log("1st January is being a Sunday  "+year);
    }
       
    }

    // for (let index = 0; index < array.length; index++) {
    //     const element = array[index];
        
    // }

