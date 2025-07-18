import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };

  useEffect(() => {
    // On mount, respect localStorage or system preference
    const savedTheme = localStorage.getItem("theme");
    if (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 md:h-20">
          {/* NavBar Pill Container (everything inside) */}
          <div className="flex items-center justify-between w-full max-w-4xl mx-auto px-2 sm:px-6 py-1.5 md:py-2 rounded-full bg-black/80 dark:bg-black/80 shadow-lg backdrop-blur-md min-h-[44px] md:min-h-[64px]">
            {/* Logo */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <img
                src="assets/companylogo.png"
                alt="Description"
                style={{ width: "22px", height: "22px" }}
                className="block"
              />
              <span className="text-white font-bold text-lg tracking-wide inline dark:text-white">
                TecxZo
              </span>
            </div>
            {/* Nav Items */}
            <div className="hidden md:flex space-x-4 lg:space-x-6 ml-2 lg:ml-8">
              <button
                onClick={() => scrollToSection("about")}
                className="font-sans font-medium text-base px-2 py-1 rounded-full text-white dark:text-white hover:bg-white/10 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="font-sans font-medium text-base px-2 py-1 rounded-full text-white dark:text-white hover:bg-white/10 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="font-sans font-medium text-base px-2 py-1 rounded-full text-white dark:text-white hover:bg-white/10 transition-colors"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="font-sans font-medium text-base px-2 py-1 rounded-full text-white dark:text-white hover:bg-white/10 transition-colors"
              >
                Contact
              </button>
            </div>
            {/* Right Side: Toggle & Login */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-4 ml-2 lg:ml-8">
              <button
                onClick={toggleDarkMode}
                className="flex items-center justify-center w-9 h-9 lg:w-10 lg:h-10 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
                <span className="sr-only">Toggle dark mode</span>
              </button>
              <button className="flex items-center text-white font-medium text-base space-x-2 px-2 lg:px-3 py-1">
                {/* Custom SVG for fingerprint */}
                <span
                  className="inline-block"
                  style={{ width: "18px", height: "18px" }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.23454 19.3052C6.42429 18.8483 6.59884 18.3835 6.75758 17.9114M14.4235 21.0018C14.6981 20.2273 14.9417 19.4381 15.1528 18.6357C15.3443 17.9077 15.5091 17.1689 15.646 16.4204M19.6893 17.2526C20.0652 15.2266 20.2617 13.1377 20.2617 11.0028C20.2617 6.44492 16.5668 2.75 12.0089 2.75C10.7138 2.75 9.48836 3.04832 8.39758 3.57999M3.26172 15.1545C3.58481 13.8235 3.75605 12.4332 3.75605 11.0028C3.75605 9.20753 4.32931 7.54611 5.30276 6.19165M12.0093 11.0028C12.0093 13.8505 11.5478 16.5903 10.6955 19.1517C10.4762 19.8107 10.231 20.458 9.9611 21.0922M7.67682 14C7.8124 13.0204 7.88247 12.0198 7.88247 11.0028C7.88247 8.72388 9.72993 6.87642 12.0089 6.87642C14.2878 6.87642 16.1353 8.72388 16.1353 11.0028C16.1353 11.5049 16.1229 12.004 16.0985 12.5"
                      stroke="#E6E6E6"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M6.23454 19.3052C6.42429 18.8483 6.59884 18.3835 6.75758 17.9114M14.4235 21.0018C14.6981 20.2273 14.9417 19.4381 15.1528 18.6357C15.3443 17.9077 15.5091 17.1689 15.646 16.4204M19.6893 17.2526C20.0652 15.2266 20.2617 13.1377 20.2617 11.0028C20.2617 6.44492 16.5668 2.75 12.0089 2.75C10.7138 2.75 9.48836 3.04832 8.39758 3.57999M3.26172 15.1545C3.58481 13.8235 3.75605 12.4332 3.75605 11.0028C3.75605 9.20753 4.32931 7.54611 5.30276 6.19165M12.0093 11.0028C12.0093 13.8505 11.5478 16.5903 10.6955 19.1517C10.4762 19.8107 10.231 20.458 9.9611 21.0922M7.67682 14C7.8124 13.0204 7.88247 12.0198 7.88247 11.0028C7.88247 8.72388 9.72993 6.87642 12.0089 6.87642C14.2878 6.87642 16.1353 8.72388 16.1353 11.0028C16.1353 11.5049 16.1229 12.004 16.0985 12.5"
                      className="touch"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                <span>Login</span>
              </button>
            </div>
            {/* Hamburger menu for mobile */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-blue-400 transition-colors focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-7 w-7" />
                ) : (
                  <Menu className="h-7 w-7" />
                )}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md rounded-xl mt-2 mx-2">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-3 py-2 text-white hover:underline underline-offset-4 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left px-3 py-2 text-white hover:underline underline-offset-4 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="block w-full text-left px-3 py-2 text-white hover:underline underline-offset-4 transition-colors"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-2 text-white hover:underline underline-offset-4 transition-colors"
              >
                Contact
              </button>
              <button
                onClick={toggleDarkMode}
                className="flex items-center w-full text-left px-3 py-2 text-white font-medium space-x-2 mt-2"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
                <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
              </button>
              <button className="flex items-center w-full text-left px-3 py-2 text-white font-medium space-x-2 mt-2">
                {/* Custom SVG for fingerprint */}
                <span
                  className="inline-block"
                  style={{ width: "18px", height: "18px" }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.23454 19.3052C6.42429 18.8483 6.59884 18.3835 6.75758 17.9114M14.4235 21.0018C14.6981 20.2273 14.9417 19.4381 15.1528 18.6357C15.3443 17.9077 15.5091 17.1689 15.646 16.4204M19.6893 17.2526C20.0652 15.2266 20.2617 13.1377 20.2617 11.0028C20.2617 6.44492 16.5668 2.75 12.0089 2.75C10.7138 2.75 9.48836 3.04832 8.39758 3.57999M3.26172 15.1545C3.58481 13.8235 3.75605 12.4332 3.75605 11.0028C3.75605 9.20753 4.32931 7.54611 5.30276 6.19165M12.0093 11.0028C12.0093 13.8505 11.5478 16.5903 10.6955 19.1517C10.4762 19.8107 10.231 20.458 9.9611 21.0922M7.67682 14C7.8124 13.0204 7.88247 12.0198 7.88247 11.0028C7.88247 8.72388 9.72993 6.87642 12.0089 6.87642C14.2878 6.87642 16.1353 8.72388 16.1353 11.0028C16.1353 11.5049 16.1229 12.004 16.0985 12.5"
                      stroke="#E6E6E6"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M6.23454 19.3052C6.42429 18.8483 6.59884 18.3835 6.75758 17.9114M14.4235 21.0018C14.6981 20.2273 14.9417 19.4381 15.1528 18.6357C15.3443 17.9077 15.5091 17.1689 15.646 16.4204M19.6893 17.2526C20.0652 15.2266 20.2617 13.1377 20.2617 11.0028C20.2617 6.44492 16.5668 2.75 12.0089 2.75C10.7138 2.75 9.48836 3.04832 8.39758 3.57999M3.26172 15.1545C3.58481 13.8235 3.75605 12.4332 3.75605 11.0028C3.75605 9.20753 4.32931 7.54611 5.30276 6.19165M12.0093 11.0028C12.0093 13.8505 11.5478 16.5903 10.6955 19.1517C10.4762 19.8107 10.231 20.458 9.9611 21.0922M7.67682 14C7.8124 13.0204 7.88247 12.0198 7.88247 11.0028C7.88247 8.72388 9.72993 6.87642 12.0089 6.87642C14.2878 6.87642 16.1353 8.72388 16.1353 11.0028C16.1353 11.5049 16.1229 12.004 16.0985 12.5"
                      className="touch"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                <span>Login</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
