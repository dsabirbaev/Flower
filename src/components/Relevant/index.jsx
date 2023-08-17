


import React from 'react';
import arrowGrey from "../../assets/icons/arrow-grey.svg";
import arrowBlack from "../../assets/icons/arrow-black.svg";
import {relevant} from "../../service/db";

import Card from "../UI/Card/Card";
const index = () => {

    
    return (
        <section className='pt-[93px] pb-[100px]'>
            <div className='container'>
                <div className='flex items-center justify-between mb-[44px]'>
                    <h2 className='text-[24px] font-["InterMedium"]'>Relevant</h2>
                    <div className='flex items-center gap-x-2'>
                        <img src={arrowGrey} alt="arrow"/>
                        <img src={arrowBlack} alt="arrow"/>
                    </div>
                </div>
                <div className='grid grid-cols-4'>
                    {
                        relevant?.map(item => {
                            return <Card key={item.id} case={item}/>
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default index;