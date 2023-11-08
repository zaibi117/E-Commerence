import React from 'react'
import { Link } from 'react-router-dom'

const CategoriesCard = (props) => {
    return (
        <div className="card w-72 bg-base-100 shadow-2xl mx-auto md:w-96 sm:w-80">
            <figure><img src="./public/blanket.jpg" alt="Blankets" className='h-40 object-contain w-full' /></figure>
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <p>{props.description}</p>
                <div className="card-actions justify-end">
                    <Link className="btn btn-primary text-white" to={`${props.title.toLowerCase()}`}>Visit</Link>
                </div>
            </div>
        </div>
    )
}

export default CategoriesCard
