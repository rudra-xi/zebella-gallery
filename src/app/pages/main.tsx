"use client";

import Image from "next/image";
import { zebella_2, zebella_10, zebella_11 } from "@/assets/images";
import { useRef } from "react";
import { useMainAnimation } from "@/hooks/useMainAnimation";
import { ImageGallery } from "@/components";

/**
 * @component Main
 * @description Client Component that displays the main content section of the page.
 * It features a central image gallery and three associated images arranged horizontally.
 * It uses a `useRef` hook to reference the DOM element for the main animation.
 */
export const Main = () => {
	// useRef is used to get a reference to the DOM element where the main content will be rendered.
	// This reference is then passed to the useMainAnimation hook to enable animations on that element.
	const container = useRef(null);

	useMainAnimation(container);
	return (
		<section
			ref={container}
			className={
				"relative flex flex-col items-center justify-center w-full"
			}
		>
			<div className={"w-full h-full flex justify-evenly items-center"}>
				<Image
					id="image-left"
					src={zebella_10}
					alt="main image 1"
					className={"h-100 w-auto"}
				/>
				<Image
					id="image-mid"
					src={zebella_2}
					alt="main image 1"
					className={"h-130 w-auto"}
				/>
				<Image
					id="image-right"
					src={zebella_11}
					alt="main image 1"
					className={"h-100 w-auto"}
				/>
			</div>
			<div className={"pb-10 z-30"}>
				<ImageGallery />
			</div>
		</section>
	);
};
