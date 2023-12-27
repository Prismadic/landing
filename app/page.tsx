"use client";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import PrismadicCircle from "@/components/prismadic/circle";

export default function Home() {
	return (
		// eslint-disable-next-line react/jsx-key
		[<PrismadicCircle />,
		// eslint-disable-next-line react/jsx-key
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>We&apos;re building a world where&nbsp;</h1>
				<h1 className={title({ color: "violet" })}>intelligence&nbsp;</h1>
				<br />
				<h1 className={title()}>
					creates wealth for <i>everyone</i>.
				</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					Precision pattern recognition.<br></br>
					Cognitive data sifting.<br></br>
					<b>Predictive breakthroughs.</b>
				</h2>
			</div>

			<div className="flex gap-3">
				<Link
					isExternal
					href={siteConfig.links.docs}
					className={buttonStyles({ color: "danger", radius: "full", variant: "shadow" })}
				>
					Red
				</Link>
				<Link
					isExternal
					className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
					href={siteConfig.links.github}
				>
					{/* <GithubIcon size={20} /> */}
					Blue
				</Link>
			</div>

			<div className="mt-8">
				<Snippet hideSymbol hideCopyButton variant="flat">
					<span>
						follow the <Code color="primary">🐇</Code>
					</span>
				</Snippet>
			</div>
		</section>]
	);
}
