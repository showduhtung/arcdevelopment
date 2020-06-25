import React from 'react';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import { ThemeProvider } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import theme from './ui/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route
            path={'/home'}
            component={() => <div style={{ height: 2000 }}>Home</div>}
          />
          <Route path={'/services'} component={() => <>Services</>} />
          <Route
            path={'/customsoftware'}
            component={() => <>Custom Software</>}
          />
          <Route path={'/mobileapps'} component={() => <>Mobile Apps</>} />
          <Route path={'/websites'} component={() => <>Websites</>} />
          <Route path={'/revolution'} component={() => <>Revolution</>} />
          <Route path={'/about'} component={() => <>About</>} />
          <Route path={'/contact'} component={() => <>Contact</>} />
          <Route path={'/estimate'} component={() => <>Estimate</>} />
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
