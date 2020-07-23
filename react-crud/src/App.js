import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent'

class App extends Component {

  constructor(props) {
    super(props);

    // manage the state of the object
    this.state = {
      title: 'App title' // property 
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  // define methods that will be used
  onClick() {
    this.setState({
      title: 'New app title'
    });
  }
  onMouseEnter() {
    alert('Entered');
  }
  
  onSubmit(event) { // event
    event.preventDefault();

    //alert('submitted');
    console.log(this.input.value); // produces error because onsubmit needs to be bound to constructor
  }

  render() { // loads the things onto the page
    {/* 
    const list = [ // array of strings
      'Item 1',
      'Item 2',
      'Item 3',
      'Random'
    ];
    */}

    return (
      <div className ="App"> 
        <h1>
          {this.state.title} {/* set the title of the state z*/} 
          <div onClick={this.onClick}> Click here!</div>
          <MyComponent 
            title="this is a component title"
            name="Shane"
            onClick={this.onClick}
            /> {/* clean up the code by using other components as objects */}
        </h1> 

        {/* PART 1 - 10 OF TUT
        
        <h1>
        {
          true ? anotherTitle : title
          
        }
      </h1>
      <h2>
        { // must use brackets to encase the contents of the headers
          list.map(item => {
              return (
                <div>{item}</div>
              );
            })
        }
      </h2>
      
      <h4>
        {
          list.map(item => {
            return (
              <div key={item} onClick={this.onClick}>{item}</div>
            );
          })
        }
      </h4>
        <form onSubmit={this.onSubmit}> 
          <input onChange={this.onChange} ref={input => this.input = input} /> 
        </form>
        */}
    </div>
    );
  }
}

export default App;
