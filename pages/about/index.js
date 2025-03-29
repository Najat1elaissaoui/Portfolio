import React, { useState } from "react";
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaDatabase,
  FaPython,
  FaFlask
} from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import { TbBrandFlutter } from "react-icons/tb";
import {
  SiNextdotjs,
  SiMysql,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiSqlite,
  SiKotlin,
  SiTailwindcss,
  SiDotnet,
  SiSpringboot,
  SiFlask
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          { icon: <FaHtml5 />, name: "HTML5" },
          { icon: <FaCss3 />, name: "CSS3" },
          { icon: <FaJs />, name: "JavaScript" },
          { icon: <FaReact />, name: "React" },
          { icon: <SiNextdotjs />, name: "Next.js" },
          { icon: <SiFramer />, name: "Framer" },
          { icon: <FaPython />, name: "Python" },
          { icon: <SiFlask />, name: "Flask" },
          { icon: <SiSpringboot />, name: "Spring Boot" },
          { icon: <SiDotnet />, name: "Dotnet" },
          { icon: <SiTailwindcss />, name: "TailwindCSS" },
        ],
      },
      {
        title: "Mobile Development",
        icons: [
          { icon: <TbBrandFlutter />, name: "Flutter" },
          { icon: <DiAndroid />, name: "Android" },
          { icon: <SiKotlin />, name: "Kotlin" }
        ],
      },
      {
        title: "Machine Learning & Computer Vision",
        icons: [
          { icon: <FaPython />, name: "Python" },
          { icon: <SiFlask />, name: "Flask" }
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          { icon: <FaFigma />, name: "Figma" },
          { icon: <SiAdobexd />, name: "Adobe XD" },
          { icon: <SiAdobephotoshop />, name: "Photoshop" },
        ],
      },
      {
        title: "Databases & Data Analysis",
        icons: [
          { icon: <SiMysql />, name: "MySQL" },
          { icon: <SiSqlite />, name: "MongoDB" },
          { icon: <FaDatabase />, name: "Database" }
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      { title: "Intern - Ciments du Maroc (IT & AI Department)", stage: "2024" },
      { title: "Intern - OCP Safi (Software Development)", stage: "2024" }
    ],
  },
  {
    title: "education",
    info: [
      { title: "Computer Engineering & AI - ENSA Safi", stage: "2021 - Present" }
    ],
  },
];

// Components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// Framer Motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// Counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* Avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[70px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* Text */}
        <br />
        <br />
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Passionate about <span className="text-accent">Technology</span> & AI Innovations
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 xl:mb-12 px-2 xl:px-0"
          >
            A highly motivated software engineer with expertise in web development, AI-driven applications, and database management.
          </motion.p>
          {/* Counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* Experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:ring-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={5} /> +
                </div>
                <div className="text-xs uppercase translate-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
             
              {/* Projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:ring-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={2} /> +
                </div>
                <div className="text-xs uppercase translate-[1px] leading-[1.4] max-w-[100px]">
                  finished projects
                </div>
              </div>
             
            </div>
          </motion.div>
        </div>
        {/* Info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 ${
                  index === itemIndex
                    ? "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                    : ""
                }`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
              >
                {/* Title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                {item.stage && (
                  <>
                    <div className="hidden md:flex">-</div>
                    <div>{item.stage}</div>
                  </>
                )}
                <div className="flex gap-x-4">
                  {/* Icons with hover tooltip (only for skills) */}
                  {item.icons?.map((iconObj, iconIndex) => (
                    <div
                      key={iconIndex}
                      className="text-2xl text-white relative"
                      onMouseEnter={() => setHoveredSkill(iconObj.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      {iconObj.icon}
                      {hoveredSkill === iconObj.name && (
                        <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
                          {iconObj.name}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
