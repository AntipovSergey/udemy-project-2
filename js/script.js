/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    const adv = document.querySelectorAll('.promo__adv img');
    const promoList = document.querySelector('.promo__interactive-list');
    const addForm = document.querySelector('form.add');
    const addInput = addForm.querySelector('.adding__input');
    const chechbox = addForm.querySelector('[type="checkbox"]');

    const deleteAdv = (arr) => {
        arr.forEach(img => img.remove());
    }

    deleteAdv(adv)

    const makeChanges = () => {
        const promoGenre = document.querySelector('.promo__genre');
        promoGenre.textContent = 'ДРАМА';

        const posterBg = document.querySelector('.promo__bg');
        posterBg.style.backgroundImage = `url('../img/bg.jpg')`;
    }

    makeChanges();

    const sortArray = (arr) => {
        arr.sort();
    }

    sortArray(movieDB.movies);

    // let num = 1;

    // sortedFilmList.forEach((movie) => {
    //     const listItem = document.createElement('li');
    //     listItem.classList.add('promo__interactive-item');
    //     listItem.textContent = `${num}. ${movie}`;
    //     promoList.append(listItem);
    //     num++;
    // })
    function createMovieList(films, parent) {
        parent.innerHTML = '';
        sortArray(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1}. ${film}
                    <div class="delete"></div>
                </li>
            `
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);
            })
        })
    }

    createMovieList(movieDB.movies, promoList)

    addForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let newFilm = addInput.value;
        const favourite = chechbox.checked;

        if (favourite) {
            console.log('Добавляем любимый фильм');
        }

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            movieDB.movies.push(newFilm);
            sortArray(movieDB.movies);

            createMovieList(movieDB.movies, promoList);
        }

        event.target.reset();
    })
})
