import React from 'react'
import ProductCard from './ProductCard'

const Blankets = (props) => {
    return (
        <div className='grid grid-cols-1 gap-8 my-8 lg:grid-cols-3 md:grid-cols-2'>
            {props.data.map(item => <ProductCard key={item.id} title={item.title} price={item.price} discount={item.discount} />)}
        </div>
    )
}

export default Blankets
