import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DeleteButton = ({ id, removeDOM }) => {
    const navigate= useNavigate();
    const deleteProduct = productId => {
        axios.delete(`http://localhost:8000/api/product/${productId}`)

            .then(res => {
                if (removeDOM) {
                    console.log(res);
                    removeDOM(productId);
                } else {
                    console.log(res);
                    navigate('/');
                }
            })
    }
    return (
        <button onClick={e => deleteProduct(id)} className="btn btn-danger p-1">Delete</button>
    )
};

export default DeleteButton;