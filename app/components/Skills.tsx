import {
  FaPython,
  FaDatabase,
  FaChartBar,
  FaBrain,
  FaChartLine,
  FaLightbulb,
} from "react-icons/fa";

import {
  SiPandas,
  SiNumpy,
  
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "Python", icon: <FaPython /> },
    { name: "SQL", icon: <FaDatabase /> },
     { name: "Power BI", icon:<FaChartBar /> },
    { name: "Machine Learning", icon: <FaBrain /> },
    { name: "Pandas", icon: <SiPandas /> },
    { name: "NumPy", icon: <SiNumpy /> },
    { name: "Excel", icon: <FaChartBar /> },
    { name: "Statistics", icon: <FaChartLine /> },
    { name: "Data Analytics", icon: <FaChartBar /> },
    { name: "Data Visualization", icon: <FaChartLine /> },
    { name: "AI", icon: <FaBrain /> },
    { name: "Problem Solving", icon: <FaLightbulb /> },
  ];

  return (
    <section className="relative py-28 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-600/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        <h2 className="text-center text-5xl md:text-6xl font-extrabold text-white mb-4">
          Skills
        </h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16 text-lg">
          Technologies and tools I use for Data Analytics,
          Machine Learning, AI Development and Business Intelligence.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="
              group
              relative
              overflow-hidden
              rounded-3xl
              p-8

              bg-gradient-to-br
              from-purple-900/20
              via-black/40
              to-blue-900/20

              backdrop-blur-xl

              border
              border-purple-500/30

              transition-all
              duration-700

              hover:scale-110
              hover:-translate-y-3
              hover:border-purple-400

              hover:shadow-[0_0_40px_rgba(168,85,247,0.8)]

              cursor-pointer
              "
            >

              {/* Hover Glow */}
              <div
                className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition
                duration-700

                bg-gradient-to-r
                from-purple-500/20
                via-pink-500/20
                to-cyan-500/20
                "
              />

              <div className="relative z-10 flex flex-col items-center gap-4">

                <div className="text-4xl text-purple-400 group-hover:text-white transition">
                  {skill.icon}
                </div>

                <h3 className="font-bold text-lg text-white">
                  {skill.name}
                </h3>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}