// import store from './store';

const initialState = {
  city: 'Somewhere, USA',
  colors: ['#FF0000', '#00FF00','#0000FF'],
  // humidity: 99,
  // pressure: 9999,
  // temperature: 999,
  // windSpeed: 99,
  // windDeg: 99,
  // clouds: 99,
  // longitude: 99,
  // latitude: 99
}; 

// var pastStates = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
  // if (action.type === 'INC1_COUNTER') {
  //   return {
  //     ...state,
  //     counter: state.counter + 1
  //   };
  // } else if (action.type ==='INC5_COUNTER') {
  //   return {
  //     ...state,
  //     counter: state.counter + 5
  //   };
  // } else if (action.type === 'DEC1_COUNTER') {
  //   return {
  //     ...state,
  //     counter: state.counter - 1
  //   };
  // } else if (action.type === 'DEC5_COUNTER') {
  //   return {
  //     ...state,
  //     counter: state.counter - 5
  //   };
  // }
  case ('CHANGE_CITY') : {
  


    // console.log('action to change city done'); // this works
    
    return (
      {
      ...state,
      city: action.payload
      }, console.log(action.payload + ' reducer city', state)
    );
  }

  case ('GET_COLORS') : {
    return (
      {
        ...state,
        colors: action.payload.colors
      }

    );
  }

  // console.log('returning reduced state works'); // it does
  return state; //, console.log('current state humidity:' + state.humidity) );
  }
}

export default reducer;