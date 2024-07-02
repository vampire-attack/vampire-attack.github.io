"use client"

import { useEffect } from "react";
import { headerData } from "../copy/header";

export default function Header() {
 
    return (
        <div className="container-fluid" id="main-header">
            <div className="heroImage">
                <img id="Background" src="./img/heroImage/Background-only.png" alt="" />
                <img id="RedSun" src="./img/heroImage/red-sun-only1.png" alt="" />
                <img id="vampire-and-horse" src="./img/heroImage/bats.png" alt="" />
                <img id="RedSplash" className="RedSplash-animat" src="./img/heroImage/red-splash.png" alt="" />
                <img id="rocks-below" src="./img/heroImage/rocks-below.png" alt="" />
                <img id="vampire-and-horse" src="./img/heroImage/vampire-and-horse.png" alt="" />
                <img id="vampire-and-horse" className="laser-eyes" src="./img/heroImage/laser-eyes.png" alt="" />
            </div>
            <div className="container">
                <div className="navbar navbar-dark mb-3 mt-1 px-4 fixed-top">
                    <a className="navbar-brand" href="./index.html">
                        <span className="text-small px-1">
                            <img src="./img/navbar-logo.svg" alt="Vampire Attack Logo" /></span>
                    </a>
                </div>


                <div id="seg-0" className="row position-relative">
                    <div className="ps-lg-5 position-relative overflow-hidden mt-high w-100 container header-cont">
                        <div className="px-3 px-lg-0 w-lg-50 fade-effect" fade-time="2" fade-direction="left">
                            <div className="text-uppercase text-narrow-height mt-5">
                                <h1 className="text-uppercase monserrat-bold text-xxlarge text-narrow-height"
                                    dangerouslySetInnerHTML={{
                                        __html: typeof headerData.title === 'string'
                                            ? headerData.title
                                            : ""
                                    }}>

                                </h1>
                            </div>
                            <div className="text-thin text-medium fauna-one my-4 text-narrow-height text-d4 mb-5 ">
                                {headerData.subtitle}
                            </div>
                            <a target={headerData.button.target}
                                href={headerData.button.url} className="box btn nunito-semibold text-small bg-red btn-xpadding mb-high text-dark">
                                {headerData.button.name}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}