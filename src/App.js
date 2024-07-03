import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Todoapp from './Component/Todoapp/Todoapp';
import Header from './Component/Header/Header';
import About from './Component/About/About';
import './App.css';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Todoapp />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </Router>
    );
}

export default App;
