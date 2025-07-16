import { Trophy, Users, Target, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Section Heading */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">Tecxzo</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We're not just another tech company. We're innovators, problem-solvers, and builders of digital experiences that matter.
          </p>
        </div>

        {/* Mission Card */}
        
        <div className="flex justify-center mb-16">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl w-full max-w-xl text-center">
            <h4 className="text-2xl font-bold mb-4">Our Mission</h4>
            <p className="text-lg leading-relaxed mb-6">
              To empower businesses with innovative technology solutions that drive growth, efficiency, and user satisfaction.
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
          <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
            <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h4>
            <p className="text-gray-600">Cutting-edge solutions using the latest technologies</p>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Reliability</h4>
            <p className="text-gray-600">Proven track record with real-world products</p>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
            <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Efficiency</h4>
            <p className="text-gray-600">Streamlined processes and automation expertise</p>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
            <Trophy className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h4>
            <p className="text-gray-600">Award-winning team with competitive programming background</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
