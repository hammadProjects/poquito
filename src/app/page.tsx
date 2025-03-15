import ContactUs from "./components/ContactUs/ContactUs";
import Curriculum from "./components/Curriculum/Curriculum";
import Gallery from "./components/Gallery/Gallery";
import Hero from "./components/Hero/Hero";
import MakeAppointment from "./components/MakeAppointment/MakeAppointment";
import ParentReviews from "./components/ParentReviews/ParentReviews";
import SpecialCare from "./components/SpecialCare/SpecialCare";
import Teachers from "./components/Teachers/Teachers";

export default function Home() {
  return (
    <main>
      <Hero />

      <MakeAppointment />

      <SpecialCare />

      <Curriculum />

      <Gallery />

      <Teachers />

      <ParentReviews />

      <ContactUs />
    </main>
  );
}
