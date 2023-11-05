import React from 'react'
import CollectionCard from './CollectionCard';

const Collection = (props) => {
    return (
        <div>
            <section>
                <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
                    <header>
                        <h2 className="text-xl text-center font-bold text-gray-900 sm:text-3xl">
                            {props.name} Collection
                        </h2>
                    </header>

                    <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
                        {props.data.map(d=><CollectionCard key={d.id} name={d.name} price={d.price} />)}
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Collection
