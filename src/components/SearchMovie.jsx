import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {useEffect, useMemo, useState} from 'react';
import {connect} from 'react-redux';
import {setSearch} from '../store/actions/action';

export function SearchMovie(props) {
  const useSearchMovie = movies => {
    const [query, setQuery] = useState('');
    const [search, setSearch] = useState(movies);

    useMemo(() => {
      const result = movies.filter(movie => {
        return movie.title.toLowerCase().includes(query.toLowerCase());
      });
      setSearch(result);
    }, [movies, query]);
    return {query, setQuery, search};
  };

  const handleSearch = e => {
    setQuery(e.target.value);
  };

  const {query, setQuery, search} = useSearchMovie(props.movies);
  // props.setSearch(search);
  useEffect(() => {
    props.setSearch(search);
  }, [props, search]);

  return (
    <div className='form-group'>
      <label htmlFor='searchInput' className='searchInput text-center'>
        Search Movie
      </label>
      <FontAwesomeIcon
        icon='search'
        className='ml-2'
        style={{fontSize: 18, color: '#B0A5A6'}}
      />
      <input
        type='text'
        value={query}
        onChange={handleSearch}
        id='searchInput'
        className='form-control'
        style={{borderRadius: 0}}
        placeholder='Type name movie you looking for...'
      />
    </div>
  );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  setSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchMovie);
