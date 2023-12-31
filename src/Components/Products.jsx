import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "../style/products.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("http://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
            </>
        );
    }
    const filterProduct = (cat) => {
        const upadtedList = data.filter((x) => x.category === cat);
        setFilter(upadtedList);
    }
    const ShowProducts = () => {
        return (
            <>
                <div className="buttons  category">
                    <button className="btn btn-outline-dark mb-3 ms-3" onClick={() => setFilter(data)}>All</button>
                    <button className="btn btn-outline-dark mb-3 ms-3" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className="btn btn-outline-dark mb-3 ms-3" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className="btn btn-outline-dark mb-3 ms-3" onClick={() => filterProduct("jewelery")}>Jewelery</button>
                    <button className="btn btn-outline-dark mb-3 ms-3" onClick={() => filterProduct("electronics")}>Electronics</button>
                </div>
                {filter.map((product) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4" >
                                <div class="card h-100 text-center p-4" key={product.id} >
                                    <img src={product.image} class="card-img-top" alt={product.title} height="250px" />
                                    <div class="card-body">
                                        <h5 class="card-title mb-0 fw-bold">{product.title.substring(0, 25)}...</h5>
                                        <p className="lead fw-bold">
                                            Rating {product.rating && product.rating.rate}
                                            <i className="fa fa-star"></i>
                                        </p>
                                        <p class="card-text fw-bold" >
                                            <FontAwesomeIcon icon={faIndianRupeeSign} style={{ paddingRight: "3px" }} />
                                            {Math.floor(product.price * 80)}
                                        </p><br />
                                        <NavLink to={`/products/${product.id}`} >
                                            <p class="btn btn-outline-dark ">Buy Now</p>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
                }
            </>
        );
    }
    return (
        <div >
            <div className="container my-5 py-3">
                <div className="row">
                    <div className="col-12">
                        <h1 className="display-6  text-center fw-bolder " >All Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    );
}

export default Products;