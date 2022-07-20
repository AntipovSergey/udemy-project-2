/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img')

adv.forEach(img => img.remove());

const promoGenre = document.querySelector('.promo__genre');
promoGenre.textContent = 'ДРАМА';

const posterBg = document.querySelector('.promo__bg');
posterBg.style.backgroundImage = `url('../img/bg.jpg')`;

const promoList = document.querySelector('.promo__interactive-list');
promoList.innerHTML = '';

const sortedFilmList = movieDB.movies.sort();
// let num = 1;

// sortedFilmList.forEach((movie) => {
//     const listItem = document.createElement('li');
//     listItem.classList.add('promo__interactive-item');
//     listItem.textContent = `${num}. ${movie}`;
//     promoList.append(listItem);
//     num++;
// })

sortedFilmList.forEach((film, i) => {
    promoList.innerHTML += `
        <li class="promo__interactive-item">${i + 1}. ${film}
            <div class="delete"></div>
        </li>
    `
})