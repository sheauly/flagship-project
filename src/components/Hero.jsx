import React from 'react';
import bannerImg from '../assets/banner.png'


const Hero = () => {
    return (
        <div className=''>
            <img className='
            w-full mx-auto md:max-w-md' src={bannerImg} alt="Banner Image" />
            <div className='text-center space-y-4 '>
                <h1 className='text-5xl font-thin text-gray-700'>Brouse, Search, View, Buy</h1>
                <p className='text-gray-500'>Best place to browse, search, view, details and purchage of top  <br /> flagship of phones of the current time - flagshipFaceoff</p>
                <form className="flex flex-col md:flex-row justify-center items-center mb-4 ">
                    <input type="text" name="" placeholder='Search phone by name' className='bg-white border border-gray-300 rounded shadow-md w-2/3 h-12 px-5 focus:outline-none focus:shadow-outline md:mr-2 md:mb-0 mb-4' />
                    
                     <button type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 cursor-pointer">Search</button>
                </form>
            </div>
        </div>
    );
};

export default Hero;