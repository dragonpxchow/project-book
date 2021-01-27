import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

//export default combineReducers({ properties: properties });

export default combineReducers({ auth: authReducer, error: errorReducer });
