import { Switch, Route } from "react-router-dom";
import Articles from "./Articles";
import Help from "./Help";
import Article from "./Article";
import NotFound from "./NotFound";

function Main() {
  return (
    <Switch>
      <Route path="/articles" exact>
        <Articles />
      </Route>
      <Route path="/help">
        <Help />
      </Route>
      <Route path="/articles/:slug">
        <Article />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
}

export default Main;
