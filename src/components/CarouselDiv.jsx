import Carousel from 'react-bootstrap/Carousel';
import pic1 from "../resources/IMG_4801.jpg";
import pic2 from "../resources/IMG_5127.jpg";
function CarouselDiv() {
    return (
        <div className='border border-white rounded-end border-3 m-3 p-2 '>
            <Carousel>
                <Carousel.Item>
                    <img src={pic1} className='w-100' text="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={pic2} text="Second slide" className='w-100' />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CarouselDiv;