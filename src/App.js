import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CheckoutPage from "./components/CheckoutPage/checkoutPage";
import Home from "./components/HomePage/home";
import ProductDetail from "./components/ProductPage/productDetail";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="product/:id" element={<ProductDetail />} />
                <Route path="checkout" element={<CheckoutPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
