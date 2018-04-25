import React, {Component} from 'react';
import Clock from './Clock';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 1, 2018',
      newDeadline: ''
    }
  }

  changeDeadline() {
    this.setState( {deadline: this.state.newDeadline} )
  }


  render() {




    return (
      <div className="App">
        <div className="App-Title"> Countdown to {this.state.deadline} </div>
        
        <Clock deadline={this.state.deadline} />
        
        <div>
          <input onChange={event => this.setState({newDeadline: event.target.value}) } placeholder="new date" />
          <button onClick={ () => this.changeDeadline()} >Submit</button> 
          {/* () => this.changeDeadline() is this way to explictly have onClick execute an anon function that itself calls changeDeadline(). Why separate this explicit call? */}
        </div>

      </div>
    );
  }
}

export default App;