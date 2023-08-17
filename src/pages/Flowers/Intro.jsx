



import { Breadcrumb } from 'antd';
import { Link } from "react-router-dom";
import "./style.scss";
import { Carousel } from 'antd';

const Intro = () => {
    return (
        <section className="pt-[40px] pb-[47px]">
            <div className="container">
            <div className='mb-5'>
                <Breadcrumb
                    items={[
                        {
                            title: <Link to="/">Home</Link>
                        },
                        {
                            title: 'Flowers',
                        }
                    ]}
                />

            </div>
            <div className="mb-[40px]">
                <Carousel autoplay>
                    <div className="intro-slider h-[220px] py-[40px] px-[80px]">
                        <h2 className="intro-slider__title font-medium text-[28px]">40% OFF</h2>
                        <p className="font-medium text-[18px] mb-6">Best deals this week. Fresh flowers, plants and gifts</p>
                        <button className="intro-slider__btn pr-[54px] text-white bg-[#595CFF] active:bg-black py-[16px] px-[17px] font-medium text-[14px] flex items-center gap-x-2 rounded-md">Shop now </button>
                    </div>
                    <div className="intro-slider h-[220px] py-[40px] px-[80px]">
                        <h2 className="intro-slider__title font-medium text-[28px]">40% OFF</h2>
                        <p className="font-medium text-[18px] mb-6">Best deals this week. Fresh flowers, plants and gifts</p>
                        <button className="intro-slider__btn pr-[54px] text-white bg-[#595CFF] active:bg-black py-[16px] px-[17px] font-medium text-[14px] flex items-center gap-x-2 rounded-md">Shop now </button>
                    </div>
                    <div className="intro-slider h-[220px] py-[40px] px-[80px]">
                        <h2 className="intro-slider__title font-medium text-[28px]">40% OFF</h2>
                        <p className="font-medium text-[18px] mb-6">Best deals this week. Fresh flowers, plants and gifts</p>
                        <button className="intro-slider__btn pr-[54px] text-white bg-[#595CFF] active:bg-black py-[16px] px-[17px] font-medium text-[14px] flex items-center gap-x-2 rounded-md">Shop now </button>
                    </div>
                </Carousel>
            </div>
            <div className="flex items-center justify-between">
                <div className="intro-card w-[560px] h-[221px] pl-[80px] pt-[46px]">
                    <h4 className="intro-card__title text-[28px] font-medium">Nice little gifts</h4>
                    <p className="intro-card__text text-[18px] font-medium mb-[5px]">for loved ones</p>
                    <button className="duration-200 intro-card__btn text-[14px] py-[10px] pl-[10px] pr-[50px] border-[2px] hover:border-[#595CFF]">View now</button>
                </div>
                
                <div className="intro-card w-[560px] h-[221px] pl-[80px] pt-[46px]">
                    <h4 className="intro-card__title text-[28px] font-medium">Nice little gifts</h4>
                    <p className="intro-card__text text-[18px] font-medium mb-[5px]">for loved ones</p>
                    <button className="duration-200 intro-card__btn text-[14px] py-[10px] pl-[10px] pr-[50px] border-[2px] hover:border-[#595CFF]">View now</button>
                </div>

            </div>
            </div>
        </section>
    );
};

export default Intro;