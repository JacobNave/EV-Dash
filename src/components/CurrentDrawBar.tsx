import React from "react";
import { MAX_DRAW_KW } from "../constants";
import { SectionedProgressBar } from "./SectionedProgressBar";

export interface CurrentDrawBarPropsI {
    currentDraw: number;
}

const colorBlocks:{ [key: string]: string; } = {
    75: "#d60000",
    65: "#d65600",
    50: "#d6ba00",
    35: "#00d60b",
    "-1": "#0059d6"
}

export function CurrentDrawBar (props: CurrentDrawBarPropsI) {  
    const progress:number = 100*(props.currentDraw/MAX_DRAW_KW);
    return (<>
        <SectionedProgressBar width={400} height={50} percent={progress} sectionColors={["#00d60b", "#d6ba00", "#d65600", "#d60000"]} sectionSizes={[25,25,25,25]}/>
    </>);
    
}