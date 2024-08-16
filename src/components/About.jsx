import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import landingBg from "../assets/images/aboutbg_2.jpg"; // Update with your actual image path

const About = () => {
  const [darkMode, setDarkMode] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  const accentColor = "#4A90E2"; // A subtle blue accent color

  return (
    <section
      id="about"
      className={`relative min-h-screen flex flex-col justify-center items-center ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } transition-all duration-500`}
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-10 z-0"
        style={{ backgroundImage: `url(${landingBg})` }}
      ></div>
      <div className="container mx-auto px-4 z-10">
        <motion.button
          onClick={() => setDarkMode(!darkMode)}
          className={`absolute top-4 right-4 p-3 rounded-full ${
            darkMode ? "bg-white text-black" : "bg-black text-white"
          } transition-all duration-300`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {darkMode ? "☀️" : "🌙"}
        </motion.button>

        <div className="grid md:grid-cols-2 gap-12 items-center pl-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.img
              src={landingBg}
              alt="Profile"
              className="w-full max-w-md rounded-lg shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              whileHover={{ scale: 1.05 }}
              style={{ color: accentColor }}
            >
              About Me
            </motion.h2>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Hello, I&apos;m Loretta Afua Osibe, a passionate Junior Front-end
              Developer focused on designing visually engaging and user-friendly
              web interfaces. Drawing from my solid foundation in marketing and
              product development, I offer a distinctive approach to web
              development. I specialize in building seamless digital experiences
              that perfectly balance design and functionality. I specialize in:
            </p>
            <motion.ul
              className="list-none mb-6 space-y-2"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {[
                "Building interactive user interfaces with React",
                "Crafting modern web designs using Tailwind CSS",
                "Writing clean and efficient code with JavaScript and HTML/CSS",
                "Utilizing marketing principles to enhance user experience and engagement",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center space-x-2"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <motion.span
                    style={{ color: accentColor }}
                    whileHover={{ scale: 1.2 }}
                  >
                    ▹
                  </motion.span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
            <motion.a
              href="#contact"
              className={`inline-block px-6 py-3 ${
                darkMode ? "bg-white text-black" : "bg-black text-white"
              } rounded-full shadow-lg hover:shadow-xl transition duration-300`}
              whileHover={{
                scale: 1.05,
                backgroundColor: accentColor,
                color: "white",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
