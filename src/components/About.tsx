import { Trophy, Users, Target, Zap } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="pt-0 pb-20 bg-white dark:bg-black transition-colors duration-300 border-0 mt-0"
    >
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="max-w-4xl mx-auto text-center mb-16 pt-16 md:pt-24">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About{" "}
            <span className="text-blue-600 dark:text-blue-400">Tecxzo</span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            We're not just another tech company. We're innovators,
            problem-solvers, and builders of digital experiences that matter.
          </p>
        </div>

        {/* Mission Card */}

        <div className="flex justify-center mb-16">
          <div className="bg-white dark:bg-white/5 rounded-2xl p-8 text-gray-900 dark:text-white shadow-xl border border-gray-100 dark:border-white/10 w-full max-w-xl text-center transition-colors duration-300">
            <h4 className="text-2xl font-bold mb-4">Our Mission</h4>
            <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-200">
              To empower businesses with innovative technology solutions that
              drive growth, efficiency, and user satisfaction.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm opacity-90">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm opacity-90">App Downloads</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-8 bg-white/5 dark:bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 shadow-lg transition-all duration-300 flex flex-col items-center hover:scale-[1.03] hover:shadow-2xl">
            <Target className="h-12 w-12 text-blue-500 mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Innovation
            </h4>
            <p className="text-gray-700 dark:text-gray-300">
              Cutting-edge solutions using the latest technologies
            </p>
          </div>
          <div className="text-center p-8 bg-white/5 dark:bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 shadow-lg transition-all duration-300 flex flex-col items-center hover:scale-[1.03] hover:shadow-2xl">
            <Users className="h-12 w-12 text-blue-500 mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Reliability
            </h4>
            <p className="text-gray-700 dark:text-gray-300">
              Proven track record with real-world products
            </p>
          </div>
          <div className="text-center p-8 bg-white/5 dark:bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 shadow-lg transition-all duration-300 flex flex-col items-center hover:scale-[1.03] hover:shadow-2xl">
            <Zap className="h-12 w-12 text-blue-500 mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Efficiency
            </h4>
            <p className="text-gray-700 dark:text-gray-300">
              Streamlined processes and automation expertise
            </p>
          </div>
          <div className="text-center p-8 bg-white/5 dark:bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 shadow-lg transition-all duration-300 flex flex-col items-center hover:scale-[1.03] hover:shadow-2xl">
            <Trophy className="h-12 w-12 text-blue-500 mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Excellence
            </h4>
            <p className="text-gray-700 dark:text-gray-300">
              Award-winning team with competitive programming background
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
