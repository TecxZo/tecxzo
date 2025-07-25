import React from "react";
import { ArrowRight, Code, Smartphone, Database } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-white dark:bg-black text-black dark:text-white overflow-hidden transition-colors duration-300 flex flex-col justify-center items-center pt-6 md:pt-0 px-4 sm:px-4">
      {/* Light mode gradient background */}
      <div className="absolute inset-0 pointer-events-none block dark:hidden">
        <div
          className="w-full h-full"
          style={{
            background:
              "linear-gradient(180deg, #eaf1ff 0%, #dbeafe 40%, #b4cafe 80%, #a5b4fc 100%)",
            opacity: 1,
          }}
        />
      </div>
      {/* Diagonal gradient overlay for dark mode only */}
      <div className="absolute inset-0 pointer-events-none hidden dark:block">
        <div
          className="w-full h-full"
          style={{
            background:
              "repeating-linear-gradient(120deg, rgba(60,60,80,0.0) 0 8%, rgba(60,60,80,0.15) 8% 16%), radial-gradient(ellipse 80% 60% at 80% 60%, rgba(120,60,180,0.25), transparent 80%), radial-gradient(ellipse 60% 40% at 60% 40%, rgba(60,120,220,0.25), transparent 80%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(220,60,80,0.18), transparent 80%)",
            filter: "blur(0px)",
            opacity: 0.85,
          }}
        />
      </div>
      <div className="relative z-10 w-full flex flex-col items-center justify-center min-h-screen px-2 sm:px-4">
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-center text-black dark:text-white mb-6 mt-8">
            Innovate Beyond
            <span className="block text-blue-600 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-400 dark:via-blue-300 dark:to-purple-400">
              Limits
            </span>
          </h1>
          <p className="text-sm md:text-base text-gray-500 dark:text-gray-300 text-center mb-8 max-w-2xl leading-relaxed">
            We're a product-driven tech startup crafting high-quality mobile and
            web solutions with Flutter, Node.js, GraphQL, and cutting-edge
            automation tools.
          </p>
          <div className="flex flex-row items-center gap-2 md:gap-4 mb-8 md:mb-12 w-full justify-center">
            <button className="bg-black dark:bg-white text-white dark:text-black font-semibold px-3 py-2 rounded-full text-sm shadow-lg hover:bg-gray-900 dark:hover:bg-gray-200 transition-all duration-200 flex items-center space-x-2 w-full md:w-auto justify-center">
              <span>Get in Touch</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <button className="bg-white dark:bg-transparent border border-gray-300 dark:border-white text-black dark:text-white font-semibold px-3 py-2 rounded-full text-sm hover:bg-gray-100 dark:hover:bg-white dark:hover:text-black transition-all duration-200 w-full md:w-auto justify-center">
              See Our Work
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full mt-2">
            <div className="flex flex-col items-center">
              <Smartphone className="h-7 w-7 text-black dark:text-blue-400 mb-1" />
              <h3 className="font-semibold text-base text-black dark:text-white">
                Mobile First
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Flutter & React Native
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Database className="h-7 w-7 text-black dark:text-blue-400 mb-1" />
              <h3 className="font-semibold text-base text-black dark:text-white">
                Full Stack
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Node.js & GraphQL
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Code className="h-7 w-7 text-black dark:text-blue-400 mb-1" />
              <h3 className="font-semibold text-base text-black dark:text-white">
                Automation
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                RPA & AI Integration
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
