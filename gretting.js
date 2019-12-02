const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
SHOWING_CN = "showing";

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function handleClick(event) {
    form.classList.add(SHOWING_CN);
    greeting.classList.remove(SHOWING_CN);
    localStorage.removeItem(USER_LS);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS); //이름 찾기
    if (currentUser === null) {
        //he is not
        askForName();
    } else {
        //he is
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
    
    greeting.addEventListener("click", handleClick);
}

init();