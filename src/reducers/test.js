const defaultState = {
  clicked: 'unclicked',
  name: ''
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'SET_CLICKED':
      return {
        ...state,
        clicked: action.payload
      };
    case 'SET_NAME':
    return {
      ...state,
      name: action.payload
    };
    default:
      return state;
  }
};
