import * as Types from "../types";

const initialState = {
  counter: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.COUNTER_INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };

    case "counter/derement":
      return {
        ...state,
        counter: state.counter - 1
      };

    case "counter/incrementByValue":
      return {
        ...state,
        counter: state.counter + action.payload
      };

    default:
      return state;
  }
};

export default counterReducer;
