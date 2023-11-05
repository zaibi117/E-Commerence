import React from 'react'
import Collection from './Collection'

const Explore = () => {
    const blankets=[
        {
            id:1,
            img:"",
            name:"Camel Blankets",
            price:"1200",
        },
        {
            id:2,
            img:"",
            name:"Camel Blankets",
            price:"1200",
        },
        {
            id:3,
            img:"",
            name:"Camel Blankets",
            price:"1200",
        },
        {
            id:4,
            img:"",
            name:"Camel Blankets",
            price:"1200",
        }
    ]
    return (
        <>
            <Collection name={"Blanket"} data={blankets}/>
            <Collection name={"Velvet"} data={blankets}/>
            <Collection name={"BedSheet"} data={blankets}/>
            <Collection name={"Praying Mats"} data={blankets}/>
        </>
    )
}

export default Explore
