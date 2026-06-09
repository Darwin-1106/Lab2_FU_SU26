import { useState } from 'react';
import Header from './component/Header';
import Banner from './component/Banner';
import Product from './component/Product';
import Footer from './component/Footer';


function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <div className="App">
      <Header cartCount={cartCount} />
      <Banner/>
      <Product onAddToCart={handleAddToCart} />
      <Footer />
      
    </div>
  );
}

export default App;