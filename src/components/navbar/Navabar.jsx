import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "./sidebar/Sidebar";

const Navabar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Panji Kumbara
        </motion.span>
        <div className="social">
          <a href="https://www.instagram.com/___.panji">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://github.com/PanjiKumbara">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/panji-kumbara/">
            <img src="/linkedin.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navabar;
