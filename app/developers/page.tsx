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
					<Link isBlock showAnchorIcon href="#" color="foreground">
						GitHub
					</Link>
					<Link isBlock showAnchorIcon href="#" color="primary">
						Docs
					</Link>
					<Link isBlock showAnchorIcon href="#" color="secondary">
						API
					</Link>
					<Link isBlock showAnchorIcon href="#" color="success">
						Access
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
