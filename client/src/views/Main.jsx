import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList';

const Main = () => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
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

    return (
        <div>
            <div className='col-4 p-3 d-flex justify-content-center' style={{ width: "100%" }}>
                <ProductForm />
            </div>
            <hr />
            <div className='w-100'>
                {loaded && <ProductList product={product} />}
            </div>
        </div>
    )
};

export default Main;