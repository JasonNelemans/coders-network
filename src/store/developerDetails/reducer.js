const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DEVELOPER_DETAILS_SUCCESS":
      return action.payload;

    default:
      return state;
  }
};