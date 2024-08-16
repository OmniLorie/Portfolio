/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import heroBg from "../assets/images/heroBg.jpg";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-black text-white flex items-center"
    >
      <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center pt-20">
        {/* Text content */}
        <motion.div
          className="w-full lg:w-1/2 lg:pr-12"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-light mb-2">
            hi there, I&apos;m
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Loretta Afua Osibe
          </h1>
          <p className="text-xl md:text-2xl mb-6">
            Front-End Developer | FMCG Product Developer | Marketing Researcher
          </p>

          {/* Contact Information */}
          <div className="text-lg space-y-2">
            <p className="flex items-center">
              <FaPhone className="mr-2" />{" "}
              <a href="tel:+233246273377">+233 247 050 146</a>
            </p>
            <p className="flex items-center">
              <FaEnvelope className="mr-2" />{" "}
              <a href="mailto:losibe27m@gmail.com">losibe27@gmail.com</a>
            </p>
            <p className="flex items-center">
              <FaGithub className="mr-2" />{" "}
              <a
                href="https://github.com/omnilorie"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </p>
            <p className="flex items-center">
              <FaLinkedin className="mr-2" />{" "}
              <a
                href="https://www.linkedin.com/in/loretta-afua-osibe-3672a1132"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="w-full lg:w-1/2 mt-8 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          <img
            src={heroBg}
            alt="Your Name"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
