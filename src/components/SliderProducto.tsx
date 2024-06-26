"use client";
import { Image } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { useEffect, useState } from "react";

function obtenerStock(data: any, nombre: string) {
	const productos = data.find((prod: any) => prod.name == nombre);
	if (productos) return productos.stock;
	else return [];
}

function Stock({ stock }: { stock: boolean }) {
	if (!stock) {
		return (
			<h3 className="text-tiny font-bold font-xs uppercase">Sin Stock</h3>
		);
	}
}

export default function SliderProducto({ producto }: { producto: string }) {
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch("https://api.npoint.io/4ad11285abb98dd044e8") /* https://api.jsonbin.io/v3/b/666afc0ce41b4d34e402c718 */
			.then((r) => r.json())
			.then((r) => setData(r)); /* .record */
	}, []);
	const productos = obtenerStock(data, producto);
	return (
		<div className="container mx-auto my-10 py-10 w-[90vw]">
			<Swiper
				slidesPerView={1}
				modules={[Pagination, Navigation]}
				navigation
				pagination={{ clickable: true }}
				loop={true}
			>
				{productos.length > 0 &&
					productos.map((prod: any, index: any) => (
						<SwiperSlide key={index}>
							<div className="flex items-center justify-center">
								<Card isFooterBlurred className="bg-black/10 h-[15em] xl:h-[50em]">
									<Image
										src={prod.src}
										alt="asd"
										width={1500}
									></Image>
									<CardFooter className="absolute bottom-0 z-10 bg-black/30 border-t-1 border-zinc-100/50 flex flex-col justify-center items-center pb-8">
										<h1 className="text-base xl:text-xl uppercase font-bold text-amber-400">
											{producto}
										</h1>
										<h2 className="text-tiny font-sm uppercase">
											{prod.desc}
										</h2>
										<Stock stock={prod.stock}></Stock>
									</CardFooter>
								</Card>
							</div>
						</SwiperSlide>
					))}
				{productos.length == 0 && (
					<SwiperSlide>
						<div className="flex items-center justify-center">
							<Card className="bg-black/10">
								<Image
									src="/imgs/none.png"
									alt="asd"
									width={1500}
								></Image>
							</Card>
						</div>
					</SwiperSlide>
				)}
			</Swiper>
		</div>
	);
}
