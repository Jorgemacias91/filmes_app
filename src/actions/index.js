export const ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE";
export const GET_MOVIES = "GET_MOVIES";
export const REMOVE_MOVIE_FAVORITE = "REMOVE_MOVIE_FAVORITE"
export const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL"



export function addMovieFavorite(payload) {
    return { type: ADD_MOVIE_FAVORITE, payload };
  }
  
  export function getMovies(titulo) {
    return function(dispatch) {
      const apykey = "aqui va el apikey de OMDB"
      return fetch(`http://www.omdbapi.com/?apikey=${apykey}&s=${titulo}`)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: GET_MOVIES, payload: json });
        });
    };
  }

export function removeMovieFavorite(payload){
    return{
        type:REMOVE_MOVIE_FAVORITE,
        payload
    }
}

export function getMovieDetail(id){
    return function(dispatch){
      const apykey = "aqui va el apikey de OMDB"
        return fetch(`http://www.omdbapi.com/?apikey=${apykey}&i=${id}`)
        .then(response => response.json())
        .then(json => {
            dispatch({type:GET_MOVIE_DETAIL, payload:json});
        })
    }
}