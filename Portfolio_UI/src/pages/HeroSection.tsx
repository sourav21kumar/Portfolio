import React, { FunctionComponent } from "react";
import { cn } from "../utility/cn";
import { Button } from '../components/UI/Button'
import { Spotlight } from "../components/UI/Spotlight";

export const HeroSection: FunctionComponent = () => {

    return (
        <>
            <Spotlight className="-top-40 left-0 md:left-[18rem] md:-top-20" fill="white" />
            <div className={cn(
                " h-screen w-full flex flex-col items-center justify-center md:items-center md:justify-center bg-[#0D0D0F] antialiased relative overflow-hidden"
            )}>

                {/* Have to remove the justify center and also give the child div containing profile image a top value if required */}
                <div className="relative flex flex-col p-4 mb-[1.2rem] gap-[1.5rem] items-center justify-center  inset-0 bg-[linear-gradient(to_right,#16161a_1px,transparent_1px),linear-gradient(to_bottom,#16161a_1px,transparent_1px)] bg-[size:38px_38px] bg-center">
                    {/* Portfolio Profile Image #121214 #0b0b0b*/}
                    <div className={cn(
                        "relative h-[17rem] w-[17rem] rounded-[50%] flex items-center justify-center border-[5px] border-solid border-[#121214] bg-[#121214]"
                        // top-[-1rem]"
                    )}>

                        <div className={cn(
                            "relative h-[16rem] w-[16rem] rounded-[50%] profile border-[5px] border-solid border-[#121214]"
                        )} />
                    </div>

                    {/* Short Introduction Text #F5F5F5 #F8F8F8*/}
                    <div className="relative w-[100%] h-fit flex flex-col gap-[0.2em]">
                        <h1 className="text-3xl m-auto font-GT-Walsheim-regular text-[3rem] leading-[1.25rem] text-center text-[#CFCFCF] antialiased flex gap-[1rem] flex-wrap items-center justify-center pt-[1rem] pb-[1rem]">Hey, It's<div className="inline-block font-GT-Walsheim-Pro-Bold text-[2.5rem] tracking-[0.025rem] text-[#FFFFFF] text-nowrap">Sourav Swain.</div></h1>
                        <h1 className="text-[2.3rem] m-auto font-GT-Walsheim-regular optica font-bold text-center text-[#FFFFFF] antialiased tracking-[-0.025em]">Full Stack Developer</h1>
                        <q className="text-[#CFCFCF] font-GT-Walsheim-regular mt-[0.7rem] text-[medium] md:text-[large] tracking-[0.05em]">Driven by curiosity and armed with full-stack expertise, I am a web developer who relishes tackling challenges head-on, turning problems into polished solutions.</q>
                    </div>
                </div>
                <Button className="btn-primary">
                    <div>
                        <i className="fa-solid fa-arrow-up-right-from-square"></i><span>Resume</span>
                    </div>
                </Button>

                <div className="icon-scroll"></div>
            </div>
        </>

    )
}
