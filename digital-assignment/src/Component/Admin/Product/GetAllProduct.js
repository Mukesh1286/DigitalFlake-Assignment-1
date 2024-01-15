import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import NoDataFound from '../../NoDataFound/NoDataFound';
import LoadingComponent from '../../LoadingComponent/LoadingComponent';
import { getProductAction } from '../../../features/product/productSlice';


const GetAllProduct = () =>  {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(getProductAction())
  }, [dispatch]);

  const { products, isError, isSuccess, isLoading, message } = useSelector((state) => state?.product)
  
  const deleteProductHandler = (id) => {};

  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-3">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900 addnew">
            Product List
          </h1>
         
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <Link
          to="/admin/addProduct"
            type="button"
            class="p-2 btn1 px-4 ">
            Add New Product
          </Link>
          
        </div>
      </div>

      {isLoading ? (
        <LoadingComponent />
      ) : 
      products?.length <= 0 ? (
        <NoDataFound />
      ) : (
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                        ID
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Pack Size
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Category
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        MRP
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Edit
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Delete
                      </th>                  
                     
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                   
                    {products?.map((product) => (
                      <tr key={product._id}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                          <div className="flex items-center">                           
                            <div className="ml-4">
                              <div className="font-medium text-gray-900">
                                {product?._id}
                              </div>
                              
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <div className="text-gray-900">
                            {product?.productname}
                          </div>
                          
                        </td>
                        
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {product?.packsize}
                        </td>

                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {product?.category}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {product?.price}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {product?.status !== "Active" ? (
                           <span className='text-success'>Active</span>
                          ) : (
                             <span className='text-danger'>Inactive</span>
                          ) }
                        </td>
                        {/* edit */}
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        {product?.status !== "Active" ? (
                           <Link
                           to={`/admin/products/edit/${product._id}`}
                           className="text-indigo-600 hover:text-indigo-900">
                           <svg
                             xmlns="http://www.w3.org/2000/svg"
                             fill="none"
                             viewBox="0 0 24 24"
                             stroke-width="1.5"
                             stroke="currentColor"
                             class="w-6 h-6">
                             <path
                               stroke-linecap="round"
                               stroke-linejoin="round"
                               d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                             />
                           </svg>

                           
                         </Link>
                           
                          ) : (
                            <Link
                            style={{ cursor: "not-allowed" }}
                            // to={`/admin/products/edit/${product._id}`}
                            className="text-gray-600 hover:text-indigo-900 disable">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-6 h-6">
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                              />
                            </svg>

                            
                          </Link>
                          ) }
                          
                          
                        </td>
                        {/* delete */}
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        {product?.status !== "Active" ? (
                           
                           <button
                            onClick={() => deleteProductHandler(product._id)}
                            className="text-indigo-600 hover:text-indigo-900">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>

                           
                          </button>
                          ) : (
                            <button
                            style={{ cursor: "not-allowed" }}                            
                            className="text-gray-600 hover:text-indigo-900">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>

                           
                          </button>
                          ) }
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )} 
    </div>
  )
}

export default GetAllProduct