import React, {Component} from 'react';
import CounterControl from './CounterControl';
import CounterOutput from './CounterOutput';
import {connect} from 'react-redux';

class Counter extends Component {
  // constructor(props) {
  //   super(props);
  // }


  render() {



    return (
      <div>
        <CounterOutput counterLabel={this.props.ctr} />
        <CounterControl title='increment by +1' onButtonPush={this.props.onIncrementCounter}/>
        <CounterControl title='decrement by -1' />
        <CounterControl title='increment by +5' />
        <CounterControl title='decrement by -5' />
      </div>



    );
  }
}

const mapStateToProps = state =>  {
  // console.log('mapping state to props works'); // it does
  return {
    ctr: state.counter,
    first: state.firstName
    }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({type: 'INC_COUNTER'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);