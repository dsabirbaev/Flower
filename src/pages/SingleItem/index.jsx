

import { Breadcrumb } from 'antd';
import { useParams, Link } from "react-router-dom";
import { newflower, relevant, plants } from "../../service/db";
import "./style.scss";
import { useState } from 'react';

import minus from "../../assets/icons/minus.svg";
import plus from "../../assets/icons/plus.svg";

import free from "../../assets/icons/free.svg";
import fresh from "../../assets/icons/fresh.svg";
import photo from "../../assets/icons/photo.svg";

import arrowGrey from "../../assets/icons/arrow-grey.svg";
import arrowBlack from "../../assets/icons/arrow-black.svg";

import Card from "../../components/UI/Card/Card";

import { Collapse } from 'antd';
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const items = [
    {
        key: '1',
        label: 'Bouquet contents',
        children: <p>{text}</p>,
    },
    {
        key: '2',
        label: 'Details',
        children: <p>{text}</p>,
    },
    {
        key: '3',
        label: 'Delivery & Pay policy',
        children: <p>{text}</p>,
    },
];
const index = () => {
    const [counter, setCounter] = useState(0)


    const { id } = useParams();

    let arr = [...newflower, ...relevant, ...plants];
    let flower = arr.filter(item => item.id == id)
    
    const isLink = flower.every(item => item.path === "flowers");
    


    return (
        <section className="pt-[152px] pb-[100px]">
            <div className="container">
                <div className='mb-5'>
                    <Breadcrumb
                        items={[
                            {
                                title: <Link to="/">Home</Link>
                            },
                            {
                                title: isLink ? (<Link to="/flowers">All Flowers</Link>) : (<Link to="/plants">Plants</Link>)
                            },
                            {
                                title: `${flower.map(item => item.title)}`,
                            },
                        ]}
                    />

                </div>
                <div className='mb-[177px]'>
                    {
                        flower?.map(item => (
                            <div key={item.id} className="flex gap-x-[72px]">
                                <div>
                                    <img src={item.img} alt={item.name} className="h-[568px] w-[568px] object-cover object-center" />
                                    <div className='flex gap-[40px] mt-[20px]'>

                                        <div className='flex w-[142px] gap-[10px] items-center justify-center cursor-pointer border border-white p-2 rounded-md hover:border-slate-500 duration-200'>
                                            <img src={free} alt="" />
                                            <p className='text-[12px]'>Benefits
                                                description
                                            </p>
                                        </div>

                                        <div className='flex w-[142px] gap-[10px] items-center justify-center cursor-pointer border border-white p-2 rounded-md hover:border-slate-500 duration-200'>
                                            <img src={fresh} alt="" />
                                            <p className='text-[12px]'>
                                                Always fresh flowers
                                            </p>
                                        </div>

                                        <div className='flex w-[142px] gap-[10px] items-center justify-center cursor-pointer border border-white p-2 rounded-md hover:border-slate-500 duration-200'>
                                            <img src={photo} alt="" />
                                            <p className='text-[12px]'>
                                                Take photo of bouquet
                                            </p>
                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <h2 className='text-[24px] font-["InterMedium"] mb-5'>{item.title}</h2>
                                    <p className='text-[28px] font-["InterMedium"]'>{item.price}</p>

                                    <p className='text-[16px] mb-[25px]'>Count:</p>

                                    <div className='flex gap-7 mb-[42px] w-[30px]'>
                                        <img onClick={() => setCounter((counter) => counter + 1)} className='cursor-pointer' src={plus} alt="" />
                                        <p className='w-[20px]'>{counter}</p>
                                        <img onClick={() => setCounter((counter) => counter - 1)} className='cursor-pointer' src={minus} alt="" />
                                    </div>

                                    <p className='text-[16px] mb-[20px]'>Color:</p>

                                    <div className='flex gap-[20px] mb-[54px]'>
                                        <div className='grey w-[36px] h-[36px] bg-[#F0F0F5] rounded-full cursor-pointer'>
                                        </div>

                                        <div className='grey circle w-[36px] h-[36px] bg-[#EE7764] rounded-full cursor-pointer'>
                                        </div>

                                        <div className='grey w-[36px] h-[36px] bg-[#FFBC2C] rounded-full cursor-pointer'>
                                        </div>
                                    </div>

                                    <div className='flex gap-5 mb-[40px]'>

                                        <button className='bg-[#595CFF] w-[309px] py-[16px] text-white rounded-md hover:bg-cyan-500'>
                                            Button
                                        </button>

                                        <span className='border rounded-md h-[56px] w-[56px] flex items-center justify-center'><i className='bx bx-cart-alt text-2xl'></i></span>

                                    </div>
                                    <Collapse className='max-w-[380px]' accordion items={items} />
                                </div>
                            </div>

                        ))
                    }
                </div>
                <div>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-[24px] font-["InterMedium"] mb-[44px]'>Similar flowers</h2>
                        <div className='flex items-center gap-x-2 cursor-pointer'>
                            <img src={arrowGrey} alt="arrow" />
                            <img src={arrowBlack} alt="arrow" />
                        </div>
                    </div>

                    <div className='grid grid-cols-4'>
                        {
                            newflower?.map(item => {
                                return <Card key={item.id} case={item} />
                            })
                        }
                    </div>
                </div>


            </div>
        </section>
    );
};

export default index;