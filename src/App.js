import Navbar from '../public/Components/Navbar/Navbar';
import Carousel from '../public/Components/Carousel/Carousel';
import About from '.../public/Components/About/About';
import PizzaStore from '../public/Components/PizzaStore/PizzaStore';
import Footer from '../public/Components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Carousel/>
     <About/>
     <PizzaStore/>
     <Footer/>
    </div>
  );
}

export default App;
