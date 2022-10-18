import { SHOW_SUSHI_INFO } from "./constans";

const initialState = {
  show: null,
};

export const showReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_SUSHI_INFO:
      return {
        show: payload,
      };

    default:
      return state;
  }
};
