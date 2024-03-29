import React from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import WindowSize from "../../Utils/WindowSize";
import styles from "./About.module.css";


const About = () => {
  const { newTheme } = React.useContext(ThemeContext);
  const [width] = WindowSize();
  const img =
    width < 650
      ? "https://github.com/RahulGoyal03/Portfolio/blob/main/public/IMG_3379-removebg-modified_ccexpress__1_-removebg-preview.png?raw=true"
      : "https://github.com/RahulGoyal03/Portfolio/blob/main/public/developer.gif?raw=true";
  return (
    <div
      className={styles.container}
      style={{ boxShadow: `3px 3px 5px ${newTheme.line}` }}
    >
      <div className={styles.first}>
        <img
          src={
            "https://github.com/RahulGoyal03/Portfolio/blob/main/public/developer.gif?raw=true"
          }
          alt=""
        />
      </div>
      <div className={styles.second}>
        <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
          About Me
        </h1>
        <div className={styles.borderBottom} />
        <p style={{ color: `${newTheme.para}` }} className={styles.aboutMe}>
        Passionate web developer with a solid foundation in HTML, CSS, and over a year of experience in crafting diverse web applications. Proficient in backend development, with expertise in React and Redux, Redux, Node.js, Express, and MongoDB.eager to contribute to innovative projects and collaborate within a team.          <br /> Through this experience, I've honed my skills in backend development and gained proficiency in React and Redux. Eager to leverage my expertise, teamwork, and communication skills,
          <span style={{ color: `#00a0a0` }}>
            {" "}
            Now seeking opportunities as a full-stack web developer. Let's bring innovative ideas to life!
          </span>
          .
        </p>
      </div>
      
    </div>
  );
};

export default About;
