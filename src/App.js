import React, { Component } from "react";
import { Route, Routes, HashRouter } from "react-router-dom";

import LatestContent from "./latestContent";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <div className="content">
            <Routes>
              <Route exact path="/" element={<LatestContent />}></Route>
            </Routes>
          </div>
        </div>
      </HashRouter>
    );
  }
}
export default App;
