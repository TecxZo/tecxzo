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
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
