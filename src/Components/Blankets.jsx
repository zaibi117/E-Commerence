import React, { useState } from 'react'
import ProductCard from './ProductCard'

const Blankets = (props) => {


    const [search, setSearch] = useState("");


    const handleSearch = (e) => {
        return setSearch(e.target.value);
    }


    const filteredData = props.data.filter(item => {
        if (item.title.toLowerCase().includes(search.toLowerCase())) {
            return true;
        }
        return false;
    })

    const Data = filteredData.map(item => <ProductCard key={item.id} title={item.title} price={item.price} discount={item.discount} />)

    const handleSelect = (e) => {
        console.log('Hello world!')
        console.log(e.target.innerHTML)
    }
    return (
        <>
            <div className='flex items-center justify-center my-4'>
                <input className="input input-bordered input-primary w-full max-w-xs" placeholder="Search" onChange={handleSearch} value={search} />
            </div>

            <div className='grid grid-cols-1 gap-8 my-8 lg:grid-cols-3 md:grid-cols-2'>
                {Data.length === 0 ? <h1 className='text-2xl text-center w-full'>Item not Found</h1> : Data}
            </div>
        </>
    )
}

export default Blankets
