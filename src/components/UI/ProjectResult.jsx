import ProjectImage from "./ProjectImage";
function ProjectResult(props) {
    console.log(props);
    return (
        <div className=" projectList d-flex p-4 row d-flex justify-content-center" >
            {props.results.map((result) => (
                <div className="col-3 bg-image card shadow-1-strong m-3" key={result.id} id={result.name}>
                    <div className="card m-3" >

                        <ProjectImage props={result.name} />

                        <div className="card-body"  >
                            <h5 className="card-title">{result.name}</h5>
                            <a href={result.html_url} className="btn btn-dark btn-sm">Github Repo</a>
                        </div>
                    </div>
                </div>


            ))
            }

        </div >
    )
}

export default ProjectResult;