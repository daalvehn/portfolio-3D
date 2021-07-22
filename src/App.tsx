import { Component } from 'react';
import './App.css';
import DisplayModels from './components/Cards/ModelList';
import DisplayLikes from './components/Cards/LikesList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />

          <Switch>
            <Route path="/likes">
              <DisplayLikes />
            </Route>
            <Route path="/">
              <DisplayModels />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
