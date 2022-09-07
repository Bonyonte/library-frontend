import React from "react";
import './App.css';
import  { Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Library from './components/Library';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Comment from './components/Comment';

function App() {
  return (
    <div className="App">
      <NavBar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/comment" element={<Comment />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

