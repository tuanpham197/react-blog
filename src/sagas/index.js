import {cancel, fork, put, takeLatest,takeEvery, all ,delay, take} from 'redux-saga/effects';

import * as types from '../constants/ActionTypes';
import axios from 'axios';
import {getMenu} from './menu';
import {getTop10} from './post';



function* fetchCategory(){
    yield fork(getMenu);
    
    // if(res)
    //     yield put({type: types.FETCH_DATA_CAT,categorys:res.data.data});
 
}



function* fetchData(){
    console.log("123123");
    yield fork(fetchCategory);
    yield fork(getTop10);

 
}

export default function* rootSaga(){
    //fetch dữ liệu khi lần đầu khởi chạy 
    //yield fork(fetchData);

    yield all([
        fetchData(),
        //  fetchPost(),
        //  fetchCategory()
    ])
}