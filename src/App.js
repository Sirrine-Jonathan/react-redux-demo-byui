import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/createStore';
import Demo from './Components/Demo';


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
