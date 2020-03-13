import axios from "axios";

function signUpSuccess(token) {
  return {
    type: "SIGN_UP_SUCCESS",
    payload: token
  };
}

export function signUpThunk(name, password, email) {
  return async function(dispatch, getState) {
    const response = await axios.post(
      "https://codaisseur-coders-network.herokuapp.com/signup",
      {
        name: name,
        email: email,
        password: password
      }
    ); 

    dispatch(signUpSuccess(response.data.jwt));
  };
}