import React from "react";
import Products from './Products';
import '../style/home.scss';

const Home = () => {

    return (
        <div className="main" >
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>

                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active adphoto">
                        <img src="/images/Image1.jpg" class="d-block w-100" alt="Background" height="450px" />
                        <div class="carousel-caption d-md-block ">
                            <h5 class=" display-2 fw-bolder text-black mb-0 ">NEW SEASON ARRIVALS</h5>
                        </div>
                    </div>
                    <div class="carousel-item adphoto">
                        <img src="https://www.reliancedigital.in/medias/Monitors-Carousel-Banner-21-12-2022-Dekstop.jpg?context=bWFzdGVyfGltYWdlc3wxMDY0NDV8aW1hZ2UvanBlZ3xpbWFnZXMvaGEwL2g1Mi85OTM1MDUwNjA0NTc0LmpwZ3xiNmM5NDEyYzg3ZmZlYmIxYmY3Zjk2NzJjNjhmMTQxOTk5ODVmODUwNzU1ZjNkYWM4YWFlNDg2Y2M3MzgxZDQy" class="d-block w-100" alt="Background" height="450px" />
                    </div>

                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <Products />
        </div>
    );
}

export default Home;