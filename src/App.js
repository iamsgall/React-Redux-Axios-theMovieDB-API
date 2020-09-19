import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import MovieListContainers from './containers/MovieListContainers';
import store from './store/store';
import './utils/fontawesome';
import MovieDetails from './components/MovieDetails';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className='App'>
          <Layout>
            <Route exact path='/' component={MovieListContainers} />
            <Route exact path='/details' component={MovieDetails} />
          </Layout>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
