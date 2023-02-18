import React from 'react';
import axios from 'axios';
import { Field, Formik, Form } from 'formik';
import * as Yup from 'yup';

const ProductForm = () => {
    const initialValues= {
        title: '', 
        price: '', 
        description: ''
    };

    const productError= Yup.object().shape({
        title: Yup.string()
            .min(3, "Title must be at least 3 characters.")
            .max(50, "Title should not be longer than 50 characters.")
            .required("Title is required"),
        price: Yup.number()
            .integer("Price must be an integer")
            .positive("Price should not be a negative number")
            .required("Price is required"),
        description: Yup.string()
            .min(10, "Description must be at least 10 characters.")
            .max(200, "Description should not be longer than 200 characters.")
            .required("Description is required"),
    });

    const onSubmitHandler= async (values, actions) =>{
        try {
            const res= await axios.post("http://localhost:8000/api/product", values)
            console.log(res);
            actions.resetForm(initialValues);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            onSubmit={onSubmitHandler}
            validationSchema={productError}
        >
        {({errors, touched, isValid, dirty}) => (
            <Form>
                <h3 className='d-flex justify-content-center'>Product Manager</h3>
                <div className='d-flex p-2 bg-secondary bg-opacity-10 rounded mb-2'>
                    <label htmlFor='title' className='m-2'>Title</label>
                    <Field name="title" className="form-control" />
                </div>
                {touched.title && errors.title && <p className="ms-5 text-danger">* {errors.title}</p>}
                <div className='d-flex p-2 bg-secondary bg-opacity-10 rounded mb-2'>
                    <label htmlFor='price' className='m-2'>Price</label>
                    <Field name="price" type="number" className="form-control" />
                </div>
                {touched.price && errors.price && <p className="ms-5 text-danger">* {errors.price}</p>}
                <div className='d-flex p-2 bg-secondary bg-opacity-10 rounded'>
                    <label htmlFor='description' className='m-2'>Description</label>
                    <Field name="description" className="form-control" />
                </div>
                {touched.description && errors.description && <p className="ms-5 text-danger">* {errors.description}</p>}
                <div className='d-flex justify-content-center w-100'>
                    <button type='submit' className="btn btn-secondary mt-3 w-50" disabled={!(isValid && dirty)}>Create</button>
                </div>
            </Form>
        )}
        </Formik>
    )
};

export default ProductForm