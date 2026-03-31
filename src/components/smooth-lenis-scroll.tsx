import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

/**
 * @component SmoothLenisScroll
 * @description Client Component that wraps its children in ReactLenis for smooth scrolling.
 * It configures Lenis with specific lerp and duration options for a custom scrolling experience.
 */

export default function SmoothLenisScroll({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<ReactLenis
			suppressHydrationWarning
			root
			options={{ lerp: 0.1, duration: 1.4 }}
		>
			{children}
		</ReactLenis>
	);
}
