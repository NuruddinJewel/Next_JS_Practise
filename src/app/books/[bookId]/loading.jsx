import React from 'react';

const BookLoading = () => {
    return (
        <div className='flex justify-center items-center'>
            <h2>Loading Book Details....</h2>
            <span className="loading loading-bars loading-md"></span>
        </div>
    );
};

export default BookLoading;