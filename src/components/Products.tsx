import React from "react";
import {
  ExternalLink,
  Calendar,
  Wrench,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const Products = () => {
  const products = [
    {
      name: "DayStories",
      description:
        "A beautifully crafted journaling app that helps users capture and reflect on their daily experiences. Available on Google Play Store with growing user base.",
      image: "assets/logo.png",
      status: "Live on Play Store",
      icon: Calendar,
      technologies: ["Flutter", "Firebase", "Cloud Storage"],
      link: "https://play.google.com/store/apps/details?id=com.tecxzo.daystories",
      gradient: "from-orange-500 to-red-500",
    },
    {
      name: "FixZo",
      description:
        "On-demand home service platform connecting homeowners with skilled professionals for repairs, maintenance, and improvements.",
      image: "assets/appIcon.png",
      status: "In Development",
      icon: Wrench,
      technologies: ["React Native", "Node.js", "GraphQL", "MongoDB"],
      link: "#",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      name: "Enterprise Solutions",
      description:
        "Custom enterprise applications and automation tools designed for specific business needs and workflows.",
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
      status: "Ongoing Projects",
      icon: Briefcase,
      technologies: ["Custom Stack", "RPA", "AI Integration"],
      link: "#contact",
      gradient: "from-green-500 to-teal-500",
    },
  ];

  return (
    <section
      id="products"
      className="py-20 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our{" "}
            <span className="text-blue-600 dark:text-blue-400">Products</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Real products serving real users. Here's what we've built and what
            we're working on.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-gray-100 dark:bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${product.gradient} opacity-80`}
                ></div>
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 bg-gray-200 dark:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <product.icon className="h-6 w-6 text-blue-600 dark:text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-gray-200 dark:bg-white/20 backdrop-blur-sm text-gray-900 dark:text-white text-sm rounded-full">
                    {product.status}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-base text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-200 dark:bg-white/10 text-blue-600 dark:text-blue-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={product.link}
                  className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-400 dark:hover:text-blue-200 font-semibold transition-colors group-hover:translate-x-1"
                >
                  <span>
                    {product.name === "DayStories"
                      ? "View on Play Store"
                      : "Learn More"}
                  </span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
