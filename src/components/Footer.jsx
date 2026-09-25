function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t px-6 py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">

        {/* Copyright */}
        <p className="text-gray-600 text-center md:text-left">
          © {currentYear} Santhosh Prabhu
        </p>

        {/* GitHub + Back to Top */}
        <div className="flex items-center gap-6">

          {/* GitHub */}
          <a
            href="https://github.com/Santhosh-prabhu05"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-semibold hover:text-gray-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.64-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.18 9.18 0 0112 7.91c.85 0 1.7.12 2.5.37 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.95.68 1.92v2.85c0 .27.18.59.69.49A10.27 10.27 0 0022 12.25C22 6.58 17.52 2 12 2z"
                clipRule="evenodd"
              />
            </svg>

            <span>GitHub</span>
          </a>

          {/* Back to Top */}
          <a
            href="#home"
            className="font-semibold hover:text-blue-600 transition"
          >
            Back to Top ↑
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;