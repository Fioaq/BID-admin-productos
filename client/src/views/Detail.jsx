import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import DeleteButton from '../components/DeleteButton';

const Detail = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const getOneProduct = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/api/product/${id}`)
                setProduct(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getOneProduct();
    }, [id]);

    return (
        <div className='d-flex flex-column align-items-center justify-content-center' style={{height: "100vh"}}>
            <h1>{product?.title}</h1>
            <p>Price: ${product?.price}</p>
            <p>Description: {product?.description}</p>
            <DeleteButton id={product?._id}/>
            <Link className='m-3' to={`/product/${id}/edit`}>Edit</Link>
            <Link to="/">Volver</Link>
        </div>
    )
};

export default Detail;