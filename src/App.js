import Navbar from './Navbar';
import Carousel from './Carousel';
import About from './About';
import PizzaStore from './PizzaStore';
import ContactUs from './ContactUs';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>pizza website</h1>
     <Navbar/>
     <Carousel/>
     <About/>
     <PizzaStore/>
     <ContactUs/>
    </div>
  );
}

export default App;
