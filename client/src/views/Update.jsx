import React, { useEffect, useState } from 'react'
import axios from 'axios';
import FormDef from '../components/FormDef';
import { useNavigate, useParams } from 'react-router-dom';

const Update= () => {
    const navigate= useNavigate();

    const { id } = useParams();
    const initialValues= {
        title: '', 
        price: '', 
        description: ''
    };
    const [product, setProduct] = useState(initialValues);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                setProduct(res.data)
            })
    }, [id])

    const updateProduct = (values, actions) => {
        axios.put(`http://localhost:8000/api/product/${id}`, values)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        navigate('/');
    }
    return (
        <div className='col-4 p-3 m-auto'>
            <h1 className='d-flex justify-content-center'>Update a Product</h1>
            <FormDef initialValues={product} buttonText="Update" onSubmit={updateProduct} />
        </div>
    )
}

export default Update;