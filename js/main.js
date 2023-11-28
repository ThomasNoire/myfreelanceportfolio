// когда пользователь будет нажимать на toggle(кнопку) будет добавлятся клас активности, 
// и взависитости наличие от наличя активного класа данный toggle будет передвигаться

const btnDarkMode = document.querySelector(".dark-mode-btn");

// 1. проверка темы на уровне системных настроек
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) { // медиа запрос на проврку темнуой темы (ключена ли она)
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");

}
// 2. проверка темной темы в localStorage для того чтобы
// темная тема была на всех страницах в навигации
if (localStorage.getItem('darkMode') === 'dark') {
    // добавляю акттвный класс
    btnDarkMode.classList.add("dark-mode-btn--active");
    // добавляю к body
    document.body.classList.add("dark");
    // иначе
   } else if(localStorage.getItem('darkMode') === 'Light') {
    btnDarkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove("dark");

   }
// проверка темной темы на уровне системных настроек, если пользователь/юзер
// включил темную тему на windows/MacOS почему ему не показать темную тему если он ее предпочитает
// свойство matches означает если запрос выполняется и вовращает true,и добавляем тему dark

// Если меняются системные настройки мыняем тему 

window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event) => {
    // внутри функции я определяю какая фукуция сейчас активна
    // результат записываю в переменную
    const newColorScheme = event.matches ? "dark": 'Light';

//    alert('Поменять тему?');

    if (newColorScheme === 'dark') {
        btnDarkMode.classList.add("dark-mode-btn--active");
        document.body.classList.add("dark");
        // если системные настройкм поменялись, запивывает опять в localStorage
        localStorage.setItem("darkMode", "dark");
    } else { 
        // в этом блоке я убираб классы с помощью remove
        btnDarkMode.classList.remove("dark-mode-btn--active");
        document.body.classList.remove("Light");
    }
})

// Включение ночного ретима по кнопке

btnDarkMode.onclick = function() {
    // console.log('Click');
    btnDarkMode.classList.toggle(".dark-mode-btn--active");
    const isDark = document.body.classList.toggle('dark');

    // если клас toggle был добавлен вернет true, если клас toggle был удален вернет false 

 if (isDark) {
    localStorage.setItem('darkMode', 'dark')
 } else {
    localStorage.setItem('darkMode', 'Light');
 }
}




// const btnDarkMode = document.querySelector(".dark-mode-btn");

// // 1. Проверка темной темы на уровне системных настроек
// if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ) {
//     btnDarkMode.classList.add("dark-mode-btn--active");
// 	document.body.classList.add("dark");
// }

// // 2. Проверка темной темы в localStorage
// if (localStorage.getItem('darkMode') === 'dark') {
//     btnDarkMode.classList.add("dark-mode-btn--active");
//     document.body.classList.add("dark");
// } else if (localStorage.getItem("darkMode") === "light") {
//     btnDarkMode.classList.remove("dark-mode-btn--active");
//     document.body.classList.remove("dark");
// }

// // Если меняются системные настройки, меняем тему
// window
//     .matchMedia("(prefers-color-scheme: dark)")
//     .addEventListener("change", (event) => {
//         const newColorScheme = event.matches ? "dark" : "light";

//         if (newColorScheme === "dark") {
// 			btnDarkMode.classList.add("dark-mode-btn--active");
// 			document.body.classList.add("dark");
// 			localStorage.setItem("darkMode", "dark");
// 		} else {
// 			btnDarkMode.classList.remove("dark-mode-btn--active");
// 			document.body.classList.remove("dark");
// 			localStorage.setItem("darkMode", "light");
// 		}
//     });

// // Включение ночного режима по кнопке
// btnDarkMode.onclick = function () {
//     btnDarkMode.classList.toggle("dark-mode-btn--active");
//     const isDark = document.body.classList.toggle("dark");

//     if (isDark) {
//         localStorage.setItem("darkMode", "dark");
//     } else {
//         localStorage.setItem("darkMode", "light");
//     }
// };