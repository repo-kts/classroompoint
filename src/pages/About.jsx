import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            About CLASSROOM POINT
          </h1>
          <p className="text-2xl text-primary font-semibold mb-2">
            Best Education for Best Score
          </p>
          <p className="text-xl text-gray-600 mb-8">
            Empowering Minds, Shaping Futures
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/programs" className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Explore Journey
            </Link>
            <button className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors">
              Our Vision
            </button>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Since 2010
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Journey of Classroom Point</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              From a small coaching center to a leading institute for JEE and NEET, our story is one of dedication and academic excellence. 
              We started with a vision to democratize high-quality coaching for competitive exams.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Today, we stand as a beacon of hope for thousands of aspirants, providing not just information, but transformation through 
              rigorous pedagogy and personalized mentorship.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15K+</div>
              <div className="text-gray-600">Alumni</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">12+</div>
              <div className="text-gray-600">Centers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-gray-600">Success</div>
            </div>
          </div>
        </div>
      </section>

      {/* Director's Message */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="text-5xl mb-4">💬</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Director's Message</h3>
            <p className="text-lg text-gray-700 mb-6 italic">
              "Education is not just about grades, but about building character and analytical thinking. 
              At Classroom Point, we bridge the gap between dreaming and achieving by fostering a culture of curiosity and discipline."
            </p>
            <div>
              <div className="font-bold text-gray-900">Dr. Rajesh Sharma</div>
              <div className="text-gray-600">Founder & Director, PhD (IIT Delhi)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expert Faculty</h2>
            <p className="text-xl text-gray-600">
              Learn from the brightest minds. Our faculty members are IITians and Doctors with years of experience in cracking competitive exams.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-3xl mb-3">✅</div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Prof. Ananya Iyer</h3>
              <div className="text-primary font-semibold mb-2">Physics HOD</div>
              <div className="text-sm text-gray-600 mb-2">15+ Yrs Exp</div>
              <p className="text-sm text-gray-700">
                Specialist in Mechanics & Optics. Ex-Faculty resonance.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-3xl mb-3">✅</div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Dr. Vikram Mehta</h3>
              <div className="text-primary font-semibold mb-2">Chemistry Specialist</div>
              <div className="text-sm text-gray-600 mb-2">12+ Yrs Exp</div>
              <p className="text-sm text-gray-700">
                Organic Chemistry wizard. Author of 3 JEE prep books.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-3xl mb-3">✅</div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Dr. Sarah Khan</h3>
              <div className="text-primary font-semibold mb-2">Biology Expert</div>
              <div className="text-sm text-gray-600 mb-2">10+ Yrs Exp</div>
              <p className="text-sm text-gray-700">
                MBBS Graduate. NEET specialist for Genetics & Zoology.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-3xl mb-3">✅</div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Prof. Rahul Verma</h3>
              <div className="text-primary font-semibold mb-2">Mathematics HOD</div>
              <div className="text-sm text-gray-600 mb-2">18+ Yrs Exp</div>
              <p className="text-sm text-gray-700">
                IIT Kharagpur Alum. Known for Shortcut Techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Legacy of Success</h2>
            <p className="text-xl text-gray-600">
              A decade of setting new benchmarks in medical and engineering entrances.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-4xl mb-3">🏆</div>
              <div className="text-sm text-gray-500 mb-2">2023</div>
              <div className="font-semibold text-gray-500 mb-2">Record High</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">JEE & NEET Breakthrough</h3>
              <p className="text-gray-600">
                AIR 42 in JEE Advanced and 250+ students selected for Government Medical Colleges.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-4xl mb-3">🎖️</div>
              <div className="text-sm text-gray-500 mb-2">2022</div>
              <div className="font-semibold text-gray-500 mb-2">Excellence Award</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Best Coaching Institute</h3>
              <p className="text-gray-600">
                Awarded 'Best Coaching Institute' by the State Education Board for NEET prep.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-4xl mb-3">🏫</div>
              <div className="text-sm text-gray-500 mb-2">2021</div>
              <div className="font-semibold text-gray-500 mb-2">Foundation Expansion</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Foundation Programs</h3>
              <p className="text-gray-600">
                Launched intensive foundation programs for Class 8-10, setting a base for early aspirants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join Classroom Point today and take the first step towards a successful career in Science and Medicine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Book a Free Demo
            </Link>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
