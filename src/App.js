import React from "react";
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Home from "./Homepage";
import './styles/main styles/style.css'
import useFetch from './useFetch'
function App() {
  return (
    <Router >
      <div className="app">
        <Routes>
            <Route exact path="/home" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
