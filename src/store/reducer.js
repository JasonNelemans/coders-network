import { combineReducers } from "redux";
import posts from "./posts/reducer";
import developers from './developers/reducer';
import postDetails from './postDetails/reducer';
import developerDetails from "./developerDetails/reducer";

const reducer = combineReducers({
  posts: posts,
  developers: developers,
  postDetails: postDetails,
  developerDetails: developerDetails
});
export default reducer;
