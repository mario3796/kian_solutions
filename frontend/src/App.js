import { Switch, Route } from 'react-router-dom';

import EmployeeList from './Employee/EmployeeList';
import Home from './Home/Home';
import Layout from './Layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/employees" exact>
          <EmployeeList />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
