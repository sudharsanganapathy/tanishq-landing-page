import Header from "./components/Header";
import IntroBanner from "./components/IntroBanner";
import Hero from "./components/Hero";
import Collection from "./components/Collection";
import Bloom from "./components/Bloom";
import Highlights from "./components/Highlights";
import ShopLook from "./components/ShopLook";
import Catalogue from "./components/Catalogue";
import Reels from "./components/Reels";
import Nature from "./components/Nature";
import Footer from "./components/Footer";


export default function App() {
  return (
    <>
      <Header />

      <main>
        <IntroBanner />

        <Hero />

        <Collection />

        <Bloom />

        <Highlights />

        <ShopLook />

        <Catalogue />
        {/* <Reels /> */}

        <Nature />
      </main>

      <Footer />
    </>
  );
}