import { title } from "@/components/primitives";
import { Divider, Link, Image, Button, Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";

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
					<Popover key="bottom" placement="bottom">
						<PopoverTrigger>
							<Button variant="bordered">
								API Docs
							</Button>
						</PopoverTrigger>
						<PopoverContent>
							<div className="px-1 py-2">
								<div className="text-small font-bold">Projects</div>
								<div className="text-tiny"><Link isExternal isBlock showAnchorIcon color="danger" href="https://prismadic.github.io/magnet/">magnet</Link> <Link isExternal isBlock showAnchorIcon href="https://prismadic.github.io/tractor-beam/" color="warning">tractor-beam</Link> <Link isExternal isBlock showAnchorIcon color="primary" href="https://prismadic.github.io/hygiene/">hygiene</Link></div>
							</div>
						</PopoverContent>
					</Popover>
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
