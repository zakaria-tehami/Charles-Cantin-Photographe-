import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Galerie from "./pages/Galerie";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <switch>
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/Galerie' exact Component={Galerie} />
          <Route path='/Pricing' exact Component={Pricing} />
          <Route path='/Contact' exact Component={Contact} />
        </Routes>
        </switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
