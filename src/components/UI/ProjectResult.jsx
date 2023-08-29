import ProjectImage from "./ProjectImage";
import LiveUrl from "./LiveUrl";
function ProjectResult(props) {
    console.log(props);
    return (
        <div className=" projectList d-flex p-4 row d-flex justify-content-center" >
            {props.results.map((result) => (
                <div className="col-3 bg-image card shadow-1-strong m-3 projectCard" key={result[0].id} id={result[0].name}>
                    <div className="card m-2 projectCardBody" >
                        <ProjectImage props={result[0].name} />
                        <div className="card-body d-flex flex-column justify-content-center "  >
                            <h5 className="card-title text-light mx-auto">{result[0].name}</h5>
                            <div className="d-grid gap-2">
                                <a href={result[0].html_url} className="btn btn-dark p-2">Github</a>
                                <LiveUrl props={result[1]} />
                            </div>
                        </div>
                    </div>
                </div>


            ))
            }

        </div >
    )
}

export default ProjectResult;