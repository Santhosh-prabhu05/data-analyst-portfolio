function Projects() {
  const projects = [
    {
      title: "Sales & Business Performance Analysis",
      image: "/projects/sales-analysis.jpeg",
      description:
        "Analyzed sales and customer data using Excel, SQL, and Python (Pandas/NumPy) to perform data cleaning, transformation, and identify key business trends and insights. Built interactive Power BI dashboards with KPIs and visualizations to analyze sales, profit, customer, product, and regional performance.",
      technologies: [
        "Excel",
        "SQL",
        "Python",
        "Pandas",
        "NumPy",
        "Power BI",
      ],
    },

    {
      title: "Gesture Interpretation from Action to Voice",
      image: "/projects/gesture-voice.jpeg",
      description:
        "Built an AI-driven system that translates hand gestures into speech for individuals with speech or hearing impairments. Used CNN and LSTM models to recognize gestures from video input, mapped gestures to text using NLP, and generated speech using Tacotron 2. Achieved 92% accuracy in real-time.",
      technologies: [
        "Python",
        "CNN",
        "LSTM",
        "NLP",
        "Tacotron 2",
      ],
    },

    {
      title: "Driver Drowsiness Detection System",
      image: "/projects/drowsiness-detection.png",
      description:
        "Developed a driver drowsiness detection system using Python, employing computer vision and machine learning to monitor driver alertness and help prevent accidents. Integrated facial landmark detection and real-time fatigue monitoring for accurate and timely alerts.",
      technologies: [
        "Python",
        "Computer Vision",
        "Machine Learning",
      ],
    },
  ];

  return (
   <section
  id="projects"
  className="px-6 py-24 bg-gray-50"
>
      <div className="max-w-6xl mx-auto w-full">

        {/* Heading */}
        <div className="text-center mb-14">

          <p className="text-lg font-medium mb-2">
            My Work
          </p>

         <h2 className="text-4xl md:text-5xl font-bold text-orange-700">
  Projects
</h2>

          <p className="mt-5 text-lg text-gray-700 max-w-2xl mx-auto">
            A selection of projects demonstrating my experience in data
            analytics, artificial intelligence, machine learning and
            data visualization.
          </p>

        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 flex flex-col"
            >

              {/* Project Image */}
              <div className="w-full h-56 overflow-hidden bg-gray-100">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />

              </div>

              {/* Project Content */}
              <div className="p-7 flex flex-col flex-1">

                {/* Project Title */}
                <h3 className="text-2xl font-semibold mb-5">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="leading-7 text-gray-700 mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-auto">

                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="px-3 py-1 text-sm border rounded-full"
                    >
                      {technology}
                    </span>
                  ))}

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;

