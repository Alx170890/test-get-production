import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Books from './components/books/Books';
import Users from './components/users/User';
import BookDetails from './components/bookDetails/BookDetails';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

const client = new ApolloClient({
  uri: "http://localhost:3005/graphql",
})

class App extends React.Component {  

  render() {
    return (
      <Router>
        <ApolloProvider client={client}>
          <Switch>
            <Route exact path="/" component={Users} />
            <Route path="/books" component={Books} />
            <Route path="/details" component={BookDetails} />
          </Switch>
        </ApolloProvider>
      </Router>
    );
  }
}

export default App;
