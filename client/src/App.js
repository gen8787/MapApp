import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap
import 'font-awesome/css/font-awesome.min.css';  // Font Awesome
import { BrowserRouter, Route, Switch } from 'react-router-dom'; // Router

// Component Imports
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import LandingPage from './components/landingPage';
import About from './components/about';
import MunterCalculator from './components/munterCalculator';
import TripPlanner from './components/tripPlanner';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>

        <div className="container-fluid">
          <Switch>
            <Route path="/" exact component={LandingPage}></Route>
            <Route path="/about" exact component={About}></Route>
            <Route path="/munter-calculator" exact component={MunterCalculator}></Route>
            <Route path="/trip-planner" exact component={TripPlanner}></Route>
          </Switch>
        </div>

        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
