import React from 'react';
import './App.css';
import Demo from './Components/Demo';
import { store } from './redux/createStore';

class App extends React.Component {

  render(){
    return (
      <Provider store={store}>
      	<Demo className="App"/>
      </Provider>
    );
  }
}

export default App;
