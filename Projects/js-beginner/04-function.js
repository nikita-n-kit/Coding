// // 1 Функції
// // Function Declaration
// function greet(name) {
//   console.log('Hello - ', name)
// }

// // Function Expression
// const greet2 = function greet2(name) {
//   console.log('Hello 2 - ', name)
// }

// //greet('Lena')
// // greet2('Egor')

// // console.log(typeof greet)
// // console.dir(greet)

// // 2 Анонімні функції
// let counter = 0
// const interval = setInterval(function () {
//   if (counter === 7) {
//     clearInterval(interval) // clearTimeout
//   } else {
//     console.log(++counter)
//   }
// }, 1000)

// 3 Стрілкові функції
function greet(name) {
  console.log('Hello - ', name)
}

const arrow = (name, age) => {
  console.log('Hello - ', name, age)
}

const arrow2 = (name) => console.log('Hi - ', name)

// arrow('Nik', '39')

// const pow2 = (num) => {
//   return num ** 2
// }

const pow2 = (num) => num ** 2

// console.log(pow2(4))

// 4 Параметри за замовчуванням
const sum = (a = 43, b = a * 2) => a + b

// console.log(sum(35, 3))
// console.log(sum())

function sumAll(...all) {
  let result = 0
  for (let num of all) {
    result += num
  }
  return result
}

const res = sumAll(1, 3, 6, 9, 3)
// console.log(res)

// 5 Замикання
function createMember(name) {
  return function (lastName) {
    console.log(name + lastName)
  }
}

const logWithLastName = createMember('Nikitos ')
console.log(logWithLastName('Bars'))
console.log(logWithLastName('Ertiuh'))
