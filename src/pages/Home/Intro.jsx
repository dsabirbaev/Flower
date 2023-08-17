

import { Carousel } from 'antd';

const Intro = () => {
    
    return (
        <section className='pt-[172px] pb-[79px]'>
            <div className="container">
               <div>
                    <Carousel>
                        <div className='home-intro-slider h-[482px] bg-blue-300 px-[100px]'>
                            <h2 className='text-[32px] font-["RobotoMedium"]'>Title</h2>
                            <p className='text-[18px] font-["InterMedium"] mb-10'>Description</p>
                            <button className="home-intro-slider__btn pr-[54px] text-white bg-[#595CFF] active:bg-black py-[16px] px-[17px] font-medium text-[14px] flex items-center gap-x-2 rounded-md">Shop now </button>
                        </div>
                        <div className='home-intro-slider h-[482px] bg-blue-300 px-[100px]'>
                            <h2 className='text-[32px] font-["RobotoMedium"]'>Title</h2>
                            <p className='text-[18px] font-["InterMedium"] mb-10'>Description</p>
                            <button className="home-intro-slider__btn pr-[54px] text-white bg-[#595CFF] active:bg-black py-[16px] px-[17px] font-medium text-[14px] flex items-center gap-x-2 rounded-md">Shop now </button>
                        </div>
                        <div className='home-intro-slider h-[482px] bg-blue-300 px-[100px]'>
                            <h2 className='text-[32px] font-["RobotoMedium"]'>Title</h2>
                            <p className='text-[18px] font-["InterMedium"] mb-10'>Description</p>
                            <button className="home-intro-slider__btn pr-[54px] text-white bg-[#595CFF] active:bg-black py-[16px] px-[17px] font-medium text-[14px] flex items-center gap-x-2 rounded-md">Shop now </button>
                        </div>
                    </Carousel>
               </div>
                
            </div>
        </section>
    );
};

export default Intro;