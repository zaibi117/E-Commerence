import React from 'react'
import img from './blanket.jpg'

const ProductCard = (props) => {
    return (
        <div className="card w-72 bg-base-100 shadow-2xl mx-auto md:w-96 sm:w-80">
            <figure><img src={img} className='h-40 object-contain w-full' alt="Blankets" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {props.title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <div className="flex flex-col justify-end">
                    <div className="badge badge-outline bg-blue-600 text-white"><span className='font-bold'>{props.discount}% </span> Discount</div> 
                    <p className='pt-[10px]'><span className='line-through'>{props.price}</span> Rs</p>
                    <p className='text-xl'><span className='font-semibold'>{props.price-(props.price*props.discount)/100}</span> Rs</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
