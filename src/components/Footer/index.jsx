
import "./style.scss";

const index = () => {
    return (
        <footer className="bg-[#F9F9FB] pt-[58px]">
            <div className="container">
                <div className="flex justify-between mb-[60px]">
                    <div className="flex flex-col gap-y-[18px] duration-200">
                        <h2 className="text-[16px] hover:font-bold">Title</h2>
                        <a className="text-[12px] font-['InterMedium'] hover:font-bold" href="tel: +998991234567">+998991234567</a>
                        <div className="flex gap-x-[10px] text-[20px] duration-200 cursor-pointer">
                            <i className='bx bxl-instagram hover:text-[#E1306C]'></i>
                            <i className='bx bxl-whatsapp hover:text-[#25D366]'></i>
                            <i className='bx bxl-facebook hover:text-[#4267B2]'></i>
                        </div>
                    </div>
                    <ul className="flex flex-col text-[14px] font-['InterMedium'] gap-y-[5px] duration-200">
                        <li className="text-[16px] font-normal hover:font-black"><a href="#">Help</a></li>
                        <li className="hover:font-black"><a href="#">Contact us</a></li>
                        <li className="hover:font-black"><a href="#">Delivery information</a></li>
                        <li className="hover:font-black"><a href="#">Payment information</a></li>
                        <li className="hover:font-black"><a href="#">Customer service</a></li>
                        <li className="hover:font-black"><a href="#">FAQ</a></li>
                    </ul>
                    <ul className="flex flex-col text-[14px] font-['InterMedium'] gap-y-[5px] duration-200">
                        <li className="text-[16px] font-normal hover:font-black"><a href="#">About us</a></li>
                        <li className="hover:font-black"><a href="#">Our Stores</a></li>
                        <li className="hover:font-black"><a href="#">Flower care</a></li>
                        <li className="hover:font-black"><a href="#">Site map</a></li>
                       
                    </ul>
                    <ul className="flex flex-col text-[14px] font-['InterMedium'] gap-y-[5px] duration-200">
                        <li className="hover:font-black text-[16px] font-normal"><a href="#">Legal</a></li>
                        <li className="hover:font-black"><a href="#">Privacy policy</a></li>
                        <li className="hover:font-black"><a href="#">Terms & Conditions</a></li>
                        <li className="hover:font-black"><a href="#">Cookie policy</a></li>
                        <li className="hover:font-black"><a href="#">Item 4</a></li>
                        <li className="hover:font-black"><a href="#">Item 5</a></li>
                    </ul>
                </div>
                <div className="footer-copyright pt-5">
                    <p className="text-[12px] text-[#AFB1BD]">© Copyright,  SERIUS </p>
                </div>
            </div>
        </footer>
    );
};

export default index;