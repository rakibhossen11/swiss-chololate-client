import React from 'react';
import SectionHeading from '../../../components/SectionHeading';
import SectionElement from '../../../components/SectionElement/SectionElement';
import img_1 from '../../../assets/chocolover/img_1.png';
import img_2 from '../../../assets/chocolover/img_2.png';
import img_3 from '../../../assets/chocolover/img_3.png';

const ChocoLover = () => {
    return (
        <div>
            <SectionHeading
            subHeading={"CHOCO LOVER"}
            heading={"SWEETNESS FOR SPECIAL DAYS"}
            ></SectionHeading>
            <div className='grid grid-cols-3'>
            <SectionElement
            img={img_1}
            title={"Confectioneries"}
            details={"Lorem ipsum dolor sit amet, accommo dare adipiscing elit, sed do eiusmod tempor incididunt utlabore et."}
            ></SectionElement>
            <SectionElement
            img={img_2}
            title={"Celebrations"}
            details={"Lorem ipsum dolor sit amet, accommo dare adipiscing elit, sed do eiusmod tempor incididunt utlabore et."}
            ></SectionElement>
            <SectionElement
            img={img_3}
            title={"100% Chocolate"}
            details={"Lorem ipsum dolor sit amet, accommo dare adipiscing elit, sed do eiusmod tempor incididunt utlabore et."}
            ></SectionElement>
            </div>
        </div>
    );
};

export default ChocoLover;