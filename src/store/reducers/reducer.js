import {
  GET_MORE_MOVIES,
  GET_MOVIES,
  RESET_NEXT_PAGE,
  SET_SEARCH,
} from '../constants/actionTypes';

const initialState = {
  movies: [],
  loading: true,
  nextPage: 2,
  filteredMovies: [],
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_MOVIES:
      return {...state, movies: payload.moviesData, loading: false};
    case GET_MORE_MOVIES:
      return {
        ...state,
        movies: [...state.movies, ...payload.moviesData],
        // movies: state.movies.concat(payload.moviesData),
        loading: false,
        nextPage: state.nextPage + 1,
      };
    case RESET_NEXT_PAGE:
      return {
        ...state,
        nextPage: 2,
      };
    case SET_SEARCH:
      return {
        ...state,
        filteredMovies: payload.search,
      };

    default:
      return state;
  }
  // return state;
};
