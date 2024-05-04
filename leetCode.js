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

console.log(map(fruits, double))

