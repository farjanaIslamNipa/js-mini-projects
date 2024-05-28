const arr = [8, 10, 6, 5, 1, 4, 3]

const arrSlice = arr.slice() // returns full array
const arrSlice2 = arr.slice(2, 4) // [6, 5] 
const arrSlice3 = arr.slice(2) // [ 6, 5, 1, 4, 3 ]
const arrSlice4 = arr.slice(-2) // [ 4, 3 ]

const arrSplice = arr.splice() //[]
const arrSplice1 = arr.splice(2) //[6, 5, 1, 4, 3]
const arrSplice3 = arr.splice(1, 2, 15) //[6, 5, 1, 4, 3]

// console.log("A", arr)
console.log("A", arrSplice3)
console.log("B", arr)