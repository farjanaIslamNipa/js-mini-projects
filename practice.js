function isPalindrome(str) { 

  return str === str.split('').reverse().join(''); 

}
// console.log(isPalindrome('ollo'))

// 5. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 

function getEven(arr){
  
  return arr.filter(a => a%2 === 0)
}

// console.log(getEven([2, 5, 6, 18, 43, 11]))

// 7. Write a JavaScript function to check if a given number is prime. 

function isPrime(a){
  for (i = 2; i <= a - 1; i++) {
    if (a % i == 0) {
        return "Not Prime";
    }
  }
  return "Prime";

}

// console.log(isPrime(10))

// Write a JavaScript program to convert a string to title case (capitalize the first letter of each word)

const capitalize = (str) => {
  let words = str.split(" ")
  const nw = words.map(word => {
    return word[0].toUpperCase() + word.substring(1); 
  }).join(" ")

  return nw
}

// console.log(capitalize("freeCodeCamp is an awesome resource"))

// 3. Given an array of numbers, write a function to find the largest and smallest numbers in the array. 

const findMinMax = (arr) => {
  let min = Math.min(...arr)
  let max = Math.max(...arr)

  return [min, max]
}
// console.log(findMinMax([21, 28, 17, 50]))

function getUniqueElements(arr) { 

  return Array.from(new Set(arr)); 

} 

// console.log(getUniqueElements([12, 13, 14, 15, 12, 11, 15]))

function sumOfAllNumbers(arr) { 

  return arr.reduce((a, b) => a + b, 0) 

} 

// console.log(sumOfAllNumbers([12, 14, 15, 15]))

const charCount = (str, l) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if(str.charAt(i) === l){
      count++
    }
    
  }
  return count
}

// console.log(charCount('farjana', 'a'))

const checkArr = (arr) => {
  return Array.isArray(arr) ? true : false
}

// console.log(checkArr('[12, 13]'))

const object1 = {
  a: 10,
  b: 20,
  c: function () {
	console.log(this.a + this.b);
  },
};
const func = object1.c.bind(object1);
// func();


const fizzBuzz = () => {
  for (let i = 0; i < 100; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
      console.log('fizzBuzz')
    }else if(i % 5 === 0) {
      console.log('buzz')
    }else if(i % 3 === 0) {
      console.log('fizz')
    }else{
      console.log(i)
    }
    
  }
}
// fizzBuzz()

const moveCapital = (str) => {
  console.log(str.match(/[A-Z]/g).join('') + str.match(/[a-z]/g).join(''))

  // let lowerCase = [...str].filter(l => l === l.toLowerCase())
  // let upperCase = [...str].filter(l => l === l.toUpperCase())
  // console.log([...upperCase, ...lowerCase].join(''))
}

// moveCapital('amiNipA')

const reversedArr = (arr) => {
  let rev = arr.reverse()
  console.log(rev)
}

// reversedArr([1, 2, 3, 4])

const lowestToHighest = (arr) => {
  console.log(arr.sort((a, b) => b - a))
}

// lowestToHighest([5, 8, 3, 4, 9, 7])

const removeSpace = (str) => {
  console.log(str.split(' ').join(''))
}

// removeSpace('myName nipa')
const student1 ={
  name: 'Mahbeer',
  age: 10,
  course: ['Physics', 'Math', 'Chemistry']
}

let student2 = {...student1}
student2['name'] = 'Bob'

let course2 = [...student1.course]

course2[1] = 'Biology'

student2 = { 
  name: student1.name,
  age: student1.age,
  course: course2
 }



console.log(student2 , student1)