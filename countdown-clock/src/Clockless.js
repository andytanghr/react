import React, {Component} from 'react';




class Clockless extends Component {
  // constructor(props) {
  //   super(props);
    // this.state = {
    //   days:0,
    //   hours: 0,
    //   minutes: 0,
    //   seconds: 0
    // };
  // }

  // componentWillMount() {
  //   this.getTimeUntil(this.props.deadline);
    
  // }

  // componentDidMount() {
  //   // setInterval( () => this.getTimeUntil(this.props.deadline), 2000);
  // }

  componentWillUpdate(props) {
    setInterval( () => this.getTimeUntil(this.props.deadline), 1000); 
  }

  getTimeUntil(cutoff) {
    const time = Date.parse(cutoff) - Date.parse(new Date());
    
    this.seconds = Math.floor((time/1000) % 60);
    this.minutes = Math.floor((time/1000/60) % 60);
    this.hours = Math.floor((time/1000/60/60) % 24);
    this.days = Math.floor((time/1000/60/60/24));

    // this.setState({days, hours, minutes, seconds});
    console.log(this.days, this.hours, this.minutes, this.seconds);
    
  }

  

  render() {

    

  

    return (
      <div>
        <div className="clock"> {this.days} days</div>
        <div className="clock"> {this.hours} hours</div>
        <div className="clock"> {this.minutes} minutes</div>
        <div className="clock"> {this.seconds} seconds</div>
      </div>
    );

  }

}


// setInterval( () => Clockless, 1000 );
// setInterval( () => console.log('ok'), 1000 );


export default Clockless;