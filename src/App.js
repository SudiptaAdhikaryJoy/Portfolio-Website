import './App.css';
import Profile from './PortfolioPages/Home/Profile';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../src/components/Home/Header/Header';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Details from './components/Projects/Details';
import { createContext, useState } from 'react';
// import Preloader from 'react-preloaders/lib/Preloader';
// import { Spinner } from 'react-bootstrap';
// import ParticlesContainer from './ParticlesContainer';

export const UserContext=createContext();


function App() {
    const [cart, setCart] = useState({});


  return (
    <UserContext.Provider value={{cart, setCart}}>
    <div className="App">
      {/* <Spinner animation="border" /> */}
      {/* <Preloader/> */}
      <BrowserRouter>
        <Header></Header>
        <Switch>    
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about" component={About}>
            {/* <About></About> */}
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/details">
          <Details></Details>
        </Route>
          <Route path="/contact">
            <Contact></Contact>
         </Route>
        </Switch>
        <Footer></Footer>       
      </BrowserRouter>  
     
    </div>
    </UserContext.Provider>
  );
}

export default App;
