import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // define methods that will be used
  onClick() {
    alert('Clicked');
  }
  onMouseEnter() {
    alert('Entered');
  }
  
  onChange(event) { // event
    console.log(event.target.value);
  }

  render() { // loads the things onto the page
    
    const list = [ // array of strings
      'Item 1',
      'Item 2',
      'Item 3',
      'Random'
    ];

    const title ='This is Shanes React App';
    const anotherTitle = 'Another title';

    return (
      <div className ="App">
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
      <h1>
        {
          list.map(item => {
            return (
              <div onClick={this.onClick}>{item}</div>
            );
          })
        }
      </h1>
      <h3>
        {
          list.map(item => {
            return (
              <div onMouseEnter={this.onMouseEnter}>{item}</div>
            );
          })
        }
      </h3>
      <h4>
        {
          list.map(item => {
            return (
              <div key={item} onClick={this.onClick}>{item}</div>
            );
          })
        }
      </h4>
      <input onChange={this.onChange} />
    </div>
    );
  }
}

export default App;
