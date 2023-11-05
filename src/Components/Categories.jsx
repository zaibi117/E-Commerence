import React from 'react'
import CategoriesCard from './CategoriesCard'

const Categories = () => {
    const categories = [
        {
            id: 1,
            title: 'Blankets',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, minus enim debitis beatae dolore, laborum dolorum corporis blanditiis, deleniti ut neque dignissimos.'
        },
        {
            id: 2,
            title: 'Velvet',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, minus enim debitis beatae dolore, laborum dolorum corporis blanditiis, deleniti ut neque dignissimos.'
        },
        {
            id: 3,
            title: 'BedSheets',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, minus enim debitis beatae dolore, laborum dolorum corporis blanditiis, deleniti ut neque dignissimos.'
        },
        {
            id: 4,
            title: 'Praying Mats',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, minus enim debitis beatae dolore, laborum dolorum corporis blanditiis, deleniti ut neque dignissimos.'
        },
        {
            id: 5,
            title: 'Blankets',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, minus enim debitis beatae dolore, laborum dolorum corporis blanditiis, deleniti ut neque dignissimos.'
        },
        {
            id: 6,
            title: 'Blankets',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, minus enim debitis beatae dolore, laborum dolorum corporis blanditiis, deleniti ut neque dignissimos.'
        },
    ]
    return (
        <div className='grid grid-cols-1 gap-8 my-8 lg:grid-cols-3 md:grid-cols-2'>
            {categories.map(category => <CategoriesCard key={category.id} title={category.title} description={category.description} />)}
        </div>
    )
}

export default Categories
