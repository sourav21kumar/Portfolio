import { ReactNode } from "react"
// Button Component Props interface
export interface IButtonProps { 
    className?: string,
    children?: ReactNode
    disabled?: boolean
}

// Timeline
export interface IMilestones {
    url: string | undefined,
    title: string,
    description: string
}
export interface ITimeline {
    EventThumbnail: {
        startdate: string,
        enddate: string,
        completed: boolean,
        type: string
    },
    EventDescription: {
        url?: string
        logoPath? : string,
        content: string
    },
    EventMilestones?: IMilestones[]
}
export interface ITimelineProps {
    timeline: ITimeline[];
}