import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import BackColors from './components/BackColors';
import { Provider } from 'react-redux';
import store from './store/store.js';
import CreateCanvas from './components/CreateCanvas';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/'>
              <Redirect to='/white' />
            </Route>
            <Route exact path='/white' component={BackColors}></Route>
            <Route exact path='/blue' component={BackColors}></Route>
          </Switch>
          <CreateCanvas />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
