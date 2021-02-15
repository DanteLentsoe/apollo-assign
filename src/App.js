import "../src/index.css";
import Home from "../src/pages/Home";
import ApolloClient from "apollo-boost";
import { ApolloProver } from "react-apollo";
import Error from "../src/pages/404";
import {Route, Switch} from "react-router-dom";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
})

function App() {

  
  return (
    <>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route component={Error} />
            </Switch>
    </>
  );
}

export default App;
