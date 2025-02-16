import oneRemovalist from "../../../public/animations/moving-house-services.svg";
import twoRemovalists from "../../../public/animations/movers-picking-up-sofa.svg";
import Image from 'next/image';

export default function PricingSection() {
    return (
        <section className="min-h-screen grid lg:grid-flow-col gap-4">
            <div className="title-pricing col-span-2 flex flex-col justify-center">
                <h1>Simple pricing</h1>
                <h2 className="no-space-h3">No hidden fees. No surprises</h2>
                <p>Pay only for the time we spend moving your belongings. Time starts and end at our depot in Blackburn South</p>
            </div>
            <div className="pricing-cards flex flex-col justify-center gap-8">
                <div className="card-hourly-rate-blue">
                    <h3 className="text-center">One Removalist</h3>
                    <Image className="h-56" src={oneRemovalist} alt="cheap house removalist packing a house in Melbourne"/>
                    <h1 className="text-center">$95/hour</h1>
                    <p className="text-center">It might require assistance from your at pick up and drop off locations</p>
                </div>
                <div className="card-hourly-rate-yellow">
                    <h3 className="text-center">Two Removalists</h3>
                    <Image className="h-56" src={twoRemovalists} alt="best high-quality Melbourne removalists doing a same-day job"/>
                    <h1 className="text-center">$145/hour</h1>
                    <p className="text-center">Enjoy from a full hands-off removalist experience</p>
                </div>
            </div>
        </section>
    )
}