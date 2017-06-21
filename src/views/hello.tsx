
import * as React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import SayHello from '../components/say-hello';

export default class HelloView extends React.Component<undefined, undefined> {
  render () {
    // Notice that our view is composed of 3 separate components, when state
    // changes occur inside one of these components only that specifc component
    // will be rendered again.
    return (
      <div>
        <Header/>

        {/* this demonstrates how you can pass parameters to a component */}
        <SayHello cloudRoute='/hello'/>

        <Footer/>
      </div>
    );
  }
}
