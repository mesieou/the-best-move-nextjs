import Header from "@/app/components/header";
import TitleSection from "@/app/components/titlesection";
import ServicesSection from "./components/servicessection";
import PricingSection from "./components/pricingsection";
import ContactSection from "./components/contactsection";
import Footer from "./components/footer";

export default function Home() {
  console.log("I am a server component");
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Header />
      <TitleSection />
      <ServicesSection />
      <PricingSection />
      <ContactSection/>
      <Footer />
    </div>
  );
}
