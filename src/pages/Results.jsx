const Results = () => {
  const achievements = [
    {
      year: '2023',
      title: 'Record Breaking Year',
      description: 'Highest number of selections in IITs and Medical Colleges',
      highlights: [
        { label: 'JEE Advanced AIR 12', value: 'Rahul Sharma' },
        { label: 'JEE Advanced AIR 42', value: 'Amit Kumar' },
        { label: 'NEET AIR 45', value: 'Priya Patel' },
        { label: '250+ Medical Selections', value: 'Government Colleges' }
      ]
    },
    {
      year: '2022',
      title: 'Excellence in Results',
      description: 'Outstanding performance across all competitive exams',
      highlights: [
        { label: 'JEE Advanced', value: '150+ Selections' },
        { label: 'NEET', value: '200+ Selections' },
        { label: 'JEE Main', value: '500+ Selections' },
        { label: 'Board Exams', value: '95%+ Average' }
      ]
    },
    {
      year: '2021',
      title: 'Consistent Excellence',
      description: 'Maintaining high success rates year after year',
      highlights: [
        { label: 'Top 100 Ranks', value: '25+ Students' },
        { label: 'IIT Selections', value: '120+ Students' },
        { label: 'Medical Selections', value: '180+ Students' },
        { label: 'Foundation Success', value: '90%+ Success Rate' }
      ]
    }
  ];

  const topAchievers = [
    { name: 'Rahul Sharma', rank: 'AIR 12', exam: 'JEE Advanced 2023', score: '298/300', image: '👨‍🎓' },
    { name: 'Priya Patel', rank: 'AIR 45', exam: 'NEET 2023', score: '710/720', image: '👩‍🎓' },
    { name: 'Aryan Gupta', rank: '99.2%', exam: 'CBSE 12th Board', score: 'PCMB Stream', image: '👨‍🎓' },
    { name: 'Sneha Reddy', rank: 'AIR 89', exam: 'JEE Main 2023', score: '99.98 %ile', image: '👩‍🎓' },
    { name: 'Amit Kumar', rank: 'AIR 42', exam: 'JEE Advanced 2023', score: '295/300', image: '👨‍🎓' },
    { name: 'Kavya Singh', rank: 'AIR 67', exam: 'NEET 2023', score: '705/720', image: '👩‍🎓' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Results and Success Stories
          </h1>
          <p className="text-xl text-primary font-semibold mb-2">
            CLASSROOM POINT - Best Education for Best Score
          </p>
          <p className="text-xl text-gray-600">
            Celebrating the achievements of our students who made it to top colleges
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">50k+</div>
              <div className="text-gray-600">Students Mentored</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">1000+</div>
              <div className="text-gray-600">IIT Selections</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">800+</div>
              <div className="text-gray-600">Medical Selections</div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Achievers Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Top Achievers</h2>
            <p className="text-xl text-gray-600">Students who made us proud</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topAchievers.map((achiever, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="text-6xl mb-4">{achiever.image}</div>
                <div className="text-2xl font-bold text-primary mb-2">{achiever.rank}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{achiever.name}</h3>
                <div className="text-gray-600 mb-2">{achiever.exam}</div>
                <div className="text-sm text-gray-500">Score: {achiever.score}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Year-wise Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Year-wise Achievements</h2>
            <p className="text-xl text-gray-600">Our journey of excellence</p>
          </div>
          
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-lg p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-sm text-gray-500 mb-2">{achievement.year}</div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                  <div className="text-5xl">🏆</div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {achievement.highlights.map((highlight, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-4">
                      <div className="text-sm text-gray-500 mb-1">{highlight.label}</div>
                      <div className="text-lg font-bold text-primary">{highlight.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 mb-4 italic">
                "Classroom Point's structured approach and expert faculty helped me achieve AIR 12 in JEE Advanced. 
                The daily practice problems and test series were game-changers."
              </p>
              <div className="font-semibold text-gray-900">Rahul Sharma</div>
              <div className="text-sm text-gray-600">JEE Advanced AIR 12, 2023</div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 mb-4 italic">
                "The biology labs and NCERT-focused approach at Classroom Point were exactly what I needed for NEET. 
                I'm grateful to the faculty for their constant support."
              </p>
              <div className="font-semibold text-gray-900">Priya Patel</div>
              <div className="text-sm text-gray-600">NEET AIR 45, 2023</div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 mb-4 italic">
                "The foundation course helped me build strong basics. Now I'm confident about my JEE preparation. 
                Thank you Classroom Point!"
              </p>
              <div className="font-semibold text-gray-900">Aryan Gupta</div>
              <div className="text-sm text-gray-600">CBSE 12th - 99.2%</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Be Our Next Success Story</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of successful students who achieved their dreams with Classroom Point
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Your Journey Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Results;
