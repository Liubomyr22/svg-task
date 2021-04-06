import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import testElementReducer from "./testElementReducer";

let reducers = combineReducers({
  testElementReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
