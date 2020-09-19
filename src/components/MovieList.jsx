import React from 'react';
import Movie from './Movie';

export default function MovieList(props) {
  return (
    <div className='list-group' style={{paddingTop: 60}}>
      {props.movies.map(movie => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
