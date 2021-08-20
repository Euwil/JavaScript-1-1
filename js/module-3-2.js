const product = {
    title: "mask",
    price: 100,
    values: ["30ml", "50ml", "100ml"]

}
function showTitle(name) {
    console.log(`This product is ${name}`);
}
showTitle(product.title)
const {title: myTitle} = product
showTitle(myTitle) //This product is mask

const products = {
    perfumes: {
        male: [
            {
                title: "Jadore",
                name: "Dior",
                price: 100,
            }
        ],
        female: [
            {
                title: "Lumien",
                name: "Sano",
                price: 110,
            }
        ]
    },
    masks: {

    },
}
console.log(products.perfumes.female[0].title); //Lumien страшная и неудобная запись

//ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ

const {title} = products.perfumes.female[0]
console.log(title); //Lumien

//если есть переменная с похожим названием
const {title: productTitle} = products.perfumes.female[0]
console.log(productTitle); //Lumien

//чтобы достать несколько
const {name, price} = products.perfumes.female[0]
console.log(name, price); //Sano 110

//ДЕСТРУКТУРИЗАЦИЯ МАССИВОВ
const rgb = [234, 46, 102]
// const [red, green, blue] = rgb
// console.log(red); //234
const [red, , blue] = rgb
console.log(blue); //102
// console.log(green); //error


//SPREAD - распыление 
const numbers = [1, 5, 87, 34, 56]
console.log(Math.max(numbers)); //NaN
console.log(Math.max(...numbers)); //87
console.log(Math.min(...numbers)); //1

//создание нового массива через распыление 
function getResult(a, b) {
    let total = 0
    const nums = [...arguments]
    for (let num of nums) {
        total += num
    }
    return total
}
console.log(getResult(2, 5 , 6)); //13

//объединение массивов с помощью spread
const ages = [11, 5, 10, 19, 20]
const firstClone = ages.slice(2,4)
console.log(firstClone);  //[10, 19]
const totalArray = ages.concat(firstClone)
console.log(totalArray); //[11, 5, 10, 19, 20, 10, 19]

const spreadArray = [...ages, ...ages.slice(2,4), 233, 245] 
console.log(spreadArray); //[11, 5, 10, 19, 20, 10, 19, 233, 245]

//распыление объектов
