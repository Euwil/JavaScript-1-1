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
makeStringFromArray(["top", "picks", "for", "you"], "_") //возвращает "top_picks_for_you" */

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