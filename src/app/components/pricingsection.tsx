import oneRemovalist from "../../../public/animations/moving-house-services.svg";
import twoRemovalists from "../../../public/animations/movers-picking-up-sofa.svg";
import Image from 'next/image';

export default function PricingSection() {
    return (
        <section>
            <h1>Simple pricing</h1>
            <h2 className="no-space-h3">No hidden fees. No surprises</h2>
            <p>Pay only for the time we spend moving your belongings. Time starts and end at our depot in Blackburn South</p>
            <div className="pricing-cards">
                <div className="card-hourly-rate">
                    <h3 className="h3-centered">One Removalist</h3>
                    <Image src={oneRemovalist} alt="cheap house removalist packing a house in Melbourne"/>
                    <h1 className="hourly-rate">$95/hour</h1>
                    <p className="title-pricing-text">It might require assistance from your at pick up and drop off locations</p>
                </div>
                <div className="card-hourly-rate">
                    <h3 className="h3-centered">Two Removalists</h3>
                    <Image src={twoRemovalists} alt="best high-quality Melbourne removalists doing a same-day job"/>
                    <h1 className="hourly-rate">$145/hour</h1>
                    <p className="title-pricing-text">Enjoy from a full hands-off removalist experience</p>
                </div>
            </div>
        </section>
    )
}