import React from 'react'
import  useFetch from "../Data/Data";

const CategoryList = () => {
    const categories = useFetch("https://api.escuelajs.co/api/v1/categories");
    console.log(categories);
  return (
    <div className='category-list d-flex justify-content-center flex-wrap'>
        {
            categories.map((item,index)=>{
                return(
                    <button className='btn btn-outline-secondary shadow-sm border-0'>
                        {/* <img src={item.image}  alt={item.name} width={"150px"} /> */}
                        <h6>{item.name}</h6>
                    </button>
                )
            })
        }
    </div>
  )
}

export default CategoryList
