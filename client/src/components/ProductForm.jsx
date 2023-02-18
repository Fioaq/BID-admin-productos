import React from 'react';
import axios from 'axios';
import FormDef from './FormDef';

const ProductForm = props => {
    const {actDom} = props;
    const initialValues= {
        title: '', 
        price: '', 
        description: ''
    };

    const onSubmitHandler= async (values, actions) =>{
        try {
            const res= await axios.post("http://localhost:8000/api/product", values)
            console.log(res);
            actions.resetForm(initialValues);
            actDom();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <FormDef initialValues={initialValues} buttonText="Create" onSubmit={onSubmitHandler} />
    )
};

export default ProductForm