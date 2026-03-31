"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import {
	zebella_1,
	zebella_2,
	zebella_3,
	zebella_4,
	zebella_5,
	zebella_6,
	zebella_7,
	zebella_8,
	zebella_9,
	zebella_10,
	zebella_11,
	zebella_12,
	zebella_13,
	zebella_14,
} from "@/assets/images";
import { gsap, useGSAP } from "@/lib/gsap";

const IMAGE_DATA = [
	{
		id: 1,
		title: "Verdant",
		image: zebella_1,
		size: "large",
	},
	{
		id: 2,
		title: "Embroidery",
		image: zebella_2,
		size: "medium",
	},
	{
		id: 3,
		title: "Heritage",
		image: zebella_3,
		size: "small",
	},
	{
		id: 4,
		title: "Symmetry",
		image: zebella_4,
		size: "wide",
	},
	{
		id: 5,
		title: "Gilded",
		image: zebella_5,
		size: "medium",
	},
	{
		id: 6,
		title: "Profile",
		image: zebella_6,
		size: "medium",
	},
	{
		id: 7,
		title: "Cutout",
		image: zebella_7,
		size: "wide",
	},
	{
		id: 8,
		title: "Artistic",
		image: zebella_8,
		size: "large",
	},
	{
		id: 9,
		title: "Azure",
		image: zebella_9,
		size: "medium",
	},
	{
		id: 10,
		title: "Duo",
		image: zebella_10,
		size: "wide",
	},
	{
		id: 11,
		title: "Ensemble",
		image: zebella_11,
		size: "tall",
	},
	{
		id: 12,
		title: "Palm",
		image: zebella_12,
		size: "wide",
	},
	{
		id: 13,
		title: "Scalloped",
		image: zebella_13,
		size: "small",
	},
	{
		id: 14,
		title: "Headscarf",
		image: zebella_14,
		size: "medium",
	},
];

// Size mapping for grid spans
const sizeClasses: any = {
	small: "col-span-1 row-span-1",
	medium: "col-span-2 row-span-2",
	large: "col-span-3 row-span-3",
	wide: "col-span-3 row-span-2",
	tall: "col-span-2 row-span-3",
};

// Aspect ratio classes for different sizes
const aspectClasses: any = {
	small: "aspect-square",
	medium: "aspect-square",
	large: "aspect-square",
	wide: "aspect-video", // 16:9
	tall: "aspect-[3/4]", // Portrait
};

export const ImageGallery = () => {
	const galleryRef = useRef(null);

	// Create a randomized copy of IMAGE_DATA
	const [randomizedImages] = useState(() => {
		// Create a copy and shuffle it
		const shuffled = [...IMAGE_DATA];
		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
		}
		return shuffled;
	});

	// Use the same randomized array for both iterations
	const doubledImages = [...randomizedImages, ...randomizedImages];

	/**
	 * @hook useGSAP
	 * @description Custom hook from GSAP to handle animations within the ImageGallery component.
	 * It animates each gallery card on scroll, applying a fade-in and slide-up effect.
	 * - `trigger`: The element that triggers the animation.
	 * - `start`: Defines the scroll position at which the animation should start.
	 * - `end`: Defines the scroll position at which the animation should end.
	 * - `scrub`: Enables smooth animation scrubbing based on scroll position.
	 */
	useGSAP(
		() => {
			const cards = gsap.utils.toArray(".gallery-card");
			cards.forEach((card: any) => {
				gsap.fromTo(
					card,
					{
						opacity: 0,
						y: 50,
					},
					{
						opacity: 1,
						y: 0,
						duration: 0.5,
						stagger: { each: 0.2, from: "random" },
						scrollTrigger: {
							trigger: card,
							start: "top bottom-=80",
							end: "bottom center",
							scrub: 1,
						},
					},
				);
			});
		},
		{ scope: galleryRef },
	);

	return (
		<div ref={galleryRef} className="pt-20">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-12 gap-4 auto-rows-[minmax(140px,auto)]">
					{doubledImages.map((item, index) => (
						<div
							key={`${item.id}-${index}`} // Make key unique since ids will repeat
							className={`gallery-card group relative overflow-hidden ${sizeClasses[item.size]}`}
						>
							<div
								className={`relative w-full h-full ${aspectClasses[item.size]}`}
							>
								<Image
									src={item.image}
									alt={item.title}
									fill
									className="object-cover transition-transform duration-700 group-hover:scale-110"
									sizes="(max-width: 768px) 50vw, 33vw"
								/>
								<div className="absolute inset-0 bg-secondary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
									<span className="text-primary text-lg font-serif tracking-wide">
										{item.title}
									</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
