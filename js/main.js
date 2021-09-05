const filmList = document.getElementById('filmList')
const searchFilm = document.getElementById('searchFilm')


const addMoviesToDom = (movies) => movies.forEach((movies) => {
    let newLi = document.createElement('li');
    let newLink = document.createElement('a');
    let poster = document.createElement('img');

    newLink.href = 'https://www.imdb.com/title/' + movies.imdbID;
    newLink.target = '_blank';
    poster.src = movies.Poster;

    newLi.appendChild(newLink).appendChild(poster);
    filmList.appendChild(newLi);
})
addMoviesToDom(movies);



const newMovies = movies.filter((movies) => movies.Year >= 2014);
// console.log(newMovies)
const avengers = movies.filter((movies) => movies.Title.includes('venger'))
// console.log(avengers)
const xmen = movies.filter((movies) => movies.Title.includes('X-Men'))
// console.log(xmen)
const princess = movies.filter((movies) => movies.Title.includes('Princess'))
// console.log(princess)
const batman = movies.filter((movies) => movies.Title.includes('Batman'))
// console.log(batman)


const changeFilter = document.body.addEventListener('click', event => {
    let target = event.target;
    switch (target.value) {
        case 'nieuwste-films':
            filmList.innerHTML = '';
            addMoviesToDom(newMovies);
            console.log(newMovies)
            break;
        case 'avengers':
            filmList.innerHTML = '';
            addMoviesToDom(avengers);
            console.log(avengers)
            break;
        case 'xmen':
            filmList.innerHTML = '';
            addMoviesToDom(xmen);
            console.log(xmen)
            break;
        case 'princess':
            filmList.innerHTML = '';
            addMoviesToDom(princess);
            console.log(princess)
            break;
        case 'batman':
            filmList.innerHTML = '';
            addMoviesToDom(batman);
            console.log(batman)
            break;

    }
});

// function searchFilm(movies) {
//     return addMoviesToDom()
// }

