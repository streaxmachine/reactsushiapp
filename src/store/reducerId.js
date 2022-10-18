import { GET_SUSHI_ID } from "./constans";

const initialState = {
  id: null,
};

export const idReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SUSHI_ID:
      return {
        id: payload,
      };

    default:
      return state;
  }
};
