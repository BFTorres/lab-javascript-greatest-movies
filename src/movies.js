// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(moviesArr){                                                                                  
    let directors = moviesArr.map(movie => {
        return movie.director;
    })
    return directors;
} 
/* const getAllDirectors = (movieArr) => {   
    const directors = movieArr.map((films)=>{
    return films.director
  })
  return directors
} */

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

/*const getAllDirectors = (moviesArr) => {
    let directorsArr = moviesArr.forEach(())
} */

function howManyMovies(moviesArr){
    let dramaMovies = moviesArr.filter(movie => {
        if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")) {
            return movie;
        };
    });
    return dramaMovies.length;
}




// Iteration 3: All rates average - Get the average of all rates with 2 decimals

/*function ratesAverage(moviesArr) {
    let average = moviesArr.reduce((acc, elem, index, arr) => {
    acc += elem.rate / movies.length;
    return acc;
  }, 0);
  return (average);
} */

function ratesAverage(moviesArr) {
    if (moviesArr.length == 0) {
      return 0
    }
    let rate = moviesArr.reduce((acc, movie) => {
      return acc + (movie.rate || 0)
    }, 0);
    return Math.round(rate/movie.length * 100)/100
  }
    
// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(moviesArr){
    let movieCounter = moviesArr.filter((movie) => {
        return movie.genre.includes("Drama")
    })
    let dramaAvg = movieCounter.reduce((acc, movie, index, arr) => {
        acc += movie.rate / movieCounter.length;
        return acc;
      }, 0);
    return (number(dramaMoviesRate.toFixed(2)));
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArr) {
    let clonedMovies = 
    JSON.parse(JSON.stringify(moviesArr))
    let orderdByYear = clonedMovies.sort((elem1, elem2) => {
      if(elem1.year > elem2.year) {
        return 1
      } else if(elem1.year < elem2.year) {
        return -1
      } else {
        if(elem1.title > elem2.title) {
          return 1
        } else if(elem1.title < elem2.title) {
          return -1
        } else {
          return 0
        }
      }
    });
    return orderdByYear
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically (moviesArr){
    let numberOfMovies = 20
    let titless= moviesArr.map((moviesArr) => moviesArr.title).sort((a,b) => {
        if (a > b) return 1;
        if (a < b) return -1;
    })
    return titles.slice(0, numberOfMovies)
  }

  
  function orderAlphabetically(moviesArr){
    let clonedMovies = JSON.parse(JSON.stringify(moviesArr))
    let alphaOrd = clonedMovies.sort((elem1, elem2) => {
      if(elem1.title > elem2.title) {
        return 1
      } else if(elem1.title < elem2.title) {
        return -1
      } else {
        return 0
      }
    });
    return alphaOrd.slice(0,20).map(elem => elem.title)
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
