import React from "react";

// Footer link data
const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <h2 className="text-2xl font-bold mb-4 md:mb-0 text-white">MyPortfolio</h2>

        {/* Links mapped from array */}
        <ul className="flex space-x-6">
          {footerLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="hover:text-white transition duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer bottom */}
      <div className="mt-6 text-center text-sm text-gray-500">
        © 2025 MyPortfolio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;