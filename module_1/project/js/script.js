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
        "Скотт Пилигрим против...",
    ]
};

movieDB.movies.sort();

document.querySelector('.promo__adv').remove();

let genre = document.querySelector('.promo__genre');
genre.textContent = 'Драма';

let promoBg = document.querySelector('.promo__bg');
promoBg.style.cssText = 'background: url(../project/img/bg.jpg) center center/cover no-repeat;';
promoBg.style.color = 'red';

const movies = document.querySelector('.promo__interactive-list');
const ul = document.createElement('ul');

movies.querySelectorAll('.promo__interactive-item').forEach((item, index) => {
    let li = document.createElement('li');
    li.textContent = movieDB.movies[index];
    ul.append(li);
});


const movieForm = document.querySelector('form.add');

if (movieForm) {
    movieForm.addEventListener('submit', event => {
        event.preventDefault();

        const movieList = document.querySelector('.promo__interactive-list');

        let inputValue = movieForm.querySelector('input.adding__input').value;
        if (inputValue.length > 21) {
            inputValue = inputValue.slice(0, 21) + '...'
        }
        let newLastMovie = movieList.lastElementChild.cloneNode(true);

        newLastMovie.firstChild.textContent = inputValue;
        movieList.append(newLastMovie);

        movieDB.movies.push(inputValue);
        document.querySelectorAll('.delete').forEach(item => {
           item.addEventListener('click', event => {
               event.preventDefault();
               const deleteButton = event.target;
               deleteButton.parentNode.remove();

           });
        });

        if (movieForm.querySelector('input[type="checkbox"]').checked) {
            console.log('Adding favorites film');
        }
    });

}

document.querySelectorAll('.delete').forEach(item => {
   item.addEventListener('click', event => {
       event.preventDefault();
       const deleteButton = event.target;
       deleteButton.parentNode.remove();

   });
});