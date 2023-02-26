import React from 'react';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const ProductList = props => {
    const { removeFromDom, product } = props;

    return (
        <>
            <h1 className='d-flex justify-content-center'>All Products:</h1>
            <table className="table m-auto table-striped" style={{width: "35rem"}}>
                <tbody>
                    {product.map((product, idx) =>
                        <tr key={idx}>
                            <td><Link to={`/product/${product._id}`} className="m-5">{product.title}</Link></td>
                            <td><DeleteButton id={product._id} removeDOM={removeFromDom} /></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}

export default ProductList