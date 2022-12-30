import * as Types from "../types";
// Increment by 1
export const increment = () => {
  return {
    type: Types.COUNTER_INCREMENT
  };
};

// Decrement by 1
export const decrement = () => {
  return {
    type: "counter/derement"
  };
};

// Increment by value(integer)
export const incrementByValue = (val) => {
  return {
    type: "counter/incrementByValue",
    payload: val
  };
};
