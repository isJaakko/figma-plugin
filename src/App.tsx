import { Switch, Route } from '@modern-js/runtime/router';
import Home from './container/home';

import './App.css';

const App = () => (
  <Switch>
    <Route exact={true} path="/">
      <Home />
    </Route>
    <Route path="*">
      <div>404</div>
    </Route>
  </Switch>
);

export default App;
