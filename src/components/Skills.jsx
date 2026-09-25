function Skills() {
  const skillCategories = [
    {
      title: "Data Analytics",
      skills: [
        "Excel",
        "SQL",
        "Python",
        "Pandas",
        "NumPy",
      ],
    },

    {
      title: "Data Visualization",
      skills: [
        "Power BI",
        "Matplotlib",
        "Seaborn",
      ],
    },

    {
      title: "Programming",
      skills: [
        "Java",
        "C",
        "JavaScript",
      ],
    },

    {
      title: "Tools & Technologies",
      skills: [
        "MySQL",
        "Git",
        "GitHub",
        "VS Code",
        "PyCharm",
      ],
    },
  ];

  return (
    <section
  id="skills"
  className="px-6 py-24 bg-purple-50"
>
      <div className="max-w-6xl mx-auto w-full">

        {/* Heading */}
        <div className="text-center mb-14">

          <p className="text-lg font-medium mb-2">
            My Technical Skills
          </p>

         <h2 className="text-4xl md:text-5xl font-bold text-emerald-700">
  Skills
</h2>
          <p className="mt-5 text-lg text-gray-700 max-w-2xl mx-auto">
            Technologies and tools I use for data analysis, visualization,
            programming and software development.
          </p>

        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8">

          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="border rounded-2xl p-8 shadow-sm hover:shadow-lg transition"
            >

              {/* Category Title */}
              <h3 className="text-2xl font-semibold mb-7">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 border rounded-full font-medium hover:bg-black hover:text-white transition"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;

