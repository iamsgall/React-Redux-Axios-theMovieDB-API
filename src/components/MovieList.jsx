import React from 'react';
import Movie from './Movie';
import SearchMovie from './SearchMovie';
import {connect} from 'react-redux';

export function MovieList(props) {
  return (
    <div className='list-group' style={{paddingTop: 60}}>
      <SearchMovie movies={props.movies} />
      {props.filteredMovies.map(movie => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  filteredMovies: state.filteredMovies,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
