import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products,setProducts] =useState([]);
    const [cart,setCart] =useState([]);

    useEffect( () => {
        fetch('/products.JSON')
        .then(response => response.json())
        .then(data => {
            setProducts(data);
        });

    }, [])

    useEffect(()=>{
       if(products.length){
        const saveCart = getStoredCart();
        // console.log(saveCart[key])
        const storedCart = [];
        for(const key in saveCart){
            const addedProduct = products.find(product=>product.key ===key)
            if(addedProduct){
                const quantity = saveCart[key];
                addedProduct.quantity =quantity;
                storedCart.push(addedProduct)
            }
        } 
           setCart(storedCart);
       }
    },[products])

    const handleAddToCart = (product) => {
        // console.log(product);
        const newCart =[...cart,product];
        setCart(newCart);
        // save to local storage(for now)
        addToDb(product.key);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                  
                  {
                      products.map(product => <Product 
                        key={product.key}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        >
                        </Product>)
                  }
            </div>
            <div className="cart-container">
                 <Cart cart ={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;