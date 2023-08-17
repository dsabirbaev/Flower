


import { Breadcrumb } from 'antd';
import { Link } from "react-router-dom";

import "./style.scss";

const index = () => {
    return (
        <section className='py-[152px]'>
            <div className="container">
                <div className='mb-5'>
                    <Breadcrumb
                        items={[
                            {
                                title: <Link to="/">Home</Link>
                            },
                            {
                                title: 'About us',
                            }
                        ]}
                    />

                </div>
                <h1 className='text-[32px] font-bold text-center mb-5'>Welcome to Flower web page!</h1>
                <p className='mb-5'>
                    At Flower, we have a deep-rooted passion for all things floral. Our journey began with a single bud, and over the years, it has blossomed into a full-fledged commitment to bringing the beauty and elegance of nature's finest creations to your doorstep.
                </p>
                <p className='mb-5'>
                    <strong className='block'>Our Story:</strong>
                    Founded in 2020, Flower was born out of a love for flowers and a desire to share that love with the world. What started as a small venture quickly grew into a beloved destination for flower enthusiasts and those seeking to add a touch of nature's charm to their lives.
                </p>
                <p className='mb-5'>
                    <strong className='block'>Why Choose Us?</strong>
                    Here at Flower web page, we pride ourselves on our exquisite selection of flowers, carefully curated to capture the essence of every season. Whether you're celebrating a joyful occasion, expressing heartfelt emotions, or simply brightening up your space, our diverse range of blooms has something to offer for every moment.
                </p>
                <div>
                    <p className='font-semibold mb-2'>Contact us:</p>
                    <div className="flex gap-x-[10px] text-[25px] duration-200 cursor-pointer">
                        <i className='bx bxl-instagram text-red-[#E1306C]'></i>
                        <i className='bx bxl-whatsapp text-[#25D366]'></i>
                        <i className='bx bxl-facebook text-[#4267B2]'></i>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default index;