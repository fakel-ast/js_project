"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


const personalMovieBD = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let i = 0;

while (i < 2) {
    let lastViewedFilm = prompt('Какой ваш последний просмотренный фильм?', ''),
        scoreLastViewedFilm = prompt('Как вы его оцените?', '');
    console.log(lastViewedFilm);
    console.log(scoreLastViewedFilm);

    if (!lastViewedFilm || lastViewedFilm.length > 50 || !scoreLastViewedFilm) {
        continue;
    }
    i++;
    personalMovieBD.movies[lastViewedFilm] = scoreLastViewedFilm;
}

if (personalMovieBD.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieBD.count >= 10 && personalMovieBD.count < 30) {
    alert('Вы класcический зритель');
} else if (personalMovieBD.count >= 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}



console.log(personalMovieBD);
