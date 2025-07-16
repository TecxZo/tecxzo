import React from 'react';
import { ExternalLink, Calendar, Wrench, Briefcase, ArrowRight } from 'lucide-react';

const Products = () => {
  const products = [
    {
      name: "DayStories",
      description: "A beautifully crafted journaling app that helps users capture and reflect on their daily experiences. Available on Google Play Store with growing user base.",
      image: "assets/logo.png",
      status: "Live on Play Store",
      icon: Calendar,
      technologies: ["Flutter", "Firebase", "Cloud Storage"],
      link: "https://play.google.com/store/apps/details?id=com.tecxzo.daystories",
      gradient: "from-orange-500 to-red-500"
    },
    {
      name: "FixZo",
      description: "On-demand home service platform connecting homeowners with skilled professionals for repairs, maintenance, and improvements.",
      image: "assets/appIcon.png",
      status: "In Development",
      icon: Wrench,
      technologies: ["React Native", "Node.js", "GraphQL", "MongoDB"],
      link: "#",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      name: "Enterprise Solutions",
      description: "Custom enterprise applications and automation tools designed for specific business needs and workflows.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
      status: "Ongoing Projects",
      icon: Briefcase,
      technologies: ["Custom Stack", "RPA", "AI Integration"],
      link: "#contact",
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Products</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Real products serving real users. Here's what we've built and what we're working on.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${product.gradient} opacity-80`}></div>
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <product.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full">
                    {product.status}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={product.link}
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors group-hover:translate-x-1"
                >
                  <span>{product.name === "DayStories" ? "View on Play Store" : "Learn More"}</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="#contact"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            <span>Start Your Project</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;