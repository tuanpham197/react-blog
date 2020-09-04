import axios from 'axios';
import apiCaller from '../utils/ApiCaller';
import * as types from '../constants/ActionTypes';
import {cancel, fork, put, takeLatest,takeEvery, all ,delay, take} from 'redux-saga/effects';

export  function* getTop10() {
    const res = yield apiCaller(`v1/post`,'GET');
    if(res){
        yield put({type: types.GET_TOP_10_POST,posts:res.data.data});
    }
}