import ImageSlide from "@/components/ImageSlide";
import Navigation from "@/components/Navigation";
import Buttons from "@/components/Buttons";
import Ubicacion from "@/components/ubicacion";
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <Navigation></Navigation>
      <ImageSlide></ImageSlide>
      <Buttons></Buttons>
      <Ubicacion></Ubicacion>
      <Footer></Footer>
    </main>
  );
}
