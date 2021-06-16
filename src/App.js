import "./App.css";
import MemberList from "./components/MemberList";
import { Route, Switch } from "react-router";
import members from "./members";
import Home from "./components/Home";
import MemberDetail from "./components/MemberDetail";
function App() {
  return (
    <center>
      {/* <NavBar /> */}
      <Switch>
        <Route path="/members/:membersSlug">
          <MemberDetail members={members} />
        </Route>
        {/* <Route path="/books/:booksSlug">
          <booksDetail books={books} />
        </Route>
        <Route path="/books">
          <booksList books={books} /> */}
        {/* </Route> */}
        <Route path="/members">
          <MemberList members={members} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </center>
  );
}

export default App;
