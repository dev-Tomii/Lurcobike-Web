"use client";
import { Image } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";

export const images = [
	{ src: "/imgs/test.png", alt: "Imagen" },
	{ src: "/imgs/test.png", alt: "Imagen" },
	{ src: "/imgs/test.png", alt: "Imagen" },
];

export default function ImageSlide() {
	return (
		<div className="container mx-auto my-7 w-[1000px]">
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
			>
				{images.map((image, index) => (
					<SwiperSlide key={index}>
						<div className="flex h-full w-full items-center justify-center">
							<Image
								src={image.src}
								alt={image.alt}
								className="object-cover"
							></Image>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
