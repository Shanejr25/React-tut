import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent'

class App extends Component {

  constructor(props) {
    super(props);

    // manage the state of the object
    this.state = {
      title: 'OG title', // property 
      name: 'OG name',
      checked: true,
      shouldRenderSky: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
    this.updateName = this.updateName.bind(this);
    this.onClickSky = this.onClickSky.bind(this);
  }
  // define methods that will be used
  onClick() {
    this.setState({
      name: 'New app name',
      title: 'New app title'
    });
  }
  onClickSky() {
    this.setState({
      shouldRenderSky : true
    });
  }
  renderSky(event){
    if (!this.state.shouldRenderSky) {return null;}

    return <h2>The Sky is Red</h2>
  }

  onMouseEnter() {
    alert('Entered');
  }

  updateName(event) {
    this.setState({name: event.target.value}); // set the state of the event
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
      <div className ="App"> {/* if any of the components are deleted, the default prop will be filled in */}
          
          <input 
            type="checkbox"
            onChange={this.updateName}
            value={this.state.name}
            defaultChecked={this.state.checked} // checked by default
          />
          <MyComponent 
            title={this.state.title}
            name={this.state.name} 
            
            onClick={this.onClick}
            shouldRenderSky={this.state.shouldRenderSky}
            onClickSky={this.onClickSky}
            
            /> {/* clean up the code by using other components as objects */}
            {this.renderSky()}

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
