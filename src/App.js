import './App.css';
import Profile from './PortfolioPages/Home/Profile';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../src/components/Home/Header/Header';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>    
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
        </Switch>
        <Footer></Footer>       
      </BrowserRouter>   
    </div>
  );
}

export default App;
