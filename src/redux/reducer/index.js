import handleCart from "./HandleCart";
import  {combineReducers}  from "redux";

const rootReducers =combineReducers({
  Handlecart:  handleCart,
})

export default rootReducers;
