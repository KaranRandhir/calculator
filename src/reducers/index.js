import {evaluate} from "mathjs";
import {combineReducers} from "redux";


const calculateReducer = (exp="",action)=>{
    if (action.type==="ADD_TO_STRING" ){
        return exp.concat(action.payload);
    }
    if (action.type==="EVALUATE_STRING"){
        return `${(evaluate(exp))}`;
    }
    if (action.type==="BACKSPACE"){
        return exp.substring(0, exp.length - 1);
    }
    if (action.type==="CLEAR_ALL"){
        return "";
    }
    return exp

}

export default combineReducers({
    exp:calculateReducer
});