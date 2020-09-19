import React from 'react';
import Navigation from './Navigation';

export default function Layout(props) {
  return (
    <div>
      <Navigation />
      {props.children}
    </div>
  );
}
