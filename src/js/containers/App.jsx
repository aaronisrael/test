import React, {Component} from 'react';
import DevTools from 'mobx-react-devtools';

import {observer} from 'mobx-react';

import {withRouter} from 'react-router';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import ListView from '../components/ListView';
import FacebookConnect from './FacebookConnect';
import Friends from '../components/Matches/Friends';
import Strangers from '../components/Matches/Strangers';
import Profile from '../components/Profile';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render(history) {
    return (
      <section>

        {process.env.NODE_ENV !== `production` ? <DevTools /> : null}

        <Router history={history}>
          <Switch>
            <Route exact path='/' component={FacebookConnect} />
            <Route exact path='/ListView' component={ListView} />
            <Route path='/Matches/Friends' component={Friends} />
            <Route path='/Matches/Strangers' component={Strangers} />
            <Route exact path='/Profile' component={Profile} />
          </Switch>
        </Router>
      </section>
    );
  }
}

export default withRouter(observer(App));
