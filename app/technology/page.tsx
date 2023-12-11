"use client";
import { title, subtitle } from "@/components/primitives";
import { Divider, Spacer } from "@nextui-org/react";
import {Image} from "@nextui-org/image";
export default function DocsPage() {
	return (
		<div className="flex flex-row">
			<div className="basis-full">
				<div className="text-left">
					<h1 className={title()}>Technology</h1>
					<h2 className={subtitle()}>AI is improving faster than liquidity is allocated.</h2>
					<Divider className="my-4" />
					<small>
						Before &quot;Attention Is All You Need&quot; - Digits was founded.
						<Spacer x={4} />
						Large volumes of financial headlines were used with a classifier to associate news & Fed rates with outcomes in US equities.
						<Spacer x={4} />
						We used high-quality discussion from industry experts to parameterize and train SVM, LSTM models on community success and failure.
						<Spacer x={8} />
					</small>
					<p>
						Now, we believe modern transformer architectures enable us to take inspiration from quantum probability theory.
						<Spacer x={8} />
						By factorizing large representations of events embedded by language models, we&apos;re making predictions about hyperspace.
						<Spacer x={12} />
					</p>
					<h2 className={subtitle()}>we let transformers inform our understanding of futures markets with non-speculative precision.</h2>
					<Spacer x={8} />
					<h1 className={title()}>and it works.</h1>
				</div>
				<Divider className="my-4" />
				<Spacer x={12} />
				<Spacer x={12} />
				<Spacer x={12} />
				<Spacer x={12} />
				<br></br>
				<Image src="./graphtheory.png" alt="matrices are graphs" ></Image>
			</div>
			<div>01
				
			</div>
		</div>

	);
}
