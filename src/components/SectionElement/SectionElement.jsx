import React from 'react';

const SectionElement = ({img,title,details}) => {
    return (
        <section className='flex flex-col justify-center items-center p-14'>
            <img src={img} alt="" />
            <h3 className='font-bold text-zinc-800 mt-10 mb-6 text-center'>{title}</h3>
            <p className='text-center text-zinc-400 font-semibold'>{details}</p>
        </section>
    );
};

export default SectionElement;