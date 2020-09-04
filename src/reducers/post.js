import * as types from '../constants/ActionTypes';
var initialState = [

]

const post = (state = initialState,action)=>{
    switch (action.type) {
        case types.GET_TOP_10_POST:
            state = action.posts
            console.log(state,"123");
            return [...state];
            break;
    
        default:
            return [...state];
            break;
    }
}

export default post;