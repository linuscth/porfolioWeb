import { useState, useEffect } from "react";
import ProjectResult from "../components/UI/ProjectResult";

import search from "../utils/api";


function Myprojects() {
    const [results, setResults] = useState([]);

    const searchRepo = async (queries) => {
        let combinedResults = [];
        for (const query of queries) {
            const { data } = await search(query);
            if (data) {
                combinedResults.push(data);
            }
        }
        setResults(combinedResults)
    }



    useEffect(() => {
        searchRepo(['TheStateReviewer', 'E-Commerce_backEnd', 'pokemon-index', 'weatherDashboard']);
    }, [])


    return (
        <div className=" d-flex flex-column p-5">
            <div className="d-flex justify-content-center m-5">
                < h3 className="font-family-sans-serif p-3 text-muted  border-bottom border-5" > My Portfolio </h3 >
            </div>
            <ProjectResult results={results} />
        </div >
    )
}
export default Myprojects;