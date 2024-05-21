import classes from "./../style/Home.module.scss";
// import React, { useEffect, useState } from "react";/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import {
  faLinkedin,
  faGithub,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import image from "./../Images/myimg.jpg";
import { useTypewriter } from "react-simple-typewriter";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "Web Designer"],

    loop: {
      delay: 2000,
    },
  });

  return (
    <motion.div
      className={classes.Home}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={classes.Home_content}>
        <h1> I'm Akshat Agarwal</h1>
        <p>And I'm {text}</p>
        <div className={classes.Home_content_icon}>
          {/* <a href="" className={classes.Home_content_icon_faceBook}>
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a> */}
          <a
            href="https://www.facebook.com/profile.php?id=100058732205015"
            className={classes.Home_icon_Github}
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/akshatagarwal98"
            className={classes.Home_icon_Instagram}
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/akshat-agarwal-55946a27a/"
            className={classes.Home_icon_Linkedin}
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </div>

      <div className={classes.Home_image}>
        <img src={image} />
      </div>
    </motion.div>
  );
};

export default Home;
