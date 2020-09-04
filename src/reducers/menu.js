import * as types from '../constants/ActionTypes';
var initialState = [

]

const menu = (state = initialState,action)=>{
    switch (action.type) {
        case types.GET_MENU:
            state = action.menus
            console.log(state,"123");
            return [...state];
            break;
    
        default:
            return [...state];
            break;
    }
}

export default menu;