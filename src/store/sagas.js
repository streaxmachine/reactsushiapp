import {
  take,
  takeEvery,
  takeLatest,
  put,
  all,
  delay,
  fork,
  call,
} from "redux-saga/effects";

import * as types from "./constans";

import {
  addSushiApi,
  loadSushiApi,
  deleteSushiApi,
  updateUserApi,
} from "../api/api";

import {
  loadSushiSuccess,
  loadSushiError,
  addSushiSuccess,
  addSushiError,
  deleteSushiSuccess,
  deleteSushiError,
  updateSushiSuccess,
  updateSushiError,
} from "./actions";

function* onLoadSushiStartAsync() {
  try {
    const response = yield call(loadSushiApi);
    if (response.status === 200) {
      yield delay(500);
      yield put(loadSushiSuccess(response.data));
    }
  } catch (error) {
    yield put(loadSushiError(error));
  }
}

function* onAddSushiStartAsync({ payload }) {
  try {
    const response = yield call(addSushiApi, payload);
    if (response.status === 200) {
      yield put(addSushiSuccess());
    }
  } catch (error) {
    yield put(addSushiError(error.response.data));
  }
}

function* onDeleteSushiStartAsync(userId) {
  try {
    const response = yield call(deleteSushiApi, userId);
    if (response.status === 200) {
      yield delay(500);
      yield put(deleteSushiSuccess(userId));
    }
  } catch (error) {
    yield put(deleteSushiError(error.response.data));
  }
}

function* onUpdateSushiStartAsync({ payload: { id, formValue } }) {
  try {
    const response = yield call(updateUserApi, id, formValue);
    if (response === 200) {
      yield put(updateSushiSuccess());
    }
  } catch (error) {
    yield put(updateSushiError(error));
  }
}

function* onDeleteSushi() {
  while (true) {
    const { payload: userId } = yield take(types.DELETE_SUSHI_START);
    yield call(onDeleteSushiStartAsync, userId);
  }
}

function* onUpdateSushi() {
  yield takeLatest(types.UPDATE_SUSHI_START, onUpdateSushiStartAsync);
}

function* onAddSushi() {
  yield takeLatest(types.ADD_SUSHI_START, onAddSushiStartAsync);
}

function* onLoadSushi() {
  yield takeEvery(types.LOAD_SUSHI_START, onLoadSushiStartAsync);
}

const sushiSagas = [
  fork(onLoadSushi),
  fork(onAddSushi),
  fork(onDeleteSushi),
  fork(onUpdateSushi),
];

export default function* rootSaga() {
  yield all([...sushiSagas]);
}
