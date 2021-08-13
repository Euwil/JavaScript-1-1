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