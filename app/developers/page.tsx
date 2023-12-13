import { title } from "@/components/primitives";
import { Divider, Link, Image } from "@nextui-org/react";

export default function DevelopersPage() {
	return (
		<div className="flex flex-row">
			<div className="basis-full">

				<div className="text-left">
					<h1 className={title()}>Developers</h1>
					<Divider className="my-4" />
					<small>
						Prismadic supports open source software (OSS). 
					</small>
					<Divider className="my-4" />
					<Link isExternal isBlock showAnchorIcon href="https://github.com/Prismadic" color="foreground">
						Source code
					</Link>
					<Link isExternal isBlock showAnchorIcon href="https://github.com/Prismadic" color="primary">
						API Docs
					</Link>
					<Link isExternal isBlock showAnchorIcon href="https://www.linkedin.com/company/prismadic/" color="secondary">
						Hiring
					</Link>
					<Link isExternal isBlock showAnchorIcon href="https://huggingface.co/prismadic" color="success">
						Models
					</Link>
				</div>
				<Divider className="my-4" />
				<Image src="./graphtheory.png" alt="matrices are graphs" ></Image>
			</div>
			<div>02

			</div>
		</div>

	);
}
