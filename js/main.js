const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__top-row');

navBtn.onclick = () => {
   navIcon.classList.toggle('nav-icon--active')
   nav.classList.toggle('header__top-row--mobile')
   document.body.classList.toggle('no_scroll')
}

//Phone mask

mask('[data-tel-input]');

// Removing '+' if nothing else is entered to show placeholder

const phoneInputs = document.querySelectorAll('[data-tel-input]');
phoneInputs.forEach((input) => {
   input.addEventListener('input', () => {
      if (input.value == '+') input.value = '';
   })

   input.addEventListener('blur', () => {
      if (input.value == '+') input.value = '';
   })
});

// Yandex map

ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [59.943543,30.338928],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 16,
    });
}