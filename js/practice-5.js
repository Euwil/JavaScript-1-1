/* //1
const parent = {
    name: 'Stacey',
    surname: 'Moore',
    age: 54,
    heritage: 'Irish'
  };
  parent.hasOwnProperty('surname')
  parent.hasOwnProperty('heritage')
  const child = Object.create(parent);
  child.hasOwnProperty('name')
  child.hasOwnProperty('age')
  child.hasOwnProperty('surname')
  child.hasOwnProperty('heritage')
  parent.isPrototypeOf(child)
  child.name = 'Jason';
  child.age = 27;

  //2
  const ancestor = {
    name: 'Paul',
    age: 83,
    surname: 'Dawson',
    heritage: 'Irish'
  };

  
  const parent = Object.create(ancestor);
  parent.name = 'Stacey';
  parent.surname = 'Moore';
  parent.age = 54;
  
  const child = Object.create(parent);
  child.name = 'Jason';
  child.age = 27;
  parent.isPrototypeOf(child)
  parent.hasOwnProperty('surname')
  parent.hasOwnProperty('heritage')

//3
function Car(brand, model, price) {
    this.brand = brand;
    this.model = model
    this.price = price
  }
const newCar1 = new Car('Audi', 'Q3', 36000)
const newCar2 = new Car('BMW', 'X5', 58900)
const newCar3 = new Car('Nissan', 'Murano', 31700)

//4
function Car({brand, model, price}) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  new Car({ brand: 'Audi', model: 'Q3', price: 36000 })
  new Car({ brand: 'BMW', model: 'X5', price: 58900 })
  new Car({ brand: 'Nissan', model: 'Murano', price: 31700 })

  //5
  function Car({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  Car.prototype.getPrice = function() {
    return this.price
  }
  Car.prototype.changePrice = function(newPrice) {
    this.price = newPrice
  }
  Car.prototype.hasOwnProperty('getPrice')
  Car.prototype.hasOwnProperty('changePrice')
  new Car({ brand: 'Audi', model: 'Q3', price: 36000 })
  new Car({ brand: 'Audi', model: 'Q3', price: 36000 })

//6
function Storage(items) {
    this.items = items
  }
  Storage.prototype.getItems = function() {
    return this.items
  }
  Storage.prototype.addItem = function(newItem) {
    this.items.push(newItem)
  }
  Storage.prototype.removeItem = function(item) {
    this.items.splice(this.items.indexOf(item),1)
  }
  
  const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
  console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
  storage.addItem('Дроид');
  console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
  storage.removeItem('Пролонгер');
  console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

  //7
  function StringBuilder (baseValue) {
    this.value = baseValue
  }
  
  StringBuilder.prototype.getValue = function() {
  return this.value
  }
  StringBuilder.prototype.padEnd = function(str) {
  this.value = this.value + str
  }
  StringBuilder.prototype.padStart = function(str) {
  this.value = str + this.value
  }
  StringBuilder.prototype.padBoth = function(str) {
  this.value = str + this.value + str
  }
 
  const builder = new StringBuilder('.');
  console.log(builder.getValue()); // '.'
  builder.padStart('^');
  console.log(builder.getValue()); // '^.'
  builder.padEnd('^');
  console.log(builder.getValue()); // '^.^'
  builder.padBoth('=');
  console.log(builder.getValue()); // '=^.^='

//9
class Car {
  constructor ({ brand, model, price }) {
    this.brand = brand;
  this.model = model;
  this.price = price;
  }
}

new Car({ brand: 'Audi', model: 'Q3', price: 36000 })
new Car({ brand: 'BMW', model: 'X5', price: 58900 })
new Car({ brand: 'Nissan', model: 'Murano', price: 31700 }) */

//10
/* class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  getPrice() {
    return this.price
  }
  changePrice(newPrice) {
  this.price = newPrice
  }
}
const car = new Car({ brand: 'Audi', model: 'Q3', price: 36000 })
car.changePrice(35000)

console.log(car.getPrice());

//11
class Car {
  #brand //приватное свойство класса, которое доступно только в теле класса
  constructor({ brand, model, price }) {
    this.#brand = brand
    this.model = model;
    this.price = price;
  }
getBrand() {
  return this.#brand
}
  changeBrand(newBrand) {
    this.#brand = newBrand
  }
}

new Car({ brand: 'Audi', model: 'Q3', price: 36000 })
new Car({ brand: 'BMW', model: 'X5', price: 58900 })
new Car({ brand: 'Nissan', model: 'Murano', price: 31700 })

//12
class Storage {
  #items
  constructor (items) {
  this.#items = items
  }
  getItems () {
  return this.#items;
};
  addItem (newItem) {
  this.#items.push(newItem);
};
  removeItem (item) {
  const itemIndex = this.#items.indexOf(item);
  this.#items.splice(itemIndex, 1);
};
}


const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem("Дроид");
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem("Пролонгер");
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

//13
class StringBuilder {
  #value
    constructor (baseValue) {
    this.#value = baseValue
    }
    getValue () {
    return this.#value;
  };
    padEnd (str) {
    this.#value += str;
  };
    padStart (str) {
    this.#value = str + this.#value;
  };
    padBoth (str) {
    this.padStart(str);
    this.padEnd(str);
  };
  }
  const builder = new StringBuilder('.');
  console.log(builder.getValue()); // '.'
  builder.padStart('^');
  console.log(builder.getValue()); // '^.'
  builder.padEnd('^');
  console.log(builder.getValue()); // '^.^'
  builder.padBoth('=');
  console.log(builder.getValue()); // '=^.^='

//14
class Car {
  #model;
  #price;
  #brand;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }

  get brand() {
    return this.#brand;
  }

  set brand(newBrand) {
    this.#brand = newBrand;
  }

  get model() {
    return this.model;
  }

  set model(newModel) {
    this.model = newModel;
  }

  get price() {
    return this.price;
  }

  set price(newPrice) {
    this.price = newPrice;
  }
} */

//15
/* class Car {
  static MAX_PRICE = 50000;
  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (newPrice <= Car.MAX_PRICE){
    return this.#price = newPrice;
    } 
      
  
  }

}

const audi = new Car({price: 35000});
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000 */

//16
/* class Car {
  static #MAX_PRICE = 50000;

static checkPrice(price) {
if (price > Car.#MAX_PRICE) {
return 'Внимание! Цена превышает допустимую.'
} else {
  return 'Всё хорошо, цена в порядке.'
}
}
  // Пиши код выше этой строки
  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.

//17
class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  static AccessLevel = { BASIC: 'basic', SUPERUSER: 'superuser' }
} */

//18
class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
 

 static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser'
  };
accessLevel = Admin.AccessLevel
  constructor({email, accessLevel}) {
    super(email)
  this.email = email,
    this.accessLevel = accessLevel
  }
 
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser

//19
class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Пиши код ниже этой строки

  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser'
  };

  accessLevel;

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }
  blacklistedEmails = []
blacklist(email) {
 this.blacklistedEmails.push(email)
}
  isBlacklisted(email) {
  if (this.blacklistedEmails.includes(email)) {
    return true;
  } else return false
  }
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser
mango.blacklist('poly@mail.com');
console.log(mango.blacklistedEmails); // 'poly@mail.com'
console.log(mango.isBlacklisted('mango@mail.com')); //  false
console.log(mango.isBlacklisted('poly@mail.com')); // true 