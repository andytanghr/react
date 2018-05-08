const initialState = {
  counter: 1100,
  firstName: 'John',
  lastName: 'Doe'
}; 

const reducer = (state = initialState, action) => {
  if (action.type === 'INC_COUNTER') {
    return {
      ...state,
      counter: state.counter + 1
    }
  }
  // console.log('returning reduced state works'); // it does
  return state;
}

export default reducer;