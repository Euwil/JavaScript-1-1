//ОБЪЕКТЫ
const obj = {
    name: "Lioness",
    age: 10,
    eyes: "blue",
    isOnline: true,
    skills: ["hunting", "fighting"]
}
console.log(obj); //отображает ключи по алфавиту

//получение значения из объекта
console.log("name:", obj.name); //name: Lioness

console.log(obj["name"]); //Lioness