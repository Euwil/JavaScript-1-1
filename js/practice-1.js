/* //1
const productName = "Droid";
console.log(productName);
const pricePerItem = 2000;
console.log(pricePerItem);
//2
let productName = "Droid";
let pricePerItem = 2000;
productName2 = "Repair droid";
pricePerItem2 = 3500;
//3
let topSpeed = 100;
let distance = 617.54;
let login = "mango935";
let isOnline = true;
let isAdmin = false;
//4
const pricePerItem = 3500;
const orderedQuantity = 4;
const totalPrice = pricePerItem * orderedQuantity;
//5
const productName = "Droid";
const pricePerItem = 3500;
const message = `You picked ${productName}, price per item is ${pricePerItem} credits`
//6
let pricePerDroid = 800;
let orderedQuantity = 6;
let deliveryFee = 50;
let totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
let message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`
//7
function sayHi() {
    console.log("Hello, this is my first function!");
}
  sayHi()
//8
function add(a, b, c) {
    console.log(`Addition result equals ${a + b + c}`);
  }
  
  add(15, 27, 10); //Addition result equals 52
  add(10, 20, 30); //Addition result equals 60
  add(5, 10, 15); //Addition result equals 30
//9
function add(a, b, c) {
  return a + b + c;
}  
console.log(add(2, 5, 8)); // 15
  
  console.log(add(15, 27, 10));  //52
  console.log(add(10, 20, 30)); //60
  console.log(add(5, 10, 15)); //30
//12
function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {

    let totalPrice = orderedQuantity * pricePerDroid + deliveryFee; 
  let message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
    return message;
  }

//14
function isValidPassword(password) {
    const SAVED_PASSWORD = 'jqueryismyjam';
    const isMatch = password === SAVED_PASSWORD; //проверяет пароль
    return isMatch;
  }

//15
function checkAge(age) {
    let message;
  
    if (age >=18) {
      message = 'You are an adult';
    } else {
      message = 'You are a minor';
    }
  
    return message;
  }
  //16
  function checkStorage(available, ordered) {
    let message;
   if (ordered > available) {
    message = ("Not enough goods in stock!");
  } else {
    message =("Order is processed, our manager will contact you.");
  }
    return message;
  }
  //18
  function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
    let message;
   let totalPrice = pricePerDroid * orderedQuantity;
    if (customerCredits < totalPrice) {
      message = "Insufficient funds!";
    } else {
        customerCredits -= totalPrice;
      message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`;
    }
    console.log(message);
      return message;
  }
  makeTransaction(3000, 5, 23000);
  makeTransaction(1000, 3, 15000)
makeTransaction(5000, 10, 8000)
makeTransaction(2000, 8, 10000)
makeTransaction(500, 10, 5000)
//19
function checkPassword(password) {
    const ADMIN_PASSWORD = 'jqueryismyjam';
    let message;
  
    if (password === null) { 
      message =  'Canceled by user!';
    } else if (password === ADMIN_PASSWORD) { 
      message = 'Welcome!';
    } else {
      message = 'Access denied, wrong password!';
    }
  
    return message;
  }
//20
function checkStorage(available, ordered) {
    let message;

  if (ordered === 0) {
    message = "There are no products in the order!";
  } else if (ordered > available) {
    message = "Your order is too large, there are not enough items in stock!";
  } else {
    message = "The order is accepted, our manager will contact you";
  }

    return message;
  }
checkStorage(100, 50)
checkStorage(100, 130)
checkStorage(70, 0)
checkStorage(200, 20)
checkStorage(200, 250)
checkStorage(150, 0)
//21
function isNumberInRange(start, end, number) {
    const isInRange = number >= start && number <= end; 
  
    return isInRange;
  }
  isNumberInRange(10, 30, 17)
  isNumberInRange(10, 30, 5)
  isNumberInRange(20, 50, 24)
  isNumberInRange(20, 50, 76)

//22
function checkIfCanAccessContent(subType) {
    const canAccessContent = subType === "pro" || subType === "vip";
  
    return canAccessContent;
  }
checkIfCanAccessContent("pro")
checkIfCanAccessContent("starter")
checkIfCanAccessContent("vip")
checkIfCanAccessContent("free")
//23
function isNumberNotInRange(start, end, number) {
    const isInRange = number >= start && number <= end;
    const isNotInRange = !isInRange; 
  console.log(isNotInRange);
    return isNotInRange;
  }
  isNumberNotInRange(10, 30, 17)
  isNumberNotInRange(10, 30, 5)
  isNumberNotInRange(20, 50, 24)
  isNumberNotInRange(20, 50, 76)
//24
function getDiscount(totalSpent) {
    const BASE_DISCOUNT = 0;
    const BRONZE_DISCOUNT = 0.02;
    const SILVER_DISCOUNT = 0.05;
    const GOLD_DISCOUNT = 0.1;
    let discount;

  if (totalSpent >= 50000) {
      discount = GOLD_DISCOUNT;
  } else if (totalSpent >= 20000 && totalSpent < 50000) {
discount = SILVER_DISCOUNT;
    } else if (totalSpent >= 5000 && totalSpent < 20000) {
        discount = BRONZE_DISCOUNT;
    } else {
        discount = BASE_DISCOUNT;
    }
    return discount;
  }
getDiscount(137000)
getDiscount(46900)
getDiscount(8250)
getDiscount(1300)
getDiscount(5000)
getDiscount(20000)
getDiscount(50000)
//25
function checkStorage(available, ordered) {
    let message;
    message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
    return message;
  }
checkStorage(100, 50)
checkStorage(100, 130)
checkStorage(200, 20)
checkStorage(200, 150)
checkStorage(150, 180)

//26
function getSubscriptionPrice(type) {
    let price;
     
   switch (type) {
      case "starter": 
        price = 0;
        break;
  
      case "professional":
        price = 20;
        break;
  
      case "organization":
        price = 50;
        break;
    }
  
    return price;
  }
getSubscriptionPrice("professional")
getSubscriptionPrice("organization")
getSubscriptionPrice("starter")
 */
//27
function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    let message;

  switch (password) {
    case password = null :
      message = "Canceled by user!";
      console.log(message);
      break
    case password = ADMIN_PASSWORD :
      message = "Welcome!";
      console.log(message);
      break
    default :
      message = "Access denied, wrong password!";
      console.log(message);
    }
     return message;
  }
checkPassword("mangohackzor")
checkPassword(null)
checkPassword("polyhax")
checkPassword("jqueryismyjam")
//28
function getShippingCost(country) {
    let message;

    let price;
  switch (country) { 
    case "China" :
      price = 100;
      message = `Shipping to ${country} will cost ${price} credits`;
      break
    case "Chile" :
      price = 250;
      message = `Shipping to ${country} will cost ${price} credits`;
      break
    case "Australia" :
      price = 170;
      message = `Shipping to ${country} will cost ${price} credits`;
      break
    case "Jamaica" :
      price = 120;
      message = `Shipping to ${country} will cost ${price} credits`;
      break
      default :
      message = "Sorry, there is no delivery to your country"
  }

    return message;
  }
getShippingCost("Australia")
getShippingCost("Germany")
getShippingCost("China")
getShippingCost("Chile")
getShippingCost("Jamaica")
getShippingCost("Sweden")
//31
const courseTopic = "JavaScript essentials";


const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1]; //последний символ строки
//32
function getSubstring(string, length) {
    const substring = string.slice(0, length); 
  
    return substring;
  }
 getSubstring("Hello world", 3) //возвращает "Hel"
 getSubstring("Hello world", 6) //возвращает "Hello"
 getSubstring("Hello world", 8) //возвращает "Hello wo"
 getSubstring("Hello world", 11) //возвращает "Hello world"
 getSubstring("Hello world", 0) //возвращает ""
 //33
 function formatMessage(message, maxLength) {
    let result;
  if (message.length <= maxLength) {
    result = message;
  } else {
    result = message.slice(0, maxLength) + "...";
  }
    return result;
  }

formatMessage("Curabitur ligula sapien", 16) //"Curabitur ligula..."
formatMessage("Curabitur ligula sapien", 23) //"Curabitur ligula sapien"
formatMessage("Vestibulum facilisis purus nec", 20) //"Vestibulum facilisis..."
formatMessage("Vestibulum facilisis purus nec", 30) //"Vestibulum facilisis purus nec"
formatMessage("Nunc sed turpis a felis in nunc fringilla", 15) //"Nunc sed turpis..."
formatMessage("Nunc sed turpis a felis in nunc fringilla", 41) //"Nunc sed turpis a felis in nunc fringilla"