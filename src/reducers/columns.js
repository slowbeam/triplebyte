const defaultState = {
  columnOneTitle: "",
  columnTwoTitle: "",
  columnThreeTitle: "",
  columnFourTitle: ""
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "SET_C_ONE_TITLE":
      return {
        ...state,
        columnOneTitle: action.payload
      };
    case "SET_C_TWO_TITLE":
      return {
        ...state,
        columnTwoTitle: action.payload
      };
    case "SET_C_THREE_TITLE":
      return {
        ...state,
        columnThreeTitle: action.payload
      };
    case "SET_C_FOUR_TITLE":
      return {
        ...state,
        columnFourTitle: action.payload
      };
    default:
      return state;
  }
};
