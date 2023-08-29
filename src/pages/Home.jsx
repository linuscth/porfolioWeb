import { Link } from 'react-scroll';
import pic1 from "../resources/edited_C+L-65.jpg";
export default function Home() {
    return (
        <>
            <div className="py-5"></div>
            <div className='row py-4'>
                <img src={pic1} alt="photo of Linus" className='col-4 w-30' />
                <div className="col-5 p-5 m-5">
                    <div className="">
                        <h1 className="card-header text-body-secondary mx-3 hi1"> Hi! I am <span className="hi2 px-2  ">Linus Cheung</span></h1>

                        <div className="card-body p-4 text-body-tertiary text-body-secondary ">
                            <p className="fs-4 text selfIntro"> A passionate and dedicated individual with a diverse background that merges supply-chain and project management with an exciting new journey in software engineering. With a Bachelor's degree in International Business and a minor in Japanese from the University of California, San Diego, I've built a solid foundation in adaptability, project management, and communication.

                            </p>
                            <Link className="btn btn-outline-primary btn-lg m-4 " to="Resume" key={1} smooth={true} duration={50} spy={true}> TELL ME MORE!</Link>
                        </div>
                    </div >

                    <div className="col-4 p-3">
                    </div>
                </div>
            </div>

        </>
    );

}