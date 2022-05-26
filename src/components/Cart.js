import React, { useContext } from "react";
import { CartContext } from "./Context/CartContext";
import { Link } from "react-router-dom";
import "../css/Cart.css"
import CartList from "./CartList";

const Cart = () => {
const { cartList } = useContext(CartContext);

return (
    <>
    {cartList.length === 0 ? (
    <div className="container mt-5 cart">
        <div className="row text-center justify-content-center">
            <h3 className="my-5">
            <strong>No hay productos en tu carrito</strong>
            </h3>
            <h4 className="my-5">¿Quieres agregar productos?</h4>
            <Link className="btn btn-success bg-gradient w-25" to="/">
            Ir a comprar
            </Link>
        </div>
    </div>
    ) : (
        <CartList />
    )}
    </>
);
};

export default Cart; 