import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import PivotTable from './PivotTable';
import APICallsAndEvents from './APICallsAndEvents';
import PivotTableHooks from './PivotTableHooks';

class App extends Component {

  render(){
    return (
        <Router>
          <Route path="/" component={PivotTableHooks} exact/>
        </Router>

    );
  }

}

export default App;
