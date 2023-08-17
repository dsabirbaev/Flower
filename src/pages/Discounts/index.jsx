

import { Breadcrumb } from 'antd';
import { Link } from "react-router-dom";
import "./style.scss";

const index = () => {
    return (
        <section>
            <div className="container">
                <div className='mb-5'>
                    <Breadcrumb
                        items={[
                            {
                                title: <Link to="/">Home</Link>
                            },
                            {
                                title: 'Discounts',
                            }
                        ]}
                    />

                </div>
                <h1 className="text-center text-[32px] font-bold mb-10 underline">Discounts</h1>
                <p className='mb-5'>
                    <strong>Featured Discounts:</strong> Highlight your current and most attractive discounts. Provide details about the percentage off, specific products included, and any limitations or expiration dates.
                </p>
                <p className='mb-5'>
                    <strong>Limited-Time Offers:</strong> Create a sense of urgency by showcasing time-sensitive deals. Use phrases like "Hurry, offer ends soon!" or "Limited stock available at this price!" to encourage immediate action.     
                </p>
                <p className='mb-5'>
                    <strong>Promo Codes:</strong> If you use promo codes for discounts, list them prominently with instructions on how customers can apply them during checkout.
                </p>
                <p>
                    <strong>Bundle Deals:</strong> Showcase discounted bundles or packages that offer a greater value when multiple items are purchased together. Explain the benefits of these bundles and how customers can save by choosing them.
                </p>
            </div>
        </section>
    );
};

export default index;