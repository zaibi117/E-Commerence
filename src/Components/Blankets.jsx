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

    console.log(Data.length)
    return (
        <>
            <div className="join items-center justify-center w-full my-4">
                <div>
                    <div>
                        <input className="input input-bordered join-item" placeholder="Search" onChange={handleSearch} value={search} />
                    </div>
                </div>
                <select className="select select-bordered join-item">
                    <option disabled defaultChecked>Filter</option>
                    <option>Price Asc.</option>
                    <option>Price Des.</option>
                    <option>Discount Asc.</option>
                    <option>Discount Des.</option>
                </select>
                <div className="indicator">
                    <button className="btn join-item">Search</button>
                </div>
            </div>
            <div className='grid grid-cols-1 gap-8 my-8 lg:grid-cols-3 md:grid-cols-2'>
                {Data.length===0?<h1 className='text-2xl text-center w-full'>Item not Found</h1>:Data}
            </div>
        </>
    )
}

export default Blankets
