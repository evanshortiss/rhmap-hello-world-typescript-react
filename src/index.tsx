
import * as React from 'react';
import { render } from 'react-dom';
import HelloView from './views/hello';

// This removes a 300ms click delay that certain devices have in their WebView
// Details are here - https://github.com/ftlabs/fastclick
import * as fastclick from 'fastclick';
fastclick(document.body);

const container = document.getElementById('hello-world-app');

// render our application's only view in the specified HTML element
render(
  <HelloView/>,
  container
);
