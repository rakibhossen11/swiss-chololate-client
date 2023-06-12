import React from 'react';
import ChocoImg from '../../../components/ChocoImg/ChocoImg';
import img_1 from '../../../assets/chocoInside/img_1.jpg';
import img_2 from '../../../assets/chocoInside/img_2.jpg';
import img_3 from '../../../assets/chocoInside/img_3.jpg';
import img_4 from '../../../assets/chocoInside/img_4.jpg';
import img_5 from '../../../assets/chocoInside/img_5.jpg';
import img_6 from '../../../assets/chocoInside/img_6.jpg';
import ImageTitle from '../../../components/ChocoImg/ImageTitle';
import icon_1 from '../../../assets/icon/customer_icon.png';
import icon_2 from '../../../assets/icon/tag_icon.png';
import icon_3 from '../../../assets/icon/find_icon.png';

const ChocoInside = () => {
    return (
        <section className='bg-amber-50'>
            <div className='grid grid-cols-4'>
            <ChocoImg img={img_1}></ChocoImg>
            <ChocoImg img={img_2}></ChocoImg>
            <ChocoImg img={img_3}></ChocoImg>
            <ChocoImg img={img_4}></ChocoImg>
            <ChocoImg img={img_5}></ChocoImg>
            <ChocoImg img={img_3}></ChocoImg>
            <ChocoImg img={img_6}></ChocoImg>
            <ChocoImg img={img_2}></ChocoImg>
        </div>
        <div className='flex justify-around'>
            <ImageTitle img={icon_1} details={"Customer Service"}></ImageTitle>
            <ImageTitle img={icon_2} details={"Buy Chocolate Online"}></ImageTitle>
            <ImageTitle img={icon_3} details={"Find Us"}></ImageTitle>
        </div>
        </section>
    );
};

export default ChocoInside;