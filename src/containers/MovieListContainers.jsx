import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import MovieList from '../components/MovieList';
import {getMovies, getMoreMovies} from '../store/actions/action';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export const MovieListContainers = props => {
  // console.log(props.movies);

  useEffect(() => {
    props.getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='container'>
      <div className='col-md-8 offset-md-2 mt-5'>
        <MovieList movies={props.movies} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <button
            className='btn btn-block btn-lg p-3 mb-3 loadMore'
            style={{backgroundColor: '#25b09c', color: '#fff', borderRadius: 0}}
            onClick={() => props.getMoreMovies(props.nextPage)}
          >
            Load More
            <FontAwesomeIcon className='ml-2 ' icon='sync' />
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  movies: state.movies,
  nextPage: state.nextPage,
});

const mapDispatchToProps = {
  getMovies,
  getMoreMovies,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieListContainers);
