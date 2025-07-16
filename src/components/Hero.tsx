import React from 'react';
import { ArrowRight, Code, Smartphone, Database } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-blue-800 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-20 min-h-screen flex items-center">
        <div className="max-w-4xl">
          <div className="mb-6 flex items-center space-x-2">
            <div className="flex items-center space-x-3">
              <img src="assets/companylogo.png" alt="Description" style={{ width: "70px", height: "70px" }}/>
              <span className="text-xl font-bold text-blue-400">TECXZO</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Innovate Beyond 
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Limits
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl">
            We're a product-driven tech startup crafting high-quality mobile and web solutions with Flutter, Node.js, GraphQL, and cutting-edge automation tools.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2">
              <span>Get in Touch</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300">
              See Our Work
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3">
              <Smartphone className="h-8 w-8 text-blue-400" />
              <div>
                <h3 className="font-semibold text-lg">Mobile First</h3>
                <p className="text-gray-400">Flutter & React Native</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Database className="h-8 w-8 text-blue-400" />
              <div>
                <h3 className="font-semibold text-lg">Full Stack</h3>
                <p className="text-gray-400">Node.js & GraphQL</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Code className="h-8 w-8 text-blue-400" />
              <div>
                <h3 className="font-semibold text-lg">Automation</h3>
                <p className="text-gray-400">RPA & AI Integration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;