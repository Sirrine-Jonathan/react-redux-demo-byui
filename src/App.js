import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      count: 0,
    }
  }

  _handleClick = () => {
    let { count } = this.state; 
    count++;
    this.setState({ count })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header" onClick={() => {
          console.log('count: ' + this.state.count);
          this._handleClick();
        }}>
          <img src={logo} className="App-logo" alt="logo" />
          <div>Count: { this.state.count }</div>
        </header>
      </div>
    );
  }
}

export default App;
