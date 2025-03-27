
const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;

nextBtnFirst.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  window.scrollTo(0, 0);
});

nextBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  window.scrollTo(0, 0);
});

nextBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-75%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  window.scrollTo(0, 0);
});

submitBtn.addEventListener("click", function(){
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  window.scrollTo(0, 0);
  setTimeout(function(){
    alert("Your Form Successfully Signed up");
    location.reload();
  },800);
});

prevBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
  window.scrollTo(0, 0);
});

prevBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
  window.scrollTo(0, 0);
});

prevBtnFourth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
  window.scrollTo(0, 0);
});



// 1. ОШИБКА: Поле "Имя" разрешает цифры и точку
document.querySelector('.name').addEventListener('input', function() {
  const input1 = document.querySelector('.name');
  const paragraph = document.querySelector('.name1');
  const regexDigit = /\d/;
  const regexSpecialChar = /[^a-zA-Zа-яА-Я\s-.]/; // БАГ: точка разрешена

  if (input1.value.length > 25) {
      paragraph.textContent = 'Поле не должно содержать больше 25 символов';
      paragraph.classList.add('error');
  } else if (regexSpecialChar.test(input1.value)) {
      paragraph.textContent = 'Поле не должно содержать цифр, специальных символов, кроме дефиса и пробела';
      paragraph.classList.add('error');
  } else {
      paragraph.textContent = ''; // БАГ: цифры не проверяются
      paragraph.classList.remove('error');
  }
});

// 2. ОШИБКА: Поле "Фамилия" не проверяет длину
document.querySelector('.lastname').addEventListener('input', function() {
  const input2 = document.querySelector('.lastname');
  const paragraph = document.querySelector('.lastname1');
  const regexDigit = /\d/;
  const regexSpecialChar = /[^a-zA-Zа-яА-Я\s-.]/;

  // БАГ: нет проверки на длину (должно быть 1-25 символов)
  if (regexDigit.test(input2.value)) {
      paragraph.textContent = 'Поле не должно содержать цифр';
      paragraph.classList.add('error');
  } else if (regexSpecialChar.test(input2.value)) {
      paragraph.textContent = 'Поле не должно содержать специальных символов, кроме дефиса и пробела';
      paragraph.classList.add('error');
  } else {
      paragraph.textContent = '';
      paragraph.classList.remove('error');
  }
});

// 3. ОШИБКА: Поле "Телефон" — максимум 5 символов
document.querySelector('.telefon').addEventListener('input', function() {
  const input4 = document.querySelector('.telefon');
  const paragraph = document.querySelector('.telefon1');

  if (input4.value.length > 5) { // БАГ: должно быть до 25
      paragraph.textContent = 'Поле не должно содержать больше 25 символов';
      paragraph.classList.add('error');
  } else if (!input4.value.startsWith('+')) {
      paragraph.textContent = 'В поле должен содержаться один знак "+" в начале';
      paragraph.classList.add('error');
  } else if (/[a-zA-Zа-яА-Я]/.test(input4.value)) {
      paragraph.textContent = 'Поле не должно содержать букв.';
      paragraph.classList.add('error');
  } else if (/[^+a-zA-Z0-9а-яА-Я]/.test(input4.value)) {
      paragraph.textContent = 'Поле не должно содержать специальных символов, кроме плюса.';
      paragraph.classList.add('error');
  } else {
      paragraph.textContent = '';
      paragraph.classList.remove('error');
  }
});

// 4. ОШИБКА: Поле "Email" запрещает заглавные буквы
document.querySelector('.email').addEventListener('input', function() {
  const input5 = document.querySelector('.email');
  const paragraph = document.querySelector('.email1');
  const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/; // БАГ: только строчные

  if (input5.value.length > 25) {
      paragraph.textContent = 'Поле не должно содержать больше 25 символов';
      paragraph.classList.add('error');
  } else if (!emailPattern.test(input5.value)) {
      paragraph.textContent = 'Введите корректный email с доменом';
      paragraph.classList.add('error');
  } else {
      paragraph.textContent = '';
      paragraph.classList.remove('error');
  }
});

// 5. ОШИБКА: Поле "Пароль" не проверяет спецсимволы
document.querySelector('.password').addEventListener('input', function() {
  const input13 = document.querySelector('.password');
  const paragraph = document.querySelector('.password1');
 
  if (input13.value.length < 8 || input13.value.length > 20) {
      paragraph.textContent = 'Поле должно содержать от 8 до 20 символов';
      paragraph.classList.add('error');
  } else if (!/\d/.test(input13.value)) {
      paragraph.textContent = 'Поле должно содержать хотя бы одну цифру';
      paragraph.classList.add('error');
  } else if (!/[A-ZА-Я]/.test(input13.value)) { // БАГ: не проверяет кириллицу правильно
      paragraph.textContent = 'Поле должно содержать хотя бы одну заглавную букву';
      paragraph.classList.add('error');
  } else if (!/[a-zа-я]/.test(input13.value)) {
      paragraph.textContent = 'Поле должно содержать хотя бы одну строчную букву';
      paragraph.classList.add('error');
  // БАГ: нет проверки на спецсимволы (!@#$ и т.д.)
  } else {
      paragraph.textContent = '';
      paragraph.classList.remove('error');
  }
});

document.querySelector('.house').addEventListener('input', function() {
  const input9 = document.querySelector('.house');
  const paragraph = document.querySelector('.house1');
  const regexSpecialChar = /[^a-zA-Zа-яА-Я0-9\s-]/; 

  if (input9.value.length > 15) {
      paragraph.textContent = 'Поле не должно содержать больше 15 символов';
      paragraph.classList.add('error');
  } else if (regexSpecialChar.test(input9.value)) {
      paragraph.textContent = 'Поле не должно содержать специальных символов, кроме слеша, дефиса';
      paragraph.classList.add('error');
  } else {
      paragraph.textContent = '';
      paragraph.classList.remove('error');
  }
});

document.querySelector('.date').addEventListener('input', function() {
  const input3 = document.querySelector('.date');
  const paragraph = document.querySelector('.date1');

  const currentDate = new Date();
  const selectedDate = new Date(input3.value);
  const ageDiff = currentDate.getFullYear() - selectedDate.getFullYear();

  if (ageDiff < 12) {
      paragraph.textContent = "Возрастное ограничение для пользователей не достигших 12 лет";
      paragraph.classList.add('error');
  } else {
      paragraph.textContent = '';
      paragraph.classList.remove('error');
  }
});
// 6. ОШИБКА: Поле "Страна" не допускает пробел
document.querySelector('.country').addEventListener('input', function() {
  const input6 = document.querySelector('.country');
  const paragraph = document.querySelector('.country1');
  const regexDigit = /\d/;
  const regexSpecialChar = /[^a-zA-Zа-яА-Я0-9-]/;// БАГ: нет пробела

  if (input6.value.length < 4 || input6.value.length > 25) {
      paragraph.textContent = 'Поле не должно содержать меньше 4 и больше 25 символов';
      paragraph.classList.add('error');
  } else if (regexDigit.test(input6.value)) {
      paragraph.textContent = 'Поле не должно содержать цифр';
      paragraph.classList.add('error');
  } else if (regexSpecialChar.test(input6.value)) {
      paragraph.textContent = 'Поле не должно содержать специальных символов, кроме дефиса и пробела';
      paragraph.classList.add('error');
  } else {
      paragraph.textContent = '';
      paragraph.classList.remove('error');
  }
});

// 7. ОШИБКА: Поле "Город" разрешает цифры 
document.querySelector('.city').addEventListener('input', function() {
  const input7 = document.querySelector('.city');
  const paragraph = document.querySelector('.city1');
  const regexDigit = /м\d/; // БАГ: цифры не проверяются
  const regexSpecialChar =  /[^\wа-яА-Я\s-]/; 

  if (input7.value.length > 25) {
      paragraph.textContent = 'Поле не должно содержать больше 25 символов';
      paragraph.classList.add('error');
  } else if (regexDigit.test(input7.value)) {
      paragraph.textContent = 'Поле не должно содержать цифр';
      paragraph.classList.add('error');
  } else if (regexSpecialChar.test(input7.value)) {
      paragraph.textContent = 'Поле не должно содержать специальных символов, кроме дефиса и пробела';
      paragraph.classList.add('error');
  } else {
      paragraph.textContent = ''; 
      paragraph.classList.remove('error');
  }
});

document.querySelector('.street').addEventListener('input', function() {
  const input8 = document.querySelector('.street');
  const paragraph = document.querySelector('.street1');
  const regexDigit = /\d/;
  const regexSpecialChar = /[^a-zA-Zа-яА-Я0-9\s-]/;

  if (input8.value.length > 25) {
      paragraph.textContent = 'Поле не должно содержать больше 25 символов';
      paragraph.classList.add('error');
  } else if (regexDigit.test(input8.value)) {
      paragraph.textContent = 'Поле не должно содержать цифр';
      paragraph.classList.add('error');
  } else if (regexSpecialChar.test(input8.value)) {
      paragraph.textContent = 'Поле не должно содержать специальных символов, кроме точки, дефиса и пробела';
      paragraph.classList.add('error');
  } else {
      paragraph.textContent = '';
      paragraph.classList.remove('error');
  }
});

document.querySelector('.flat').addEventListener('input', function() {
  const input10 = document.querySelector('.flat');
  const paragraph = document.querySelector('.flat1');
  const regexDigit = /\d/;

  if (input10.value.length > 10) {
      paragraph.textContent = 'Поле не должно содержать больше 10 символов';
      paragraph.classList.add('error');
  } else if (!regexDigit.test(input10.value)) {
      paragraph.textContent = 'Поле должно содержать только цифры';
      paragraph.classList.add('error');
  } else {
      paragraph.textContent = '';
      paragraph.classList.remove('error');
  }
});

// 8. ОШИБКА: Поле "Место цчёбы" не допускает меньше 35 символов
document.querySelector('.study').addEventListener('input', function() {
  const input11 = document.querySelector('.study');
  const paragraph = document.querySelector('.study1');
  const regexSpecialChar = /[^a-zA-Z]/;

  if (input11.value.length < 35) { // БАГ: гнак не тот
      paragraph.textContent = 'Поле не должно содержать больше 35 символов';
      paragraph.classList.add('error');
  } else if (!regexSpecialChar.test(input11.value)) {
      paragraph.textContent = 'Поле заполнено некорректно';
      paragraph.classList.add('error');
  } else {
      paragraph.textContent = '';
      paragraph.classList.remove('error');
  }
});

document.querySelector('.login').addEventListener('input', function() {
  const input12 = document.querySelector('.login');
  const paragraph = document.querySelector('.login1');

  if (input12.value.length > 25) {
      paragraph.textContent = 'Поле не должно содержать больше 25 символов';
      paragraph.classList.add('error');
  } else {
      paragraph.textContent = '';
      paragraph.classList.remove('error');
  }
});

const password = document.querySelector('.password');
const password2 = document.querySelector('.password2');
const password3 = document.querySelector('.password3');

password.addEventListener('input', function() {
  if (password.value !== password2.value) {
    password3.textContent = 'Пароли не совпадают';
    password3.classList.add('error');
  } else {
    password3.textContent = '';
    password3.classList.remove('error');
  }
});

password2.addEventListener('input', function() {
  if (password.value !== password2.value) {
    password3.textContent = 'Пароли не совпадают';
    password3.classList.add('error');
  } else {
    password3.textContent = '';
    password3.classList.remove('error');
  }
});


submitBtn.addEventListener('click', function(event) {
  event.preventDefault();
  const requiredFields = [
    { selector: '.name', name: 'Имя' },
    { selector: '.lastname', name: 'Фамилия' },
    { selector: '.telefon', name: 'Телефон' },
    { selector: '.email', name: 'Email' },
    { selector: '.country', name: 'Страна' },
    { selector: '.city', name: 'Город' },
    { selector: '.street', name: 'Улица' },
    { selector: '.house', name: 'Дом' },
    { selector: '.login', name: 'Логин' },
    { selector: '.password', name: 'Пароль' }
  ];

  let isFormValid = true;
  requiredFields.forEach(field => {
    const element = document.querySelector(field.selector);
    if (!element.value.trim()) {
      isFormValid = false;
      const errorElement = document.querySelector(`${field.selector}1`);
      if (errorElement) {
        errorElement.textContent = `Поле "${field.name}" обязательно`;
        errorElement.classList.add('error');
      }
    }
  });

  if (isFormValid) {
    alert("Форма успешно отправлена!");
    location.reload(); 
  }
});