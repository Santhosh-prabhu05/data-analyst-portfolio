function Resume() {
  return (
    <section
  id="resume"
  className="px-6 py-24 bg-slate-100"
>
      <div className="max-w-5xl mx-auto w-full">

        {/* Heading */}
        <div className="text-center mb-12">

          <p className="text-lg font-medium mb-2">
            My Resume
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-indigo-700">
  Resume
</h2>

          <p className="mt-5 text-lg text-gray-700 max-w-2xl mx-auto">
            Explore my education, technical skills, projects,
            certifications and professional experience.
          </p>

        </div>

        {/* Resume Card */}
        <div className="border rounded-2xl p-8 md:p-12 shadow-sm text-center">

          {/* Resume Icon */}
          <div className="flex justify-center mb-6">

            <div className="w-20 h-20 border rounded-2xl flex items-center justify-center">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <path d="M14 2v6h6" />
                <path d="M8 13h8" />
                <path d="M8 17h6" />
              </svg>

            </div>

          </div>

          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            Santhosh Prabhu - Resume
          </h3>

          <p className="text-gray-700 leading-7 max-w-2xl mx-auto mb-8">
            My resume provides an overview of my background, technical
            skills, academic journey, projects, certifications and
            professional experience.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4 flex-wrap">

            {/* Download Resume */}
            <a
                href="/Santhosh_Prabhu_Resume.pdf"
                download="Santhosh_Prabhu_Resume.pdf"
                className="px-6 py-3 rounded-lg bg-black text-white font-semibold hover:bg-gray-800 transition"
            >
              Download Resume
            </a>

            {/* View Resume */}
            <a
             href="/Santhosh_Prabhu_Resume.pdf"
             target="_blank"
             rel="noopener noreferrer"
             className="px-6 py-3 rounded-lg border border-black font-semibold hover:bg-black hover:text-white transition"
            >
              View Resume
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Resume;

