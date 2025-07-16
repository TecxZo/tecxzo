import React from 'react';
import { Smartphone, Globe, Bot, Palette, Brain, Settings } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications using Flutter and React Native",
      technologies: ["Flutter", "React Native", "iOS", "Android"],
      gradient: "from-blue-600 to-blue-800"
    },
    {
      icon: Globe,
      title: "Full-Stack Web Solutions",
      description: "End-to-end web applications with modern frameworks and scalable architecture",
      technologies: ["React", "Node.js", "Express.js", "GraphQL"],
      gradient: "from-purple-600 to-purple-800"
    },
    {
      icon: Bot,
      title: "RPA & Automation",
      description: "Robotic Process Automation solutions to streamline business operations",
      technologies: ["UiPath", "Automation Anywhere", "Python", "API Integration"],
      gradient: "from-green-600 to-green-800"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design solutions that combine aesthetics with functionality",
      technologies: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      gradient: "from-pink-600 to-pink-800"
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Machine learning and AI-powered features to enhance user experiences",
      technologies: ["TensorFlow", "OpenAI", "Computer Vision", "NLP"],
      gradient: "from-indigo-600 to-indigo-800"
    },
    {
      icon: Settings,
      title: "DevOps & Cloud",
      description: "Scalable cloud infrastructure and continuous integration/deployment",
      technologies: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      gradient: "from-teal-600 to-teal-800"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What We <span className="text-blue-600">Do</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            From concept to deployment, we provide comprehensive technology solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;