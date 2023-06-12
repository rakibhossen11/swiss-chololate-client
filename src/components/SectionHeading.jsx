import React from 'react';

const SectionHeading = ({heading,subHeading}) => {
    return (
        <section>
            <p className='uppercase text-center font-bold text-zinc-300'>{subHeading}</p>
            <h2 className='uppercase text-center text-zinc-500 text-6xl font-light pb-15'>{heading}</h2>
        </section>
    );
};

export default SectionHeading;