//window - окно браузера
console.log(window); //получим глобальный объект window

//document
console.log(document); //наполнение html
//=================================================================================================================================
//ДОСТУП К ЭЛЕМЕНТАМ
const titleByTag = document.querySelector('h1') //по селектору тега
console.log(title); //<h1>Hello everyone!!!</h1>

const titleById = document.querySelector("#title")//по селектору идентификатора
const titleGetById = document.getElementById('title') //BEST

const titleByClass = document.querySelector(".main-title")//по селектору класса
const elemsByClass = document.getElementsByClassName("text")
console.log(elemsByClass); //HTMLCollection(2) [p.text, p.text] without forEach
const elemsByClassName = document.querySelectorAll(".text") //BEST
console.log(elemsByClassName); //NodeList(2) [p.text, p.text]

const titleByAttr = document.querySelector("[data-name='my-title']")//по селектору аттрибута

const elemByParent = document.querySelector("body>h1")//по селектору наследника

const elemByAnc = document.querySelector("body p")//по селектору потомка

const allElem = document.querySelectorAll("p")//доступ ко всем элементам с таким селектором
console.log(allElem); //NodeList [p#count, p] with forEach

//==================================================================================================================================
//УЗЛЫ
//узел-элемент
//узел-комментарий
//текстовый узел

//=================================================================================================================================
//НАВИГАЦИЯ
console.log(titleByTag.parentNode); //родитель body
console.log(titleByTag.childNodes); //NodeList(2) [text, span] любые дочерние узлы
console.log(titleByTag.children); //HTMLCollection [span] только дочерние узлы-элементы

//=================================================================================================================================
//СВОЙСТВА ЭЛЕМЕНТОВ
console.dir(titleByTag);

//class в свойстве classList в виде DOMTokenList ['main-title', value: 'main-title']
console.log(titleByTag.classList);
titleByTag.classList.add('new-class') //добавляет новый класс
console.log(titleByTag.classList.contains('classclass')); //false нет такого класса
titleByTag.classList.remove('new-class') //удаляет класс
titleByTag.classList.replace('main-title', 'hero-title')

//id - отдельное свойство
console.log(titleByTag.id); //title - напрямую
//attributes
console.log(titleByTag.attributes); //NamedNodeMap {0: id, 1: class, 2: data-name, id: id, class: class, data-name: data-name, length: 3}
console.log(titleByTag.attributes.id); //id="title"

console.log(titleByTag.textContent); //Hello everyone!!! Let's begin

console.log(titleByTag.dataset); //DOMStringMap {name: 'my-title'}

//добавить аттрибут     какой аттрибут, какое значение передать
titleByTag.setAttribute('name', 'main-title')
//получить значение
titleByTag.getAttribute('name')
//удалить аттрибут
titleByTag.removeAttribute('name')

console.log(titleByTag.style); //CSSStyleDeclaration
titleByTag.style.color = "blue"
titleByTag.style.background = "yellow"
//titleByTag.textContent = "" //убрало текст из элемента

//===================================================================================================================================
//СОЗДАНИЕ УЗЛОВ

//createElement
const button = document.createElement('button')
button.textContent = 'Click'
button.style.background = 'green'
button.setAttribute('type', 'button')
button.classList.add('btn')
console.log(button);
//`` - строчная разметка - string
const stringBtn = `<button type="button" class="btn" style="background: green;">Click</button>`
//клонирование
const cloneBtn = button.cloneNode(true)//false - то, что внутри тега не клонируется true - полная копия со всеми вложенностями
console.log(cloneBtn);

//====================================================================================================================================
//ВСТРАИВАНИЕ ЭЛЕМЕНТОВ
//для объектов через createElement
titleByTag.after(button) //вставляет строго после элемента
titleByTag.appendChild(cloneBtn) //внутрь элемента

//для строк
//titleByTag.innerHTML = stringBtn
titleByTag.insertAdjacentHTML('beforebegin', stringBtn)

//====================================================================================================================================
//УДАЛЕНИЕ ЭЛЕМЕНТОВ

//для строк
//titleByTag.innerHTML = ""

//для объектов
titleByTag.removeChild(cloneBtn)
button.remove()