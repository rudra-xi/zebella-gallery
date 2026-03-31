import { AnimatedTitle, PrimaryText } from "@/components";
import { Epilogue, Hero, Main } from "./pages";

/**
 * @component ZebellaGallery
 * @description Server Component that renders the main layout of the Zebella Gallery page.
 * It includes a fixed header with primary text, an animated title, and sections for Hero, Main, and Epilogue content.
 */

export default function ZebellaGallery() {
	return (
		<div>
			<div className={"fixed top-0 left-1/2 -translate-x-1/2 z-20 pt-2"}>
				<PrimaryText />
			</div>
			<div className={"relative z-20"}>
				<AnimatedTitle />
			</div>
			<div>
				<Hero />
				<Main />
				<Epilogue />
			</div>
		</div>
	);
}
