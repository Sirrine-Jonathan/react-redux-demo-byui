import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { applyUp } from '../redux/actions/basicActions';

class Demo extends React.Component{

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
	        <header className="App-header" onClick={() => {
	          console.log('count: ' + this.state.count);
	          this._handleClick();
	        }}>
	          <img src={logo} className="App-logo" alt="logo" />
	          <div>Count: { this.state.count }</div>
	        </header>
		)
	}
}

export default Demo;

const mapDispatchToProps = (dispatch) => {
  return {
	applyUp: (num) => dispatch(applyUp(num))    
  }
}

const mapStateToProps = (state) => {
  return {
  	count: state.count
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppSwitch);

