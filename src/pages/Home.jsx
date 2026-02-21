import { useState } from 'react';
import { Link } from 'react-router-dom';
import AdmissionModal from '../components/AdmissionModal';
import heroImage from '../assets/images/hero-image.jpg';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 pt-8 pb-20 px-4 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          {/* Hero Image */}
          <div className="mb-8 flex justify-center">
            <img
              src={heroImage}
              alt="Classroom Point Hero"
              className="w-full max-w-4xl rounded-2xl shadow-2xl object-cover"
              style={{ maxHeight: '500px' }}
            />
          </div>

          {/* Content Below Image */}
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary dark:text-blue-400 mb-6 transition-colors duration-200">
              Best Education for Best Score
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Premier coaching institute for JEE, NEET, and Foundation courses.
              Building strong foundations for academic excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center shadow-lg"
              >
                Start Your Journey
                <span className="ml-2">→</span>
              </button>
              <button className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors flex items-center shadow-lg">
                📅 Book Free Demo
              </button>
            </div>

            <p className="text-center text-gray-600">
              Joined by <span className="font-bold text-primary">50,000+</span> ambitious students
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">🏆</div>
              <div className="text-3xl font-bold text-gray-900 mb-1">Latest Result</div>
              <div className="text-lg text-gray-600">AIR 12 in JEE Advanced 2023</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-lg text-gray-600">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50k+</div>
              <div className="text-lg text-gray-600">Students Mentored</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-lg text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">Our Specialized Programs</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 transition-colors duration-200">Choose Your Path to Success</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Foundation Course */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-200">
              <div className="text-5xl mb-4">🧒</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">Foundation Classes</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 font-semibold transition-colors duration-200">
                Classes: VI, VII, VIII, IX, X (CBSE)
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-200">
                Program: JEE & NEET Foundation
              </p>
              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2 transition-colors duration-200">Subjects:</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-200">Physics (Phy), Chemistry (Chem), Maths, Biology (Bio), English (Eng), SST (Social Studies)</p>
              </div>
              <Link to="/programs" className="text-primary dark:text-blue-400 font-semibold hover:underline flex items-center transition-colors duration-200">
                Learn More <span className="ml-2">→</span>
              </Link>
            </div>

            {/* Senior Classes */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-200">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">Senior Classes</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 font-semibold transition-colors duration-200">
                Classes: XI, XII (CBSE / BSEB)
              </p>
              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2 transition-colors duration-200">Subjects:</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-200">Physics, Chemistry, Maths, Biology, English</p>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-200">
                Comprehensive preparation for JEE, NEET, and Board exams with expert guidance.
              </p>
              <Link to="/programs" className="text-primary dark:text-blue-400 font-semibold hover:underline flex items-center transition-colors duration-200">
                Learn More <span className="ml-2">→</span>
              </Link>
            </div>

            {/* NEET Course */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-200">
              <div className="text-5xl mb-4">🏥</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">NEET (Medical)</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-200">
                Comprehensive preparation for medical entrance exams. Deep dive into Biology with expert guidance in Physics and Chemistry.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-700 dark:text-gray-300 transition-colors duration-200">
                  <span className="text-green-500 mr-2">✓</span> Daily Practice Papers (DPP)
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300 transition-colors duration-200">
                  <span className="text-green-500 mr-2">✓</span> Dedicated Biology Labs
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300 transition-colors duration-200">
                  <span className="text-green-500 mr-2">✓</span> NCERT Focused Approach
                </li>
              </ul>
              <Link to="/programs" className="text-primary dark:text-blue-400 font-semibold hover:underline flex items-center transition-colors duration-200">
                Learn More <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Classroom Advantages Section */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">⭐ Our Classroom Advantages</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 transition-colors duration-200">Why Choose Classroom Point?</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-200">
              <div className="text-4xl mb-3">👨‍🏫</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-200">Best Teachers</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-200">Expert faculty with years of experience</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-200">
              <div className="text-4xl mb-3">💻</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-200">Digital Class</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-200">Modern technology-enhanced learning</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-200">
              <div className="text-4xl mb-3">📝</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-200">Weekly Test</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-200">Regular assessment and progress tracking</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-200">
              <div className="text-4xl mb-3">🎓</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-200">Monthly Scholarship</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-200">Reward excellence and merit</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-200">
              <div className="text-4xl mb-3">📹</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-200">CCTV Campus</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-200">Safe and secure learning environment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Wall of Fame Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">Our Wall of Fame</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 transition-colors duration-200">Celebrating the hard work and success of our top achievers.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-200">
              <div className="text-3xl font-bold text-primary dark:text-blue-400 mb-2 transition-colors duration-200">AIR 12</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 transition-colors duration-200">Rahul Sharma</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2 transition-colors duration-200">JEE Advanced 2023</p>
              <div className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-200">Score: 298 / 300</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-200">
              <div className="text-3xl font-bold text-primary dark:text-blue-400 mb-2 transition-colors duration-200">AIR 45</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 transition-colors duration-200">Priya Patel</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2 transition-colors duration-200">NEET 2023</p>
              <div className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-200">Score: 710 / 720</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-200">
              <div className="text-3xl font-bold text-primary dark:text-blue-400 mb-2 transition-colors duration-200">99.2%</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 transition-colors duration-200">Aryan Gupta</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2 transition-colors duration-200">CBSE 12th Board</p>
              <div className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-200">Category: PCMB Stream</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-200">
              <div className="text-3xl font-bold text-primary dark:text-blue-400 mb-2 transition-colors duration-200">AIR 89</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 transition-colors duration-200">Sneha Reddy</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2 transition-colors duration-200">JEE Main 2023</p>
              <div className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-200">Percentile: 99.98 %ile</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Start Your Success Story Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Join Classroom Point and experience the difference of structured learning and expert mentorship.
            Register for a free counseling session.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Enroll Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
              Talk to Expert
            </button>
          </div>
        </div>
      </section>

      <AdmissionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Home;
