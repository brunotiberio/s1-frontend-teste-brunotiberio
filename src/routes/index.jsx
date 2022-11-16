import { Route, Switch } from "react-router-dom";
import { Homepage } from "../pages/homepage";

function Paths() {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
    </Switch>
  );
}

export default Paths;
