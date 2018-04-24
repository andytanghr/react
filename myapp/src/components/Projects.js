import React from 'react';
import {Component} from 'react'; // shortcut so that later for 'class Projects extends Component' there's no need to type 'React.'  'class Projects extends React.Component'
import '../App.css';

class Projects extends Component {
  render() {
    return (
      <div >
        {this.props.projects}
      </div>
    );
  }
}

export default Projects;