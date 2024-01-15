import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { categoryAction } from '../../../features/category/categorySlice';
import LoadingComponent from '../../LoadingComponent/LoadingComponent';
import { useFormik } from 'formik';
import * as Yup from 'yup';



const AddCategory = () => {
    //dispatch
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const [formData, setFormData] = useState("");

    //---Destructuring---
    // const {name, description, status } = formData;

    //---onchange handler----
    // const onChangeHandler = (e) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    // };

    //---onsubmit handler----
    // const onSubmitHandler = (e) => {
    //     e.preventDefault();
    //     dispatch(categoryAction({ name, description,status })); 
        
    //     //reset form data
    // setFormData({
    //     name: "",
    //     description: "",
    //     status: "",
       
    //   });
    // };

    //get data from store

    const {  isSuccess, isLoading } = useSelector((state) => state.category)
 
 
let users = [
    {
        status: "Active",
      
    },
    {
        status: "Inactive",
      
    },
    
  ]
    
//   --------------------------------------------------------------------------


const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      status: '',
      
    },
    validationSchema: Yup.object({
        name: Yup.string().required('Required Category Name'),
        description: Yup.string().required('Required Description'),    
    status: Yup.string().required('Required status'),
    }),
    onSubmit: values => {
     
    dispatch(categoryAction(values)); 
  
      // Reset the form after successful submission
      formik.resetForm();
    },
  });
    return (
        <>
            <section>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className=" cardboder">
                                <div className=" mt-5">
                                  <form onSubmit={formik.handleSubmit}>
                                    {/* onSubmit={formik.handleSubmit} */}

                                  
                                    <div className='mb-5 addhead'>
                                        <h3>Add Category</h3>
                                    </div>


                                    <div className="form-outline form-white mb-4">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder='Category Name' 
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.name}
                                        className='border px-5 p-2 w-100'
                                        />
                                        {formik.touched.name && formik.errors.name ? (
                                        <div className='text-danger'>{formik.errors.name}</div>
                                        ) : null}
                                        {/* <input 
                                         name="name"
                                         value={name}
                                         onChange={onChangeHandler}
                                        type="name" 
                                        id="typeEmailX" 
                                        placeholder='Category Name' 
                                        className="form-control form-control-lg" /> */}

                                    </div>
                                    <div className="form-outline form-white mb-4">
                                    <input
                                        type="text"
                                        id="description"
                                        name="description"
                                        placeholder='Description' 
                                        className='border px-5 p-2 w-100'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.description}
                                        />
                                        {formik.touched.description && formik.errors.description ? (
                                        <div className='text-danger'>{formik.errors.description}</div>
                                        ) : null}
                                        
                                        {/* <input 
                                         name="description"
                                         value={description}
                                         onChange={onChangeHandler}
                                        type="description" 
                                        id="typeEmailX" 
                                        placeholder='Description' 
                                        className="form-control form-control-lg" /> */}
                                        
                                    </div>
                                    
                                    <div className="form-outline form-white mb-4">
                                    <select
                                        id="status"
                                        name="status"
                                        className='border px-5 p-2 w-100'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.status}
                                        >
                                            <option>select option.....</option> 
                                            {users?.map((item) => (
                                            <>                                                                                                                              
                                            <option  key={item}>{item.status}</option>
                                            </>
                                           
                                            ))}
                                        
                                        </select>
                                        {formik.touched.status && formik.errors.status ? (
                                        <div className='text-danger'>{formik.errors.status}</div>
                                        ) : null}
                                         {/* <select
                                         name="status"
                                         value={status}
                                         onChange={onChangeHandler} 
                                         id="inputState" 
                                         className="form-select">
                                            <option>select option.....</option> 
                                            {users?.map((item) => (
                                            <>                                                                                                                              
                                            <option  key={item}>{item.status}</option>
                                            </>
                                           
                                            ))}
                                            
                                        </select> */}
                                       
                                    </div>

                                    <div className="d-grid gap-2 mb-2">
                                        
                                        {isLoading ? (
                                                 <LoadingComponent/>
                                               ) : (                                                
                                                <button className="p-2 buttonrest" type="submit">Add Category</button>
                                               )} 
                                    </div>
                                   </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
        
    )
}

export default AddCategory