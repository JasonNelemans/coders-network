import { combineReducers } from "redux";
import posts from "./posts/reducer";
import developers from './developers/reducer';

const reducer = combineReducers({
  posts: posts,
  developers: developers
  // etc.
});
export default reducer;
