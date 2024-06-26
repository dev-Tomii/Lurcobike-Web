"use client";
import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider, Link } from "@nextui-org/react";
import {
	Pagination,
	PaginationItem,
	PaginationCursor,
} from "@nextui-org/pagination";

function maxPag(long: number, perpag: number) {
	if (long % perpag == 0) {
		return long / perpag
	} else {
		return Math.trunc(long / perpag) + 1
	}
}

export default function Vendors() {
	const [data, setData] = useState([]);
	const [currentPage, setCurrentPage] = React.useState(1);
	useEffect(() => {
		fetch(
			"https://api.npoint.io/af2d1d1372045a4ebc0c"
		) /* https://api.jsonbin.io/v3/b/6671af41ad19ca34f87ad527 */
			.then((r) => r.json())
			.then((r) => setData(r)); /* .record */
	}, []);
	const porPagina = 10
	const indiceInicio = (currentPage - 1) * porPagina;
	const indiceFin = indiceInicio + porPagina;
	return (
		<>
			<div className="container flex mx-auto justify-center flex-wrap my-10 py-10 min-h-[31em]">
				{data.length <= 0 && <div className="p-10 m-10 h-[30em]"></div>}
				{data.length > 0 &&
					data.slice(indiceInicio, indiceFin).map((item, index) => (
						<Card
							key={index}
							className="p-3 justify-center mx-3 my-2 w-[15em] h-[15em]"
						>
							<CardBody className="text-center items-center justify-center">
								<h2 className="mb-3">
									Bicicleteria <br /> <b>{item['nombreBici']}</b>
								</h2>
								<h3>{item['nombre']}</h3>
							</CardBody>
							<Divider />
							<CardFooter className="text-center justify-center">
								<Link
									className="text-amber-400 underline"
									href={item['maps']}
								>
									{item['Direccion']}
								</Link>
							</CardFooter>
						</Card>
					))}
			</div>
			<Pagination
				className="flex justify-center"
				total={maxPag(data.length, porPagina)}
				initialPage={1}
				color="warning"
				page={currentPage}
				onChange={setCurrentPage}
			/>
		</>
	);
}
