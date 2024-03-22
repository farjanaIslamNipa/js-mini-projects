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

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(()=> {
    let error = false;
    if(!error){
      resolve({username: 'JavaScript', age: 50})
    }else{
      reject('Error: Js went wrong')
    }
  }, 1000)
})

async function consumePromiseFive(){
  try {
    const res = await promiseFive
    console.log(res)
  } catch (error) {
    console.log(error)
  }
}

consumePromiseFive()