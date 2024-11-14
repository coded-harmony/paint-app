import Banner from "@/components/Paint/Banner";
import Faq from "@/components/Paint/FAQ";
import FeatureCards from "@/components/Paint/FeatureCards";
import Feedback from "@/components/Paint/Feedback";
import Footer from "@/components/Paint/Footer";
import Header from "@/components/Paint/Header";
import HeroBanner from "@/components/Paint/HeroBanner";
import HeroSection from "@/components/Paint/HeroSection";

export default function Paint() {
    return (
        <main className="bg-[#FFF9EB]">
            <Header/>
            <Banner/>
            <HeroSection/>
            <FeatureCards/>
            <Feedback/>
            <HeroBanner/>
            <Faq/>
            <Footer/>
        </main>
    );
}
