//1
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