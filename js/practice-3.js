//1
/* const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Spacious apartment in the city center',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
    //2
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
  };
//3
  const aptRating = apartment.rating; //имя ключа заранее известно
  const aptDescr = apartment.descr;
  const aptPrice = apartment.price;
  const aptTags = apartment.tags;
  //4
  const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[apartment.tags.length - 1]; */

//5
/* const aptRating = apartment["rating"]; //имя ключа заранее неизвестно
const aptDescr = apartment["descr"];
const aptPrice = apartment["price"];
const aptTags = apartment["tags"]; */

//6
/* apartment.price = 5000
apartment.rating = 4.7
apartment.owner.name = "Henry Sibola"
apartment.tags.push("trusted")

//7
apartment.area = 60
apartment.rooms = 3
apartment.location = {
country: "Jamaica",
  city: "Kingston",
}

//8
const name = 'Repair Droid';
const price = 2500;
const image = 'https://via.placeholder.com/640x480';
const tags = ['on sale', 'trending', 'best buy'];

const product = {
name,
  price,
  image,
  tags,
};

//9
const emailInputName = 'email';
const passwordInputName = 'password';

const credentials = {
  [emailInputName]: "henry.carter@aptmail.com",
  [passwordInputName]: "jqueryismyjam",
};

//10
const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
  };
  const keys = [];
  const values = [];
  for (let key in apartment) {
    keys.push(key)
    values.push(apartment[key])
  }

//11
const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {

if (apartment.hasOwnProperty(key)) {
  keys.push(key);
  values.push(apartment[key]);
}
}

//12
function countProps(object) {
    let propCount = 0;
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
    propCount += 1
  }
  }
     return propCount;
  }
countProps({}) //возвращает 0
countProps({ name: "Mango", age: 2 }) //возвращает 2
countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) //возвращает 3
  
//13
const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
  };
  const values = [];
  const keys = Object.keys(apartment);
  for (let key of keys) {
    values.push(apartment[key])
  } */
//14
/* function countProps(object) {
  let propCount = 0;
  let keys = Object.keys(object)
    for (const key of keys) {
        console.log(key);
      if (object.hasOwnProperty(key)) {
        propCount += 1;
        
      }
    }
    console.log(propCount);
    return propCount;
   }
countProps({}) //возвращает 0
countProps({ name: "Mango", age: 2 }) //возвращает 2
countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) //возвращает 3

//15
const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
  };
  const keys = Object.keys(apartment);
  const values = Object.values(apartment); */

//16
/*   function countTotalSalary(salaries) {
    let totalSalary = 0;
     let salary = Object.values(salaries)
      for (let key of salary) {
    
  totalSalary += key
  }
   

    return totalSalary;
  }
countTotalSalary({}) //возвращает 0
countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) //возвращает 330
countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) //возвращает 400

//17
const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];
const hexColors = [];
const rgbColors = [];
for (let color of colors) {
 hexColors.push(color.hex)
 rgbColors.push(color.rgb)
} */

//18
/* const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  let names = []
  for (let product of products) {
  names.push(product.name)
  if (names.includes(productName)) {
   return product.price
  } 

}
return null
}
getProductPrice("Radar") //возвращает 1300.
getProductPrice("Grip") //возвращает 1200.
getProductPrice("Scanner") //возвращает 2700.
getProductPrice("Droid") //возвращает 400.
getProductPrice("Engine") //возвращает null. */

//19
/* const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  let values = []
  for (let product of products) {
  if (product.hasOwnProperty(propName)) {
  values.push(product[propName])
  }
  }
  console.log(values);
  return values
}
getAllPropValues("name") //возвращает ["Radar", "Scanner", "Droid", "Grip"]
getAllPropValues("quantity") //возвращает [4, 3, 7, 9]
getAllPropValues("price") //возвращает [1300, 2700, 400, 1200]
getAllPropValues("category") //возвращает [] */

//20
/* const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];
function calculateTotalPrice(productName) {
  for (let product of products) {
    if (product.name == productName) return product.price * product.quantity;
  }

  return 0;
}
calculateTotalPrice("Blaster"); //возвращает 0
calculateTotalPrice("Radar"); //возвращает 5200
calculateTotalPrice("Droid"); //возвращает 2800
calculateTotalPrice("Grip"); //возвращает 10800
calculateTotalPrice("Scanner"); //возвращает 8100

//21
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
const { yesterday, today, tomorrow } = highTemperatures;
const meanTemperature = (yesterday + today + tomorrow) / 3;

//22
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
const {
  yesterday,
  today,
  tomorrow,
  icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
} = highTemperatures;
const meanTemperature = (yesterday + today + tomorrow) / 3;

//23
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
const {
  yesterday: highYesterday,
  today: highToday,
  tomorrow: highTomorrow,
  icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
} = highTemperatures;
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

//24
const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];

for (const { hex, rgb } of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
}

//25
const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};

const {
  today: {
    low: lowToday,
    high: highToday,
    icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: lowTomorrow,
    high: highTomorrow,
    icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
  },
} = forecast; */

//26
function calculateMeanTemperature(forecast) {
  const {today: {low: todayLow, high: todayHigh}, tomorrow: {low: tomorrowLow, high: tomorrowHigh}} = forecast
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}
calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }) //возвращает 28.5
calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }) //возвращает 37

//27
const scores = [89, 64, 42, 17, 93, 51, 26];
const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);

//28
const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);

//29
const defaultSettings = {
  theme: 'light',
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};

const finalSettings = {...defaultSettings, ...overrideSettings};

//30
function makeTask(data) {
  const completed = false;
  const category = 'General';
  const priority = 'Normal';
 return {completed, category, priority, ...data}
}
makeTask({}) //возвращает { category: "General", priority: "Normal", completed: false }
makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }) //возвращает { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
makeTask({ category: "Finance", text: "Take interest" }) //возвращает { category: "Finance", priority: "Normal", text: "Take interest", completed: false }
makeTask({ priority: "Low", text: "Choose shampoo" }) //возвращает { category: "General", priority: "Low", text: "Choose shampoo", completed: false }
makeTask({ text: "Buy bread" }) //возвращает { category: "General", priority: "Normal", text: "Buy bread", completed: false }

//31
function add(...args) {
  let sum = 0
  for (let number of args) {
  sum += number
  }
  return sum
  }
add(15, 27) //возвращает 42
add(12, 4, 11, 48) //возвращает 75
add(32, 6, 13, 19, 8) //возвращает 78
add(74, 11, 62, 46, 12, 36) //возвращает 241

//32
function addOverNum(maxNumber, ...args) {
  let total = 0;
  for (const arg of args) {
    if (arg > maxNumber) {
    total += arg;
    }
  }
  return total;
}
addOverNum(50, 15, 27) //возвращает 0
addOverNum(10, 12, 4, 11, 48, 10, 8) //возвращает 71
addOverNum(15, 32, 6, 13, 19, 8) //возвращает 51
addOverNum(20, 74, 11, 62, 46, 12, 36) //возвращает 218