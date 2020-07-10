import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Home, About, User, Stuff } from './views';
import { ThemeContext } from './themeContext'
import MyComponent from './components/MyComponents';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/user">User</Link></li>
          <li><Link to="/stuff">Stuff</Link></li>
        </ul>
        </header>

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/user">
            <User/>
          </Route>
          <Route path="/stuff">
            <Stuff/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export class Apps extends React.Component {
  constructor() {
    super();
    this.onChangeTheme = () => {
      this.setState(prevState => ({
        colorTheme: prevState.colorTheme === 'dark' ? 'white' : 'dark'    
      }))
    }

    this.state = {
        colorTheme: 'dark',
        onChangeTheme: this.onChangeTheme,
    }    
  }

  _handleThemeChange = () => {
    
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <MyComponent />
      </ThemeContext.Provider>
    );
  }
}

export default App;