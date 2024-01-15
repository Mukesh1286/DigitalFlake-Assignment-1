import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import LoadingComponent from '../../LoadingComponent/LoadingComponent';
import { productAction } from '../../../features/product/productSlice';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const AddProduct = () => {
     //dispatch
     const navigate = useNavigate();
     const dispatch = useDispatch();
    //  const [formData, setFormData] = useState("");
      
     //---Destructuring---
    //  const {category, productname, packsize,price,status } = formData;
 
     //---onchange handler----
    //  const onChangeHandler = (e) => {
    //      setFormData({ ...formData, [e.target.name]: e.target.value });         
    //  };
 
     //---onsubmit handler----
    //  const onSubmitHandler = (e) => {
    //      e.preventDefault();
    //      dispatch(productAction({ category, productname, packsize,price,status }));
    //           //reset form data
    // setFormData({
    //     category: "",
    //     productname: "",
    //     packsize: "",
    //     price: "",
    //     status: "",
       
       
    //   });
    //  };
 
     //get data from store 
     const { categorys } = useSelector((state) => state.category)
     const { isSuccess, isLoading } = useSelector((state) => state.product)
    
    

 let users = [
    {
        status: "Active",
      
    },
    {
        status: "Inactive",
      
    },
    
  ]

//   -----------------------------------------------------------------------------------------

const formik = useFormik({
    initialValues: {
        category: '',
        productname: '',
        packsize: '',
        price: '',
       status: '',
   
    },
    validationSchema: Yup.object({
        category: Yup.string().required('Required Category Name'),
        productname: Yup.string().required('Required productname'),
        packsize: Yup.string().required('Required packsize'),
        price: Yup.string().required('Required price'),   
       status: Yup.string().required('Required status'),
    }),
    onSubmit: values => {
      
    dispatch(productAction(values)); 
    console.log(values)
      // Reset the form after successful submission
      formik.resetForm();
    },
  });

    return (
        <>
            <section>
                <div class="container">
                    <div class="row d-flex justify-content-center align-items-center">
                        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div class=" cardboder">
                                <div class=" mt-5">
                                     <form onSubmit={formik.handleSubmit}>
                                    <div className='mb-5 addhead'>
                                        <h3>Add Product</h3>
                                    </div>

                                    <div class="form-outline form-white mb-4">
                                    <select
                                        id="category"
                                        name="category"
                                        className='border px-5 p-2 w-100'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.category}
                                        >
                                            <option>select option.....</option> 
                                            {categorys?.map((item) => (
                                            <>                                                                                                                              
                                            <option  key={item}>{item.name}</option>
                                            </>
                                           
                                            ))}
                                        
                                        </select>
                                        {formik.touched.category && formik.errors.category ? (
                                        <div className='text-danger'>{formik.errors.category}</div>
                                        ) : null}
                                       
                                        {/* <select 
                                         name="category"
                                         value={category}
                                         onChange={onChangeHandler}
                                        id="inputState" 
                                        class="form-select">
                                             <option>select option.....</option> 
                                            {categorys?.map((item) => (
                                            <>                                                                                                                              
                                            <option key={item}>{item.name}</option>
                                            </>
                                           
                                            ))}
                                        </select> */}
                                    </div>
                                    <div class="form-outline form-white mb-4">
                                    <input
                                        type="text"
                                        id="productname"
                                        name="productname"
                                        placeholder='productname' 
                                        className='border px-5 p-2 w-100'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.productname}
                                        />
                                        {formik.touched.productname && formik.errors.productname ? (
                                        <div className='text-danger'>{formik.errors.productname}</div>
                                        ) : null}
                                        {/* <input 
                                         name="productname"
                                         value={productname}
                                         onChange={onChangeHandler}
                                        type="productname" 
                                        id="typeEmailX" 
                                        placeholder='Add product name' 
                                        class="form-control form-control-lg" /> */}

                                    </div>
                                    <div class="form-outline form-white mb-4">

                                    <input
                                        type="text"
                                        id="packsize"
                                        name="packsize"
                                        placeholder='packsize' 
                                        className='border px-5 p-2 w-100'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.packsize}
                                        />
                                        {formik.touched.packsize && formik.errors.packsize ? (
                                        <div className='text-danger'>{formik.errors.packsize}</div>
                                        ) : null}
                                        {/* <input 
                                         name="packsize"
                                         value={packsize}
                                         onChange={onChangeHandler}
                                        type="packsize" 
                                        id="typeEmailX" 
                                        placeholder='Enter Pack size' 
                                        class="form-control form-control-lg" /> */}

                                    </div>
                                    <div class="form-outline form-white mb-4">
                                    <input
                                        type="price"
                                        id="price"
                                        name="price"
                                        placeholder='price' 
                                        className='border px-5 p-2 w-100'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.price}
                                        />
                                        {formik.touched.price && formik.errors.price ? (
                                        <div className='text-danger'>{formik.errors.price}</div>
                                        ) : null}
                                        {/* <input
                                         name="price"
                                         value={price}
                                         onChange={onChangeHandler} 
                                        type="price"                                        
                                        id="typeEmailX" 
                                        placeholder='Enter price' 
                                        class="form-control form-control-lg" /> */}

                                    </div>                                   

                                    <div class="form-outline form-white mb-4"> 
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
                                        class="form-select">
                                             <option>select option.....</option> 
                                            {users?.map((item) => (
                                            <>                                                                                                                              
                                            <option  key={item}>{item.status}</option>
                                            </>
                                           
                                            ))}
                                        </select> */}
                                    </div>

                                    <div class="d-grid gap-2 mb-2">
                                       
                                        {isLoading ? (
                                                 <LoadingComponent/>
                                               ) : (                                                
                                                <button className="p-2 buttonrest" type="submit">Add Product</button>
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

export default AddProduct