"use client";

/**
 * @component PrimaryText
 * @description Client Component that displays a paragraph of primary text with specific styling.
 * It emphasizes key phrases using underlines and uppercase letters.
 */
export const PrimaryText = () => {
	return (
		<div className={"max-w-xl"}>
			<p
				className={
					"uppercase tracking-tight font-medium text-sm text-center text-primary"
				}
			>
				<span className={"underline underline-offset-2"}>
					The warmth of gold.
				</span>{" "}
				An intimate study of{" "}
				<span className={"underline underline-offset-2"}>
					tropical motifs
				</span>{" "}
				and{" "}
				<span className={"underline underline-offset-2"}>
					nomadic silhouettes,
				</span>{" "}
				where every pattern tells a silent story.
			</p>
		</div>
	);
};
