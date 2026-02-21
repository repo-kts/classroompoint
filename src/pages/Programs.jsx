import { useState } from 'react';

const Programs = () => {
  const [activeTab, setActiveTab] = useState('Foundation');

  const tabs = [
    { id: 'Foundation', label: '🧒 Foundation Classes (VI-X)' },
    { id: 'Senior', label: '🎯 Senior Classes (XI-XII)' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            🎓 Courses Offered
          </h1>
          <p className="text-xl text-primary font-semibold mb-2">
            CLASSROOM POINT - Best Education for Best Score
          </p>
          <p className="text-xl text-gray-600 mb-8">
            Expert-led classroom coaching designed to bridge the gap between school learning and competitive excellence.
          </p>
          <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
            🔥 Admissions Open 2024-25
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-white border-b sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 py-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Foundation Program Content */}
      {activeTab === 'Foundation' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">🧒 Foundation Classes</h2>
              <p className="text-xl text-gray-600">
                Building strong foundations for future competitive exams and board excellence.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Classes Offered</h3>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-700">
                      <span className="text-primary mr-2 font-bold">•</span> Class VI
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="text-primary mr-2 font-bold">•</span> Class VII
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="text-primary mr-2 font-bold">•</span> Class VIII
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="text-primary mr-2 font-bold">•</span> Class IX
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="text-primary mr-2 font-bold">•</span> Class X (CBSE)
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Program</h3>
                  <p className="text-xl text-primary font-semibold mb-4">JEE & NEET Foundation</p>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Subjects:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-2">✓</span> Physics (Phy)
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-2">✓</span> Chemistry (Chem)
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-2">✓</span> Maths
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-2">✓</span> Biology (Bio)
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-2">✓</span> English (Eng)
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-2">✓</span> SST (Social Studies)
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <p className="text-xl font-semibold text-gray-900">Join our Foundation program and build a strong base for your future!</p>
            </div>
          </div>
        </section>
      )}

      {/* Senior Classes Program Content */}
      {activeTab === 'Senior' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">🎯 Senior Classes</h2>
              <p className="text-xl text-gray-600">
                Comprehensive preparation for JEE, NEET, and Board examinations.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Classes Offered</h3>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-700">
                      <span className="text-primary mr-2 font-bold">•</span> Class XI
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="text-primary mr-2 font-bold">•</span> Class XII (CBSE / BSEB)
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Programs</h3>
                  <div className="space-y-3 mb-6">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="font-semibold text-gray-900 mb-2">JEE Main & Advanced</p>
                      <p className="text-sm text-gray-600">Engineering entrance preparation</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <p className="font-semibold text-gray-900 mb-2">NEET (Medical)</p>
                      <p className="text-sm text-gray-600">Medical entrance preparation</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <p className="font-semibold text-gray-900 mb-2">Board Preparation</p>
                      <p className="text-sm text-gray-600">CBSE & BSEB board exams</p>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Subjects:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-2">✓</span> Physics
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-2">✓</span> Chemistry
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-2">✓</span> Maths
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-2">✓</span> Biology
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-2">✓</span> English
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-primary to-blue-600 text-white rounded-lg p-6 text-center">
              <p className="text-xl font-semibold">Ready to excel in your competitive exams? Join our Senior classes today!</p>
            </div>
          </div>
        </section>
      )}

      {/* Old JEE Program Content - Keeping for reference but hidden */}
      {false && activeTab === 'JEE' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">JEE Main & Advanced Coaching</h2>
              <p className="text-xl text-gray-600">
                Comprehensive 2-year and 1-year programs focusing on concept clarity and rigorous problem-solving techniques.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Excel 2-Year Program */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Excel 2-Year Program</h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    For Class 11th Students
                  </span>
                </div>
                <div className="text-gray-600 mb-6">Duration: 24 Months</div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">🏫 Eligibility</div>
                    <div className="font-semibold">Class 10 Pass/Appearing</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">📚 Syllabus</div>
                    <div className="font-semibold">JEE + CBSE Board</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Course Highlights</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-2">✓</span> 800+ Hours of Interactive Classroom Lectures
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-2">✓</span> Daily Practice Problems (DPP) & Chapter Modules
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-2">✓</span> Fortnightly AIATS (All India Test Series)
                    </li>
                  </ul>
                </div>

                <div className="border-t pt-4 mb-4">
                  <div className="text-sm text-gray-500 mb-2">Fee Structure</div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl font-bold text-gray-900">₹1,45,000</span>
                    <span className="text-lg text-gray-500 line-through">₹1,80,000</span>
                    <span className="text-sm text-green-600 font-semibold">Up to 90% Scholarship</span>
                  </div>
                  <div className="text-xs text-gray-500">Inclusive of GST. Instalment plans available.</div>
                </div>

                <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Enroll for Excel Batch
                </button>
              </div>

              {/* Power Step-Up Program */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Power Step-Up (Droppers)</h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    For Class 12th Pass Students
                  </span>
                </div>
                <div className="text-gray-600 mb-6">Duration: 12 Months</div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">👤 Eligibility</div>
                    <div className="font-semibold">Class 12 Pass</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">⚡ Focus</div>
                    <div className="font-semibold">Rank Improvement</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Course Highlights</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-2">✓</span> Intensive Revision of 11th & 12th Concepts
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-2">✓</span> Advanced Problem-Solving Worksheets
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-2">✓</span> Weekly Full-Length Mock Tests
                    </li>
                  </ul>
                </div>

                <div className="border-t pt-4 mb-4">
                  <div className="text-sm text-gray-500 mb-2">Fee Structure</div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl font-bold text-gray-900">₹95,000</span>
                    <span className="text-lg text-gray-500 line-through">₹1,10,000</span>
                    <span className="text-sm text-green-600 font-semibold">Scholarship Available</span>
                  </div>
                  <div className="text-xs text-gray-500">Inclusive of GST. Single payment discount.</div>
                </div>

                <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Enroll for Power Batch
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="text-3xl mb-2">📖</div>
                <div className="font-semibold mb-1">Study Material</div>
                <div className="text-sm text-gray-600">Updated Modules</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="text-3xl mb-2">❓</div>
                <div className="font-semibold mb-1">Doubt Solving</div>
                <div className="text-sm text-gray-600">24/7 Portal Access</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="text-3xl mb-2">✅</div>
                <div className="font-semibold mb-1">Mentorship</div>
                <div className="text-sm text-gray-600">Top Faculty Guidance</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="text-3xl mb-2">📊</div>
                <div className="font-semibold mb-1">Performance Analytics</div>
                <div className="text-sm text-gray-600">AI Powered Insights</div>
              </div>
            </div>

            {/* Batch Schedule */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Batch Schedule</h3>
              <p className="text-gray-600 mb-6">
                Find the perfect batch that fits your academic timeline. Early bird registrations get an additional 5% discount on tuition fees.
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Program Name</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Target Year</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Start Date</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Batch Timing</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-sm">JEE Excel (2-Year)</td>
                      <td className="px-4 py-3 text-sm">2026</td>
                      <td className="px-4 py-3 text-sm">15th May, 2024</td>
                      <td className="px-4 py-3 text-sm">04:00 PM - 07:30 PM</td>
                      <td className="px-4 py-3">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">Open</span>
                      </td>
                      <td className="px-4 py-3">
                        <button className="text-primary hover:underline text-sm font-semibold">Select</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Class 11 Batch A</td>
                      <td className="px-4 py-3 text-sm">2025</td>
                      <td className="px-4 py-3 text-sm">22nd May, 2024</td>
                      <td className="px-4 py-3 text-sm">09:00 AM - 01:30 PM</td>
                      <td className="px-4 py-3">
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-semibold">Filling Fast</span>
                      </td>
                      <td className="px-4 py-3">
                        <button className="text-primary hover:underline text-sm font-semibold">Select</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Foundation Pro</td>
                      <td className="px-4 py-3 text-sm">2027</td>
                      <td className="px-4 py-3 text-sm">1st June, 2024</td>
                      <td className="px-4 py-3 text-sm">05:00 PM - 07:00 PM</td>
                      <td className="px-4 py-3">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">Registering</span>
                      </td>
                      <td className="px-4 py-3">
                        <button className="text-primary hover:underline text-sm font-semibold">Select</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Foundation Program Content */}
      {activeTab === 'Foundation' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Class 8-10 Foundation</h2>
              <p className="text-xl text-gray-600">
                Start early to gain a competitive edge. Our foundation courses focus on building strong logical reasoning, 
                mathematical ability, and scientific temperament for NTSE, KVPY, and future JEE/NEET exams.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Olympiad Prep</h3>
                <p className="text-gray-600">
                  Success oriented training for NSO, IMO, and UIEO.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Critical Thinking</h3>
                <p className="text-gray-600">
                  Advanced mental ability modules for competitive edge.
                </p>
              </div>
            </div>

            <div className="bg-primary text-white rounded-lg p-8 text-center">
              <p className="text-xl font-semibold mb-2">Join 10,000+ Students Nationwide</p>
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">How can I apply for a scholarship?</h3>
                <button className="text-primary text-2xl">+</button>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">What is the mode of instruction for classroom programs?</h3>
                <button className="text-primary text-2xl">+</button>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Is there a refund policy if I withdraw from a course?</h3>
                <button className="text-primary text-2xl">+</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
