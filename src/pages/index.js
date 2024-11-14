import Banner from "@/components/HomeComponent/Banner";
import FeatureCards from "@/components/HomeComponent/FeatureCards";
import Feedback from "@/components/HomeComponent/Feedback";
import HeroBanner from "@/components/HomeComponent/HeroBanner";
import HeroSection from "@/components/HomeComponent/HeroSection";
import Faq from "@/components/UiComponents/FAQ";
import Footer from "@/components/UiComponents/Footer";
import Header from "@/components/UiComponents/Header";

export default function Home() {
    return (
        <main>
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
