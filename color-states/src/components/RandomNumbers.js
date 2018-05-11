import React, {Component} from 'react';


class RandomNumbers extends Component {




  render() {


    



    return (

      0


    );
  }
}

const mapStateToProps = state => {
  return {
    colors: state.colors
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onGetColors: () => dispatch({type: 'GET_COLORS', payload: {colors: colors} })

  };
}


export default connect(mapStateToProps, mapDispatchToProps)(RandomCity);