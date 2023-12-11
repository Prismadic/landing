"use client";
import { title, subtitle } from "@/components/primitives";
import { Divider, Spacer } from "@nextui-org/react";
import React from "react";
import { Card, CardBody, Image, Button } from "@nextui-org/react";

import { FaGithubAlt } from "@react-icons/all-files/fa/FaGithubAlt";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import {FaCode} from "@react-icons/all-files/fa/FaCode";

// import { HeartIcon } from "./HeartIcon";
// import { PauseCircleIcon } from "./PauseCircleIcon";
// import { NextIcon } from "./NextIcon";
// import { PreviousIcon } from "./PreviousIcon";
// import { RepeatOneIcon } from "./RepeatOneIcon";
// import { ShuffleIcon } from "./ShuffleIcon";
export default function AboutPage() {
	const [liked, setLiked] = React.useState(false);
	const openInNewTab = (url: string | URL | undefined) => {
		window.open(url, "_blank", "noreferrer");
	  };
	return (
		<div className="flex flex-row">
			<div className="basis-full">
			<h1 className={title()}>About</h1>
				<h1 className={subtitle()}>Team</h1>
				<Divider className="my-4" />
				<Card
					isBlurred
					className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
					shadow="sm"
				>
					<CardBody>
						<div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
							<div className="relative col-span-6 md:col-span-4">
								<Image
									alt="Album cover"
									className="object-cover"
									height={200}
									shadow="md"
									src="/dylan.png"
									width="100%"
								/>
							</div>

							<div className="flex flex-col col-span-6 md:col-span-8">
								<div className="flex justify-between items-start">
									<div className="flex flex-col gap-0">
										<h3 className="font-semibold text-foreground/90">Dylan Moore</h3>
										<p className="text-small text-foreground/80">Founder</p>
										<h1 className="text-large font-medium mt-2">ML, Econ, Engineering</h1>
									</div>
								</div>

								<div className="flex flex-col mt-3 gap-1">
									<p>10 years experience in finance and customer-focused ML</p>
									<div className="flex justify-between">
										<p className="text-small text-foreground/50">dylan@prismadic.ai</p>
									</div>
								</div>

								<div className="flex w-full items-center justify-center">
									<Button
										isIconOnly
										className="data-[hover]:bg-foreground/10"
										radius="full"
										variant="light"
										onClick={() => openInNewTab("https://github.com/DylanAlloy")}
									>
										<FaGithubAlt size={20} />
									</Button>
									<Button
										isIconOnly
										className="data-[hover]:bg-foreground/10"
										radius="full"
										variant="light"
										onClick={() => openInNewTab("https://twitter.com/alloy2077")}
									>
										<FaTwitter size={20} />
									</Button>
								</div>
							</div>
						</div>
					</CardBody>
				</Card>
				<Divider className="my-4" />
				<Card
					isBlurred
					className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
					shadow="sm"
				>
					<CardBody>
						<div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
							<div className="relative col-span-6 md:col-span-4">
								<Image
									alt="Album cover"
									className="object-cover"
									height={200}
									shadow="md"
									src="/peter.png"
									width="100%"
								/>
							</div>

							<div className="flex flex-col col-span-6 md:col-span-8">
								<div className="flex justify-between items-start">
									<div className="flex flex-col gap-0">
										<h3 className="font-semibold text-foreground/90">Peter Kang</h3>
										<p className="text-small text-foreground/80">Co-Founder Fellow</p>
										<h1 className="text-large font-medium mt-2">Software, Econ</h1>
									</div>
								</div>

								<div className="flex flex-col mt-3 gap-1">
									<p>Diverse skill set, 10 years of Software Engineering</p>
									<div className="flex justify-between">
										<p className="text-small text-foreground/50">peter@prismadic.ai</p>
									</div>
								</div>

								<div className="flex w-full items-center justify-center">
									<Button
										isIconOnly
										className="data-[hover]:bg-foreground/10"
										radius="full"
										variant="light"
										onClick={() => openInNewTab("https://github.com/Peter-Kang")}
									>
										<FaGithubAlt size={20} />
									</Button>
									<Button
										isIconOnly
										className="data-[hover]:bg-foreground/10"
										radius="full"
										variant="light"
										onClick={() => openInNewTab("https://pkang.dev")}
									>
										<FaCode size={20} />
									</Button>
								</div>
							</div>
						</div>
					</CardBody>
				</Card>
				<Image src="./foundershub.webp" width="150" alt="Proud partner of Microsoft Founders Hub" ></Image>
			</div>

		</div>
	);
}
