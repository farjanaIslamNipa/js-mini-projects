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
const arr = [5, 55, 7, 18, 20, 20, 7]
function findMax(arr){
  return Math.max(...arr)
}


// 10 second timer
let seconds = 10
const countdown = setInterval(() => {
  seconds--
  if(seconds < 0){
    clearInterval(countdown)
  }
}, 1000)


// Remove duplicates from an array
function removeDuplicate(array){
  // return [...new Set(array)]
  return array.filter((item, index) => array.indexOf(item) === index)
}


// Convert number array to string array

function convertNumberToStringArr (array){
  // return array.map(arr => arr.toString())
  // return array.map(arr => `${arr}`)
  return array.map(String)
}


const str = 'Keep swimming until last breath'
function arrayOfWords(string){
  return string.split(" ")
}

const user1Interests = ['music', 'movies', 'sports', 'technology'];
const user2Interests = ['travel', 'music', 'technology', 'food'];
const commonInterest = user2Interests.filter(interest => user1Interests.includes(interest))

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
// const mergedObj = {...obj1, obj2}
const mergedObj = Object.assign({}, obj1, obj2)
console.log(mergedObj);