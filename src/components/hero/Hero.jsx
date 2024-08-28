import { motion } from "framer-motion";
import "./hero.scss";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },

  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>PANJI KUMBARA</motion.h2>
          <motion.h1 variants={textVariants}>Web Developer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.form action="https://drive.google.com/file/d/1AhynA1Q0F97FLZdHfQzpiIRy0HINXT6G/view?usp=sharing">
              <motion.button variants={textVariants}>
                See My Portofolio
              </motion.button>
            </motion.form>
            <motion.form action="https://mail.google.com/mail/u/1/#inbox?compose=CllgCKCJFQmjkBqbbtWhdsKCwPVQtScMBwRzKZTQrQkPTwkgBPmgrCCrkZlDjMzdQlpgkTSJzdB">
              <motion.button
                variants={textVariants}
                href="https://mail.google.com/mail/u/1/#inbox?compose=CllgCKCJFQmjkBqbbtWhdsKCwPVQtScMBwRzKZTQrQkPTwkgBPmgrCCrkZlDjMzdQlpgkTSJzdB"
              >
                <a href="https://mail.google.com/mail/u/1/#inbox?compose=CllgCKCJFQmjkBqbbtWhdsKCwPVQtScMBwRzKZTQrQkPTwkgBPmgrCCrkZlDjMzdQlpgkTSJzdB">
                  Contact Me
                </a>
              </motion.button>
            </motion.form>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Panji Kumbara - Web Developer
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
