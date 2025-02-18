"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Link } from "@nextui-org/link";

export const PrivacyPolicy = () => {
    return (
        <div style={{ maxWidth: 500 }}>
            <Accordion isCompact>
                <AccordionItem key="1" aria-label="Privacy Policy" subtitle="Privacy Policy">
                    <small>
                        We partner with Microsoft Clarity and Microsoft Advertising to capture how you use and interact with our website through behavioral metrics,
                        heatmaps, and session replay to improve and market our products/services. Website usage data is captured using first and third-party cookies
                        and other tracking technologies to determine the popularity of products/services and online activity. Additionally, we use this information for
                        site optimization, fraud/security purposes, and advertising. For more information about how Microsoft collects and uses your data, visit the
                        <Link isExternal href="https://privacy.microsoft.com/en-US/privacystatement">Microsoft Privacy Statement.</Link>
                    </small>
                </AccordionItem>
            </Accordion>
        </div>
    );
};
