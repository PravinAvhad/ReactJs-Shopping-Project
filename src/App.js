import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Products from './Components/Products';
import Productdetail from './Components/Productdetail.jsx';
import Cart from "./Components/Cart"
import About from "./Components/About.jsx";
import Footer from "./Components/Footer.jsx";
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from './reduxtoolkit/store/store.js';
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let persistor = persistStore(store);

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<Productdetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
          </BrowserRouter>
          <Toaster />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
