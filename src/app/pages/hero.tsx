"use client";

import Image from "next/image";
import { zebella_12 } from "@/assets/images";

/**
 * @component Hero
 * @description Client Component that renders the hero section of the page.
 * It displays a full-screen background image with a slight brightness adjustment.
 */
export const Hero = () => {
	return (
		<section className={"relative h-screen"}>
			<div className={"w-full absolute inset-0 z-0"}>
				<Image
					src={zebella_12}
					alt="hero image"
					className={"w-full h-auto brightness-85"}
				/>
			</div>
		</section>
	);
};
