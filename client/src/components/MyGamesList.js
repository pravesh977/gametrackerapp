import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import FullGamesList from './FullGamesList';
import PlanningComp from './PlanningComp';
import PlayingComp from './PlayingComp';
import CompletedComp from './CompletedComp';
import DroppedComp from './DroppedComp';


class MyGamesList extends Component {


  

  render() {
    return (
      <div className="listdiv">
        <Router>
          <div>
            <nav>
              <ul>
                <li><Link to="/fullgameslist" style={{ textDecoration: 'none' }}>See My List</Link></li>
                <li><Link to="/planningtobuy" style={{ textDecoration: 'none' }}>Planning To Buy</Link></li>
                <li><Link to="/playing" style={{ textDecoration: 'none' }}>Playing</Link></li>
                <li><Link to="/completed" style={{ textDecoration: 'none' }}>Completed</Link></li>
                <li><Link to="/dropped" style={{ textDecoration: 'none' }}>Dropped</Link></li>
              </ul>
            </nav>
            <div>
              <Route exact path="/fullgameslist" component={FullGamesList}/>
              <Route exact path="/planningtobuy" component={PlanningComp}/>
              <Route exact path="/playing" component={PlayingComp}/>
              <Route exact path="/completed" component={CompletedComp}/>
              <Route exact path="/dropped" component={DroppedComp}/>
            </div>
          </div>
        </Router>
      </div>
    )
  }
}
export default MyGamesList;