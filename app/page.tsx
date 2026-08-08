import Hero from "@/components/Hero";
import ServicesHighlight from "@/components/ServicesHighlight";
import BusinessTransfers from "@/components/BusinessTransfers";
import ReservationSection from "@/components/ReservationSection";
import FleetSection from "@/components/FleetSection";
import FeaturesSection from "@/components/FeaturesSection";
import DriversSection from "@/components/DriversSection";
import TrustSection from "@/components/TrustSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <ServicesHighlight />
      <BusinessTransfers />
      <ReservationSection />
      <FleetSection />
      <FeaturesSection />
      <DriversSection />
      <TrustSection />
      <Footer />
    </main>
  );
}
