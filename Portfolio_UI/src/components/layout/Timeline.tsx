import React, { FunctionComponent } from 'react';
import { ITimelineProps } from '../../shared/interfaces/interface';
import { getEmploymentDetails } from '../../utility/durationCalculator';
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { highlightKeywordsInParagraphToHTML } from "../../utility/highlightKeywordsInParagraphToHTML";

export const Timeline: FunctionComponent<ITimelineProps> = ({ timeline }) => {
    return (
        <div className='pt-[3rem] pb-[0.5rem] pl-[3rem] pr-[3rem]'>
            <div className='timeline'>
                {timeline.map((tl, index) => (
                    <div key={index} className='timeline-event'>
                        <label className='timeline-event-icon outline-active'></label>
                        <div className='timeline-event-copy'>
                            <p className='timeline-event-thumbnail'>{getEmploymentDetails(tl.EventThumbnail.startdate, tl.EventThumbnail.enddate, tl.EventThumbnail.completed, tl.EventThumbnail.type)}</p>
                            {tl.EventDescription.url ?
                                (
                                    <a href={tl.EventDescription.url} target="_blank">
                                        {tl.EventDescription.logoPath ? (<img src={require(`../../assets/${tl.EventDescription.logoPath}`)} />) : null}
                                        {tl.EventDescription.content.split('\n').map((content, index) => (
                                            <h3 key={index}>{content}</h3>
                                        ))}
                                    </a>
                                ) :
                                (
                                    <div>
                                        {tl.EventDescription.logoPath ? (<img src={require(`../../assets/${tl.EventDescription.logoPath}`)} />) : null}
                                        {tl.EventDescription.content.split('\n').map((content, index) => (
                                            <h3 key={index}>{content}</h3>
                                        ))}
                                    </div>
                                )
                            }
                            {tl.EventMilestones?.map((milestone, index) => (
                                <div key={index} className='milestone'>
                                    <label className='milestone-icon'><HiOutlineRocketLaunch /></label>
                                    {milestone.url ?
                                        (
                                            <a href={milestone.url} className='milestone-event'>
                                                <h3>{milestone.title}</h3>
                                            </a>
                                        ) :
                                        (
                                            <h3>{milestone.title}</h3>
                                        )}
                                   <ul className='list-disc'>
                                   {milestone.description.split('$').map((paragraph, index) =>
                                        <li  key={index} dangerouslySetInnerHTML={{ __html: highlightKeywordsInParagraphToHTML(paragraph) }}></li>
                                    )}
                                   </ul>
                                    
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}