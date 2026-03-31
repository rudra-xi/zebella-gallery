import { useGSAP, gsap, SplitText } from "@/lib/gsap";

/**
 * @hook useTitleAnimation
 * @description Custom hook to animate the main title ("Zebella") based on scroll.
 * It splits the text into characters, animates their opacity and position,
 * and adjusts the position of the "Z" character to keep it centered.
 *
 * @param {any} containerRef - A ref object pointing to the title's container DOM element.
 */
export const useTitleAnimation = (containerRef: any) => {
	useGSAP(
		() => {
			if (!containerRef.current) return;

			// Splits the text with id "ex-text" into individual characters for staggered animation.
			const splitExtra = new SplitText("#ex-text", {
				type: "chars",
				charsClass: "char-extra",
			});

			const zElement = document.querySelector("#z-center");
			const exTextElement = document.querySelector("#ex-text");

			const zWidth = zElement?.offsetWidth || 0;
			const exWidth = exTextElement?.offsetWidth || 0;
			const totalWidth = zWidth + exWidth;

			// Calculate movement to center the "Z" relative to the combined width of "Zebella".
			const centerOffset = totalWidth / 2 - zWidth / 2;

			const timeline = gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top top", // Animation starts when the top of the trigger element hits the top of the viewport.
					end: "+=120%", // The animation duration extends 120% beyond the trigger element's start point.
					scrub: 1, // Smoothly interpolates the animation progress based on scroll.
					// markers: true, // Uncomment to show scroll trigger visualization.
					// invalidateOnRefresh: true, // Uncomment to re-calculate scroll trigger on window resize.
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
						x: centerOffset, // Moves the "Z" to the calculated center position.
						ease: "power2.inOut",
						duration: 1,
					},
					"<=0.15", // Staggers this animation to start shortly after the previous one.
				)
				.to("#z-center", {
					scale: 1.1, // Slightly scales up the "Z".
					delay: 0.5, // Adds a delay before this scale animation starts.
					ease: "power2.inOut",
				});
		},
		{ scope: containerRef }, // Ensures GSAP animations are scoped to the containerRef.
	);
};
