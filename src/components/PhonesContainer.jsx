import React, { useEffect, useState } from 'react';
import PhoneCard from './PhoneCard';

const PhonesContainer = ({ phones }) => {
    const [displayPhones, setDisplayPhones] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {

        if (showAll) {
           setDisplayPhones(phones)
        }
        else {
             setDisplayPhones(phones.slice(0, 6))
        }
    },[phones, showAll])
    
    return (
        <div className='py-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
                {
                    displayPhones.map(phone => (<PhoneCard key={phone.id} phone={phone} /> ))
            }
           
            </div>
            <button onClick={() => {
                setShowAll(prv => !prv)
                if(showAll) window.scrollTo(0,6)
            }} type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 cursor-pointer">{showAll ? 'show less' : 'show all'}</button>
        </div>
    );
};

export default PhonesContainer;