import React from 'react'
import Hero from '../Components/Hero'
import Featured from '../Components/Featured'
import ProductsCollection from '../Components/ProductsCollection'

const Home = () => {
    return (
        <div id='home'>
            <Hero />
            <Featured />
            <ProductsCollection/>
        </div>
    )
}

export default Home;
