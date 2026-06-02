import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Project() {
  const projects = [
    {
      title: "Flipkart Smart Dashboard",
      image: "/projects/flipkart.png",
      description:
        "Power BI dashboard for Flipkart sales analysis, customer insights and business intelligence.",
      github: "https://github.com/najimansari7070-gif",
      tech: "Power BI • Excel • Analytics",
    },

    {
      title: "Smart Sales Dashboard",
      image: "/projects/sales.png",
      description:
        "Interactive sales dashboard built using Power BI and Excel with KPI tracking and insights.",
      github:
        "https://github.com/najimansari7070-gif/python-project-build-AI-",
      tech: "Power BI • Excel • SQL",
    },

    {
      title: "Smart Study Planner AI",
      image: "/projects/studyplanner.png",
      description:
        "AI-powered study planner helping students manage schedules and learning goals efficiently.",
      github:
        "https://github.com/najimansari7070-gif/smart-study-planner-",
      tech: "Python • AI • Machine Learning",
    },
  ];

  return (
    <section className="relative py-28 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-600/20 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        <h2 className="text-center text-5xl md:text-6xl font-extrabold text-white mb-5">
          Featured Projects
        </h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
          Real-world Data Analytics, Machine Learning and AI projects
          showcasing practical problem solving and business insights.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <div
              key={index}
              className="
              group
              overflow-hidden
              rounded-3xl

              bg-gradient-to-br
              from-purple-900/20
              via-black/50
              to-blue-900/20

              backdrop-blur-xl

              border
              border-purple-500/30

              transition-all
              duration-700

              hover:-translate-y-4
              hover:scale-105

              hover:border-purple-400

              hover:shadow-[0_0_40px_rgba(168,85,247,0.7)]
              "
            >

              <div className="overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="
                  w-full
                  h-56
                  object-cover

                  transition-all
                  duration-700

                  group-hover:scale-110
                  "
                />
              </div>

              <div className="p-6">

                <div className="mb-3">
                  <span className="text-sm text-purple-400">
                    {project.tech}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6">
                  {project.description}
                </p>

                <div className="flex gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                    flex items-center gap-2

                    px-5 py-3

                    rounded-xl

                    bg-gradient-to-r
                    from-purple-600
                    to-blue-600

                    text-white
                    font-semibold

                    hover:scale-105
                    transition
                    "
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <button
                    className="
                    flex items-center gap-2

                    px-5 py-3

                    rounded-xl

                    border
                    border-purple-500

                    text-white

                    hover:bg-purple-600/20
                    transition
                    "
                  >
                    <FaExternalLinkAlt />
                    Demo
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}