import * as types from "./constans";

export const loadSushiStart = () => ({
  type: types.LOAD_SUSHI_START,
});

export const loadSushiSuccess = (sushi) => ({
  type: types.LOAD_SUSHI_SUCCESS,
  payload: sushi,
});

export const loadSushiError = (error) => ({
  type: types.LOAD_SUSHI_START,
  payload: error,
});

export const addSushiStart = (sushi) => ({
  type: types.ADD_SUSHI_START,
  payload: sushi,
});
export const addSushiSuccess = () => ({
  type: types.ADD_SUSHI_SUCCESS,
});
export const addSushiError = (error) => ({
  type: types.ADD_SUSHI_ERROR,
  payload: error,
});

export const deleteSushiStart = (sushiId) => ({
  type: types.DELETE_SUSHI_START,
  payload: sushiId,
});
export const deleteSushiSuccess = (sushiId) => ({
  type: types.DELETE_SUSHI_SUCCESS,
  payload: sushiId,
});
export const deleteSushiError = (error) => ({
  type: types.DELETE_SUSHI_ERROR,
  payload: error,
});

export const updateSushiStart = (userInfo) => ({
  type: types.UPDATE_SUSHI_START,
  payload: userInfo,
});
export const updateSushiSuccess = () => ({
  type: types.UPDATE_SUSHI_SUCCESS,
});
export const updateSushiError = (error) => ({
  type: types.UPDATE_SUSHI_ERROR,
  payload: error,
});

export const getSushiId = (sushiId) => ({
  type: types.GET_SUSHI_ID,
  payload: sushiId,
});

export const showSushiInfo = (showSushi) => ({
  type: types.SHOW_SUSHI_INFO,
  payload: showSushi,
});
