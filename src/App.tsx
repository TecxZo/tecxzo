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
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/tecxspend/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/tecxspend/dataDeletion" element={<DataDeletionPolicy />} />
        <Route path="/daystories/privacypolicy" element={<PrivacyPolicyDayStories />} />
        <Route path="/daystories/datadeletion" element={<DataDeletionPolicyDayStories />} />
      </Routes>
    </div>
  );
}

export default App;
