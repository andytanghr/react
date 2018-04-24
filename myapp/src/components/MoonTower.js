import React from 'react';
import {Component} from 'react';
// import Hello from '../components/Hello';
import '../App.css';



class MoonTower extends Component {
  render() {
    var data = [{
      name: 'Apple',
      age: 10
    }, {
      name: 'Banana',
      age: 15
    }, {
      name: 'Cherry',
      age: 20
    }, {
      name: 'Date',
      age: 25
    }];

    

    // var dataMT = Hello.data;
    
    
    // var dataMT21 = dataMT.filter(function(person) {
    //   return person.age > 21;
    // });
      
    //    (
    //     if (person.age > 21) {
    //     return person;
    //     }
    //   );
    // });



    var listNames = data.map( (obj) => {
        return obj.age > 21 ? <li>{obj.name} who is {obj.age} is at least 21 years old.</li> : null;
    });
    //     if (obj.age > 21) {
    //       return obj;
    //     } else {
    //       return obj.null;
    //     }
    // });



    return (
      <div>
        <h3>Only the following people can eat AND drink at Moon Tower</h3>
        <ul>
        {listNames}
        </ul>
      </div>

    );

  }

}

export default MoonTower;