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
    if(leapYearValue === ''){
        showResult.innerHTML = ''
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


    // Get a random integer from 1 to 10 inclusive
   

    function prevent(e){
        e.preventDefault();
        const givenNum = Math.ceil(Math.random() * 10);
        const showResult = document.querySelector('.show-number');
        const numberInput = document.getElementById('number-input').value;
        showResult.textContent = givenNum;
        if(numberInput == givenNum) {
            showResult.classList.add('text-info')
            showResult.classList.remove('text-danger')
            showResult.textContent = "Number matched";
        }else{
            showResult.classList.add('text-danger')
            showResult.classList.remove('text-info')
            showResult.textContent = "Not matched, the number was " + givenNum;
        }
    }

    console.log(document.URL);
    // Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.

    function difference(n)
    {
       if (n <= 13)
           return 13 - n;
       else
           return (n - 13) * 2;
    }
   console.log(difference(32))
   console.log(difference(11))