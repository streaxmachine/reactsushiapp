import * as types from "./constans";

const initialState = {
  sushi: [],
  loading: false,
  error: null,
};

export const sushiRecuder = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOAD_SUSHI_START:
    case types.ADD_SUSHI_START:
    case types.DELETE_SUSHI_START:
    case types.UPDATE_SUSHI_START:
      return {
        ...state,
        loading: true,
      };

    case types.LOAD_SUSHI_SUCCESS:
      return {
        ...state,
        loading: false,
        sushi: payload,
      };

    case types.UPDATE_SUSHI_SUCCESS:
    case types.ADD_SUSHI_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }

    case types.DELETE_SUSHI_SUCCESS:
      return {
        ...state,
        loading: false,
        sushi: state.sushi.filter((item) => item.id !== payload),
      };

    case types.LOAD_SUSHI_ERROR:
    case types.ADD_SUSHI_ERROR:
    case types.DELETE_SUSHI_ERROR:
    case types.UPDATE_SUSHI_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
