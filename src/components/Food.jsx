import React, { useState } from "react";
import {categories, data} from '../data/data'

const Food = () => {
    const [foods, setFoods] = useState(data);

// Filter Type burgers/pizza/salads

    const filterType = (category) => {
        setFoods(
            data.filter((item) => {
                return item.category === category;
            })
        );
    };

// Filter by price
    const filterPrice = (price) => {
        setFoods(
            data.filter((item) => {
                return item.price === price;
            })
        );
    };

    return (
        <div className="max-w-[1640px] m-auto px-4 py-12">
            <h1 className="text-orange-600 font-bold text-4xl text-center">Top Rated Menu Items</h1>

            {/* Filter Row */}
            <div className="flex flex-col lg:flex-row justify-between py-6">
                {/* Filter Type */}
                <div>
                    <p className="text-bold text-gray-700">Filter Type</p>
                    <div className="flex gap-4 flex-wrap">
                        <button onClick={() => setFoods(data)} className="m-1 border-orange-600 text-orange-600 transition-all duration-500 hover:bg-orange-600 hover:text-white">All</button>
                        <button onClick={() => filterType('burger')} className="m-1 border-orange-600 text-orange-600 transition-all duration-500 hover:bg-orange-600 hover:text-white">Burgers</button>
                        <button onClick={() => filterType('pizza')} className="m-1 border-orange-600 text-orange-600 transition-all duration-500 hover:bg-orange-600 hover:text-white">Pizza</button>
                        <button onClick={() => filterType('salad')} className="m-1 border-orange-600 text-orange-600 transition-all duration-500 hover:bg-orange-600 hover:text-white">Salads</button>
                        <button onClick={() => filterType('chicken')} className="m-1 border-orange-600 text-orange-600 transition-all duration-500 hover:bg-orange-600 hover:text-white">Chicken</button>
                    </div>
                </div>
                {/* Filter Price */}
                <div>
                    <p className="text-bold text-gray-700">Filter Price</p>
                    <div className="flex gap-4 flex-wrap">
                        <button onClick={() => filterPrice('$')} className="m-1 border-gray-600  transition-all duration-500 hover:bg-gray-600 hover:text-white">$</button>
                        <button onClick={() => filterPrice('$$')} className="m-1 border-gray-600  transition-all duration-500 hover:bg-gray-600 hover:text-white">$$</button>
                        <button onClick={() => filterPrice('$$$')} className="m-1 border-gray-600  transition-all duration-500 hover:bg-gray-600 hover:text-white">$$$</button>
                        <button onClick={() => filterPrice('$$$$')} className="m-1 border-gray-600  transition-all duration-500 hover:bg-gray-600 hover:text-white">$$$$</button>
                    </div>
                </div>
            </div>
            
            {/* Display foods */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-6">
                {foods.map((item, index) => (
                    <div key={index} className="border shadow-lg rounded-lg transition-all duration-300 hover:scale-105 hover:cursor-pointer"> 
                        <img className="max-h-[200px] w-full object-cover rounded-t-lg"  src={item.image} alt={item.name}/>
                        <div className="flex justify-between items-center px-2 py-4">
                            <p className="font.bold">{item.name}</p>
                            <p>
                                <span className="bg-orange-500 text-white p-[6px] rounded-full">{item.price}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Food;