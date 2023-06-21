import React from "react";
import BannerSlide from "./BannerSlide";
import Event from "./Event";
import Apply from "./Apply";
import Video from "./Video";
import Testimonial from "./Testimonial";
import Course from "./Course";
import Study from "./Study";
import "./Home.css";

function Index() {
  return (
    <>
      <BannerSlide />
      <Apply />
      <Event />
      <Video />
      <Testimonial/>
      {/* <Course /> */}
      <Study />
    </>
  );
}

export default Index;
