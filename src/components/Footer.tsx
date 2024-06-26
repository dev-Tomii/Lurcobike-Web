import { Divider, Image, Link } from "@nextui-org/react";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa6";

export default function Footer() {
	return (
		<>
			<Divider className="mt-10"></Divider>
			<footer className="py-3 bg-[#282828] flex justify-between px-8">
				<div className="flex flex-col">
					<Image
						alt="logo"
						radius="none"
						src="/imgs/LogoText.png"
						width={150}
					></Image>
					<div className="socials ml-10 pl-2 mt-3 flex flex-row">
						<Link className="rounded-full w-[26px] h-[26px] bg-amber-400 mx-1 items-center justify-center" href="https://www.instagram.com/lurco.bike/" isExternal>
							<FaInstagram color="black" size={16} />
						</Link>
						<Link className="rounded-full w-[26px] h-[26px] bg-amber-400 mx-1 items-center justify-center" href="https://www.wa.link/bedxnh" isExternal>
							<FaWhatsapp color="black" size={16} />
						</Link>
						<Link className="rounded-full w-[26px] h-[26px] bg-amber-400 mx-1 items-center justify-center" href="mailto:lurcobikers@gmail.com" isExternal>
							<FaEnvelope color="black" size={16} />
						</Link>
					</div>
					<div className="copy text-tiny flex-row flex my-4">
						Copyright © 2024 Lurcobike | Todos los derechos
						reservados
					</div>
				</div>
				<div className="flex flex-row flex-wrap">
					<div className="flex flex-col font-bold mx-2">
						<Link className="py-1 text-white text-tiny" href="/">
							<h3>Inicio</h3>
						</Link>
						<Link
							className="py-1 text-white text-tiny"
							href="/vendedores"
						>
							<h3>Vendedores</h3>
						</Link>
						<Link
							className="py-1 text-white text-tiny"
							href="/contacto"
						>
							<h3>Contacto</h3>
						</Link>
					</div>
					<div className="flex flex-col mx-2">
						<h3 className="font-bold text-white text-tiny py-1">
							Productos
						</h3>
						<Link
							className="text-white text-tiny py-1"
							href="/productos/asientos"
						>
							<h3>Asientos</h3>
						</Link>
						<Link
							className="text-white text-tiny py-1"
							href="/productos/pinones"
						>
							<h3>Piñones</h3>
						</Link>
						<Link
							className="text-white text-tiny py-1"
							href="/productos/cascos"
						>
							<h3>Cascos</h3>
						</Link>
						<Link
							className="text-white text-tiny py-1"
							href="/productos/candados"
						>
							<h3>
								Candados de
								<br />
								Seguridad
							</h3>
						</Link>
						<Link
							className="text-white text-tiny py-1"
							href="/productos/seguridad"
						>
							<h3>Cadenas</h3>
						</Link>
					</div>
					<div className="flex flex-col text-tiny mx-2">
						<h3>
							<br />
						</h3>
						<Link
							className="text-white text-tiny py-1"
							href="/productos/portaequipajes"
						>
							<h3>Portaequipajes</h3>
						</Link>
						<Link
							className="text-white text-tiny py-1"
							href="/productos/luces"
						>
							<h3>Luces</h3>
						</Link>
						<Link
							className="text-white text-tiny py-1"
							href="/productos/mazas"
						>
							<h3>Mazas</h3>
						</Link>
						<Link
							className="text-white text-tiny py-1"
							href="/productos/bicicletas"
						>
							<h3>Bicicletas</h3>
						</Link>
					</div>
				</div>
			</footer>
		</>
	);
}
