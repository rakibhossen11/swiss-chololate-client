import React from 'react';

const ImageTitle = ({img,details}) => {
    return (
        <div className='flex items-center py-20 mx-14'>
            <img src={img} alt="" />
            <p className='font-bold text-zinc-400 ml-2'>{details}</p>
        </div>
    );
};

export default ImageTitle;