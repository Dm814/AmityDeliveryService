import {combineReducers} from "redux";
import formData from "./formData";
import results from "./results";

export const rootReducer = combineReducers({
    formData,
    results
});
