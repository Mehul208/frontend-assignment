import { createSlice, current } from "@reduxjs/toolkit";
const cart_slice = createSlice({
    name: "cart",
    initialState: {
        cartItems: 0,
        cartItemsList: [],
        totalPrice: 0,
    },
    reducers: {
        resetCart(state) {
            state.cartItemsList = [];
            state.totalPrice = 0;
            state.cartItems = 0;
            localStorage.setItem("cart", JSON.stringify(state));
        },
        addToCart(state, action) {
            const newItem = action.payload;
            const existing = state.cartItemsList.find(
                (item) => item.id === newItem.id
            );
            if (existing) {
                state.cartItemsList = state.cartItemsList.filter(
                    (item) => item.id !== existing.id
                );
                state.totalPrice -= existing.price;
                state.cartItems--;
            }
            state.cartItemsList.push({
                id: newItem.id,
            });
            state.totalPrice += newItem.price;
            state.cartItems++;
            localStorage.setItem("cart", JSON.stringify(state));
            console.table(current(state));
        },
        removeFromCart(state, action) {
            const existing = state.cartItemsList.find(
                (item) => item.id === action.payload
            );
            if (existing) {
                state.cartItemsList = state.cartItemsList.filter(
                    (item) => item.id !== existing.id
                );
                state.totalPrice -= existing.price;
                state.cartItems--;
            }
            localStorage.setItem("cart", JSON.stringify(state));
            console.table(current(state));
        },
    },
});
export const cartActions = cart_slice.actions;
export default cart_slice;
