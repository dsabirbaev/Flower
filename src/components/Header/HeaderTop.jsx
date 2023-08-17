



const HeaderTop = () => {
    return (
        <div className="flex items-center justify-between h-[52px]">
            <div className="flex items-center gap-x-[5px] hover:opacity-[0.6] cursor-pointer">
                <i className='bx bxs-map'></i>
                <span className="font-medium text-[14px]">Tashkent</span>
            </div>
            <div className="flex gap-x-[8px] text-[22px] cursor-pointer duration-200">
                <span className="w-[32px] h-[32px] hover:bg-slate-100 rounded-full flex items-center justify-center"><i className='bx bx-search'></i></span>
                <span className="w-[32px] h-[32px] hover:bg-slate-100 rounded-full flex items-center justify-center"><i className='bx bx-cart-alt'></i></span>
            </div>
        </div>
    );
};

export default HeaderTop;