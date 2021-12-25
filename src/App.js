import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes

} from "react-router-dom";
import Home from './Home';
import LoginHeader from './LoginHeader';
import RegisterHeader from './RegisterHeader';
import { createContext, useState } from 'react';


export const UserContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        {
          loggedInUser.email ? (<Home />) :

            (<Routes>
              <Route exact path="/" element={<LoginHeader />} />
              {/* <Route path="/home" element={<Home />} /> */}
              <Route path="/login" element={<LoginHeader />} />
              <Route path="/register" element={<RegisterHeader />} />
            </Routes>)
        }

      </Router>
    </UserContext.Provider>
  );
}

export default App;
