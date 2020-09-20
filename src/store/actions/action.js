import {
  GET_MOVIES,
  GET_MORE_MOVIES,
  RESET_NEXT_PAGE,
  SET_SEARCH,
} from '../constants/actionTypes';
import API from '../../utils/API';

export const getMovies = () => async dispatch => {
  try {
    const res = await API.get('1?page=1');
    const movies = res.data;
    const moviesData = movies.results;
    // console.log(movies.results);
    dispatch({
      type: GET_MOVIES,
      payload: {moviesData},
    });
  } catch (error) {
    console.log(error);
  }
};

export const getMoreMovies = nextPage => async dispatch => {
  try {
    const res = await API.get(`1?page=${nextPage}`);
    const movies = res.data;
    const moviesData = movies.results;
    dispatch({
      type: GET_MORE_MOVIES,
      payload: {moviesData},
    });
  } catch (error) {
    console.log(error);
  }
};

export const resetNextPage = () => ({
  type: RESET_NEXT_PAGE,
});

export const setSearch = search => ({
  type: SET_SEARCH,
  payload: {search},
});
