import axios from "axios";

function fetchDevelopersSucces(data) {
  return { type: "FETCHED_DEVELOPERS_SUCCESS", payload: data };
}
//
export function fetchDevelopersThunk() {
  return async function(dispatch, getState) {
    const state = getState();
    const limit = 1;
    const stateCount = state.developers.rows.length
    
    const response = await axios.get(
      `https://codaisseur-coders-network.herokuapp.com/developers?offset=${stateCount}&limit=${limit}`
    );

    // if(state.developers.rows.length !== 0) return;

    const action = fetchDevelopersSucces(response.data);
    dispatch(action);
  };
}
