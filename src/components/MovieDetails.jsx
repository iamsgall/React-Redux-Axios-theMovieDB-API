import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import {resetNextPage} from '../store/actions/action';
import {connect} from 'react-redux';

export function MovieDetails(props) {
  const location = useLocation();
  const history = useHistory();

  const cardStyle = {
    display: 'flex',
    position: 'relative',
    borderRadius: 0,
  };

  const closeStyle = {
    position: 'absolute',
    right: 18,
    top: 9,
    fontSize: 26,
    zIndex: 1,
    cursor: 'pointer',
    color: '#000',
  };
  return (
    <div className='container' style={{paddingTop: 60}}>
      <div className='col-md-8 offset-md-2 mt-5'>
        <div className='card mb-3 shadow-sm bg-white ' style={cardStyle}>
          <button
            type='button'
            className='close'
            aria-label='Close'
            style={closeStyle}
            onClick={() => {
              props.resetNextPage();
              history.push('/');
            }}
          >
            <span aria-hidden='true'>&times;</span>
          </button>
          <div className='row no-gutters'>
            <div className='col-md-4'>
              <img
                src={`https://image.tmdb.org/t/p/w500${location.state.movie.poster_path}`}
                className='card-img'
                alt='...'
                style={{borderRadius: 0}}
              />
            </div>
            <div className='col-md-8'>
              <div className='card-body' style={{borderRadius: 0}}>
                <h5 className='card-title title'>
                  {location.state.movie.title}
                </h5>
                <p className='card-text overview'>
                  {location.state.movie.overview}
                </p>
                <p className='original_language'>
                  <strong>Language</strong>:{' '}
                  {location.state.movie.original_language.toUpperCase()}
                  <span className='ml-2'>
                    <FontAwesomeIcon
                      icon='language'
                      style={{color: '#3498db', fontSize: '22'}}
                    />
                  </span>
                </p>
                <p className='vote_average'>
                  <strong>Ratings</strong>: {location.state.movie.vote_average}
                  <span className='ml-2'>
                    <FontAwesomeIcon icon='star' style={{color: '#f1c40f'}} />
                  </span>
                </p>
                <p className='vote_count'>
                  <strong>Vote Count:</strong> {location.state.movie.vote_count}
                  <span className='ml-2'>
                    <FontAwesomeIcon
                      icon='vote-yea'
                      style={{color: '#2ecc71'}}
                    />
                  </span>
                </p>
                <p className='card-text release_date'>
                  <small className='text-muted'>
                    {location.state.movie.release_date}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  resetNextPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
