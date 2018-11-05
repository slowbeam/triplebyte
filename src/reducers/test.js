export default (state = 'unclicked', action) => {
  switch(action.type) {
    case 'SET_TEST':
      return action.payload;
    default:
      return state;
  }
};
