import { createStore } from "redux";

import Reducer from "./Reducers";

export default createStore(
  Reducer,
  undefined,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
