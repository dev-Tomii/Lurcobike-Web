"use client";
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { FaChevronDown } from "react-icons/fa";
import {
	Image,
	Link,
	Button,
	DropdownItem,
	DropdownTrigger,
	Dropdown,
	DropdownMenu,
	Divider,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useState, useEffect } from 'react';

import icons from "@/lib/icons";

export default function Navigation() {
	const [data,setData] = useState([]);
	useEffect(() => {
		fetch("https://api.npoint.io/4ad11285abb98dd044e8") /* https://api.jsonbin.io/v3/b/666afc0ce41b4d34e402c718 */
		.then(r => r.json()).then(r => setData(r))  /* .record */
	}, []);

	const currentRoute = usePathname();
	return (
		<>
			<Navbar className="py-3 bg-[#282828]">
				<NavbarBrand>
					<Image
						alt="logo"
						radius="none"
						src="/imgs/LogoText.png"
						width={150}
					></Image>
				</NavbarBrand>
				<NavbarContent>
					<NavbarItem isActive={currentRoute == "/"}>
						<Link href="/" className="text-amber-400 uppercase">Inicio</Link>
					</NavbarItem>
					<Dropdown>
						<NavbarItem>
							<DropdownTrigger>
								<Button
									disableRipple
									className="bg-transparent data-[hover=true]:bg-transparent text-amber-400 uppercase"
									endContent={<FaChevronDown />}
								>
									Productos
								</Button>
							</DropdownTrigger>
						</NavbarItem>
						<DropdownMenu
							className="w-[340px]"
							itemClasses={{
								base: "gap-4",
							}}
						>
							{data.map((item, index) => (
								<DropdownItem
									startContent={icons[index]}
									key={item['name']}
									className="capitalize"
									href={item['route']}
								>
									{item['name']}
								</DropdownItem>
							))}
						</DropdownMenu>
					</Dropdown>
					<NavbarItem isActive={currentRoute == "/vendedores"}>
						<Link href="/vendedores" className="text-amber-400 uppercase">
							Vendedores
						</Link>
					</NavbarItem>
					<NavbarItem isActive={currentRoute == "/contacto"}>
						<Link href="/contacto" className="text-amber-400 uppercase">
							Contacto
						</Link>
					</NavbarItem>
				</NavbarContent>
			</Navbar>
			<Divider className="mb-10"></Divider>
		</>
	);
}
