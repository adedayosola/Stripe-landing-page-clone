import React from "react";
import { FaRoad } from "react-icons/fa";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
  let { closeSubmenu } = useGlobalContext();

  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payments of infrasture for the internet</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ex
            nobis eum! Ad deleniti expedita magni facere facilis, quaerat ab
            explicabo vel assumenda non sunt ipsum.
          </p>
          <button className="btn">start now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} alt="phone" className="phone-img" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
