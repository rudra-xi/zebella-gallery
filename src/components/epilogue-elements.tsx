"use client";

import Link from "next/link";

/**
 * @component EpilogueElements
 * @description Client Component that renders links to the developer's GitHub and LinkedIn profiles.
 * These links are displayed in uppercase and styled with the primary color.
 */

export const EpilogueElements = () => {
	return (
		<div className={" space-x-4"}>
			<Link
				href="https://github.com/rudra-xi"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="View developer's GitHub profile"
				className="text-primary uppercase"
			>
				Github
			</Link>

			<Link
				href="https://www.linkedin.com/in/goutam-rudraxi/"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="View developer's GitHub profile"
				className="text-primary uppercase"
			>
				LinkedIn
			</Link>
		</div>
	);
};
