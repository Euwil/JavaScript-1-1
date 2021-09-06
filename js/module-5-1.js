//[[Prototype]] - от кого произошел     свойство prototype, чтобы добавлять методы для потомков
//функция-конструктор
function Constructor(prop1 = 0, prop2 = 1) {
    this.prop1 = prop1
    this.prop2 = prop2
} //new вызывает метод construct, который создает новый объект и записывает в него перечисленные в функции свойства
const newObj = new Constructor() //в переменной теперь хранится объект

const User = function(login, password) {
    this.login = login
    this.password = password
    this.showLogin = function () { //личный метод каждого нового объекта
        console.log(this.login);
    }
}
User.prototype.showPassword = function () { //если записать в прототип метод он будет доступен всем прототипам, которые создает этот конструктор
    console.log(this.password);
}
const user1 = new User("meow", 12345)
console.log(user1);

//функция на базе исходной
function NewUser (name, age, login, password) {
    User.call(this, login, password)
    this.name = name
    this.age = age
}
//нужно перезаписать prototype новой функции привязав prototype из исходной
NewUser.prototype = Object.create(User.prototype)
NewUser.prototype.constructor = NewUser //добавляет свойство конструктор в свойство prototype

//добавление новых методов в prototype новой функции
NewUser.prototype.updateAge = function() {
    return (this.age += 1)
}

const newUser1 = new NewUser("Olha", 23, "Euwil", 12345)
console.log(newUser1);

newUser1.showLogin()
newUser1.showPassword()
console.log(newUser1.updateAge());
