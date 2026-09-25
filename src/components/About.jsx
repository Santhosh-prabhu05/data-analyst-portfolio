function About() {
  return (
   <section
  id="about"
  className="px-6 py-24 bg-blue-50"
>
      <div className="max-w-6xl mx-auto w-full">

        {/* Heading */}
        <div className="text-center mb-14">

          <p className="text-lg font-medium mb-2">
            Get To Know Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-purple-700">
  About Me
</h2>

        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* About Text */}
          <div>

          
<h3 className="text-2xl md:text-3xl font-semibold mb-6">
  Aspiring Data Analyst & MERN Developer
</h3>


            
<p className="text-lg leading-8 text-gray-700 mb-5">
  I am a B.Tech Information Technology graduate with a strong interest in
  Data Analytics, problem solving and transforming data into meaningful
  insights. I also have experience in MERN stack development and enjoy
  building web applications using modern technologies.
</p>

<p className="text-lg leading-8 text-gray-700 mb-5">
  I enjoy working with raw data to clean, transform and analyze information,
  identify patterns and generate insights that can support data-driven
  business decisions. My background in software development also helps me
  approach analytical problems with strong programming and problem-solving
  skills.
</p>

<p className="text-lg leading-8 text-gray-700">
  My current technical focus includes Excel, SQL, Python, Pandas, NumPy and
  Power BI, along with my knowledge of JavaScript, React, Node.js, Express.js
  and MongoDB. I continuously improve my skills through practical projects
  and real-world datasets.
</p>



          </div>

          {/* Quick Information */}
          <div className="grid grid-cols-2 gap-5">

            <div className="border rounded-2xl p-7 text-center shadow-sm hover:shadow-lg transition">

              <h4 className="text-3xl font-bold mb-2">
                B.Tech
              </h4>

              <p className="text-gray-600">
                Information Technology
              </p>

            </div>

            <div className="border rounded-2xl p-7 text-center shadow-sm hover:shadow-lg transition">

              <h4 className="text-3xl font-bold mb-2">
                SQL
              </h4>

              <p className="text-gray-600">
                Data Analysis
              </p>

            </div>

            <div className="border rounded-2xl p-7 text-center shadow-sm hover:shadow-lg transition">

              <h4 className="text-3xl font-bold mb-2">
                Python
              </h4>

              <p className="text-gray-600">
                Data Analysis
              </p>

            </div>

            <div className="border rounded-2xl p-7 text-center shadow-sm hover:shadow-lg transition">

              <h4 className="text-3xl font-bold mb-2">
                Power BI
              </h4>

              <p className="text-gray-600">
                Data Visualization
              </p>

            </div>

          </div>

        </div>

        {/* Academic Journey */}
        <div className="mt-24">

          <div className="text-center mb-12">

            <p className="text-lg font-medium mb-2">
              My Education
            </p>

            <h3 className="text-3xl md:text-4xl font-bold text-fuchsia-700">
  Academic Journey
</h3>

          </div>

          {/* Academic Cards */}
          <div className="grid md:grid-cols-3 gap-8">

            {/* UG */}
            <div className="border rounded-2xl p-8 shadow-sm hover:shadow-lg transition">

              <p className="text-sm font-semibold uppercase tracking-wider mb-3">
                Undergraduate
              </p>

              <h4 className="text-2xl font-bold mb-3">
                B.Tech Information Technology
              </h4>

              <p className="text-gray-700 mb-2">
                Velalar College of Engineering and Technology
              </p>

              <p className="text-gray-600 mb-4">
                Erode, Tamil Nadu
              </p>

              <div className="border-t pt-4">
                <p className="font-semibold">
                  CGPA: 7.13
                </p>

                <p className="text-gray-600">
                  Completed: 2026
                </p>
              </div>

            </div>

            {/* HSC */}
            <div className="border rounded-2xl p-8 shadow-sm hover:shadow-lg transition">

              <p className="text-sm font-semibold uppercase tracking-wider mb-3">
                Higher Secondary
              </p>

              <h4 className="text-2xl font-bold mb-3">
                HSC
              </h4>

              <p className="text-gray-700 mb-6">
                Jai Saradha Matric Hr.Sec School , Tiruppur
              </p>

              <div className="border-t pt-4">
                <p className="font-semibold text-xl">
                  78%
                </p>

                <p className="text-gray-600">
                  Higher Secondary Education
                </p>
              </div>

            </div>

            {/* SSLC */}
            <div className="border rounded-2xl p-8 shadow-sm hover:shadow-lg transition">

              <p className="text-sm font-semibold uppercase tracking-wider mb-3">
                Secondary School
              </p>

              <h4 className="text-2xl font-bold mb-3">
                SSLC
              </h4>

              <p className="text-gray-700 mb-6">
                Jai Saradha Matric Hr.Sec School , Tiruppur
              </p>

              <div className="border-t pt-4">
                <p className="font-semibold text-xl">
                  61%
                </p>

                <p className="text-gray-600">
                  Secondary School Education
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;

