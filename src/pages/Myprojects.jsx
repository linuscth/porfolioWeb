import { useState, useEffect } from "react";
import ProjectResult from "../components/UI/ProjectResult";

import search from "../utils/api";


function Myprojects() {
    const [results, setResults] = useState([]);

    const searchRepo = async (queries) => {
        try {
            const searchPromise = queries.map(async (query) => {
                const { data } = await search(query[0]);
                if (data) {
                    if (query[1]) {
                        return [data, query[1]]
                    }
                    return [data]
                } else {
                    return []
                }
            })
            const results = await Promise.all(searchPromise)
            console.log(results);
            setResults(results)

        } catch (error) {
            console.log(error);

        }
        // console.log(searchPRomise);
        // setResults(searchPRomise)
    }



    useEffect(() => {
        searchRepo([['TheStateReviewer'], ['E-Commerce_backEnd'], ['pokemon-index', 'https://linuscth.github.io/pokemon-index/'], ['weatherDashboard', 'https://linuscth.github.io/weatherDashboard/'], ['Password_Generator', 'https://linuscth.github.io/Password_Generator/']]);
    }, [])


    return (
        <div className=" d-flex flex-column m-5 p-5">
            <div className="d-flex justify-content-center m-5">
                < h3 className="font-family-sans-serif p-5" > My Portfolio </h3 >
            </div>
            <ProjectResult results={results} />
        </div >
    )
}
export default Myprojects;