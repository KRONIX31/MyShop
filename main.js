/*const cursor = document.getElementById('cursor')
const follower = document.getElementById('aura')
document.addEventListener('mousemove',logkey)
function logkey(e){
    cursor.style = `left: ${e.clientX}px;
    top: ${e.clientY}px;`
    follower.style = `left: ${e.clientX}px;
    top: ${e.clientY}px;`
} */
const headerUser = document.querySelector('.header_top_user')
window.onload = function(e) {
    if(e.currentTarget.innerWidth <= 980) {
        headerUser.innerHTML = ''
    } else {
        headerUser.innerHTML = headerUser.innerHTML = 'Личный кабинет'
    }
}
window.onresize = function(e) {
    if(e.currentTarget.innerWidth <= 980) {
        headerUser.innerHTML = ''
    } else {
        headerUser.innerHTML = headerUser.innerHTML = 'Личный кабинет'
    }
}

function burgerClick() {
    const burger = document.querySelectorAll('.icon_menu')
    const mobileMenu = document.querySelector('.mobile_top_menu_body')
    burger.forEach(function(burger){
        burger.classList.toggle('icon_menu_active')    
    })
    mobileMenu.classList.toggle('mobile_top_menu_body_active')
    document.querySelector('body').classList.toggle('body_active')
}

function mobileMenuCatalogOpen1() {
    const mobileSubMenu = document.querySelector('#mobile_1')
    const mobileSubMenuNav = document.querySelector('#mobile_nav_1')
    document.querySelector('.prevent_def').preventDefault
    if(mobileSubMenu.style.display === 'none') {
        mobileSubMenu.style.display = 'block'
        mobileSubMenu.style.right = '0'
        mobileSubMenuNav.style.justifyContent = 'space-between'  

    } else {
        mobileSubMenu.style.display = 'none'
        mobileSubMenu.style.right = '100%'
        mobileSubMenuNav.style.justifyContent = 'right'  
    }
}
function mobileMenuCatalogOpen2() {
    const mobileSubMenu = document.querySelector('#mobile_2')
    const mobileSubMenuNav = document.querySelector('#mobile_nav_2')
    if(mobileSubMenu.style.display === 'none') {
        mobileSubMenu.style.display = 'block'
        mobileSubMenu.style.right = '0'
        mobileSubMenuNav.style.justifyContent = 'space-between'
    } else {
        mobileSubMenu.style.display = 'none'
        mobileSubMenu.style.right = '100%'  
    }
}



function toggleArrow() {
    document.querySelector('.phones_header_list').classList.toggle('phones_header_list_active');
    document.querySelector('.phones_header_arrow').classList.toggle('phones_header_arrow_active');
}



document.addEventListener('click',documentActions);
function documentActions(e) {
    const targetElement = e.target;
    if(targetElement.closest('[data-parent]')) {
        const subMenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null;
        console.log(subMenuId);
        const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);
        /*          */
        if(subMenu) {
            const grid = subMenu.querySelector('.submenu_catalog_block')
            grid.style.gridTemplateColumns = `repeat(${grid.querySelectorAll('ul').length},1fr`;
        }
        /*          */
        if(subMenu) {
            const activeSubmenu = document.querySelector('.menu_catalog_submenu_active');
            const activeLink = document.querySelector('.menu_catalog_link_active');

            if (activeLink && activeLink !== targetElement){
                activeLink.classList.remove('menu_catalog_link_active');
                activeSubmenu.classList.remove('menu_catalog_submenu_active');
            }

            targetElement.classList.toggle('menu_catalog_link_active');
            subMenu.classList.toggle('menu_catalog_submenu_active');

        } else {
            console.log('нет такого подменю :)')
        }
        e.preventDefault();
    }
}































console.log("YES")
const test = {
    x() {
        window.console.log('FUNCTION!!!')
    },
    text: 'te??'
}
////
let y = {
    z: 2,
    x: 9
}
window.console.log(JSON.stringify(y))
////
const person = {
    hg: true
}
const person2 = Object.assign({echo_odin:'eto tak'}, person)
person2.age = 222
person2.hg = false

const person3 = {...person2}
const person4 = JSON.parse(JSON.stringify(person3))
window.console.log('person4    ',person4.age)
/////
function mouse(a,b) {
    let x = a - b
    return(x)
}
console.dir(mouse)
console.log(mouse(10,11))
////

const personOne = {
    age: 20,
    name: 'Billy'
}
function IncPersonAge(person) {
    const updatedPerson = JSON.parse(JSON.stringify(person))
    updatedPerson.age += 1
    return updatedPerson
}
const person22 = IncPersonAge(personOne)
console.log(person22)
console.log(personOne)
function writeName() {
    console.log('Bilaz')
}
setTimeout(writeName, 1000)





const questions = [
    {
        question: "Какой язык?",
        answers: ['Java','c++','C#','JavaScript','Python'],
        correct: 'JavaScript',
    },
    {
        question: "Мышь??",
        answers: ['Bloody','Steelseries','Razer','Zowie','Logitech','Red Dragon'],
        correct: 'Razer',
    },
    {
        question: "Клавиатура??",
        answers: ['Bloody','Steelseries','Razer','ящыаыл','Logitech','Red Dragon','Zet','Dexp'],
        correct: 'Razer',
    }
]
let score = 0
let questionIndex = 0
const headerContainer = document.querySelector('#header')
const listContainer = document.querySelector('#list')
const submitBtn = document.querySelector('#submit')

clearPage()
showQuestion()
submitBtn.onclick = checkAnswer

function clearPage() {
headerContainer.innerHTML = ''
listContainer.innerHTML = ''
}

function showQuestion() {
    const headerTemplate = '<h1 class="quiz_title">%title%</h1>'
    const title = headerTemplate.replace('%title%',questions[questionIndex]['question'])
    
    headerContainer.innerHTML = title
    for (item of questions[questionIndex]['answers']) {
        const questionTemplate =
        `<li>
            <label class="da" for="${item}">
                <input value="${item}" type="radio" class="answer" name="answer" id="${item}">
                <i></i>
                <span>%answer%</span>
            </label>
        </li>`;
        const answer = questionTemplate.replace('%answer%',item);
        listContainer.innerHTML += answer;
    }

}

function checkAnswer() {
    const checkedRadio = listContainer.querySelector('input[type=radio]:checked')
    if (!checkedRadio) {
        document.querySelector('.invalid_answer').classList.add('invalid_answer_active')
        return
        }
    const userAnswer = checkedRadio.value
    if(questions[questionIndex]['correct'] == userAnswer) {
        score += 1
    }
    if (questionIndex !== questions.length - 1) {
        document.querySelector('.invalid_answer').classList.remove('invalid_answer_active')
        console.log('не последний вопрос')
        questionIndex++
        clearPage()
        showQuestion()
    }
    else{
        document.querySelector('.invalid_answer').classList.remove('invalid_answer_active')
        clearPage()
        showResults()
    }
}

function showResults() {
    console.log(score)
    const resultsTemplate = `
    <h2 class="title">
        %title%
    </h2>
    <h3 class="summary">
        %message%
    </h3>
    <p class="result">
        %result%
    </p>`
    let title, message
    if (score === questions.length) {
        title = 'Поздравляем!'
        message = 'Вы ответили верно на все вопросы'
    }
    else if((score / questions.length) >= 0.5) {
        title = 'Неплох'
        message = 'более половины ответов - правильны'
    } else {
        title = 'Иди учи'
        message = 'Незачёт'
    }
    let result = `${score} из ${questions.length}`
    const finalMessage = resultsTemplate.replace('%title%', title).replace('%message%',message).replace('%result%',result)
    headerContainer.innerHTML = finalMessage
    
    submitBtn.blur()
    submitBtn.innerHTML = 'Начать заново'
    submitBtn.style.height = '64px'
    submitBtn.onclick = function() {
        history.go()
    }
}


