import React from 'react';

const TopRated = () => {
    return (
        <div className=' mt-10 mb-8'>
            <h2 className=' text-5xl text-purple-700 font-semibold'>Tope rated Service !!</h2>
            <div className="hero min-h-screen rounded-lg bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="max-w-sm rounded-lg shadow-2xl" >
                        <img src="https://images.unsplash.com/photo-1631642386603-5618fa038ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFuZGFyYmFuJTJDJTIwYmFuZ2xhZGVzaHxlbnwwfHwwfHw%3D&w=1000&q=80" alt='' className="max-w-sm rounded-lg shadow-2xl"  />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">Bandarban Tour By Jovan</h1>
                        <p className="py-6">Bandarban is located in the south-eastern part of Bangladesh on the Chittagong division. Important to realize, among the three Chittagong Hill Tracks districts, Bandarban is one of them. In addition, it is the most beautiful and picturesque place in Bangladesh. It is one of the attractive travel destinations is just 77 km away from the Chittagong city. In Bandarban, the most beautiful tourist spots are Boga Lake, Chimbuk Hill and Tribal Villages,  Buddha Dhatu Jadi, Keokradong, Nilachal Tourist Spot, Mirinja Parjatan, Meghla Tourist Spot, Nafakhum and Remakri, Nilgiri and Thanchi, Rijuk Waterfall, Prantik Lake, Sangu River, Tajingdong, Shoilo Propat, and Upabon Parjatan.</p>
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopRated;