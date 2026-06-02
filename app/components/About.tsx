export default function About() {
  const stats = [
    { value: "3+", label: "Projects Built" },
    { value: "10+", label: "Technical Skills" },
    { value: "2026", label: "Internship Goal" },
    { value: "AI", label: "Data Science Focus" },
  ];

  return (
    <section id="about"
     className="relative py-28 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-600/20 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>

            <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-8">
              About Me
            </h2>

            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-8"></div>

            <p className="text-gray-300 text-lg leading-9 mb-6">
              Hi, I'm <span className="text-purple-400 font-semibold">Najim Ansari</span>,
              a passionate Data Science student focused on
              <span className="text-white font-semibold">
                {" "}Data Analytics, Machine Learning, Power BI,
                SQL, Python and Artificial Intelligence.
              </span>
            </p>

            <p className="text-gray-400 text-lg leading-9 mb-6">
              I enjoy transforming raw data into meaningful insights,
              building intelligent AI systems, developing interactive
              dashboards and solving real-world business problems.
            </p>

            <p className="text-gray-400 text-lg leading-9">
              My goal is to secure a Data Science internship and grow
              into an AI Engineer capable of creating impactful
              products used by thousands of people.
            </p>

          </div>

          {/* Right Side */}
          <div className="grid grid-cols-2 gap-6">

            {stats.map((item, index) => (
              <div
                key={index}
                className="
                group
                rounded-3xl
                p-8

                bg-gradient-to-br
                from-purple-900/20
                via-black/50
                to-blue-900/20

                backdrop-blur-xl

                border
                border-purple-500/30

                transition-all
                duration-700

                hover:scale-105
                hover:-translate-y-2

                hover:border-purple-400

                hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]
                "
              >
                <h3 className="text-4xl font-extrabold text-white mb-3">
                  {item.value}
                </h3>

                <p className="text-gray-400">
                  {item.label}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}