"use client";

import { Input, Link, Textarea, Button } from "@nextui-org/react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

export default function Form() {
	const form = useRef() as React.MutableRefObject<HTMLFormElement>;
	const sendEmail = (e: any) => {
		e.preventDefault();
		
		emailjs
			.sendForm(process.env.SERVICE_ID as string, process.env.TEMPLATE_ID as string, form.current, {
				publicKey: process.env.FORM_API as string,
			})
			.then(
				() => {
					alert("Mensaje enviado satisfactoriamente!");
				},
				(error) => {
					alert("Ha ocurrido un error al enviar el mensaje, intente nuevamente rellenando todos los campos.");
				}
			);
	};

	return (
		<div className="container flex flex-col mx-auto justify-center items-center">
			<h1 className="font-bold text-amber-400 uppercase text-5xl mb-10">
				Contacto
			</h1>
			<div className="formulario flex flex-col my-10">
				<div className="text-center mb-4">
					<h2 className="font-bold">
						¿Necesitas asesoramiento especializado?
					</h2>
					<h3>
						Completa tus datos y te responderemos a la brevedad.
					</h3>
				</div>
				<form
					ref={form}
					onSubmit={sendEmail}
					className="w-[90vw] flex flex-col justify-center mx-auto items-center"
				>
					<div className="form-top flex flex-col xl:flex-row justify-between">
						<Input
							isRequired
							className="my-4 mx-2 xl:mr-2 w-[90vw] xl:w-[30em]"
							variant="faded"
							label="Nombre"
							name="nombre"
						/>
						<Input
							isRequired
							className="my-4 mx-2 xl:ml-2 w-[90vw] xl:w-[30em]"
							variant="faded"
							label="Apellido"
							name="apellido"
						/>
					</div>
					<div className="form-top flex flex-col xl:flex-row justify-between">
						<Input
                            type="email"
							isRequired
							className="my-4 mx-2 xl:mr-2 w-[90vw] xl:w-[30em]"
							variant="faded"
							label="Email"
							name="email"
						/>
						<Input
							isRequired
							className="my-4 mx-2 xl:ml-2 w-[90vw] xl:w-[30em]"
							variant="faded"
							label="Telefono"
							name="telefono"
						/>
					</div>
					<Textarea
						isRequired
						className="my-4 w-[90vw] xl:w-[60em]"
						minRows={6}
						variant="faded"
						placeholder="Mensaje / Consulta"
						name="consulta"
					/>
					<Button
						type="submit"
						className="justify-center items-center w-full xl:w-[70em]"
					>
						<IoSend /> Enviar
					</Button>
				</form>
			</div>
			<div className="redes flex justify-center flex-col">
				<h2 className="font-bold text-3xl uppercase mb-3 text-center">
					Seguinos en nuestras redes!
				</h2>
				<div className="social flex justify-center py-2">
					<FaWhatsapp size={32} color="#51f149" />
					<Link
						size="lg"
						className="text-white mx-3"
						href="https://www.wa.link/bedxnh"
					>
						54 9 11 2262-6709
					</Link>
				</div>
				<div className="social flex justify-center py-2">
					<FaInstagram size={32} color="#F56040" />
					<Link
						size="lg"
						className="text-white mx-3"
						href="https://www.instagram.com/lurco.bike/"
					>
						lurco.bike
					</Link>
				</div>
			</div>
		</div>
	);
}
