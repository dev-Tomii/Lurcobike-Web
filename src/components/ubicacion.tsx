"use client";

import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

export default function Ubicacion() {
	return (
		<div className="container flex flex-col xl:flex-row mx-auto mt-20">
			<div className="1 flex flex-col mx-auto justify-center text-center xl:text-left">
                <h1 className="uppercase font-bold text-center xl:text-left text-4xl xl:text-6xl">Encontranos en</h1>
                <h2 className="uppercase font-bold text-center xl:text-left text-2xl xl:text-4xl">Venta por mayor<br/><br/></h2>
                <p className="text-xl mb-3">Av. Jujuy 512, C1229ABN<br/>Cdad. Autónoma de Buenos Aires</p>
            </div>
			<div className="flex mx-auto xl:ml-5 justify-center w-[90vw] h-[50vh] xl:w-[40em] xl:h-[40em]">
				<APIProvider apiKey={process.env.MAPS_API as string}>
					<Map
						
						/* style={{ width: "90vw", height: "80vh" }} */
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
