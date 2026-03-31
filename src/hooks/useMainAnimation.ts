import { useGSAP, gsap } from "@/lib/gsap";

/**
 * @hook useMainAnimation
 * @description Custom hook to animate main content images based on scroll.
 * It uses GSAP's ScrollTrigger to animate the opacity and y-position of the
 * middle, left, and right images within the main section.
 *
 * @param {any} containerRef - A ref object pointing to the main section's DOM element.
 */
export const useMainAnimation = (containerRef: any) => {
	useGSAP(() => {
		if (!containerRef.current) return;

		const timeline = gsap.timeline({
			scrollTrigger: {
				trigger: containerRef.current,
				start: "-=70%", // Start the animation when the trigger element is 70% from the bottom of the viewport.
				end: "+=40%", // End the animation 40% after the trigger element enters the viewport.
				scrub: 1, // Smooth scrubbing of the animation based on scroll position.
				// markers: true, // Uncomment to show scroll trigger visualization.
				// invalidateOnRefresh: true, // Uncomment to re-calculate scroll trigger on window resize.
			},
		});

		timeline
			.fromTo("#image-mid", { opacity: 0, y: 40 }, { opacity: 1, y: 0 })
			.fromTo(
				"#image-left",
				{ opacity: 0, y: 40 },
				{ opacity: 1, y: 0 },
				"<0.5",
			)
			.fromTo(
				"#image-right",
				{ opacity: 0, y: 40 },
				{ opacity: 1, y: 0 },
				"<",
			);
	});
};
