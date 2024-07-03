"use client";
import { Image } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import { Card, CardFooter, Skeleton } from "@nextui-org/react";
import { ImGift } from "react-icons/im";

const images = [
	{
		src: "/imgs/imglogo.png",
		alt: "Lurcobike Logo",
		type: "0",
		desc: "0",
	},
	{
		src: "/imgs/asiento/1.png",
		alt: "Imagen",
		type: "Asiento",
		desc: "Lurcobike",
	},
	{
		src: "/imgs/seguridad/4.png",
		alt: "Imagen",
		type: "Candado de seguridad",
		desc: "Traba U",
	},
	{
		src: "/imgs/portaequipaje/2.png",
		alt: "Imagen",
		type: "Portaequipaje",
		desc: "Aluminio",
	},
];

export default function ImageSlide() {
	return (
		<div className="container mx-auto my-7 w-[90%] min-h-[11em] rounded-md">
			<Swiper
				slidesPerView={1}
				modules={[Pagination, Autoplay]}
				navigation
				pagination={{ clickable: true }}
				autoplay={{
					delay: 5000,
					disableOnInteraction: true,
				}}
				loop={true}
				className="rounded-md"
			>
				{images.map((image, index) => (
					<SwiperSlide key={index} className="rounded-lg">
						<Card
								radius="md"
								isFooterBlurred
								className={image.desc != "0" ? "bg-black/10 h-[18em] xl:h-[50em] flex items-center object-fill" : "bg-black h-[18em] xl:h-[50em] flex items-center object-fill"}
							>
								<Image
									src={image.src}
									alt="asd"
									width={1500}
									className="mx-auto h-[18em] xl:h-[50em] object-contain"
									radius="md"
								></Image>
								{image.desc != "0" && (
									<CardFooter className="absolute bottom-0 z-10 bg-black/30 border-t-1 border-zinc-100/50 flex flex-col justify-center items-center pb-8">
										<h1 className="text-base xl:text-xl uppercase font-bold text-amber-400">
											{image.type}
										</h1>
										<h2 className="text-tiny font-sm uppercase">
											{image.desc}
										</h2>
									</CardFooter>
								)}
							</Card>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
