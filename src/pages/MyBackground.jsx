import CarouselDiv from "../components/CarouselDiv";
import Resume from "./Resume";
export default function MyBackground() {

    return (
        <div className="container my-3 py-5">
            <div className="row py-4 my-5 py-4">
                <div className="col-5">
                    <CarouselDiv />
                    <Resume />
                </div>
                <div className="col-6 text-dark-emphasis container">
                    <div className="d-flex justify-content-center p-2 border-bottom border-5 "><h3>About Me</h3></div>

                    <p className="fs-5 text selfIntro2">Throughout my professional journey, I've had the privilege to engage in roles ranging from supply chain Project Coordinator to Price Analyst, both of which have honed my skills in strategic planning, effective communication, and problem-solving. My experience in project coordination, negotiations, and budget management has instilled in me a meticulous approach to detail, a deep understanding of stakeholder engagement, and a knack for optimizing processes to ensure project success.</p>
                    <p className="fs-5 text selfIntro2">Over the past year, I've been immersed in the world of software engineering. Learning and working with technologies like HTML5, JavaScript, MongoDB, Typescript, and SAP has not only expanded my technical prowess but also ignited a profound passion for creating elegant solutions to real-world challenges. I believe that my strong analytical skills, acquired from roles like Price Analyst and Quality Assurance Assistant, will seamlessly translate into writing efficient code and debugging complex issues.</p>
                    <p className="fs-5 text selfIntro2">As I embark on this new chapter in software engineering, I am excited to leverage my background in project management to approach coding challenges with a structured and organized mindset. My journey has taught me that success is built on effective communication, continuous learning, and embracing new opportunities. I am committed to applying the same principles to my software engineering endeavors, continually striving to craft elegant and robust solutions that positively impact users' lives.</p>
                </div>
            </div>

        </div>
    )
}