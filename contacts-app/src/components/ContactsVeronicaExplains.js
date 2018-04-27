import React from 'react';

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 1
    };
  })

  edit() {};

  delete() {};

  render() {

    let display = this.state;
    if (display === 'read') {
      <Read />
    } else if (display === 'update') {
      <Update />
    } else if (display === 'delete') {
      <Delete />
    }
    

    return (
      {display}
      // onClick
    )
  }
}