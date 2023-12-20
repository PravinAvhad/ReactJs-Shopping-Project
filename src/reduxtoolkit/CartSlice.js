import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart(state, action) {
            const newProduct = action.payload;
            const doesexist = state.find((item) => item.newProduct.id === newProduct.id);
            if (doesexist) {
                return state.map(
                    (x) => x.newProduct.id === newProduct.id ?
                        { ...x, qty: x.qty + 1, price: Math.floor(x.price + Math.floor(newProduct.price * 80)) } : x
                )
            }
            else {
                return [
                    ...state,
                    {
                        newProduct,
                        qty: 1,
                        price: Math.floor(newProduct.price * 80),
                    }
                ]
            }
        },
        delCart(state, action) {
            const alreadyproductexist = action.payload;
            const alreadyexist = state.find((x) => x.newProduct.id === alreadyproductexist.id);
            if (alreadyexist.qty === 1) {
                return state.filter((item) => item.newProduct.id !== action.payload.id)
            }
            else {
                return state.map((x) =>
                    x.newProduct.id === alreadyproductexist.id ? { ...x, qty: x.qty - 1, price: Math.floor(x.price - Math.floor(alreadyproductexist.price * 80)) } : x
                );
            }
        },
        delallproduct(state, action) {
            return state.filter((item) => item.newProduct.id !== action.payload.id)
        }
    }
});
export const { addCart, delCart, delallproduct } = cartSlice.actions;
export default cartSlice.reducer;