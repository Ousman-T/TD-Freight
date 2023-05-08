import './App.css';
import Header from './components/NavBar';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Contact />
      
      <h1>TD Freight</h1>
      <div className='introText'>
        <h2>TD Freight Is Here to Solve Your Needs!</h2>
        <p>TD Freight has been in business aiming to solve all of your logistical needs for almost two years now. We take pride in our diligent effort to constantly deliver quality transportation of products from state to state!</p>
      </div>
    </div>
  );
}

export default App;
