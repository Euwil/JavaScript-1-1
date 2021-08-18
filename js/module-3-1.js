//ОБЪЕКТЫ - состоят из свойств и методов(тоже свойства)
const obj = {
    name: "Lioness",
    age: 10,
    eyes: "blue",
    isOnline: true,
    skills: ["hunting", "fighting"],
    //МЕТОДЫ - функции
    showName() {
        console.log("Her name is Lioness");
        
    }

}

console.log(obj); //отображает ключи по алфавиту

//получение значения из объекта
console.log("name:", obj.name); //name: Lioness

console.log(obj["name"]); //Lioness
obj.showName() //вызов функции из объекта

//изменение значения свойства в объекте
obj.age = 11
console.log(obj.age); //11

//добавление свойства
obj.children = ["Swallow", "Fog", "Sun"]

//удаление свойства
delete obj.children
console.log(obj.children); //undefined

//короткое свойство
let age = 30
let skills = ["HTML", "CSS"]
const myUser = {
    age,
    skills,
}
console.log(myUser); //{age: 30, skills: Array(2)}

//вычисляемые свойства
let key1 = "name"
let key2 = "age"
let key3 = "eyes"
const cat = {
    [key1]: "name",
    [key2]: "age",
    [key3]: "color"
}
console.log(cat); //{name: "name", age: "age", eyes: "color"}

//перебор объекта
for (let characteristic in cat) {
    console.log(characteristic); //name, age, eyes
}

//создание дочернего объекта

let kitten = Object.create(cat)
console.log(kitten); //ему будут доступны свойства объекта-прототипа, но своих не имеет
for (let characteristic in kitten) {
    console.log(characteristic); //name, age, eyes
}
let grandKitten = Object.create(kitten)
console.log(grandKitten);

kitten.eyes = "green"
console.log(kitten.eyes); //green, но свойство из cat тоже остается

//перебор личных свойств объекта
console.log(kitten.hasOwnProperty("eyes")); //true
console.log(kitten.hasOwnProperty("age")); //false

for (let key in kitten) {
    if (kitten.hasOwnProperty(key)) {
        console.log(key); //eyes
        console.log(kitten[key]); //green
    }
}

//методы объекта
console.log(Object.keys(obj)); //["name", "age", "eyes", "isOnline", "skills", "showName"] имена ключей
console.log(Object.values(obj)); //["Lioness", 11, "blue", true, Array(2), ƒ] значения
console.log(Object.entries(obj)); //многомерный массив из ключей и значений

let keys = Object.keys(obj)
console.log(keys);
console.log(keys[0]); //name
console.log(obj[keys[0]]); //Lioness
//          obj['name']

const product = {
    count: 2,
    price: 10,
}
let values = Object.values(product)
let totalPrice = values[0] * values[1]
console.log(totalPrice); //20

//this
const user = {
    userName: "Lioness",
    showName() {
        return `Your name is ${this.userName}`;
        //                           user.userName - заменяет обращение к объекту по имени
    },
}
console.log(user.showName()); //Your name is Lioness

