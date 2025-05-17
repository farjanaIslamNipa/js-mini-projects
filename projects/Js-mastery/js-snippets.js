function getCurrentDate(){
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  }
  return (new Date().toLocaleString('en-US', options))
}

// ###### Find the maximum number in an array
const arr = [5, 55, 7, 18, 20]
function findMax(arr){
  return Math.max(...arr)
}

let seconds = 10
const countdown = setInterval(() => {
  seconds--
  if(seconds < 0){
    clearInterval(countdown)
    console.log('count down finished');
  }
}, 1000)