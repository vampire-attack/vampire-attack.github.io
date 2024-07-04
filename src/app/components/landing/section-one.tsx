"use client"

import { useEffect } from "react";
import { landingData } from "@/app/copy/landing";

export default function SectionOne() {
    return (
        <>
            <div className="row mt-high mb-high position-relative">
                <div className="col-xl-5 position-relative mt-high" id="main-sec-2">
                    <img src="./img/bg-what.png" className="bg-what-main" />
                    <div className="floating-image position-relative el-1-main">
                        <img src="./img/el-3.png" className="el-1 " alt="What it is" />
                        <img src="./img/vampireTooth.png" className="el-tooth" alt="What it is" />
                    </div>
                    <div className="floating-image position-relative el-3-main">
                        <img src="./img/el-2.png" className="el-2" alt="What it is" />
                        <img src="./img/vampireTooth.png" className="el-tooth-2" alt="What it is" />
                    </div>
                    <div className="floating-image position-relative el-2-main">
                        <img src="./img/el-1.png" className="el-3" alt="What it is" />
                        <img src="./img/vampireTooth.png" className="el-tooth-3" alt="What it is" />
                    </div>

                    <div className="floating-image position-relative el-4-main">
                        <img src="./img/el-4.png" className="el-4" alt="What it is" />
                        <img src="./img/vampireTooth.png" className="el-tooth-4" alt="What it is" />
                    </div>
                </div>
                <div className="col-xl-7 mt-high" style={{ ["paddingInline" as any]: "2rem" }}>
                    {landingData.home.segmentOne.map((item, index) =>
                    (
                        <div className="mt-5" key={index}>
                            <h3 className="monserrat-bold text-large text-uppercase"
                                dangerouslySetInnerHTML={{
                                    __html: typeof item.title === 'string'
                                        ? item.title
                                        : ""
                                }}
                                ></h3>
                            <p className="text-d4 text-medium fauna-one w-90 mt-4"
                                dangerouslySetInnerHTML={{
                                    __html: typeof item.description === 'string'
                                        ? item.description
                                        : ""
                                }}>
                            </p>
                        </div>
                    )

                    )}
                    
                </div>
            </div>
        </>
    )
}