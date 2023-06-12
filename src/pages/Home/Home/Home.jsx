import React from 'react';
import Trending from '../../../components/Trending';
import ChocoLover from '../ChocoLover/ChocoLover';
import ChocoInside from '../Chocolnside.jsx/ChocoInside';
import ChocolateGance from '../ChocolateGance/ChocolateGance';

const Home = () => {
    return (
        <div className='bg-slate-50'>
            <ChocolateGance></ChocolateGance>
            <ChocoLover></ChocoLover>
            <ChocoInside></ChocoInside>
        </div>
    );
};

export default Home;