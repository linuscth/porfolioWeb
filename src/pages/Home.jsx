import { Link } from 'react-scroll';

export default function Home() {
    return (
        <>
            <div className="py-5"></div>
            <div className='row py-4'>
                <img src="src/resources/edited_C+L-65.jpg" alt="photo of Linus" className='col-4' />
                <div className="col-5 p-5 m-5">
                    <div className="">
                        <h1 className="card-header text-body-secondary mx-3 hi1"> Hi! I am <span className="hi2 px-2  ">Linus Cheung</span></h1>

                        <div className="card-body p-4 text-body-tertiary text-body-secondary ">
                            <p className="fs-4 text selfIntro"> I am a dedicated individual who values hard work and critical thinking as the cornerstones of success. I aim to apply my skills from education and work experience in a dynamic, knowledge-driven environment. With strong communication skills and adaptability in fast-paced, growth-oriented settings, I'm seeking a role that offers both personal and professional development.</p>
                            <Link className="btn btn-outline-primary btn-lg m-4 " to="MyBackground" key={1} smooth={true} duration={50} spy={true}> TELL ME MORE!</Link>
                        </div>
                    </div >

                    <div className="col-4 p-3">
                    </div>
                </div>
            </div>

        </>
    );

}