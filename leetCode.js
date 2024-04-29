var createCounter = function(init) {

  let currentCount = init;
 
    return {
      increment : () => ++currentCount,
      decrement : () => --currentCount,
      reset: () => currentCount = init
    }
};

const counter = createCounter(5)

console.log(counter.increment())
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.decrement())
console.log(counter.reset())
console.log(counter.decrement())