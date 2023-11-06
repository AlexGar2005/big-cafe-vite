import React from "react";

const HeadlineCards = () => {
    return (
        <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
            {/* Card */}
            <div className="rounded-xl relative">
                {/* Overlay */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                    <p className="font-bold text-2xl px-2 pt-6">Sun's Out, BOGO's Out</p>
                    <p className="px-2">Through 8/26</p>
                    <button className="border-white bg-white text-black font-bold mx-2 absolute bottom-4 rounded-xl py-2 px-4 transition-all duration-300 hover:bg-black hover:text-white">Order Now</button>
                </div>
                <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
            </div>

            {/* Card */}
            <div className="rounded-xl relative">
                {/* Overlay */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                    <p className="font-bold text-2xl px-2 pt-6">New Restaurants</p>
                    <p className="px-2">Added Daily</p>
                    <button className="border-white bg-white text-black font-bold mx-2 absolute bottom-4 rounded-xl py-2 px-4 transition-all duration-300 hover:bg-black hover:text-white">Order Now</button>
                </div>
                <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
            </div>

            {/* Card */}
            <div className="rounded-xl relative">
                {/* Overlay */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                    <p className="font-bold text-2xl px-2 pt-6">We Deliver Desserts Too</p>
                    <p className="px-2">Tastey Treats</p>
                    <button className="border-white bg-white text-black font-bold mx-2 absolute bottom-4 rounded-xl py-2 px-4 transition-all duration-300 hover:bg-black hover:text-white">Order Now</button>
                </div>
                <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/7828569/pexels-photo-7828569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
            </div>
        </div>
    );
}

export default HeadlineCards;