


import { Breadcrumb } from 'antd';
import { Link } from "react-router-dom";
import { plants } from "../../service/db";
import "./style.scss";


import Card from "../../components/UI/Card/Card";

import { DownOutlined} from '@ant-design/icons';
import { Dropdown} from 'antd';
const items = [
    {
        key: '1',
        label: (
            <a href="#">
                Item1
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a href="#">
                Item2
            </a>
        ),
    }
];
const index = () => {
    return (
        <section className="pt-[152px] pb-[100px]">
            <div className="container">
                <div className='flex flex-col'>
                    <div className='mb-5'>
                        <Breadcrumb
                            items={[
                                {
                                    title: <Link to="/">Home</Link>
                                },
                                {
                                    title: 'Plants',
                                }
                            ]}
                        />

                    </div>
                    <h1 className='text-[32px] font-["InterMedium"] mb-10'>All Plants</h1>
                    <div className='plants-dropdowns flex items-center justify-between py-5 mb-10'>
                        <div className='flex gap-x-[80px]'>

                            <Dropdown menu={{ items,}} trigger={['click']}>
                                <a className='flex items-center gap-x-1 text-[14px] cursor-pointer p-2 rounded-md hover:bg-blue-200'>
                                    Sort by
                                    <DownOutlined />
                                </a>
                            </Dropdown>
                            <Dropdown menu={{ items,}} trigger={['click']}>
                                <a className='flex items-center gap-x-1 text-[14px] cursor-pointer p-2 rounded-md hover:bg-blue-200'>
                                    Color
                                    <DownOutlined />
                                </a>
                            </Dropdown>
                            <Dropdown menu={{ items,}} trigger={['click']}>
                                <a className='flex items-center gap-x-1 text-[14px] cursor-pointer p-2 rounded-md hover:bg-blue-200'>
                                    Price
                                    <DownOutlined />
                                </a>
                            </Dropdown>
                            <Dropdown menu={{ items,}} trigger={['click']}>
                                <a className='flex items-center gap-x-1 text-[14px] cursor-pointer p-2 rounded-md hover:bg-blue-200'>
                                    Flower type
                                    <DownOutlined />
                                </a>
                            </Dropdown>
                            <Dropdown menu={{ items,}} trigger={['click']}>
                                <a className='flex items-center gap-x-1 text-[14px] cursor-pointer p-2 rounded-md hover:bg-blue-200'>
                                    Occasion
                                    <DownOutlined />
                                </a>
                            </Dropdown>
                        </div>
                        <div className='text-[16px]'>
                            <span className='me-[5px]'>{plants.length}</span>
                            items
                        </div>
                    </div>
                    <div className='grid grid-cols-4 gap-y-10 place-items-center mb-[54px]'>
                        {
                            plants?.map((item) => {
                                return <Card key={item.id} case={item} />
                            })
                        }
                    </div>

                    <button className='hover:bg-transparent hover:text-black border hover:border-black duration-200 bg-black text-white text-[14px] font-["InterMedium"] py-[15px] px-[80px] mx-auto'>See more</button>
                </div>
            </div>
        </section>
    );
};

export default index;