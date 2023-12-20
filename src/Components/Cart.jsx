import React from "react";
import { useDispatch, useSelector } from "react-redux";
import '../style/cart.scss';
import { delCart, addCart, delallproduct } from "../reduxtoolkit/CartSlice";

const Cart = () => {
    const cartproducts = useSelector((state) => state.cart);
    let total = 0;
    cartproducts.map((product) => total += product.price);

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }
    const removeallproduct = (product) => {
        dispatch(delallproduct(product));
    }
    const removefromCart = (product) => {
        dispatch(delCart(product));
    }
    return (
        <div className="cart">
            <main>
                {
                    cartproducts.length > 0 ? (
                        cartproducts.map((product) => {
                            return (
                                <div className="cartitem">
                                    <img src={product.newProduct.image} alt="Item" />
                                    <article>
                                        <h3>{product.newProduct.title}</h3>
                                        <p>{product.price} Rs.</p>
                                    </article>
                                    <div>
                                        <button onClick={() => removefromCart(product.newProduct)}>-</button>
                                        <p>{product.qty}</p>
                                        <button onClick={() => addProduct(product.newProduct)}>+</button>
                                    </div>
                                    <button onClick={() => removeallproduct(product.newProduct)}>
                                        <i class="fa fa-trash" ></i>
                                    </button>
                                </div>
                            )
                        })
                    ) : (
                        <h1>Your Cart is Empty</h1>
                    )
                }
            </main>
            <aside>
                <h2>Total: {total} Rs.</h2>
                <button>Place Order</button>
            </aside>
        </div>
    )
}
export default Cart;