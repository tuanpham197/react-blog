import {combineReducers} from 'redux'
import menus from './menu';
import posts from './post';

const myReducers = combineReducers({
    menus,
    posts
});

export default myReducers;