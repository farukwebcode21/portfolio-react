import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/Home/About/About';
import Contact from './components/Home/Contact/Contact';
import Home from './components/Home/Home/Home';
import Projects from './components/Home/Projects/Projects';
import Footer from './components/Shaired/Footer/Footer';
import Navigation from './components/Shaired/Navigation/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Projects/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
