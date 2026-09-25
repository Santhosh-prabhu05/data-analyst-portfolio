function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 pt-24 pb-16"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Left Side */}
        <div>

          <p className="text-lg font-medium mb-3">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-blue-700">
  Santhosh Prabhu
</h1>

         <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
  Aspiring Data Analyst
</h2>

          <p className="text-lg leading-8 max-w-xl text-gray-700 mb-8">
            B.Tech Information Technology graduate passionate about
            transforming data into meaningful insights using SQL, Python,
            Excel and Power BI.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">

            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-black text-white font-semibold hover:bg-gray-800 transition"
            >
              View Projects
            </a>

            <a
              href="#resume"
              className="px-6 py-3 rounded-lg border border-black font-semibold hover:bg-black hover:text-white transition"
            >
              Download Resume
            </a>

          </div>

        </div>

        {/* Right Side - Profile Picture */}
        <div className="flex justify-center md:justify-end">

          <div className="w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden border-4 border-gray-200 shadow-2xl shadow-blue-200 hover:shadow-blue-300 transition-all duration-500 hover:-translate-y-2">

            <img
  src="/profile.jpg"
  alt="Santhosh Prabhu"
  className="w-full h-full object-cover hover:scale-105 transition duration-500"
/>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Home;

