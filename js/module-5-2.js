//ООП - все, что касается одной группы однотипных объектов, лежит в одной сущности - классе
//КЛАССЫ
class CreateUser {
    constructor(prop1 = 0, prop2 = 1) { //создание свойств будущего объекта
        this.prop1 = prop1
        this.prop2 = prop2
    }
    //добавление методов
    method1() {
        this.prop1
    }
    method2(value) {
        this.prop2 = value
    }
}


class User {
    constructor(login, password) {
        this.login = login
        this.password = password
    }
    showLogin() {
        console.log(this.login);
    }
}
const user1 = new User("Euwil", 12345)
console.log(user1);
class NewUser extends User {
    constructor(name, age, login, password) {
        super(login, password)
        this.name = name
        this.age = age
    }
    updateAge() {
        return (this.age += 1)
    }
}
//создание экземпляра нового класса
const newUser1 = new NewUser("Olha", 23, "Euwil", 12345)
console.log(newUser1);
console.log(newUser1.updateAge());
newUser1.showLogin()

//свойства-аксессоры геттер и сеттер
class Product {
    constructor(title, price) {
        this.title = title
        this._price = price
    }
    get price() { //getter & setter лучше называть именем свойства, с которым они будут работать
        return this._price
    }
    set price(value) {
        return this._price = value
    }
}
const newProduct = new Product("banana", 25)
console.log(newProduct.price); //get 25
newProduct.price = 35 //set
console.log(newProduct.price); //35

//статические свойства и методы - принадлежат классу, используются для внутренней работы
class Comment {
    static name = "Anonim" //не отражается в экземплярах
    static showName() {
        console.log(Comment.name);
    }
    constructor(author, text) {
       this.author = author 
       this.text = text
    }
}
const comment1 = new Comment("Euwil", "hello my dear friend")
Comment.showName()