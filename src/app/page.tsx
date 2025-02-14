import Header from "@/app/components/header";
import TitleSection from "@/app/components/titlesection";
import ServicesSection from "./components/servicessection";
import PricingSection from "./components/pricingsection";
import ContactSection from "./components/contactsection";
import Footer from "./components/footer";

export default function Home() {
  console.log("I am a server component");
  return (
    <>
      <Header />
      <TitleSection />
      <ServicesSection />
      <PricingSection />
      <ContactSection/>
      <Footer />
    </>
  );
}
