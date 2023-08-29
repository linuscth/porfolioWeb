import TheStateReviewer from "../../resources/TheStateReviewer.png";
import pokemonIndex from "../../resources/pokemon-index.png";
import eCommerceBackEnd from "../../resources/E-Commerce_backEnd.png";
import weatherDashboard from "../../resources/weatherDashboard.png";
import Password_Generator from "../../resources/Password_Generator.png";

function ProjectImage(props) {
    console.log(props.props);
    let imageSource;
    switch (props.props) {
        case 'TheStateReviewer':
            imageSource = TheStateReviewer
            break;
        case 'E-Commerce_backEnd':
            imageSource = eCommerceBackEnd;
            break;
        case 'pokemon-index':
            imageSource = pokemonIndex;
            break;
        case 'weatherDashboard':
            imageSource = weatherDashboard;
            break;

        case 'Password_Generator':
            imageSource = Password_Generator;
            break;

    }
    return (
        <img
            src={imageSource}
            alt="projectPic"
            className=" rounded card-img-top projectPic"
        />

    );
}

export default ProjectImage