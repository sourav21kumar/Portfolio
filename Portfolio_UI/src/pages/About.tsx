import React, { FunctionComponent } from "react";
import { cn } from "../utility/cn";
import { about } from "../shared/config/about";
import { highlightKeywordsInParagraphToHTML } from "../utility/highlightKeywordsInParagraphToHTML";
import { WorkExperience } from "../components/layout/WorkExperience";
// import { Education } from "../components/layout/Education";
import { SoftwareStack } from "../components/layout/SoftwareStack";

export const About: FunctionComponent = () => {
    return (

        <div className={cn(
            "w-full flex flex-col bg-[#0D0D0F] antialiased relative text-justify mt-[6rem] text-[rgba(255,255,255,0.8)]"
        )}>
            <div className={cn(
                "w-full flex flex-col gap-[1.2rem] font-GTWalsheim-medium text-[medium] md:text-[1.4rem] tracking-[0.02em] p-[1.5rem] mb-[2.5rem]"
            )}>
                {about.bio.overview.map((paragraph, index) => (
                    <p key={index} dangerouslySetInnerHTML={{ __html: highlightKeywordsInParagraphToHTML(paragraph) }}></p>
                ))}
            </div>
            <WorkExperience/>
            {/* <Education/>  */}
            <SoftwareStack/>
        </div>


    );
}
