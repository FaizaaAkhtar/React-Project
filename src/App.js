import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import NewsSlider from './Components/NewsSlider';
import Features from './Components/Features';
import OverView from './Components/OverView';
import Technology from './Components/Technology';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <NavBar/>
    <NewsSlider/>
    <Home/>
    <Features/>
    <OverView/>
    <Technology/>
    <Footer/>
    
    </>
  );
}

export default App;
