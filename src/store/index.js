import cart_slice from "./cart-slice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        cart: cart_slice.reducer,
    },
});

export default store;
