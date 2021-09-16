//СОБЫТИЯ
//с формой: submit(Enter || button.type="submit")
//input - происходит каждый раз при вводе символа
//change - создается объект при потере фокуса на элементе формы

//с клавиатурой: keydown, keypress, keyup

//click

//focus & blur - только на одном элементе в один момент

//===============================================================================================================================
const form = document.querySelector('.form')
form.addEventListener('submit', (event)=>{
    event.preventDefault() //не будет перезагружать страницу при отправке
    console.log('Отправка формы произошла', event);
    console.log(event.target.children.name.value);
    console.log(event.target.children.age.value);
})

form.addEventListener(
    'input',
    (e) => {
console.log(e.target.value);
    }
)
form.addEventListener(
    'change',
    (evt) => {
console.log(evt.target.value);
    }
)

const firstInput = document.querySelector('[name="name"]');
firstInput.addEventListener(
    'focus',
    (e) => {
        console.log(e.target.value);
    }
)
firstInput.addEventListener(
    'blur',
    (e) => {
        console.log(e.target.value);
    }
)

//===================================================================================================================
//e.code - стандартизированное имя клавиши
//e.key - значение клавиши согласно языковой разметки
window.addEventListener(
    'keydown',
    (e) => {
console.log("keydown", e);
    }
)
window.addEventListener(
    'keypress',
    (e) => {
        console.log("keypress", e);  
    }
)
window.addEventListener(
    'keyup',
    (e) => {
        console.log("keyup", e);
    }
)
//==================================================================================================================
form.addEventListener(
    'click',
    (e) => {
        console.log(e);
    }
)

