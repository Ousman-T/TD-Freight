import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Contact from './pages/Contact';
import Home from './pages/Home';
import About from './pages/About';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
