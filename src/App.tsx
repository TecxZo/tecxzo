import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AdBanner from "./components/adBanner";
import { Route, Routes } from "react-router-dom";
import PrivacyPolicy from "./components/Tecxspend/PrivacyPolicy";
import DataDeletionPolicy from "./components/Tecxspend/dataDeletion";
import PrivacyPolicyDayStories from "./components/DayStories/privacyPolicy";
import DataDeletionPolicyDayStories from "./components/DayStories/dataDeletion";
import NotFound from "./components/NotFound";
import { TechnologiesUsedSection } from "./components/technologies-used-section";
import PrivacyPolicyFixHomeBusiness from "./components/FHBusiness/privacyPolicy";
import DataDeletionFixHome from "./components/FHBusiness/dataDeletion";

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navigation />
              <Hero />
              <div className="flex justify-center bg-transparent p-0 m-0">
              <AdBanner />
              </div>
              <About />
              <Services />
              <Products />
              <TechnologiesUsedSection />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/tecxspend/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/tecxspend/dataDeletion" element={<DataDeletionPolicy />} />
        <Route path="/daystories/privacypolicy" element={<PrivacyPolicyDayStories />} />
        <Route path="/daystories/datadeletion" element={<DataDeletionPolicyDayStories />} />
        <Route path="/fixhomebusiness/privacypolicy" element={<PrivacyPolicyFixHomeBusiness />} />
        <Route path="/fixhomebusiness/datadeletion" element={<DataDeletionFixHome />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
