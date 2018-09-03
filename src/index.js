import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import TrailsContainer from "./containers/TrailsContainer";
import TrailRatingsContainer from "./containers/TrailRatingsContainer";
import rootReducer from "./reducers/rootReducer";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";

import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <Route exact path="/" component={App} />
        <Route exact path="/trails" component={TrailsContainer} />
        <Route exact path="/trail-ratings" component={TrailRatingsContainer} />
      </React.Fragment>
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
