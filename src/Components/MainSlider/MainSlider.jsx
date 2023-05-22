import React from "react";
import style from "./MainSlider.module.css";
import banner1 from "../../Assets/Images/grocery-banner.png";
import banner2 from "../../Assets/Images/grocery-banner-2.jpeg";
import banner3 from "../../Assets/Images/blog-img-1.jpeg";
import banner4 from "../../Assets/Images/slider-image-2.jpeg";
import banner5 from "../../Assets/Images/slider-image-3.jpeg";
import banner6 from "../../Assets/Images/slider-2.jpeg";
import banner7 from "./../../Assets/Images/695.jpg";
import banner8 from "./../../Assets/Images/blog-img-2.jpeg";
import Slider from "react-slick";

export default function MainSlider() {
  // Slick slider
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <Slider
        {...settings}
        className=" rounded-2 mb-5 overflow-hidden text-center"
        height={200}
      >
        <div className="container">
          <div className="row">
            <div className="col-8 p-0">
              <img className="w-100" height={350} src={banner2} alt="banner" />
            </div>
            <div className="col-4 p-0">
              <img className="w-100" height={115} src={banner3} alt="banner" />
              <img className="w-100" height={115} src={banner6} alt="banner" />
              <img className="w-100" height={120} src={banner8} alt="banner" />
            </div>
          </div>
        </div>

        <div>
          <img className="w-100" height={350} src={banner1} alt="banner" />
        </div>
        <div>
          <img className="w-100" height={350} src={banner2} alt="banner" />
        </div>
        <div>
          <img className="w-100" height={350} src={banner4} alt="banner" />
        </div>
        <div>
          <img className="w-100" height={350} src={banner5} alt="banner" />
        </div>
        <div>
          <img className="w-100" height={350} src={banner6} alt="banner" />
        </div>
      </Slider>
    </>
  );
}
