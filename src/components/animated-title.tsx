"use client";
import { useRef } from "react";
import { useTitleAnimation } from "@/hooks/useTitleAnimation"; // Adjust path accordingly

/**
 * @component AnimatedTitle
 * @description Client Component that displays a large, animated title. It uses a `useRef` hook to reference the DOM element for the animation.
 */

export const AnimatedTitle = () => {
	// useRef is used to get a reference to the DOM element where the title will be rendered.
	// This reference is then passed to the useTitleAnimation hook to enable animations on that element.
	const container = useRef(null);

	// Initialize the custom hook
	useTitleAnimation(container);

	return (
		<div
			ref={container}
			className="fixed inset-0 flex items-center justify-center pointer-events-none"
		>
			<h1 className="text-[20rem] font-serif text-primary whitespace-nowrap">
				<span id="z-center" className="inline-block">
					Z
				</span>
				<span id="ex-text" className="inline-block">
					ebella
				</span>
			</h1>
		</div>
	);
};
