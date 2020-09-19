import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useHistory} from 'react-router-dom';

export default function Movie(props) {
  let history = useHistory();
  return (
    <div
      className='card mb-3 shadow-sm bg-white'
      onClick={() =>
        history.push({
          pathname: '/details',
          state: {movie: props.movie},
        })
      }
      style={{cursor: 'pointer', borderRadius: 0}}
    >
      <div className='row no-gutters'>
        <div className='col-md-4'>
          <img
            src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`}
            className='card-img'
            alt='...'
            style={{borderRadius: 0}}
          />
        </div>
        <div className='col-md-8'>
          <div className='card-body' style={{borderRadius: 0}}>
            <h5 className='card-title title'>{props.movie.title}</h5>
            <p className='card-text overview'>{props.movie.overview}</p>
            <p className='vote_average'>
              <strong>Ratings</strong>: {props.movie.vote_average}
              <span className='ml-1'>
                <FontAwesomeIcon icon='star' style={{color: '#f1c40f'}} />
              </span>
            </p>
            <p className='card-text'>
              <small className='text-muted release_date'>
                {props.movie.release_date}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
