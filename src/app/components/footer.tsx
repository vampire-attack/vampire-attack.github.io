"use client"

import { useEffect } from "react";
import { footerData } from "../copy/footer";
export default function Footer() {
    useEffect(() => {
        const loadScript = (src: string) => {
            return new Promise<void>((resolve, reject) => {
                const script = document.createElement('script');
                script.src = src;
                script.async = true;
                script.onload = () => resolve();
                script.onerror = () => reject(new Error(`Failed to load script ${src}`));
                document.body.appendChild(script);
            });
        };

        const loadScripts = async () => {
            try {
                await loadScript('https://code.jquery.com/jquery-3.6.0.min.js');
                await loadScript('../lib/fadescroll.js');


                const items = document.querySelectorAll('.appear2');
                const itemsAppear = document.querySelectorAll('.appear3');
                const active = function (entries: any) {
                    entries.forEach((entry: any) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('inview2');
                        } else {
                            entry.target.classList.remove('inview2');
                        }
                    });
                }
                const io2 = new IntersectionObserver(active);
                for (let i = 0; i < items.length; i++) {
                    io2.observe(items[i]);
                }


                // appear
                const active2 = function (entries: any) {
                    entries.forEach((entry: any) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('inview2');
                        } else {
                            entry.target.classList.remove('inview2');
                        }
                    });
                }
                const io3 = new IntersectionObserver(active2);
                for (let i = 0; i < itemsAppear.length; i++) {
                    io2.observe(itemsAppear[i]);
                }

                // scroller
                $(window).scroll(function () {
                    const menu = document.querySelector("#menu");
                    if (menu === null) {
                        return;
                    }
                    if (window.scrollY > 300) {
                        if (!menu.classList.contains('fixed-top')) {
                            menu.classList.add('fixed-top');
                        }
                    } else {
                        if (menu.classList.contains('fixed-top')) {
                            menu.classList.remove('fixed-top');
                        }
                    }
                });
            } catch (error) {
                console.error(error);
            }

            const images = document.querySelectorAll('.floating-image');

            document.addEventListener('mousemove', (event) => {
                const { clientX, clientY } = event;
                const centerX = window.innerWidth / 2;
                const centerY = window.innerHeight / 2;

                const deltaX = (clientX - centerX) / centerX;
                const deltaY = (clientY - centerY) / centerY;

                images.forEach((image:any, index) => {
                    const depth = (index + 1) * 10;
                    const offsetX = -deltaX * depth;
                    const offsetY = -deltaY * depth;
                    image.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
                });
            });

        };

        loadScripts();
    }, []);
    return (
        <div className="mt-high" id="footer-cont">
            <div id="seg-3" className="h-100 position-relative">
                <img src="./img/bg-footer.png" className="p-0" alt="footer image" id="bg-footer" />
                <div className="container d-flex h-100">
                    <div className="px-3 ms-md-2 ms-lg-5 px-lg-0 w-lg-60 my-auto">
                        <div className="text-uppercase mt-high item">
                            <h1 className="text-uppercase monserrat-bold text-xlarge text-narrow-height"
                                dangerouslySetInnerHTML={{
                                    __html: typeof footerData.title === 'string'
                                        ? footerData.title
                                        : ""
                                }}>

                            </h1>
                        </div>
                        <div className="text-thin text-medium fauna-one my-4 text-narrow-height text-d4 mb-5 item"
                            dangerouslySetInnerHTML={{
                                __html: typeof footerData.subtitle === 'string'
                                    ? footerData.subtitle
                                    : ""
                            }}>

                        </div>
                        <a target={footerData.button.target}
                            href={footerData.button.url} className="box btn nunito-semibold text-small bg-red btn-xpadding mb-high text-dark item">
                            {footerData.button.name}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
