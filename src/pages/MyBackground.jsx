import pic1 from "../resources/IMG_5127.jpg";
import pic2 from "../resources/IMG_4801.jpg";
export default function MyBackground() {

    return (
        <div className="container p-4 my-5 py-5">
            <div className="row p-4 my-5 py-5">
                <div className="col-5">
                    <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={pic1} className="d-block w-100" alt="pic1" />
                            </div>
                            <div className="carousel-item">
                                <img src={pic2} className="d-block w-100" alt="pic1" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>
                <div className="col-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus atque nemo, ratione nulla accusamus, odit, molestias ut dolorem quae reprehenderit beatae perferendis maiores et minus quaerat necessitatibus asperiores quod ea Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores iure sint nobis quaerat recusandae nisi, rerum provident, corporis excepturi qui dicta. Libero quia, totam repellendus quaerat voluptatem officiis exercitationem similique.</div>
            </div>

        </div>
    )
}