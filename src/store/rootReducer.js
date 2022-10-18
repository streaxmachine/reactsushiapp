import { combineReducers } from "redux";
import { sushiRecuder } from "./reducer";
import { idReducer } from "./reducerId";
import { showReducer } from "./reducerShow";

const rootReducer = combineReducers({
  sushiData: sushiRecuder,
  sushiId: idReducer,
  sushiShow: showReducer,
});

export default rootReducer;
