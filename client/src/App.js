import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import BackColors from './components/BackColors';
import { Provider } from 'react-redux';
import store from './store/store.js';
import CreateCanvas from './components/CreateCanvas';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Route exact path='/'>
            <Redirect to='/white' />
          </Route>
          <Route path='/white' component={BackColors}></Route>
          <Route path='/blue' component={BackColors}></Route>
          <CreateCanvas />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
