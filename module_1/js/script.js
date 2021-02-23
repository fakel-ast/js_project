"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


const personalMovieBD = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastViewedFilm = prompt('Какой ваш последний просмотренный фильм?', ''),
    scoreLastViewedFilm = prompt('Как вы его оцените?', '');

personalMovieBD.movies[lastViewedFilm] = scoreLastViewedFilm;

lastViewedFilm = prompt('Какой ваш последний просмотренный фильм?', '');
scoreLastViewedFilm = prompt('Как вы его оцените?', '');

personalMovieBD.movies[lastViewedFilm] = scoreLastViewedFilm;

console.log(personalMovieBD);
