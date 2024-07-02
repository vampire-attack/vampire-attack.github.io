"use server"

import Footer from "@/app/components/footer";
import Header from "@/app/components/header"
import SectionOne from "@/app/components/landing/section-one";

export default async function Landing() {

    return (
        <div className="content text-n100 position-relative overflow-hidden">
            <Header />
            <div className="container">
                <SectionOne />
            </div>
            <footer id="footer">
                <Footer />
            </footer>
        </div>
    );
}