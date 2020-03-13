const initialState = {
  token: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SIGN_UP_SUCCESS":
      return { ...state, token: action.payload };

    default:
      return state;
  }
}