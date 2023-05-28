import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import HomeComponent from './components/HomeComponent';
import ProductDetailComponent from './components/ProductDetailComponent';
import './App.css';

const App: React.FC = () => {


  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/product/:id" element={<ProductDetailComponent />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
