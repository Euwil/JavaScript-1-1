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
const products = [
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
getProductPrice("Engine") //возвращает null.

//19

