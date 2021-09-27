import logo from './logo.svg';
import './App.css';
import { Switch, Link, Route, BrowserRouter } from 'react-router-dom'
import About from './component/about'
import Header from './component/header'
import Portfolio from './component/portfolio'
import Resume from './component/resume'

function App(){

  return(
    <div>
      <Header />
      <BrowserRouter>
      <button><Link to='/'>Home</Link></button>
      <button><Link to='/about'>About</Link></button>
      <button><Link to='/portfolio'>Portfolio</Link></button>
      <button><Link to='/resume'>Resume</Link></button>
      <Switch>
        <Route path='/about'>
          <About />
        </Route >
        <Route path='/portfolio'>
          <Portfolio />
        </Route >
        <Route path='/resume'>
          <Resume />
        </Route >
        <Route path='/'>
          <About />
        </Route >
      </Switch>
      </BrowserRouter>
    </div>
  )

}

export default App;


// <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/users"></Route>