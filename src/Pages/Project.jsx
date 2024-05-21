import React from "react";
import classes from "./../style/Project.module.scss";
import Project1 from "./../Images/project1.png";
import Project2 from "./../Images/a.png";
import Project3 from "./../Images/project3.png";
import Project4 from "./../Images/project4.png";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={classes.Project}
    >
      <div className={classes.Project_content}>
        <p
          style={{
            color: "white",
            fontSize: "20px",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          {" "}
          This Porfolio Made with React-js and Style-scss
        </p>
        <iv className={classes.Project_content_item1}>
          <div>
            <img src={Project1} />
          </div>
          <span>
            <p>
              We'll take you on a virtual tour of Bharat, exploring each state
              highlighting its top tourists attractions, and providing insights
              into accommodations and culinary experiences. It is helpful for
              find the best places for travelling and hotels for staying. All
              required things like (Airline, Buses, Weather conditions
              compatible with all types of budgets). Our mission is to delve
              into the essence of easy state understanding the holistic,
              adventureful historical and many more places. we discover the
              incredible beauty and cultural kaleidoscope that is Bharat.
              <br />
              <br />
              This is the first group project i made with the help of Aman
              gupta(CSAI) and Aarohi srivastava(CSAI)
              <br />
              <br />
              LANGUAGE USED: HTML,CSS,JAVASCRIPT
            </p>
            <a href="https://65dcb1b93bac140f1b14c10a--cool-torte-631e9a.netlify.app/">
              <button>View Live</button>
            </a>
          </span>
        </iv>
        <br />
        <hr />
        <br />
        <div className={classes.Project_content_item1}>
          <div style={{ height: "300px" }}>
            <img
              src={Project2}
              style={{
                height: "200px",
                marginTop: "50px",
              }}
            />
          </div>
          <span>
            <p>
              🌦️ Real-Time Updates: Receive up-to-the-minute weather information
              to make informed decisions about your day. 🌍 Global Coverage:
              Access weather forecasts for any location worldwide, ensuring
              you're prepared wherever your adventures take you. 🌡️ Temperature
              Insights: Stay in the know with precise temperature forecasts,
              including hourly and daily variations. 💨 Wind and Precipitation:
              Plan for wind and rain with detailed forecasts, helping you dress
              appropriately and plan outdoor activities. <br />
              <br />
              LANGUAGE USED: HTML,CSS,JAVASCRIPT
            </p>
            <a href="https://65dca029d0cbcb00a1ce07b7--dreamy-cupcake-39ffeb.netlify.app/">
              <button>View Live</button>
            </a>
          </span>
        </div>
        <br />
        <hr />
        <br />
        <div className={classes.Project_content_item1}>
          <div>
            <img src={Project3} />
          </div>
          <span>
            <p>
              Boost your productivity and take control of your day with
              TaskMaster, the ultimate todo list app designed to streamline your
              workflow. Whether you're managing work projects, planning your
              personal life, or simply staying organized, TaskMaster is here to
              simplify your task management process.
              <br />
              <br />
              LANGUAGE USED: REACT_JS
            </p>
            <a href="https://01-todoapp.netlify.app">
              <button>View Live</button>
            </a>
          </span>
        </div>
      </div>
      <br />
      <hr />
      <br />

      <div className={classes.Project_content_item1}>
        <div>
          <img src={Project4} />
        </div>
        <span>
          <p>
            Unleash your inner artist with ChromaCraft, the ultimate color
            generator that sparks creativity and adds vibrancy to your projects.
            Whether you're designing a website, crafting artwork, or planning a
            color palette for your space, ChromaCraft empowers you to explore
            endless color possibilities with ease.
            <br />
            <br />
            LANGUAGE USED: REACT_JS
          </p>
          <a href="">
            <a href="https://65dcb10abe1c330f4f8adf21--earnest-empanada-ea2b02.netlify.app/">
              <button>View Live</button>
            </a>
          </a>
        </span>
      </div>
    </motion.div>
  );
};

export default Project;
