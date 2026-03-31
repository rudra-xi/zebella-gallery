import { useGSAP, gsap, SplitText } from "@/lib/gsap";
import type { RefObject } from "react";

/**
 * @hook useTitleAnimation
 * @description Custom hook to animate the main title ("Zebella") based on scroll.
 * It splits the text into characters, animates their opacity and position,
 * and adjusts the position of the "Z" character to keep it centered.
 *
 * @param {RefObject<HTMLElement | null>} containerRef - A ref object pointing to the title's container DOM element.
 */
export const useTitleAnimation = (
	containerRef: RefObject<HTMLElement | null>,
) => {
	useGSAP(
		() => {
			if (!containerRef.current) return;

			// Splits the text with id "ex-text" into individual characters for staggered animation.
			const splitExtra = new SplitText("#ex-text", {
				type: "chars",
				charsClass: "char-extra",
			});

			// Cast elements to HTMLElement to safely access .offsetWidth
			const zElement = containerRef.current.querySelector(
				"#z-center",
			) as HTMLElement | null;
			const exTextElement = containerRef.current.querySelector(
				"#ex-text",
			) as HTMLElement | null;

			const zWidth = zElement?.offsetWidth || 0;
			const exWidth = exTextElement?.offsetWidth || 0;
			const totalWidth = zWidth + exWidth;

			// Calculate movement to center the "Z" relative to the combined width of "Zebella".
			const centerOffset = totalWidth / 2 - zWidth / 2;

			const timeline = gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top top",
					end: "+=120%",
					scrub: 1,
					// markers: true,
					// invalidateOnRefresh: true,
				},
			});

			timeline
				.to(splitExtra.chars, {
					y: 100,
					opacity: 0,
					stagger: 0.2,
					ease: "power2.inOut",
				})
				.to(
					"#z-center",
					{
						x: centerOffset,
						ease: "power2.inOut",
						duration: 1,
					},
					"<=0.15",
				)
				.to("#z-center", {
					scale: 1.1,
					delay: 0.5,
					ease: "power2.inOut",
				});
		},
		{ scope: containerRef },
	);
};
