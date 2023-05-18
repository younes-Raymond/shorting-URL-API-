import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import { FaEnvelope } from 'react-icons/fa';
import './Hero.css'
const Hero = () => {

  function handleClick() {
    window.location.href = 'mailto:younesraymond@gmail.com';
  }

  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span className="primaryText" variants={fadeIn("right", "tween", 0.2, 1)}>
            Hey There,
            <br />
            I'm Younes Raymond.
          </motion.span>
          <motion.span className="secondaryText"variants={fadeIn("left", "tween", 0.4, 1)}>
            I'm a MERN stack developer.
            <br />
            I love building web applications.
            <br /> 
            and solving problems.
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img variants={slideIn("up", "tween", 0.5, 1.3)} src="./person.png" alt="" />
        </motion.div>

     <motion.div 
     
     >
      <motion.button  >
        Hire Me 
      </motion.button>
     </motion.div>
        <a className={css.email} href="#" onClick={handleClick}>
          <FaEnvelope size={40} /> Inbox me
        </a>
         <motion.button>Download Me </motion.button>
        <div className={css.lowerElements}>
          <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className={css.experience}>
            <div className="primaryText">5</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("left", "tween", 0.5, 1)} className={css.certificate}>
            <img src="./certificate.png" alt="" />
            <span>CERTIFIED PROFESSIONAL</span>
            <span>MERN STACK DEVELOPER</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;