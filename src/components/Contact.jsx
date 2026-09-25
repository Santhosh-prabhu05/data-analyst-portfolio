function Contact() {
  return (
    <section
      id="contact"
      className="px-6 py-24 bg-blue-50"
    >
      <div className="max-w-5xl mx-auto w-full">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <p className="text-lg font-medium mb-2">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-rose-700">
            Contact Me
          </h2>

          <p className="mt-5 text-lg text-gray-700 max-w-2xl mx-auto">
            Feel free to reach out to me for job opportunities,
            collaborations or professional discussions.
          </p>
        </div>

        {/* Contact Links */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">

          {/* Email */}
          <a
            href="mailto:santhoshprabhu591@gmail.com"
            className="flex items-center gap-3 text-lg font-semibold hover:text-red-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l9 6 9-6M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
              />
            </svg>

            <span>Email</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/santhosh-prabhu-895a0627b/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-lg font-semibold hover:text-blue-700 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6.94 8.5H3.5V20h3.44V8.5zM5.22 3A2.01 2.01 0 103.2 5a2.01 2.01 0 002.02-2zM20.5 13.42c0-3.46-1.85-5.07-4.32-5.07-1.99 0-2.88 1.09-3.38 1.85V8.5H9.36V20h3.44v-5.7c0-1.5.28-2.95 2.14-2.95 1.84 0 1.86 1.72 1.86 3.05V20h3.44l.26-6.58z" />
            </svg>

            <span>LinkedIn</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/917845788082"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-lg font-semibold hover:text-green-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2a10 10 0 00-8.66 15L2 22l5.17-1.35A10 10 0 1012 2zm0 18a8 8 0 01-4.1-1.13l-.29-.17-3.07.8.82-2.99-.19-.31A8 8 0 1112 20zm4.37-5.96c-.24-.12-1.43-.71-1.65-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.46-.39-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.11.15 1.53.09.47-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z" />
            </svg>

            <span>WhatsApp</span>
          </a>

        </div>
      </div>
    </section>
  );
}

export default Contact;




