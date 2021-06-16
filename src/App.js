import Navbar from './Navbar';
import Carousel from './Carousel';
import About from './About';
import PizzaStore from './PizzaStore';
import ContactUs from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Carousel/>
     <About/>
     <PizzaStore/>
     <ContactUs/>
    </div>
  );
}

export default App;
