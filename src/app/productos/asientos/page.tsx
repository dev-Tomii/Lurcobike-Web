import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import SliderProducto from "@/components/SliderProducto";


export default function Asientos() {
	return (
		<main>
			<Navigation></Navigation>
            <SliderProducto producto="asiento"></SliderProducto>
			<Footer></Footer>
		</main>
	);
}
