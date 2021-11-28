import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";

import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Footer from "./components/footer/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const currentUser = true;
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/posts">
          <Homepage />
        </Route>
        
        <Route path="/login">{currentUser ? <Homepage /> : <Login />}</Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
        
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
