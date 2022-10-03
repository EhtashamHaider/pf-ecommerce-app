import React from "react";
import sale1 from '../assets/sale1.jpg';
import sale2 from '../assets/sale2.jpg';
import sale3 from '../assets/sale3.jpg';
import '../Styles/crousal.css';

export default function SalesCrousel() {
    return (
        <div className="crousal my-2">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={sale1} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={sale2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={sale3} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}
