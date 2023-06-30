import React from 'react';

const SectionHeading = ({heading,subHeading}) => {
    return (
        <section>
            <p className='uppercase font-signika text-center text-zinc-300 mb-2'>{subHeading}</p>
            <h2 className='uppercase text-center text-zinc-500 text-6xl font-signika pb-15'>{heading}</h2>
        </section>
    );
};

export default SectionHeading;