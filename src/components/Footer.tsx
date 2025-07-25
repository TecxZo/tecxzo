import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-black text-gray-900 dark:text-white py-10 md:py-12 border-t border-gray-300 dark:border-white/10 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="assets/companylogo.png"
                alt="Description"
                style={{ width: "30px", height: "30px" }}
              />
              <span className="text-2xl font-bold">TECXZO</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Building tomorrow's technology today. We create innovative
              solutions that drive business growth and user satisfaction.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/tecxzo/?viewAsMember=true"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/tecxzo/"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/tecxzo"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                <a
                  href="#services"
                  className="hover:text-blue-400 transition-colors"
                >
                  Mobile Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-blue-400 transition-colors"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-blue-400 transition-colors"
                >
                  RPA & Automation
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-blue-400 transition-colors"
                >
                  UI/UX Design
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-blue-400 transition-colors"
                >
                  AI Integration
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                <a
                  href="#products"
                  className="hover:text-blue-400 transition-colors"
                >
                  DayStories
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-blue-400 transition-colors"
                >
                  FixZo
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-blue-400 transition-colors"
                >
                  Enterprise Solutions
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-blue-400 transition-colors"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>tecxzo.dev@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91-7483123204</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Mandya Karnataka</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 dark:border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Tecxzo. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-700 dark:text-gray-300">
            <a
              href="#"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
