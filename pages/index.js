import Image from "next/image";

// Components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

// Framer Motion
import { motion } from "framer-motion";

// Variants
import { fadeIn } from "../variants";

// Variant pour une pulsation de l'image de fond
const pulseVariant = {
  animate: {
    scale: [1, 1.05, 1],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

// Variant pour un effet de glow pulsant sur le conteneur
const glowVariant = {
  animate: {
    filter: [
      "drop-shadow(0 0 0px rgba(89,65,169,0.8))",
      "drop-shadow(0 0 20px rgba(89,65,169,1))",
      "drop-shadow(0 0 0px rgba(89,65,169,0.8))",
    ],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

// Variant pour une rotation discrète du cadre
const rotateVariant = {
  animate: {
    rotate: [-3, 3, -3],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

const Home = () => {
  return (
    <div className="bg-primary h-full relative overflow-hidden">
      {/* Section Texte */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="container mx-auto h-full flex flex-col justify-center xl:pt-40 xl:text-left text-center ">
          {/* Titre */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
          
            Transforming Ideas <br /> Into{" "}
            <span className="text-accent"> Digital Reality</span>
          </motion.h1>
          {/* Sous-titre */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl xl:mx-0 mb-10 xl:mb-16"
          >
            Bringing together innovative design, cutting-edge technology, and seamless development to create stunning digital experiences.
          </motion.p>
          {/* Bouton */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* Section Image & Effets */}
      <div className="absolute inset-0">
        {/* Image de fond animée */}
        <motion.div
          variants={pulseVariant}
          animate="animate"
          className="hidden xl:block absolute inset-0 mix-blend-screen"
        >
         
         
        </motion.div>
        {/* Particules */}
        <ParticlesContainer />
        {/* Avatar avec cadre tournant discret */}
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute bottom-20 lg:right-[8%] w-[500px] h-[500px] flex justify-center items-center"
        >
          {/* Wrapper avec rotation */}
          <motion.div
            variants={rotateVariant}
            animate="animate"
            className="w-full h-full"
          >
            {/* Cadre circulaire avec effet glass et glow */}
            {/* <motion.div
              variants={glowVariant}
              animate="animate"
              className="w-full h-full rounded-full flex justify-center items-center relative border-4 border-accent bg-white/10 backdrop-blur-md shadow-lg"
            >
              <Avatar />
            </motion.div> */}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
