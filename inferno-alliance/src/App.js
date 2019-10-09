import React, {Componet} from 'react';
import './App.css';
import Navbar from './componets/home/Navbar';
import SlideShow from './componets/home/Slide';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SlideShow/>
    </div>
  );
}

export default App;
