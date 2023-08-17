
import { Breadcrumb } from 'antd';
import { Link } from "react-router-dom";
import "./style.scss";

const index = () => {
    return (
        <section className='py-5'>
            <div className="container">
                <div className='mb-5'>
                        <Breadcrumb
                            items={[
                                {
                                    title: <Link to="/">Home</Link>
                                },
                                {
                                    title: 'Gifts',
                                }
                            ]}
                        />

                </div>
                <h1 className="text-center text-[32px] font-bold mb-10 underline">Gifts</h1>
                <p className="mb-5">
                    <strong>Gifts That Delight:</strong> Discover a handpicked selection of exquisite gifts that are sure to bring smiles to your loved ones' faces. Whether it's a vibrant bouquet, a lush potted plant, or an elegant combination of both, our curated collection is designed to convey your heartfelt sentiments.
                </p>
                <p className="mb-5">
                    <strong>Thoughtful Gestures, Beautifully Crafted:</strong> Elevate your gift-giving experience with our range of thoughtfully crafted presents. From timeless roses that symbolize love to resilient succulents that signify growth, each gift is a meaningful expression of your emotions.
                </p>
                <p className="mb-5">
                    <strong>Occasion-Centric Selection:</strong> Celebrate life's special moments with our diverse range of gifts tailored to various occasions. Whether it's a birthday, anniversary, or a simple "thinking of you," we have the perfect botanical creations to make every occasion unforgettable.
                </p>
                <p>
                    <strong>Unveil Personalized Elegance:</strong> Enrich your gift with a personal touch by customizing your arrangement. Handpick your favorite blooms or plants, add a heartfelt note, and create a truly personalized present that resonates with your recipient.
                </p>
            </div>
        </section>
    );
};

export default index;