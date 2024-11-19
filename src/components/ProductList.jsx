import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';



const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error('Ошибка при загрузке данных:', error));
    }, []);

    return (
        <div className="product-list">
        {products.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
        </div>
    );
};

export default ProductList;