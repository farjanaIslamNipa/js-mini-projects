

// const promiseOne = new Promise(function(resolve, reject){
//   setTimeout(()=> {
//     console.log('async task completed')
//     resolve()
//   }, 2000)
// })

// promiseOne.then(function(){
//   console.log('promise assumed')
// })

// new Promise(function(resolve, reject){
//   setTimeout(function(){
//     console.log('async 2 completed')
//     resolve()
//   }, 1000)
// }).then(()=> {
//   console.log('async 2 consumed')
// })

// const promiseThree = new Promise(function(resolve, reject) {
//   setTimeout(()=>{
//     resolve({username: 'nipa', age: 39})
//   },1000)
// })

// promiseThree.then(function(user){
//   console.log(user)
// })

// const promiseFour = new Promise(function(resolve, reject){
//   setTimeout(()=>{
//     let error = false
//     if(!error){
//       resolve({username: 'mahi', age:10})
//     }else{
//       reject('ERROR: Something went wrong')
//     }
//   }, 1000)
// })

// promiseFour.then((user)=>{
//   console.log(user)
//   return user.username
// }).then((username)=>{
//   console.log(username)
// }).catch((err)=> {
//   console.log(err)
// })

// const promiseFive = new Promise((resolve, reject) => {
//   setTimeout(()=> {
//     let error = false;
//     if(!error){
//       resolve({username: 'JavaScript', age: 50})
//     }else{
//       reject('Error: Js went wrong')
//     }
//   }, 1000)
// })

// async function consumePromiseFive(){
//   try {
//     const res = await promiseFive
//     console.log(res)
//   } catch (error) {
//     console.log(error)
//   }
// }

// consumePromiseFive()

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i)
//   }, 1000)
  
// }

// const nestedArr = [1, 2, [3, 4, [5,6],7], 8, 9, [10, 11, [12, 13, [14, 15]]]];
// const flatArray = []

// const flattenArray = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     if(Array.isArray(arr[i])){
//       flattenArray(arr[i])
//     }else{
//       flatArray.push(arr[i])
//     }
    
//   }
//   return flatArray
// }

// console.log(flattenArray(nestedArr))

// result is [ 1,  2,  3,  4,  5,  6, 7,  8,  9, 10, 11, 12, 13, 14, 15 ]

// function addUp(num){
//   let sum =0;
//   for (let i = 1; i <= num; i++) {

//     sum += i
    
//   }
//   return sum;
// }

function addUp(num){
  let sum =0;
  for(let i = 1; i <= num; i++){
    sum += i
  }
  return sum;
}


function getBrowserInfo(){
  let us = navigator.userAgent;
  console.log(us)
}
// console.log(getBrowserInfo())

const shoppingCart = [
  { product: "iPhone X", quantity: 25, color: "black" },
  { product: "MacBook Pro 14'", quantity: 6, color: "white" },
  { product: "HP Spectre", quantity: 0, color: "black" },
];


const groupedObjects = Object.groupBy(shoppingCart, (element, index) => element.color);
console.log(groupedObjects);
