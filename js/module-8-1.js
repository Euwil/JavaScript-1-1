const refs = {
  propagation: document.querySelector('.propagation'),
  articleProp: document.getElementById('article-prop'),
  articleList: document.getElementById('article-list'),
}
const { propagation, articleProp, articleList } = refs

//=====================================================================================================================================
//Propagation
//Bubbling
window.addEventListener('click', (e) => {
    console.log('window:', e)
  })
  propagation.addEventListener('click', (e) => {
    console.log('propagation:', e)
  })
  articleProp.addEventListener('click', (e) => {
    console.log('articleProp:', e)
  })
  articleList.addEventListener('click', (e) => {
    console.log('articleList-1:', e)
  })
//=====================================================================================================================================
//Delegation
articleList.addEventListener(
    'click',
    (e) => {
        console.log(e);
        console.log(e.target); //элемент, по которому нажали
        e.stopPropagation(); //события отработают только на листе идальше всплытие прервется
        e.stopImmediatePropagation(); //на элементе отработает только это событие
    }
)

//====================================================================================================================================
//THROTTLE
//_.throttle(callback, time (ms))
const refs = {
    form: document.querySelector(".form")
}
 const {form} = refs
/*form.addEventListener(
    'input',
    _.throttle((e) => { //первый вызов коллбека происходит сразу, а второй через 5 сек
         console.log(e.target.value);
        }, 5000)
) */

//=====================================================================================================================================
//DEBOUNCE
form.addEventListener(
    'input',
    _.debounce((e) => { //первый вызов коллбека происходит через 5 сек после окончания ввода
         console.log(e.target.value);
        }, 5000)
)
//=====================================================================================================================================
//IntersectionObserver
const refs = {
    propagation: document.querySelector('.propagation'),
    articleProp: document.getElementById('article-prop'),
    articleList: document.getElementById('article-list'),
    myBtn: document.getElementById('#myBtn')
  }
  const { propagation, articleProp, articleList, myBtn } = refs

const options = {
    root: articleList,
    rootMargin: '5px 5px 5px 5px',
    treshold: 0.5,

}
function callback(elems) {
    console.log(elems);
}
const myObserver = new IntersectionObserver(callback, options)
myObserver.observe(myBtn)