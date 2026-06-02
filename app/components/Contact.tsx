import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaDownload,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-6xl w-full">

        <div className="text-center mb-14">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-5">
            Let's Connect
          </h2>

          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Open for Data Science Internships, Data Analytics Projects,
            Freelance Work and AI Collaborations.
          </p>
        </div>

        <div
          className="
          bg-white/5
          backdrop-blur-xl
          border border-purple-500/30
          rounded-3xl
          p-10 md:p-14
          shadow-[0_0_40px_rgba(139,92,246,0.2)]
        "
        >
          <div className="space-y-8">

            <div className="flex items-center justify-center gap-4">
              <FaEnvelope className="text-cyan-400 text-2xl" />

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=najimansari7070@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-cyan-400 transition text-lg"
              >
                najimansari7070@gmail.com
              </a>
            </div>

            <div className="flex items-center justify-center gap-4">
              <FaMapMarkerAlt className="text-purple-400 text-2xl" />

              <span className="text-gray-300 text-lg">
                Patna, Bihar, India
              </span>
            </div>

            <div className="flex justify-center gap-4 flex-wrap">

              <a
                href="https://wa.me/919279663802"
                target="_blank"
                rel="noopener noreferrer"
                className="
                px-6 py-3
                rounded-xl
                bg-green-500
                hover:scale-105
                transition
                font-semibold
              "
              >
                <FaWhatsapp className="inline mr-2" />
                WhatsApp
              </a>

              <a
                href="/resume.pdf"
                download
                className="
                px-6 py-3
                rounded-xl
                bg-gradient-to-r
                from-purple-600
                to-cyan-500
                hover:scale-105
                transition
                font-semibold
              "
              >
                <FaDownload className="inline mr-2" />
                Resume
              </a>

            </div>

          </div>

          <div className="mt-14 text-center">

            <h3 className="text-3xl font-bold text-white mb-8">
              Follow Me
            </h3>

            <div className="flex justify-center gap-8 text-4xl">

              <a
                href="https://github.com/najimansari7070-gif"
                target="_blank"
                rel="noopener noreferrer"
                className="
                hover:text-cyan-400
                hover:scale-125
                transition-all
                duration-300
              "
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/najim-ansari-37b4873a2/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                hover:text-blue-400
                hover:scale-125
                transition-all
                duration-300
              "
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.instagram.com/najimansari._"
                target="_blank"
                rel="noopener noreferrer"
                className="
                hover:text-pink-500
                hover:scale-125
                transition-all
                duration-300
              "
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                hover:text-blue-500
                hover:scale-125
                transition-all
                duration-300
              "
              >
                <FaFacebook />
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}