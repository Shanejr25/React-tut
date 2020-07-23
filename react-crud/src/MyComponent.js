import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  render() { // loads the things onto the page
    const { title, name, onClick} = this.props;

    return (
      <div className ="Component"> 
        <h1>Title: {title}</h1> 
        <h2>Name: {name}</h2>
        <div onClick={onClick}> Click Me</div>
        
    </div>
    );
  }
}

export default MyComponent;
