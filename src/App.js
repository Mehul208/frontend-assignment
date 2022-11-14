import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CheckoutPage from "./components/CheckoutPage/checkoutPage";
import Home from "./components/HomePage/home";
import ProductDetail from "./components/ProductPage/productDetail";
import Navbar from "./components/Navbar/navbar";
function App() {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="product/:id" element={<ProductDetail />} />
                    <Route path="checkout" element={<CheckoutPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
