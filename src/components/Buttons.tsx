"use client";
import { Button, Link, Image, Skeleton } from "@nextui-org/react";
import { useEffect, useState, useCallback } from "react";

export default function Buttons() {
	const [data, setData] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		fetch(
			"https://api.npoint.io/4ad11285abb98dd044e8"
		) /* https://api.jsonbin.io/v3/b/666afc0ce41b4d34e402c718 */
			.then((r) => r.json())
			.then((r) => setData(r))
			.then((r) => setIsLoaded(true)); /* .record */
	}, []);

	return (
		<div className="mx-auto container flex flex-wrap justify-center min-h-[30vh]">
			{data.map((item, index) => (
				<Link href={item["route"]} key={index}>
					<div className="flex w-[20em] h-[5em] bg-white mx-5 my-2 justify-center bg-gradient-to-b from-[#696969] to-[#434343]  hover:from-[#505050] hover:to-[#202020] cursor-pointer">
						{isLoaded ? (
							<>
								<h2 className="absolute self-center uppercase text-amber-400 font-bold z-10">
									{item["name"]}
								</h2>
								<Image
									className="w-full h-full relative -z-7"
									src={item["btn"]}
									alt="btn-bg"
								/>
							</>
						) : (
							<>
								<Skeleton>
									<h2 className="absolute self-center uppercase text-amber-400 font-bold z-10">
										{item["name"]}
									</h2>
									
									<Image
										className="w-full h-full relative -z-7"
										src={data[0]["btn"]}
										alt="btn-bg"
									/>
								</Skeleton>
							</>
						)}
					</div>
				</Link>
			))}
		</div>
	);
}

{
	/* <Button
						as={Link}
						fullWidth
						size="lg"
						className="capitalize"
						radius="none"
						href={item.route}
					>
						{item.name}
					</Button>
 */
}
