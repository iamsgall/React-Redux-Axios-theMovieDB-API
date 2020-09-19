import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {resetNextPage} from '../store/actions/action';
import ReactTooltip from 'react-tooltip';

export function Navigation(props) {
  return (
    <nav className='navbar navbar-primary bg-primary container-fluid fixed-top'>
      <Link
        to='/'
        className='navbar-brand mb-0 h1 ml-5'
        onClick={() => props.resetNextPage()}
      >
        theMovieDB API
      </Link>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://github.com/ico4e/React-Redux-Axios-theMovieDB-API'
        className='mr-5'
        data-tip='Code Github'
      >
        <ReactTooltip place='bottom' type='dark' effect='solid' />
        <FontAwesomeIcon icon={['fab', 'github']} style={{color: '#fff'}} />
      </a>
    </nav>
  );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  resetNextPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
