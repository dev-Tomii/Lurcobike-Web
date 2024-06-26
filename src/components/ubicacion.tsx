"use client";

import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

export default function Ubicacion() {
	return (
		<div className="container flex flex-col md:flex-row mx-auto mt-20">
			<div className="1 flex flex-col mx-auto justify-center text-center md:text-left">
                <h1 className="uppercase font-bold text-center md:text-left text-4xl md:text-6xl">Encontranos en</h1>
                <h2 className="uppercase font-bold text-center md:text-left text-2xl md:text-4xl">Venta por mayor<br/><br/></h2>
                <p className="text-xl mb-3">Av. Jujuy 512, C1229ABN<br/>Cdad. Autónoma de Buenos Aires</p>
            </div>
			<div className="flex mx-auto justify-center w-[vw]">
				<APIProvider apiKey={process.env.MAPS_API as string}>
					<Map
						
						style={{ width: "40em", height: "40em" }}
						defaultCenter={{
							lat: -34.616036968713026,
							lng: -58.40424741801995,
						}}
						defaultZoom={18}
						gestureHandling={"greedy"}
						disableDefaultUI={false}
					>
						<Marker
							position={{
								lat: -34.616036968713026,
								lng: -58.40424741801995,
							}}
						></Marker>
					</Map>
				</APIProvider>
			</div>
		</div>
	);
}
