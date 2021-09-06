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
const newUser1 = new NewUser("Olha", 23, login, password)
console.log(newUser1);