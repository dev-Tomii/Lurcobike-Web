import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import SliderProducto from "@/components/SliderProducto";


export default function Cascos() {
	return (
		<main>
			<Navigation></Navigation>
            <SliderProducto producto="casco"></SliderProducto>
			<Footer></Footer>
		</main>
	);
}
