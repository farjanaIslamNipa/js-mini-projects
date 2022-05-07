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