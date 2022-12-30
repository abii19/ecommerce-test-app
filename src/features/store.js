import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import counterReducer from "./counter/counterReducer";

const reducers = combineReducers({
  counter: counterReducer
});

export const store = createStore(reducers, applyMiddleware(thunk));
