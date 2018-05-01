import React, {Component} from 'react';
// import './cityWeather.css';



// var weatherData;
var condition, degC;


class CityWeather extends Component {
  // constructor(props) {
    // super(props);
    // this.state = {
    //   condition: '',
    //   degC: 0,
    //   // degCInt: 0,
    //   // degF: 0,
    //   // degFInt: 0
    // };
  // };

  // const url = 'http://api.openweathermap.org/data/2.5/weather?q=Houston,Texas';
  // const apiKey = 'e27bb5b36bd6eccc470b0739dbaf0edb';


  static weather = { condition: '', degC: 0};
  
    
    // console.log(weatherData);
    
    // this.setState.degCInt(Math.floor(degC));
    // this.setState.degF(degC * 1.8 - 32);
    // this.setState.degFInt(Math.floor(degF));
  


  apiCall = () => {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Houston,Texas&appid=9361bd03ec7175e9eea92fdf7a717518')
      .then( function(response) {
      return response.json();
      // response.json();
      // console.log(jsonData);
      
      // console.log(response.json().weather[0].main);
      
      // let responseJson = response.json();
      // let conditionState = responseJson.weather[0].main;

      // this.setState( {condition: conditionState} );
      // console.log(this.setState({condition: response.json().weather[0].main}));

      // this.setState.condition(response.json().weather[0].main);

      // let degCState = responseJson.main.temp - 273.15;
      
      // console.log(degCState);
      // this.setState( {degC: this.state.degC + 1} );
    })
    .then( function(data) {
      // console.log(data);
      condition = data.weather[0].main;
      console.log(condition);

      degC = data.main.temp - 273.15;
      console.log(degC);

      // this.setState( {condition, degC} );
      
      // this.setState( {condition: data.weather[0].main} )
      // this.setState( {degC: data.main.temp - 273.15} )
      // this.setState( {degC: } );
      
      
    })
    //   data
    //   this.setState( {condition: jsonData.weather[0].main} );
    // })
    // .then(res => weatherData = res.weather[0].main )
    .catch( err => {console.log(err);} )
    // .finally( () => 
  }
  // calcOtherTemps(data) {
    
  //   return

  componentDidMount() {
    // this.apiCall();
    this.apiCall();
    console.log('timer works')
    // setInterval( () => {      
    //   this.apiCall(), 25000;;
    //   })
  }


  render() {
    // console.log(this.state.degC);
    setTimeout( () => {
      console.log(condition);
      console.log(degC);
    }, 5000);
    let weatherRender = this.props.weather.map( item => {
      return (
        <div>
          <p>{item.condition}</p>
          <p>{item.degC}</p>
        </div>
      );
    })

    return (
      <div>
        <h1>Houston</h1>
        {weatherRender}
        {/* <p>{this.props.condition}</p> */}
        {/* <p>{this.props.degC}</p> */}
        {/* <p>{this.state.degFInt}</p> */}
      </div>

    );
  
  }
}



export default CityWeather;