//ЛОГИЧЕСКИЕ ОПЕРАТОРЫ
console.log( 0 && 4); //0 = false
console.log(3 && 4); //4 = true, потому что 3 = true
/* let minTeeth = 300
let maxTeeth = 500
let currentAmount = prompt("Укажите количество зубов");
if (currentAmount >= minTeeth && currentAmount <= maxTeeth) {
    console.log("Вы подняли зуб.");
} else {
console.log("Вы не подняли зуб.");
} */

/* console.log( "true" || true); //true - возвращает первое true и остальные не проверяет
console.log(0 || NaN || false); //false - возвращает последнее false, если все остальные false
let status = prompt("Укажите вашу должность")
if (status === "глашатай" || status === "предводитель") {
    console.log("Вы зашли в палатку");
} else {
    console.log("Вам нельзя сюда заходить");    
} */

console.log(!true); //false - выдает булевое противоположное значение
console.log(!0); //true
console.log(!!true); //true - не не true

//ВЕТВЛЕНИЯ
// if - если
// if else - если и все остальные случаи
let action = "drink"
let location = "lake";
location === "lake" ? console.log("Вы попили") : console.log("Здесь нельзя пить"); //тернарный оператор - замена if...else
// else if - много вариантов условий
let age = 6;
if (age <= 6 && age >= 50) {
console.log("Вам запрещено выходить из лагеря");
} else if (age >= 6 && age <= 12) {
    console.log("Вам запрещено выходить из лагеря без наставника");
} else {
    console.log("Вы вышли из лагеря");
}

let day = "mon"
switch (day) {    //замена множественным ветвлениям
    case "mon" :
        console.log("Это будний день");
        break
    case "tue" :
        console.log("Это будний день");
        break
    case "wed" :
        console.log("Это будний день");
        break
    case "thu" :
        console.log("Это будний день");
        break
    case "fri" :
        console.log("Это будний день");
        break
   default :
   console.log("Это выходной день");
}
switch (day) { //объединение одинакового результата
    case "mon" :
    case "tue" :
    case "wed" :
    case "thu" :
    case "fri" :
        console.log("Это будний день");
        break
   default :
   console.log("Это выходной день");
}

//МЕТОД isNaN
console.log(isNaN(true)); //false потому что можно преобразовать к числу

//ЦИКЛЫ
let y = 0;
let maxY = 10;
while (y < maxY) //тело будет выполняться, пока условие верно
{
    y+=1
    console.log(y);
}

let x = 0;
let maxX = 10;
do { //цикл выполнится хотя бы один раз, а затем будет выполняться, пока условие верно
 x+=1
 console.log(x);
} while (x<maxX)

for (let i=1; i<=10; i+=1) {
    console.log(i);
}

for (let j = 1; j <=10; j+=1) {
    if (j % 2 === 0) { //выведет только четные числа
        console.log(j);
        continue
    };
}

for (let j = 1; j <=10; j+=1) {
    if (j % 2 === 0) { 
        console.log(j); //выведет только 2, потому что 3 не соответствует условию и цикл прерывается
        break
    };
}