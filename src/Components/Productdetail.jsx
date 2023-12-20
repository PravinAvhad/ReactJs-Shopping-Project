import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../reduxtoolkit/CartSlice";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
        toast.success(`${product.title} Added to Cart.`);
    }

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`http://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, [id]);

    const Loading = () => {
        return (
            <>
                <div className="cod-md-6">
                    <Skeleton height={400} />
                </div>
                <div className="col-md-6" style={{ lineHeight: 2 }}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100} />
                    <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
                </div>
            </>
        );
    }
    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img src={product.image} alt={product.title} height="300rem" width="300rem" />
                </div>
                <div className="col-md-6">
                    <div className="text-uppercase text-black-50">
                        {product.category}
                    </div>
                    <h4 className="display-5">{product.title}</h4>
                    <p className="lead fw-bolder">
                        Rating {product.rating && product.rating.rate}
                        <i className="fa fa-star"></i>
                    </p>
                    <h3 className="display-6 fw-bold my-4 ">
                        <i class="fa fa-inr "></i>
                        {Math.floor(product.price * 80)}</h3>
                    <p className="Lead">{product.description}</p>
                    <button className="btn btn-outline-dark" onClick={() => addProduct(product)}> Add to Cart </button>
                    <NavLink className="btn btn-dark ms-3" to="/cart">Go to Cart</NavLink>
                </div>
            </>
        );
    }
    return (
        <div>
            <div className="container py-3">
                <div className="row py-5">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    );
}
export default Product;