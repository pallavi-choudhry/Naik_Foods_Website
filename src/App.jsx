import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FeaturedCategories from './components/FeaturedCategories';
// import StoreInfo from './components/StoreInfo';
import Footer from './components/Footer';
import Product from './components/Product';
import BestSellers from './components/BestSellers';
import PromoBanners from './components/Promobanner';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Home />
        <FeaturedCategories />
        {/* <StoreInfo /> */}
        <Product />
        <BestSellers />
        <PromoBanners />
      </main>
      <Footer />
    </div>
  );
}

export default App;