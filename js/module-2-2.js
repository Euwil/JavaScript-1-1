let meow = Array(1,2,3)
console.log(meow);
//МАССИВ
let myArray = [1,2,3, "кошка умеет говорить мяу"]
console.log(myArray);
console.log(myArray.length); //4 - количество элементов

//индекс массива
console.log(myArray[3]); //кошка умеет говорить мяу - это элемент с индексом 3
//замена элементов
let mySecondArray = [1,2,3, "кошка умеет говорить мяу"]
mySecondArray[3] = "собака умеет говорить гав" //замена элемента с индексом 3
console.log(mySecondArray[3]); //собака умеет говорить гав
//удаление элементов
let thirdArray = [1,2,3, "кошка умеет говорить мяу"]
delete thirdArray[2]
console.log(thirdArray[2]); //undefined - такого индекса больше нет и элемента с ним тоже
console.log(thirdArray); // [1, 2, empty, "кошка умеет говорить мяу"]

//перебор массива
let forthArray = [1,2,3, "кошка умеет говорить мяу"]
for(let i = 0; i<forthArray.length; i+=1) {
    console.log(`iteration ${i + 1} = ${forthArray[i]}`); 
}
//break & continue
let fifthArray = [1,2,3, "кошка умеет говорить мяу", 5, 6]
for(let i = 0; i<fifthArray.length; i+=1) {
    if (i % 2 === 0) {
        continue
    }
    console.log(`iteration ${i + 1} = ${fifthArray[i]}`); //выдаст элементы с четным индексов(2,4,6)
}

let sixthArray = [1,2,3, "кошка умеет говорить мяу", 5, 6]
for(let i = 0; i<sixthArray.length; i+=1) {
    if (i === 5) {
        break
    }
    console.log(`iteration ${i + 1} = ${sixthArray[i]}`); //после 5 итерации прерывает цикл
}

//многомерный массив
let multiArray = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]
console.log(multiArray);
console.log(multiArray.length); //3
console.log(multiArray[0]); //[1, 2, 3]

let soManyArrays = [
    [1,2,3, 20, 60],
    [4,5,6, 69, 100],
    [7,8,9, 80, 90],
]
for (let array of soManyArrays) { //делит многомерный массив на отдельные массивы
    console.log(array);
    for (let numbers of array) { //делит получившиеся массивы на отдельные числа
        console.log(numbers);
    }
}

//методы массива
let sliceArray = [1,2,3, "кошка умеет говорить мяу", 5, 6]
let slicedArray = sliceArray.slice()
console.log(slicedArray);//[1, 2, 3, "кошка умеет говорить мяу", 5, 6] сделал копию массива
let twoFirstelements = sliceArray.slice(0,2) //вырезало элементы с индексом 0 и 1
console.log(twoFirstelements); //[1, 2]

let myString = "кошка умеет говорить мяу"
let splitArray = myString.split(" ")
console.log(splitArray); // ["кошка", "умеет", "говорить", "мяу"]

let joinArray = ["кошка", "умеет", "говорить", "мяу"];
let arrayToString = joinArray.join(" ")
console.log(arrayToString); //кошка умеет говорить мяу

//                                 ADD
// unshift(el1, ..., el) ------------------------ push(el1, ..., el)
//                       |        array          |
//                       |  [0],[1],[2],[3]      |
//               shift() ------------------------ pop() 
//                                  DELETE

let unshiftArray = [1,2,3,4,5,6]
console.log(unshiftArray);
let arrayElements = unshiftArray.unshift()
console.log(arrayElements); //6 - длина массива
arrayElements = unshiftArray.unshift(7)
console.log(arrayElements); //7
console.log(unshiftArray); //[7, 1, 2, 3, 4, 5, 6] добавил 7 в начало

let pushArray = [7, 1, 2, 3, 4, 5, 6]
unshiftArray.push(8)
console.log(unshiftArray); //[7, 1, 2, 3, 4, 5, 6, 8] добавил 8 в начало

let shiftArray = [7, 1, 2, 3, 4, 5, 6, 8]
shiftArray.shift()
console.log(shiftArray); //[1, 2, 3, 4, 5, 6, 8] убрал 7 в начале

let popArray = [1, 2, 3, 4, 5, 6, 8]
popArray.pop()
console.log(popArray); //[1, 2, 3, 4, 5, 6] убрал 8 в конце

//splice(индекс элемента, с которого начинается действие, количество элементов, которое нужно удалить) удаление
let deleteElements = [1, 2, 3, 4, 5, 6, 8]
deleteElements.splice(1,1)
console.log(deleteElements); //[1, 3, 4, 5, 6, 8] удалил 1 элемент с индексом 1 - 2

//splice(индекс элемента, с которого начинается действие, количество элементов, которое нужно удалить (либо 0), элементы, которые нужно добавить) добавление или замещение
let addElements = [1, 2, 3, 4, 5, 6, 8]
addElements.splice(0, 0, 9)
console.log(addElements); //[9, 1, 2, 3, 4, 5, 6, 8] добавил элемент с индексом 0 - 9

let firstPiece = [1,2,3]
let secondPiece = [4,5,6]
let thirdPiece = [7,8,9]
let fullArray = firstPiece.concat(secondPiece, thirdPiece)
console.log(fullArray); //[1, 2, 3, 4, 5, 6, 7, 8, 9]
