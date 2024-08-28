import React, { FunctionComponent } from "react";
import { education } from "../../shared/config/education";
import { cn } from "../../utility/cn";
import { Timeline } from "./Timeline";
import { ITimeline, IMilestones } from "../../shared/interfaces/interface";

export const Education: FunctionComponent = () => {
    const educationTimelineEvents: ITimeline[] = [];
    for (let index = 0; index < education.length; index++) {
        
        const exp = education[index];

        const EventThumbnail = { 
            startdate: exp.startDate,
            enddate: exp.endDate,
            completed: exp.completed,
            type: ''
        }

    
        const EventDescription = {
            logoPath: exp.logoPath,
            content: exp.location + '\n' + exp.stream + ' . '  + exp.Branch  
        }

        educationTimelineEvents.push({EventThumbnail, EventDescription})        
    }
  
    return (
        <div className="experience">
            <h1 className={cn(
                " text-[2.5rem] font-GT-Walsheim-Pro-Bold tracking-[0.025rem] text-[#D0D0D0] text-center")}>Education
            </h1>
            <Timeline timeline={educationTimelineEvents}></Timeline>
        </div>
    );
}

// ToDos
// 1. Complete the Education Section
// 2. Resolve the Minor UI Fixed Mentioned Below 

/* Minor UI Fixes 

    1. Need to remove the repeated code 
    for example heading of the Work Experience Section and Education Section
    2. Need to change the 'experience' classname to a more generic name because it is a reusable component
*/ 