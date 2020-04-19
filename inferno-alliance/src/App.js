import React, {Componet} from 'react';
import './App.css';
import Navbar from './componets/home/Navbar';
import SlideShow from './componets/home/Slide';
import Info from './componets/home/InfoPanel';
import Footer from './componets/home/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SlideShow/>
      <Info/>
      <Footer/>
    </div>
  );
}

export default App;
