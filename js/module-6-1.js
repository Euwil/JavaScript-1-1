// array.method(callback)
//          elem - переменная, в которую будет записываться каждый элемент массива, index - индекс этого элемента, array
//callback () => {}
//array.method((elem, index, array) => {})

//array.forEach => for alternative
const numbers = [1, 2, 3, 4, 5]
const newArr = []
const forEachResult = numbers.forEach((num) => {
    newArr.push(num + 1)
    return num
})
console.log(forEachResult); //undefined
console.log(newArr);
//array.map() => возвращает всегда массив той же длины, что и исходный | делает срез массива
const mapResults = numbers.map((item) => {
    return item + 1
})
console.log(mapResults) //[2, 3, 4, 5, 6] в исходном 5 элементов и в новом 5
//array.filter() => вернет массив элементов, которые прошли проверку
const filteredNumbers = numbers.filter((elem) => {
    return elem === 2
}
)
console.log(filteredNumbers); //[2]

//array.find() => возвращает первый элемент, который прошел условие
const findNum = numbers.find((i) => {
    return i > 2 && i < 5
})
console.log(findNum); //3 - первое совпадение
//array.reduce() => все, что угодно ({}, [])
const reduceArray = numbers.reduce((acc, elem) => {
    acc.push(elem + '')
    return acc
}, []) //начальное значение acc
console.log(reduceArray); //["1", "2", "3", "4", "5"]
//array.every() => true - если все элементы прошли проверку or false - если один не прошел (&&)
const everyResults = numbers.every((elem) => {
return elem > 1
})
console.log(everyResults); //false не все элементы больше 1
//array.some() => true - если хоть один прошел проверку or false - если все не прошли проверку (||)
const someResults = numbers.some((elem) => {
    return elem > 1
    })
    console.log(someResults); //true хоть один элемент больше 1
//array.sort() => сортирует элементы в элементы в алфавитном порядке, числа в порядке уменьшения или увеличения, мутирует исходный массив
const fruits = ["orange", "banana", "apple"]
const sortedFruits = fruits.sort()//.reverse() - сортирует слова в обратном порядке
console.log(sortedFruits); //["apple", "banana", "orange"]
console.log(fruits); //["apple", "banana", "orange"]

const ages = [22, 44, 32, 56, 11, 5, -10]
const sortedAges = ages.sort((min,max) =>{
    return min - max
})
console.log(sortedAges); //[-10, 11, 22, 32, 44, 5, 56] если не добавлять коллбек
console.log(sortedAges); //[-10, 5, 11, 22, 32, 44, 56] с коллбеком

//ЦЕПОЧКА ОБЪЕКТОВ
const students = [
    { name: 'Phillip', age: 21, gender: 'male' },
    { name: 'Margo', age: 27, gender: 'female' },
    { name: 'Ann', age: 32, gender: 'female' },
    { name: 'Edd', age: 41, gender: 'male' },
    { name: 'Bill', age: 35, gender: 'male' },
  ]
  const result = students.filter((student) => student.gender === "female").map((girl) => girl.name).sort()
  console.log(result); //["Ann", "Margo"]

  const result2 = students.sort((a, b) => a.age - b.age)[0]
console.log(result2)

const result3 = students.sort((a, b) => b.age - a.age)[0]
console.log(result3)

const result4 = students.reduce((acc, elem, i, arr) => {
  console.log((acc += elem.age / arr.length))
  return acc})