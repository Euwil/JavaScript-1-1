/* //1
function checkAge(age) {
  if (age >= 18) {
    return "You are an adult";
  }

  return "You are a minor";
}
checkAge(20); //возвращает "You are an adult"
checkAge(8); //возвращает "You are a minor"
checkAge(14); //возвращает "You are a minor"
checkAge(38); //возвращает "You are an adult"

//2
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";

  if (password === ADMIN_PASSWORD) {
    return "Welcome!";
  }
  return "Access denied, wrong password!";
}
checkPassword("mangohackzor") //возвращает "Access denied, wrong password!"
checkPassword("polyhax") //возвращает "Access denied, wrong password!"
checkPassword("jqueryismyjam") //возвращает "Welcome!"

//3
function checkStorage(available, ordered) {

   if (ordered === 0) {
      return "Your order is empty!";
    } 
    if (ordered > available) {
      return "Your order is too large, not enough goods in stock!";
    } 
    return "The order is accepted, our manager will contact you";
    

  }
checkStorage(100, 50) //возвращает "The order is accepted, our manager will contact you"
checkStorage(100, 130) //возвращает "Your order is too large, not enough goods in stock!"
checkStorage(70, 0) //возвращает "Your order is empty!"
checkStorage(200, 20) //возвращает "The order is accepted, our manager will contact you"
checkStorage(200, 250) //возвращает "Your order is too large, not enough goods in stock!"
checkStorage(150, 0) //возвращает "Your order is empty!"

//4
const fruits = ["apple", "plum", "pear", "orange"] //для массивов и объектов чаще всего используют const

//5
const fruits = ["apple", "plum", "pear", "orange"];


const firstElement = fruits[0]
const secondElement = fruits[1]
const lastElement = fruits[fruits.length - 1]

//6
const fruits = ["apple", "plum", "pear", "orange"];
fruits[1] = "peach"
fruits[3] = "banana"

//8
const fruits = ["apple", "peach", "pear", "banana"];
const lastElementIndex = fruits.length - 1
const lastElement = fruits[lastElementIndex]

//9
function getExtremeElements(array) {

  let firstElement = array[0]
  let lastElement = array[array.length - 1]
  return [firstElement, lastElement]
}
getExtremeElements([1, 2, 3, 4, 5]) //возвращает [1, 5]
getExtremeElements(["Earth", "Mars", "Venus"]) //возвращает ["Earth", "Venus"]
getExtremeElements(["apple", "peach", "pear", "banana"]) //возвращает ["apple", "banana"]

//10
function splitMessage(message, delimeter) {
    let words;
  words = message.split(delimeter)
    return words;
  }
splitMessage("Mango hurries to the train", " ") //возвращает ["Mango", "hurries", "to", "the", "train"]
splitMessage("Mango", "") //возвращает ["M", "a", "n", "g", "o"]
splitMessage("best_for_week", "_") //возвращает ["best", "for", "week"]

//11
function calculateEngravingPrice(message, pricePerWord) {

 let words
 words = message.split(" ")
   let totalPrice = pricePerWord * words.length
   return totalPrice
 }
calculateEngravingPrice("JavaScript is in my blood", 10) //возвращает 50
calculateEngravingPrice("JavaScript is in my blood", 20) //возвращает 100
calculateEngravingPrice("Web-development is creative work", 40) //возвращает 160
calculateEngravingPrice("Web-development is creative work", 20) //возвращает 80

//12
function makeStringFromArray(array, delimeter) {
    let string;
 
  string = array.join(delimeter)
    return string;
  }
makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ") //возвращает "Mango hurries to the train"
makeStringFromArray(["M", "a", "n", "g", "o"], "") //возвращает "Mango"
makeStringFromArray(["top", "picks", "for", "you"], "_") //возвращает "top_picks_for_you"

//13
function slugify(title) {
 
  let articleTitle = title.split(" ")
  let slug = articleTitle.join("-")
return slug.toLowerCase()

  }
slugify("Arrays for begginers") //возвращает "arrays-for-begginers"
slugify("English for developer") //возвращает "english-for-developer"
slugify("Ten secrets of JavaScript") //возвращает "ten-secrets-of-javascript"
slugify("How to become a JUNIOR developer in TWO WEEKS") //возвращает "how-to-become-a-junior-developer-in-two-weeks"

//14
const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

const firstTwoEls = fruits.slice(0,2);
const nonExtremeEls = fruits.slice(1,4);
const lastThreeEls = fruits.slice(-3);
console.log(firstTwoEls); //["apple", "plum"]
console.log(nonExtremeEls); //["plum", "pear", "orange"]
console.log(lastThreeEls); //["pear", "orange", "banana"]

//15
const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = oldClients.concat(newClients);

//16
function makeArray(firstArray, secondArray, maxLength) {
let newArray = firstArray.concat(secondArray)
if (newArray.length > maxLength) {
newArray = newArray.slice(0, maxLength)
console.log(newArray);
return newArray

}
return newArray
}

makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) //возвращает ["Mango", "Poly", "Ajax"]
makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) //возвращает ["Mango", "Poly", "Houston", "Ajax"]
makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3) //возвращает ["Mango", "Ajax", "Chelsea"]
makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2) //возвращает ["Earth", "Jupiter"]
makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) //возвращает ["Earth", "Jupiter", "Neptune", "Uranus"]
makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) //возвращает []

//17
const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1) { 
  console.log(i);
} */

//18
/* function calculateTotal(number) {
  let totalNumber = 0
   for (let i = 1; i<=number; i += 1) {

totalNumber += i
   console.log(totalNumber);
}
 
 return totalNumber
 }
calculateTotal(1) //возвращает 1
calculateTotal(3) //возвращает 6
calculateTotal(7) //возвращает 28
calculateTotal(18) //возвращает 171
calculateTotal(24) //возвращает 300
calculateTotal() //со случайным числом возвращает правильное значение 

//19
const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length; i+=1) { 
  const fruit = fruits[i]; 
  console.log(fruit);
} */

//20
/* function calculateTotalPrice(order) {
  let total = 0;
  for (let i = 0; i < order.length; i +=1) {
  total += order[i]

}
  return total;
}
calculateTotalPrice([12, 85, 37, 4]) //возвращает 138
calculateTotalPrice([164, 48, 291]) //возвращает 503
calculateTotalPrice([412, 371, 94, 63, 176]) //возвращает 1116
calculateTotalPrice([]) //со случайным массивом возвращает правильное значение */

//21
function findLongestWord(string) {
let array = string.split(" ")

console.log(array);
let maxLength = '';
for (const word of array) {
//  console.log(array[i].split('').length);
 
 if (word.length > maxLength.length) { 
  //  console.log(word);
   maxLength = word;
   
 }; 
  
};
return maxLength;
};
findLongestWord("The quick brown fox jumped over the lazy dog") //возвращает jumped
findLongestWord("Google do a roll") //возвращает Google
findLongestWord("May the force be with you") //возвращает force
findLongestWord("") //со случайной строкой возвращает правильное значение

//22
