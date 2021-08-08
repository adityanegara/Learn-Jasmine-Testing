class FavoriteMovieSearchPresenter {
  constructor({ favoriteMovies }) {
    this._listenToSearchRequestByUser();
    this._favoriteMovies = favoriteMovies;
  }

  _listenToSearchRequestByUser() {
    this._queryElement = document.getElementById('query');
    this._queryElement.addEventListener('change', (event) => {
      this._searchMovies(event.target.value);
    });
  }

  _showFoundMovies(movies) {
    const html = movies.reduce(
        (carry, movie) => carry.concat(`<li class="movie"><span class="movie__title">${movie.title || '-'}</span></li>`),
      '',
    );

    document.querySelector('.movies').innerHTML = html;
  }

  _searchMovies(latestQuery) {
    this._latestQuery = latestQuery;
    this._favoriteMovies.searchMovies(this._latestQuery);
  }

  get latestQuery() {
    return this._latestQuery;
  }
}

export default FavoriteMovieSearchPresenter;
