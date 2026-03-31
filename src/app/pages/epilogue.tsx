"use client";

import { zebella_12, zebella_4 } from "@/assets/images";
import { EpilogueElements } from "@/components";
import Image from "next/image";

/**
 * @component Epilogue
 * @description Client Component that renders the epilogue section of the page.
 * It displays a full-screen background image with a slight brightness adjustment.
 */
export const Epilogue = () => {
	return (
		<section className={"relative h-screen"}>
			<div className={"w-full absolute inset-0 z-0"}>
				<Image
					src={zebella_4}
					alt="hero image"
					className={"w-full h-auto brightness-85"}
				/>
			</div>
			<div className={"absolute -bottom-48 left-10"}>
				<EpilogueElements />
			</div>
		</section>
	);
};
