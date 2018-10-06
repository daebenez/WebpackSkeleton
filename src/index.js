import React from 'react';
import ReactDOM from 'react-dom';
import webpackIcon from './images/webpack_logo.png';

const element =
<div>
  <h1>Hello World</h1>
  <img src={webpackIcon}/>
</div>
// var imgIcon = document.getElementById('webpack_logo');
// imgIcon.src = webpackIcon;
// console.log('JS Skeleton');

ReactDOM.render(
  element,
  document.getElementById('app')
);
