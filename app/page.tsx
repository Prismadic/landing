"use client";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

export default function Home() {
	return (
		
		[<section key="second" className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
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
				
			</div>

			<div className="mt-8">
				<Snippet hideSymbol hideCopyButton variant="flat">
					<span>
						subscribe on <Link href="https://prismadic.substack.com">substack</Link>
					</span>
				</Snippet>
				<Snippet hideSymbol hideCopyButton variant="flat">
					<span>
						join the <Link href="https://discord.gg/prismadicai">discord</Link>
					</span>
				</Snippet>
			</div>
		</section>]
	);
}
