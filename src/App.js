import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes

} from "react-router-dom";
import Home from './Home';
import LoginHeader from './LoginHeader';
import RegisterHeader from './RegisterHeader';


function App() {

  //npm install firebase
  // npm install -g firebase-tools
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginHeader />} >
            {/* <Login/> */}
          </Route>
          <Route path="/home" element={<Home />} />

          <Route path="/login" element={<LoginHeader />}>
            {/* <Login/> */}
          </Route>
          <Route path="/register" element={<RegisterHeader />}>
            {/* <Register/> */}
          </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
