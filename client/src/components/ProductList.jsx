import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductList = props => {
    const { removeFromDom, product } = props;

    const deletePerson = productId => {
        axios.delete(`http://localhost:8000/api/product/${productId}`)
            .then(res => {
                removeFromDom(productId)
            })
    }

    return (
        <>
            <h1 className='d-flex justify-content-center'>All Products:</h1>
            <table className="table m-auto table-striped" style={{width: "35rem"}}>
                <tbody>
                    {product.map((product, idx) =>
                        <tr key={idx}>
                            <td><Link to={`/product/${product._id}`} className="m-5">{product.title}</Link></td>
                            <td><button onClick={e => deletePerson(product._id)} className="btn btn-danger p-1">Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}

export default ProductList