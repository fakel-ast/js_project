"use strict";

const personalMovieBD = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieBD.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (!personalMovieBD.count  || isNaN(personalMovieBD.count )) {
            personalMovieBD.count  = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
        let i = 0;

        while (i < 2) {
            let lastViewedFilm = prompt('Какой ваш последний просмотренный фильм?', ''),
                scoreLastViewedFilm = prompt('Как вы его оцените?', '');
            if (!lastViewedFilm || lastViewedFilm.length > 50 || !scoreLastViewedFilm) {
                continue;
            }
            i++;
            this.movies[lastViewedFilm] = scoreLastViewedFilm;
        }
    },
    detectPersonalLevel: function () {
        if (this.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (this.count >= 10 && this.count < 30) {
            alert('Вы класcический зритель');
        } else if (this.count >= 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
    },
    showMyBd: function () {
        if (!this.privat) {
            console.log(this);
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 4; i++) {
            let genres = prompt(`Ваш любимый жанр под номером ${i}`);
            if (!genres) {
                i -= 1;
                continue;
            }
            this.genres.push(genres);
        }
        this.genres.forEach((value, index) =>  {
            console.log(`Любимый жанр #${index + 1} - это ${value}`);
        });
    },
    toggleVisibleMyDb: function () {
        this.privat = !this.privat;
    }

};

let movies = Object.create(personalMovieBD);
movies.start();
movies.showMyBd();


