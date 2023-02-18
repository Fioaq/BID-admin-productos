import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList';

const Main = () => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        getProducts();
        getProducts();
    }, [])

    const getProducts = async () => {
        try {
            const res = await axios.get('http://localhost:8000/api/product')
            setProduct(res.data);
            setLoaded(true);
        } catch (error) {
            console.log(error);
        }
    }

    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id !== productId));
    }

    return (
        <div>
            <h2 className='d-flex justify-content-center mt-2'>Product Manager</h2>
            <div className='col-4 p-3 d-flex justify-content-center' style={{ width: "100%" }}>
                <ProductForm actDom={getProducts} />
            </div>
            <hr />
            <div className='w-100'>
                {loaded && <ProductList product={product} removeFromDom={removeFromDom} />}
            </div>
        </div>
    )
};

export default Main;