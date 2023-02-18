import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Detail = () => {
    const navigate= useNavigate();
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
    }, [id])

    const deleteProduct = productId => {
        axios.delete(`http://localhost:8000/api/product/${productId}`)
        navigate('/');
    }


    return (
        <div className='d-flex flex-column align-items-center justify-content-center' style={{height: "100vh"}}>
            <h1>{product?.title}</h1>
            <p>Price: ${product?.price}</p>
            <p>Description: {product?.description}</p>
            <button onClick={e => deleteProduct(product._id)} className="btn btn-danger p-1">Delete</button>
            <Link className='m-3' to={`/product/${id}/edit`}>Edit</Link>
            <Link to="/">Volver</Link>
        </div>
    )
};

export default Detail;