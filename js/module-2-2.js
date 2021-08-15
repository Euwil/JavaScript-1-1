//ОБЪЯВЛЕНИЕ ФУНКЦИИ (СОЗДАНИЕ)
const sayMyName = function(name) { //в переменной хранится функциональное выражение, нельзя вызывать до объявления
    console.log(`Your name is ${name}`);
}

//2 вариант
function sayMyLastName(lastName) { //можно вызывать до объявления
    console.log(`Your last name is ${lastName}`);
}
//3 вариант СТРЕЛОЧНАЯ ФУНКЦИЯ
const sayMyAge = (myAge) => {
    console.log(`Your age is ${myAge}`);
}
//ВЫЗОВ ФУНКЦИИ (ЧТОБЫ СРАБОТАЛА)
sayMyName("Olha")
sayMyLastName("Karpova")
sayMyAge(23)

//ДЕФОЛТНЫЕ ПАРАМЕТРЫ
function sayHello(userName = "User") { //сработает в том случае, если параметр пустой
    console.log(`Welcome back ${userName}`);
}
sayHello()

//arguments - устарело
function getResult() {
    console.log(arguments); //используется, если не знаем, сколько аргументов придет
    for(let quantity of arguments) {
        console.log(quantity); //выдаст каждый аргумент
    }
    //преобразование псевдомассива в массив
    let arrayArgs = Array.from(arguments)
    console.log(arrayArgs); //[25, 30, 50, 55, 27]
}
getResult(25, 30, 50,55, 27) //[25, 30, 50, 55, 27, callee: (...), Symbol(Symbol.iterator): ƒ] - псевдомассив

let numbers = (...allNumbers) => {
console.log(allNumbers);
}
numbers(25, 30, 50,55, 27) //[25, 30, 50, 55, 27]

// Guard Clause - быстрый возврат из функции

function getValue(array, value) {
    //   console.log(array)
    for (let i = 0; i < array.length; i += 1) {
      // console.log(`iteration-${i + 1}`)
      if (array[i] === value) return `Значение ${value} есть в массиве`
    }
    return `Значение ${value} отсутствует в массиве`
  }
  let result = getValue([1, 2, 3, 4, 5, 6, 7, 1, 1, 1, 1, 1], 1)
  console.log(result)
  result = getValue([1, 2, 3, 4, 5, 6, 7], 8)
  console.log(result)

//неявный возврат (без return)
const getTotal = (a, b) => a + b

console.log(getTotal(2, 5))
