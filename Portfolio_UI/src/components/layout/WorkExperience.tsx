import React, { FunctionComponent } from "react";
import { workExperience } from "../../shared/config/workExperience";
import { cn } from "../../utility/cn";
import { Timeline } from "./Timeline";
import { ITimeline, IMilestones } from "../../shared/interfaces/interface";

export const WorkExperience: FunctionComponent = () => {
    const workExperienceTimelineEvents: ITimeline[] = [];
    for (let index = 0; index < workExperience.length; index++) {
        
        const exp = workExperience[index];

        const EventThumbnail = { 
            startdate: exp.startDate,
            enddate: exp.endDate,
            completed: exp.completed,
            type: exp.employmentType
        }

    
        const EventDescription = {
            url: exp.link,
            logoPath: exp.logoPath,
            content: exp.organization + '\n' + exp.location + '\n' + exp.role 
        }

        let EventMilestones: IMilestones[] = [];

        if (exp.projects.length > 0) {
            EventMilestones = exp.projects.map((project) => ({
                url: project.link,
                title: project.organization,
                description: project.description
            }));
        }
        workExperienceTimelineEvents.push({EventThumbnail, EventDescription, EventMilestones})        
    }
    return (
        <div className="experience">
            <h1 className={cn(
                " text-[2.5rem] font-GT-Walsheim-Pro-Bold tracking-[0.025rem] text-[#D0D0D0] text-center")}>Work Experience
            </h1>
            <Timeline timeline={workExperienceTimelineEvents}></Timeline>
        </div>
    );
}


// Have to give overflow-y: auto and overflow-x: hidden to the main class  and also hide the scrollbar for the main class