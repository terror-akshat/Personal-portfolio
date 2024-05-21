// import React from "react";
// import classes from "./../style/About.module.scss";
// import image from "./../Images/myimg.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { motion } from "framer-motion";
// import {
//   faHtml5,
//   faJs,
//   faCss3Alt,
//   faReact,
// } from "@fortawesome/free-brands-svg-icons";

// const About = () => {
//   const skills = [
//     {
//       title: "HTML5",
//       icon: <faHtml5 />,
//     },
//     {
//       title: "CSS3",
//       icon: <faCss3Alt />,
//     },
//     {
//       title: "JAVASCRIPT",
//       icon: <faJs />,
//     },
//     {
//       title: "REACT-JS",
//       icon: <faReact />,
//     },
//   ];

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className={classes.About}
//     >
//       <div className={classes.About_content}>
//         <section className={classes.About_content_image}>
//           <img src={image} alt="" />
//         </section>
//         <section className={classes.About_content_info}>
//           <h1>About me</h1>
//           {/* <h2>Btech Student</h2> */}
//           <p>
//             My name is Akshat Agarwal a motivated and dedicated B.tech Student
//             currently in thier 2nd year of stduies. Based in kanpur,
//             Uttarpradesh, possess strong team-work ad passion for learing. Eager
//             to apply their knowledge and contribute innovative projects They are
//             a proactive team player with string work ethics. Try to seeking
//             oppportunites to futher develop their skills and make a positive
//             impact in the field of technology.
//           </p>
//           <div className={classes.About_content_info_personal}>
//             <div>
//               <span style={{ color: "white" }}>Name:</span>
//               <span>Akshat Agarwal</span>
//             </div>
//             <div>
//               <span style={{ color: "white" }}>Age:</span>
//               <span>20 </span>
//             </div>
//           </div>
//           <div className={classes.About_content_info_personal1}>
//             <div>
//               <span style={{ color: "white" }}>Email:</span>
//               <span>www.akshatagarwal123klj@gmail.com</span>
//             </div>
//             <div>
//               <span style={{ color: "white" }}>Adress:</span>
//               <span>Kanpur,Kalayanpur,up</span>
//             </div>
//           </div>
//         </section>
//       </div>
//       <section className={classes.About_skills}>
//         <div className={classes.About_skills_item}>
//           <p>Technical Skills</p>
//           <div>
//             {skills.map((el, index) => (
//               <div key={index}>
//                 <span>{el.title}</span>
//                 <FontAwesomeIcon
//                   icon={el.icon}
//                   style={{ width: 100, height: 100, color: "#fff" }}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </motion.div>
//   );
// };

// export default About;
import React from "react";
import classes from "./../style/About.module.scss";
import image from "./../Images/myimg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { motion } from "framer-motion";
import {
  faHtml5,
  faJs,
  faCss3Alt,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { Tooltip } from "@mui/material";

const About = () => {
  const skills = [
    {
      title: "HTML5",
      icon: faHtml5,
    },
    {
      title: "CSS3",
      icon: faCss3Alt,
    },
    {
      title: "JAVASCRIPT",
      icon: faJs,
    },
    {
      title: "REACT-JS",
      icon: faReact,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={classes.About}
    >
      <div className={classes.About_content}>
        <section className={classes.About_content_image}>
          <img src={image} alt="" />
        </section>
        <section className={classes.About_content_info}>
          <h1>About me</h1>
          {/* <h2>Btech Student</h2> */}
          <p>
            My name is Akshat Agarwal a motivated and dedicated B.tech Student
            currently in their 2nd year of studies. Based in Kanpur, Uttar
            Pradesh, possess strong teamwork and passion for learning. Eager to
            apply their knowledge and contribute innovative projects. They are a
            proactive team player with strong work ethics. Seeking opportunities
            to further develop their skills and make a positive impact in the
            field of technology.
          </p>
          <div className={classes.About_content_info_personal}>
            <div>
              <span style={{ color: "white" }}>Name:</span>
              <span>Akshat Agarwal</span>
            </div>
            <div>
              <span style={{ color: "white" }}>Age:</span>
              <span>20 </span>
            </div>
          </div>
          <div className={classes.About_content_info_personal1}>
            <div>
              <span style={{ color: "white" }}>Email:</span>
              <span>www.akshatagarwal123klj@gmail.com</span>
            </div>
            <div>
              <span style={{ color: "white" }}>Adress:</span>
              <span>Kanpur,Kalayanpur,up</span>
            </div>
          </div>
        </section>
      </div>
      <section className={classes.About_skills}>
        <div className={classes.About_skills_item}>
          <p>Technical Skills</p>
          <div>
            {skills.map((el, index) => (
              <div key={index}>
                <Tooltip
                  placement="top"
                  sx={{ color: "#fff" }}
                  title={el.title}
                >
                  <FontAwesomeIcon
                    icon={el.icon}
                    style={{
                      width: 100,
                      height: 100,
                      color: "#fff",
                    }}
                  />
                </Tooltip>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
