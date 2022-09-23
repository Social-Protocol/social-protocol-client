import HeaderBar from "./Components/HeaderBar/HeaderBar.js";
import Grid from "./Components/Grid/Grid.js";
import UserBar from "./Components/UserBar/UserBar.js";
import "./App.css";
import { BrowserRouter, Route, Router } from "react-router-dom";
import { Switch } from "@mui/material";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderBar />
        <Switch>
          {/* <Route exact path="/" component={Grid} /> */}
          {/* <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/faq" component={Faq} /> */}
        </Switch>
        <UserBar />
        <Grid />
      </BrowserRouter>
    </div>
  );
}

export default App;
