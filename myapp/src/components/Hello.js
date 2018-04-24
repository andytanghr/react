import React from 'react';
import {Component} from 'react';
import '../App.css';



class Hello extends Component {
  render() {
    var data = {
      people: [
        {
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
        }
      ]
    };


    var listNames = data.people.map( (obj) => <li key={obj.name}>Hello {obj.name}, who is {obj.age} years old</li> )
    return (
      <div>
        <h3>Here are all the people on the list</h3>
        <ul>{listNames}</ul>
      </div>
    );
  }
}

export default Hello;