// // 1 Змінні

// const firstName = 'Nikita'
// // const lastName = 'Barsukov' // string
// let age = 26 // number
// const isProgrammer = true // boolean

// const _ = 'private'
// const $ = 'some value'

// // const if = 'mkef' // err
// const withNum5 = '5'
// // const 5withNum = 5 //err

// // 2 Мутування

// // alert('Им`я людини ' + firstName + ', а вік ' + age)
// // console.log(age.toString())

// // const lastName = prompt('Введіть прізвище')
// // alert(firstName + ' ' + lastName)

// // 3 Оператори

// let currentYear = 2022
// const birthYear = 1988

// const myAge = currentYear - birthYear
// console.log(myAge)

// const a = 9
// const b = 3

// let c = 30
// c = c + a
// c += a
// c -= a
// c *= a
// c /= a

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(++currentYear)
// console.log(--currentYear)
// console.log(c)

// 4 Типи данних
// const isProgrammer = true
// const name = 'Nikita'
// const age = 34
// let x

// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(null)

// 5 Пріоритет операторів
// const fullAge = 34
// const birthYear = 1988
// const currentYear = 2022

// // > < >= <=
// const isFullAge = currentYear - birthYear >= fullAge // 34 >= 34
// console.log(isFullAge)

// 6 Умовні оператори
// const courseStatus = 'ready' // ready, fail, pending

// if (courseStatus === 'ready') {
//   console.log('Курс вже готовий і його можна проходити')
// } else if (courseStatus === 'pending') {
//   console.log('Курс поки в стадії розробки')
// } else {
//   console.log('Курс не стався')
// }

// const isReady = true

// if (isReady === true) {
//   console.log('Все готово!')
// }

// if (isReady) {
//   console.log('Все готово!')
// } else {
//   console.log('Все не готово(')
// }

// Тернарний вираз
// isReady ? console.log('Все готово!') : console.log('Все не готово(')

// const num1 = 50 // number
// const num2 = '50' // string

// console.log(num1 == num2) // перевірка по значенню
// console.log(num1 == num2) // перевірка по значенню і типу данних - рекомендується для використання

// 7 Булева логіка

// 8 Фунцкії

// function calculateAge(year) {
//   return 2020 - year
// }

// // const myAge = calculateAge(1993)
// // console.log(myAge)

// // console.log(calculateAge(1993))
// // console.log(calculateAge(1999))
// // console.log(calculateAge(2034))

// function logInfoAbout(name, year) {
//   const age = calculateAge(year)

//   if (age > 0) {
//     console.log('Людині ' + name + ' зара ' + age)
//   } else {
//     console.log(name + ', не шуткуй!')
//   }
// }

// logInfoAbout('Нікіта', 1988)
// logInfoAbout('Вася', 2040)

// 9 Масиви
// const cars = ['Lexus', 'Mers', 'BMV']
// console.log(cars)
// const cars = new Array('Lexus', 'Mers', 'BMV')
// console.log(cars)

// console.log(cars.length)
// console.log(cars[1])
// console.log(cars[5])
// console.log(cars[0])
// console.log(cars[2])

// cars[0] = 'Bently'
// // cars[3] = 'Hundai'
// cars[cars.length] = 'Honda'
// console.log(cars)

// 10 Цикли
// const cars = ['Lexus', 'Mers', 'BMV', 'Bently']

// for (let i = 0; i < cars.length; i++) {
//   // console.log(i)
//   const car = cars[i]
//   console.log(car)
// }

// for (let car of cars) {
//   console.log(car)
// }

// 11 Об`єкти

const person = {
  firstName: 'Nikita',
  lastName: 'Bars',
  year: 1988,
  languages: ['Ua', 'Eng'],
  hasWife: true,
  greet: function () {
    console.log('greet from !!!')
  },
}

console.log(person.firstName)
console.log(person['lastName'])
const key = 'year'
console.log(person[key])
person.hasWife = false
person.isProgrammer = true
console.log(person)
person.greet()
