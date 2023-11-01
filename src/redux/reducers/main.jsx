import { combineReducers } from "redux";
import { cartReducer } from "./reducer";
import productReducer from "./productReducer";
import searchReducer from "./searchReducer";

const rootred = combineReducers({
  cartReducer,
  productReducer,
  searchReducer,
});

export default rootred;
