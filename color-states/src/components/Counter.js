import React, {Component} from 'react';
import {connect} from 'react-redux';

import CounterControl from './CounterControl';
import CounterOutput from './CounterOutput';
import RandomCity from './RandomCity';


class Counter extends Component {
  // constructor(props) {
  //   super(props);
  // }



  render() {



    return (
      <div>
        <CounterOutput counterLabel={this.props.city} />
        <CounterControl title='increment by +1' onButtonPush={this.props.onIncrement1Counter}/>
        <CounterControl title='decrement by -1' onButtonPush={this.props.onIncrement5Counter}/>
        <CounterControl title='increment by +5' onButtonPush={this.props.onDecrement1Counter}/>
        <CounterControl title='decrement by -5' onButtonPush={this.props.onDecrement5Counter}/>
        <RandomCity currentCity={this.props.city} currentColors={''} onButtonPush={this.props.onChangeCity}/>
         {/* humidity={this.props.humidity} pressure={this.props.pressure} temperature={this.props.temperature}  />  */}
        
      </div>



    );
  }
}

const mapStateToProps = state =>  {
  // console.log('mapping state to props works'); // it does
  return {
    currentCity: state.city
    
    }, console.log('counter mapstatetoprops works');
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrement1Counter: () => dispatch({type: 'INC1_COUNTER', payload: 'testing payload'}),
    onIncrement5Counter: () => dispatch({type: 'INC5_COUNTER'}),
    onDecrement1Counter: () => dispatch({type: 'DEC1_COUNTER'}),
    onDecrement5Counter: () => dispatch({type: 'DEC5_COUNTER'}),
    onChangeCity: () => dispatch( {type: 'CHANGE_CITY', payload: ''})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// export default Counter;
