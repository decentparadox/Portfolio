import React from "react";
import "./Project.css"
import { motion, AnimatePresence } from "framer-motion";
import transition from "src/components/transition.tsx";

import Project1Img from "public/about/img1.jpeg";
import Project2Img from "public/about/img2.jpeg";
import Project3Img from "public/about/img3.jpeg";
import Project4Img from "public/about/img4.jpeg";
import Project5Img from "public/about/img5.jpeg";

const Home = () => {
  return (
    <div className="Home relative">
      {/* <section className="hero">
        <div className="headers">
          <div className="header header-1">
            <h1>
              <motion.div
                initial={{
                  top: "7rem",
                  transition: {
                    duration: 1,
                    ease: [0.83, 0, 0.17, 1],
                    delay: -0.25,
                  },
                }}
                animate={{
                  top: 0,
                  transition: {
                    duration: 1.5,
                    ease: [0.83, 0, 0.17, 1],
                    delay: -0.25,
                  },
                }}
                className="h1"
              >
                joe sournair
              </motion.div>
              <div className="h1-revealer"></div>
            </h1>
            <h1>
              <motion.div
                className="h1"
                initial={{
                  top: "7rem",
                  transition: {
                    duration: 1,
                    ease: [0.83, 0, 0.17, 1],
                    delay: -0.1,
                  },
                }}
                animate={{
                  top: 0,
                  transition: {
                    duration: 1.5,
                    ease: [0.83, 0, 0.17, 1],
                    delay: -0.1,
                  },
                }}
              >
                &nbsp;visual
              </motion.div>
              <div className="h1-revealer"></div>
            </h1>
            <h1>
              <motion.div
                className="h1"
                initial={{
                  top: "7rem",
                  transition: {
                    duration: 1,
                    ease: [0.83, 0, 0.17, 1],
                    delay: 0.05,
                  },
                }}
                animate={{
                  top: 0,
                  transition: {
                    duration: 1.5,
                    ease: [0.83, 0, 0.17, 1],
                    delay: 0.05,
                  },
                }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dev.
              </motion.div>
              <div className="h1-revealer"></div>
            </h1>
          </div>
          <div className="header header-2">
            <h1>
              <motion.div
                className="h1"
                initial={{
                  top: "7rem",
                  transition: {
                    duration: 1,
                    ease: [0.83, 0, 0.17, 1],
                    delay: -0.25,
                  },
                }}
                animate={{
                  top: 0,
                  transition: {
                    duration: 1.5,
                    ease: [0.83, 0, 0.17, 1],
                    delay: -0.25,
                  },
                }}
              >
                portfolio
              </motion.div>
              <div className="h1-revealer"></div>
            </h1>
            <h1>
              <motion.div
                className="h1"
                initial={{
                  top: "7rem",
                  transition: {
                    duration: 1,
                    ease: [0.83, 0, 0.17, 1],
                    delay: -0.1,
                  },
                }}
                animate={{
                  top: 0,
                  transition: {
                    duration: 1.5,
                    ease: [0.83, 0, 0.17, 1],
                    delay: -0.1,
                  },
                }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2022&
              </motion.div>
              <div className="h1-revealer"></div>
            </h1>
            <h1>
              <motion.div
                className="h1"
                initial={{
                  top: "7rem",
                  transition: {
                    duration: 1,
                    ease: [0.83, 0, 0.17, 1],
                    delay: 0.05,
                  },
                }}
                animate={{
                  top: 0,
                  transition: {
                    duration: 1.5,
                    ease: [0.83, 0, 0.17, 1],
                    delay: 0.05,
                  },
                }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2023.
              </motion.div>
              <div className="h1-revealer"></div>
            </h1>
          </div>
        </div>
        <div className="footer">
          <motion.div
            className="divider"
            initial={{
              width: 0,
              transition: {
                duration: 1,
                ease: [0.83, 0, 0.17, 1],
              },
            }}
            animate={{
              width: "100%",
              transition: {
                duration: 1.5,
                ease: [0.83, 0, 0.17, 1],
              },
            }}
          ></motion.div>
          <motion.div
            className="footer-content"
            initial={{
              y: 200,
              opacity: 0,
              transition: { duration: 1, ease: [0.83, 0, 0.17, 1], delay: 2 },
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 2,
                ease: [0.83, 0, 0.17, 1],
              },
            }}
          >
            <div className="footer-col">
              <div className="arrow">
                <p>&darr;</p>
              </div>
              <div className="arrow">
                <p>&darr;</p>
              </div>
            </div>
            <div className="footer-col">
              <p>
                currently creating at <br /> impressions studio
              </p>
            </div>
            <div className="footer-col">
              <p>
                previously visual dev at <br /> chromatic waves
              </p>
            </div>
            <div className="footer-col">
              <p>
                prev intern <br /> at mario
              </p>
            </div>
          </motion.div>
        </div>
      </section> */}

      <div className="projects-nav">
        <div className="projects-nav-container">
          <div className="project-item">
            <a  href="/Projects/Kalser">
              <div className="project-link">
                <div className="project-l">
                  <div className="project-link-img">
                    <img src="public/about/img1.jpeg" alt="" />
                  </div>
                  <div className="project-name">
                    <h2>Kalser</h2>
                  </div>
                </div>
                <div className="project-date">
                  <p>experience</p>
                  <p>/2023</p>
                </div>
                <div className="project-dir">
                  <p>&#8599;</p>
                </div>
              </div>
            </a>
          </div>

          <div className="project-item">
            <a  href="/project">
              <div className="project-link">
                <div className="project-l">
                  <div className="project-link-img">
                    <img src={Project2Img} alt="" />
                  </div>
                  <div className="project-name">
                    <h2>De2De</h2>
                  </div>
                </div>
                <div className="project-date">
                  <p>development</p>
                  <p>/2024</p>
                </div>
                <div className="project-dir">
                  <p>&#8599;</p>
                </div>
              </div>
            </a>
          </div>

          <div className="project-item">
            <a  href="/project">
              <div className="project-link">
                <div className="project-l">
                  <div className="project-link-img">
                    <img src={Project3Img} alt="" />
                  </div>
                  <div className="project-name">
                    <h2>Orca</h2>
                  </div>
                </div>
                <div className="project-date">
                  <p>portfolio</p>
                  <p>/2019</p>
                </div>
                <div className="project-dir">
                  <p>&#8599;</p>
                </div>
              </div>
            </a>
          </div>

          

        
        </div>
      </div>

      <section className="about">
        <div className="about-container">
          <div className="about-col">
            <p>(about me)</p>
            <p>
                  Hey, I'm Sasank
                  Reddy, also known as "decentparadox." I'm currently a student pursuing
                  a degree in Computer Science with a focus on Artificial Intelligence
                  at Amrita School of Engineering, Bangalore. During the day, I work
                  as a graphic and UI/UX designer, and I've got two years of experience
                  under my belt. I'm also into tech stuff like reverse engineering,
                  game hacking, and web development. On weekends, you'll find me
                  diving into Capture The Flag (CTF) challenges.<br /><br />

                  I'm all about learning and growth. My goal is to become a
                  versatile problem solver, so I'm constantly improving my
                  skills in areas like blockchain, app development, machine
                  learning, and networking. I believe in being well-prepared
                  before taking on any projects. When I'm not busy with tech, I
                  love reading books and manga. It's my way of staying creative
                  and inspired.<br /><br />

                  I don't limit myself to one industry; I'm ready to adapt and
                  take on new challenges. While I don't have a fancy mission
                  statement, my passion for learning and mastering new skills
                  drive
            </p>
          </div>
          <div className="about-col">
            <div className="socials">
              <a href="mailto:rsasank69@gmail.com">email &#8599;</a>
              <a href="tg://resolve?domain=decentparadox">telegram &#8599;</a>
              <a href="https://www.linkedin.com/in/sasank-reddy-thirumuru/">linkedin &#8599;</a>
            </div>
          </div>
        </div>
      </section>

      <div className="footer">
        <div className="divider"></div>
     
      </div>
    </div>
  );
};

export default transition(Home);
