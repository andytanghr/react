import React, {Component} from 'react';
import RandomNumbers from './components/RandomNumbers';
import generateIntegers from 'randomorg-js';



var jsRandoms, orgRandoms, anuRandoms;

class GetNumbers extends Component {


  getJSNums() {
    jsRandoms = []
      .push('#'+(Math.random()*0xFFFFFF<<0).toString(16)) 
      .push('#'+(Math.random()*0xFFFFFF<<0).toString(16)) 
      .push('#'+(Math.random()*0xFFFFFF<<0).toString(16));
    return jsRandoms;
  }


  getRandomOrgNums() {
    const params = {
      apiKey: 'e828e05d-058a-46bc-bf61-19044f1cadb7',
      n: 3,
      min: 0,
      max: 255,
      base: 16
    }

    generateIntegers(params, (err, res) => {
      console.log(err || res.error);
      responseJson = res.json();
      var orgRandoms = responseJson.result.random.data.slice();
      console.log(orgRandoms);

    });




  }
  
  getANUNums() {
    var anuRandoms = [];
    
    fetch('https://qrng.anu.edu.au/API/jsonI.php?length=3&type=hex16&size=3')
      .then( res => res.json() )
      .then ( resJson => {
        anuRandoms = resJson.data.slice()
        console.log(anuRandoms);
      })

  }

  componentDidMount() {
    getData();
  }

  render() {

    getData() {
      getJSNums();
      getRandomOrgNums();
      getANUNums();

    }

    let randomNumbers = 
      <p>JS: {jsRandoms} </p>
      <p>random.org: {orgRandoms} </p>
      <p>ANU: {anuRandoms} </p>
    return (
      
      <div>
      
      
      </div>

    );
  }
}


// const mapStateToProps = state => {
//   return {
//     colors: state.colors
//   };
// }

const mapDispatchToProps = dispatch => {
  var newStateData;
  
  return {
    onGetNumbers: () => dispatch({type: 'GET_NUMBERS', payload: newStateData })

  };
}


export default connect(mapStateToProps, mapDispatchToProps)(RandomCity);