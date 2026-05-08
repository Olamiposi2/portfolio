import emailjs from "@emailjs/browser";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import logo from "./assets/icon.png";
import profile from "./assets/thepriest.png";
function App() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_vd6d2vo",
        "template_3sjtzy6",
        formData,
        "qyrXW_qd6tZOBVcP2",
      )
      .then(() => {
        alert("Message sent successfully");
        setFormData({ user_name: "", user_email: "", message: "" });
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message");
      });
  };
  return (
    <div className="bg-[#0b0f14] min-h-screen text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-5 md:px-10 py-0 border-b border-gray-800">
        {/* Logo */}
        <img src={logo} alt="icon" className="w-45 h-45 object-contain" />

        {/*Links*/}
        <ul className="hidden md:flex gap-8 text-sm text-gray-300">
          <li className="hover.text-cyan-400 cursor-pointer">
            <a href="#about"> About</a>
          </li>
          <li className="hover.text-cyan-400 cursor-pointer">
            <a href="#project">Projects</a>
          </li>
          <li className="hover.text-cyan-400 cursor-pointer">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover.text-cyan-400 cursor-pointer">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Button */}
        <a
          href=""
          className="inline-flex items-center justify-center border border-cyan-400 px-5 py-2 rounded-full text-sm transition-all duration-200 hover:bg-cyan-400 hover:text-black active:scale-95 active:bg-cyan-400 active:text-black active:opacity-80 transition cursor-pointer"
        >
          View Resume
        </a>
      </nav>
      {/* Hero Section */}
      <section
        id="about"
        className="grid md:grid-cols-2 gap-10 items-center px-10 py-20"
      >
        {/* Left Side */}
        <div>
          <h2 className="text-5xl md:text-5xl font-bold leading-tight">
            Crafting Modern <br /> Web Experiences
          </h2>

          <p className="text-gray-400 mt-6 text-base md:text-lg leading-7 md:leading-8">
            Agboola Olamiposi | Frontend & Full-Stack Developer. Passionate
            about building responsive, user-friendly and modern websites and
            bringing clarity to your ideas via code.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-8">
            <a
              href="#project"
              className="inline-flex items-center justify-center bg-cyan-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 active:scale-95 transition cursor-pointer"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center ml-6 border border-[#1E3A8A] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1E3A8A] hover:text-black transition scale-105 transition duration-300 cursor-pointer"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <img
            src={profile}
            alt="profile"
            className="w-auto h-80 md:w-80 md:h-80 object-contain"
            object-contain
          />
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="px-10 pb-20">
        <h2 className="text-3xl font-bold mb-8">Skills & Tech Stack</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {["React", "Next.js", "JavaScript", "Node.js", "Tailwind", "Git"].map(
            (skill) => (
              <div
                key={skill}
                className="bg-[#111827] border border-gray-800 rounded-2xl p-6 text-center hover:border-cyan-400 hover:-translate-y-1 transition"
              >
                <p className="font-semibold">{skill}</p>
              </div>
            ),
          )}
        </div>
      </section>

      {/* Projects Section */}
      <section id="project" className="px-10 pb-20">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>

        {/* Project Card */}
        <div className="bg-[#111827] border border-gray-800 rounded-2xl overflow-hidden hover:border-cyan-400transition">
          {/* Image */}
          <div className="h-40 bg-gray-700 flex items-center justify-center">
            <p className="text-gray-400">Project Image</p>
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="text-xl font-semibold">Project One</h3>
            <p className="text-gray-400 text-sm mt-2">
              A modern web app built with React and Tailwind CSS.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-xs bg-gray-800 px-2 py-1 rounded">
                React
              </span>
              <span className="text-xs bg-gray-800 px-2 py-1 rounded">
                Tailwind
              </span>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-5">
              <button className="bg-cyan-400 text-black px-4 py-2 rounded-full text-sm hover:scale-105 cursor-pointer">
                Live Demo
              </button>
              <button className="border border-gray-600 px-4 py-2 rounded-full text-sm hover:border-cyan-400 cursor-pointer hover:-translate-y-1 transition">
                Code
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section2 */}
      <section className="px-10 pb-20">
        {/* Project Card 2 */}
        <div className="bg-[#111827] border border-gray-800 rounded-2xl overflow-hidden hover:border-cyan-400transition">
          {/* Image */}
          <div className="h-40 bg-gray-700 flex items-center justify-center">
            <p className="text-gray-400">Project Image</p>
          </div>

          {/* Content 2*/}
          <div className="p-5">
            <h3 className="text-xl font-semibold">Project Two</h3>
            <p className="text-gray-400 text-sm mt-2">
              A modern web app built with XXXX and XXXXX.
            </p>

            {/* Tech Stack 2 */}
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-xs bg-gray-800 px-2 py-1 rounded">
                XXXX
              </span>
              <span className="text-xs bg-gray-800 px-2 py-1 rounded">
                XXXXX
              </span>
            </div>

            {/* Buttons 2*/}
            <div className="flex gap-3 mt-5">
              <button className="bg-cyan-400 text-black px-4 py-2 rounded-full text-sm hover:scale-105 cursor-pointer">
                Live Demo
              </button>
              <button className="border border-gray-600 px-4 py-2 rounded-full text-sm hover:border-cyan-400 cursor-pointer hover:-translate-y-1 transition">
                Code
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-10 pb-20">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left side */}
          <div>
            <p className="text-gray-400 mb-6">
              Feel free to reach out for collaborations or just a friendly chat
              about how to improve my site
            </p>

            <div className="space-y-4 text-sm">
              <a
                href="mailto:lanrewaju@gmail.com"
                className="flex items-center gap-3 hover:text-cyan-400 transition"
              >
                <FaEnvelope />
                <span>lanrewaju@gmail.com</span>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                className="flex items-center gap-3 hover:text-cyan-400 transition"
              >
                <FaGithub />
                <span>github.com</span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                className="flex items-center gap-3 hover:text-cyan-400 transition"
              >
                <FaLinkedin />
                <span>linkedin.com</span>
              </a>
            </div>
          </div>
          {/* Right Side */}
          <form onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              value={formData.user_name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-[#111827] border border-gray-700 outline-none"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              value={formData.user_email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-[#111827] border border-gray-700 outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full p-3 rounded-lg bg-[#111827] border border-gray-700 outline-none"
              required
            ></textarea>
            <button className="bg-cyan-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 cursor-pointer hover:-translate-y-1 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
