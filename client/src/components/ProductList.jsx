import React from 'react'
import { Link } from 'react-router-dom'

const ProductList = props => {
    return (
        <>
            <h1 className='d-flex justify-content-center'>All Products:</h1>
            {props.product.map((product, idx) =>
                <Link to={`/product/${product._id}`} key={idx} className='d-flex justify-content-center'>{product.title}</Link>
            )}
        </>
    )
}

export default ProductList