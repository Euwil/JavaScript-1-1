//ПРИМИТИВЫ
console.log(typeof undefined, undefined); //1. тип undefined
console.log(typeof "hello my dear friend", "hello my dear friend"); //2. тип string
console.log(typeof 0, 0); //3. тип number
console.log(typeof true, true); //4. тип boolean
console.log(typeof null, null); //5. тип null

//ПЕРЕМЕННЫЕ
let firstVar;
console.log("firstVar:", firstVar); //firstVar: undefined
firstVar = "var by let";
console.log("firstVar:", firstVar); //firstVar: var by let
const secondVar = "var by const";
console.log("secondVar:", secondVar); //secondVar: var by const

//ПРИВЕДЕНИЕ ТИПОВ
// string
let value = 98;
value = String(value);
console.log(value, typeof value); //98 string - type string
// number
value = "98";
value = Number(value);
console.log(value, typeof value); //98 "number" - type number
// boolean
value = 23;
value = Boolean(value);
console.log(value, typeof value); //true "boolean" - type boolean

value = 0;
value = Boolean(value);
console.log(value, typeof value); //false "boolean"
// К НИМ НЕ ПРИВОДЯТСЯ
// null
// undefined

//ВЗАИМОДЕЙСТВИЕ С ПОЛЬЗОВАТЕЛЕМ
/* alert("Let's hug"); //ok = undefined
let responce = confirm("Can you hug me?") //ok or cancel
console.log (responce); //ok=true cancel=false
let answer = prompt("Where do you live?")
console.log(answer) */ //ok = ответ пользователя cancel=null

//ОПЕРАТОРЫ
console.log(5 - 3); //2
console.log(5 + 3); //8
console.log(5 * 3); //15
console.log(5 / 3); //1.6666666666666667
console.log(5 ** 3); //125 возведение в степень
console.log(5 % 3); //2 остаток от деления

console.log(3 > 10); //false
console.log(10 < 20); //true
console.log("10" == 10); //true не строгое равенство
console.log("10" === 10); //false разные типы данных
console.log(10 === 10); //true строгое равенство
console.log(10 !== 9); //true строго не равна
console.log("10" != 9); //true не строго

//ШАБЛОННАЯ СТРОКА И ИНТЕРПОЛЯЦИЯ
let name = "Olha"
let message = `Hello ${name}. You're so beautiful today!`
console.log (message);

//МЕТОДЫ toUpperCase() & toLowerCase()
let firstName = "Olha"
console.log (firstName.toUpperCase()) //OLHA
console.log (firstName.toLowerCase()) //olha

//СВОЙСТВО length
console.log(firstName.length) //4 - 4 символа между кавычками

//МЕТОДЫ includes() & indexOf()
let animal = "Snow leopard"
console.log(animal.includes()) //false пустое условие - ищет определенное значение
console.log(animal.includes("leopard")) //true - leopard есть в строке

console.log(animal.indexOf("leopard")) //5 - первый символ слова имеет индекс 5
console.log(animal.indexOf("o")) //2 - первая о имеет индекс 2
console.log(animal.indexOf("Дeopard")) //-1 - не нашел совпадения

//ЧИСЛА
/* let weight = prompt("Specify your weight");
weight = parseInt(weight) //13 - 13.5 было введено
console.log(weight)
weight = parseFloat(weight) //13.5 - достало дробное из строки
let length = 2;
let normalWeight = weight / length;
console.log (normalWeight); */

//0.1 + 0.2
console.log ((0.1 * 10 + 0.2 * 10) / 10); //0.3
//Math.ceil()
console.log(Math.ceil(0.1 + 0.2)) //1 - к большему целому
//Math.floor()
console.log(Math.floor(0.1 + 0.2)) //0 - к меньшему целому
//Math.round()
console.log(Math.round(0.3 + 0.2)) //1 0.3+0.2=0.5 - округляется в большую сторону (до 0.5 в меньшую)
