import axios from 'axios';
import apiCaller from '../utils/ApiCaller';
import * as types from '../constants/ActionTypes';
import {cancel, fork, put, takeLatest,takeEvery, all ,delay, take} from 'redux-saga/effects';

export  function* getMenu() {
    console.log('Hello Sagas!')
    const res = yield apiCaller(`v1/menu`,'GET');
    if(res){
        yield put({type: types.GET_MENU,menus:res.data.data});
    }
}