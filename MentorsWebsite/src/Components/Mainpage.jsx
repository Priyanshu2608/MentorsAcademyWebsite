import React from "react";
import "./Mainpage.css";
import Adv from "../assets/men.jpg";
import vid from "../assets/vid.mp4";
import vid2 from "../assets/vid2.mp4";

const Mainpage = () => {
  return (
    <div>
      <div className="container">
        <img className="main" src={Adv} alt="" />
        <div className="write">
          <h2 className="coverline">Welcome To Mentors' Academy</h2>
          <h3 className="subhead">"Discover the joy of learning"</h3>
        </div>
        <div className="open">
          <a
            className="ad"
            href="https://docs.google.com/forms/d/e/1FAIpQLSc2N0nTXUwFHx5jVwL2gKv-Or-QCMh5BQIpSSCqV_6AYn0mKw/viewform?usp=header"
          >
            Admissions Open{" "}
          </a>
        </div>
      </div>
      <div className="content">
        <h1 className="who">Who We Are?</h1>
        <div className="text-box">
          <h3 className="content2">
            Welcome to Mentors Academy, where learning meets excellence! We are
            a premier educational institution dedicated to nurturing young minds
            from nursery to 10th grade. Our academy offers a holistic approach
            to education, covering all subjects with a focus on academic
            brilliance and personal growth. Our faculty comprises highly
            experienced and passionate teachers who bring out the best in every
            child. With a strong emphasis on creating a supportive and engaging
            environment, we ensure that learning is both enjoyable and
            effective. At Mentors Academy, we believe every child deserves the
            best start in life. Join us in shaping the leaders of tomorrow!
          </h3>
        </div>
        <div className="vision">
          <h1 className="vison-head">Our Vision</h1>
          <div className="box-vision">
            <h3 className="vision-content">
              At Mentors Academy, our vision is to empower every child with the
              knowledge, skills, and confidence to excel in academics and
              beyond. We aspire to create a nurturing and stimulating
              environment where young minds flourish, curiosity thrives, and
              lifelong learning begins. Our goal is to set the standard for
              quality education, guided by experienced educators who inspire and
              mentor students to reach their fullest potential. We envision a
              future where every child we teach becomes a responsible, capable,
              and compassionate individual ready to contribute positively to the
              world.
            </h3>
          </div>
        </div>
        <div className="vid">
          <video className="vid1" src={vid} controls autoPlay></video>
          <div className="side-box">
            <h3 className="side-content">
              "Mentors Academy: Shaping bright futures with exceptional
              teaching, a nurturing environment, and a commitment to every
              child's success."
            </h3>
          </div>
        </div>
        <div className="vid2">
          <video className="video2" controls autoPlay src={vid2}></video>
          <div className="side-box2">
            <h3 className="side-content2">
              "Unlock success in Maths and Science with focused, expert-led
              classes designed for every learner!"
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
