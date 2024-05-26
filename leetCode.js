var createCounter = function(init) {

  let currentCount = init;
 
    return {
      increment : () => ++currentCount,
      decrement : () => --currentCount,
      reset: () => currentCount = init
    }
};

const counter = createCounter(5)

// console.log(counter.increment())
// console.log(counter.increment())
// console.log(counter.increment())
// console.log(counter.decrement())
// console.log(counter.reset())
// console.log(counter.decrement())

const double = (nm, i) => {
  if (nm > 8){
    return nm * i
  }
}

const fruits = [10, 8, 5]

const map = function (arr, fn){
  let filteredArr = []

  arr.map((el, i) => {
    if(Boolean(el)){
      return filteredArr.push(fn(el, i))
    }
  })

  // arr.forEach((el, index) => res.push(fn(el, index)))

return filteredArr;
}


const str1 = 'farjana '
const str2 = 'nipa'

const str3 = str1 + str2


// console.log(str3)




//Prefix and postfix incremental operation


// // POSTFIX
// let i = 5
// let j = i++

// console.log(`i: ${i}, j: ${j}`)
// // Result: i: 6, j: 5

// // PREFIX
// let p = 6
// let q = ++p

// console.log(`p: ${p}, q: ${q}`)
// // Result: p: 7, q: 7
// console.log(myString)
// console.log(myString.length)

const min = 5;
const max = 10;

const getRandomNum = Math.floor(Math.random() * (max - min + 1) + min);

console.log(getRandomNum)































