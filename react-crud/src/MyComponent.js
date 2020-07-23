import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

const propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    // title: PropTypes.string.isRequired,
    title: PropTypes.any,
    onClickSky: PropTypes.func
};

const defaultProps = {
    name: 'Default name of prop'
}

class MyComponent extends Component {
    shouldComponentUpdate(nextProps, nextState){
        return true; // stops components from updating or allows them to upate
    }
    componentWillUpdate(nextProps, nextState) {
        console.log(this.props, this.state, nextProps, nextState) // shows the updated state of the props
    }
    componentDidUpdate(prevProps, prevState){
        console.log(this.props, this.state, prevProps, prevState) // shows the updated state of the props
    }
    componentWillMount() {
        console.log('Will mount'); // shows which component will mount
    }
    componentDidMount() {
        console.log('Did mount'); // shows when a mount updated
    }

  render() { // loads the things onto the page
    const { title, name, onClick, onClickSky} = this.props;

    return (
      <div className ="component"> 
        <h1>Title: {title}</h1> 
        <h2>Name: {name}</h2>
        <div onClick={onClick}> Click Me</div>
        <div onClickSky={onClickSky}> Sky</div>
    </div>
    );
  }
}
MyComponent.defaultProps = defaultProps;
MyComponent.propTypes = propTypes;

export default MyComponent;
