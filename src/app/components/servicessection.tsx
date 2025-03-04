import houseMoveAnimation from "../../../public/animations/house-relocation-service.svg";
import furnitureAnimation from "../../../public/animations/movers-picking-up-sofa.svg";
import businessAnimation from "../../../public/animations/relocation-service-application.svg";
import Image from "next/image";

export default function ServicesSection() {
  return (
    <section className="min-h-screen">
      <h1>High-quality services</h1>
      <h2 className="no-space-h3">
        Stree-free moving experience tailored to your needs
      </h2>
      <div className="container my-20 px-4">
        <div className="flex flex-wrap gap-20 justify-center">
          <div className="card bg-white p-4 shadow-lg rounded-lg w-1/2 sm:w-1/2 lg:w-1/4">
            <h3 className="text-xl font-bold mb-2">House moving</h3>
            <p>
              From studio apartments to large homes, we have the capacity to
              move all your belongings safely and efficiently
            </p>
            <Image
              src={houseMoveAnimation}
              alt="two removalist doing a house move in Melbourne"
            />
          </div>
          <div className="card bg-white p-4 shadow-lg rounded-lg w-1/2 sm:w-1/2 lg:w-1/4">
            <h3 className="text-xl font-bold mb-2">Furniture moving</h3>
            <p>
              Our team of experts will ensure a smooth and stress-free move to
              your delicate furniture or antique
            </p>
            <Image
              src={furnitureAnimation}
              alt="furniture removal. Melbourne removalists moving a sofa"
            />
          </div>
          <div className="card bg-white p-4 shadow-lg rounded-lg w-1/2 sm:w-1/2 lg:w-1/4">
            <h3 className="text-xl font-bold mb-2">Commercial moving</h3>
            <p>
              Our professional movers will take care of your office equipment
              and furniture, so you can focus on your business
            </p>
            <Image
              src={businessAnimation}
              alt="office removal. Melbourne removalists moving office furniture"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
