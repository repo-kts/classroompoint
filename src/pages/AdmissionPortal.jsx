import { useState } from 'react';
import AdmissionModal from '../components/AdmissionModal';

const AdmissionPortal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    class: '',
    course: '',
    phone: '',
    email: '',
    city: '',
    previousSchool: '',
    parentName: '',
    parentPhone: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Admission form submitted:', formData);
    alert('Thank you! Your admission inquiry has been submitted. We will contact you soon.');
    setFormData({
      name: '',
      class: '',
      course: '',
      phone: '',
      email: '',
      city: '',
      previousSchool: '',
      parentName: '',
      parentPhone: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Student Admission Portal
            </h1>
            <p className="text-xl text-primary font-semibold mb-2">
              CLASSROOM POINT - Best Education for Best Score
            </p>
            <p className="text-xl text-gray-600 mb-8">
              Begin your journey towards academic excellence. Fill out the form below to start your admission process.
            </p>
            <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
              ADMISSIONS OPEN 2024-25
            </div>
          </div>
        </section>

        {/* Admission Form Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Admission Inquiry Form</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Student Information */}
                <div className="border-b pb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Student Information</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Student Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Enter student name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Class <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="class"
                        value={formData.class}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Select Class</option>
                        <option value="Class 8">Class 8</option>
                        <option value="Class 9">Class 9</option>
                        <option value="Class 10">Class 10</option>
                        <option value="Class 11">Class 11</option>
                        <option value="Class 12">Class 12</option>
                        <option value="Repeater">Repeater</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Course Interest <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Select Course</option>
                        <option value="JEE Main/Adv">JEE Main/Adv</option>
                        <option value="NEET (Medical)">NEET (Medical)</option>
                        <option value="Foundation">Foundation</option>
                        <option value="Olympiads">Olympiads</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="+91 XXXXXXXXXX"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="student@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Enter your city"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Previous School/College
                      </label>
                      <input
                        type="text"
                        name="previousSchool"
                        value={formData.previousSchool}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Enter previous school name"
                      />
                    </div>
                  </div>
                </div>

                {/* Parent/Guardian Information */}
                <div className="border-b pb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Parent/Guardian Information</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Parent Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Enter parent name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Parent Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="parentPhone"
                        value={formData.parentPhone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="+91 XXXXXXXXXX"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Submit Admission Inquiry
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="flex-1 border-2 border-primary text-primary py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
                  >
                    Quick Inquiry Form
                  </button>
                </div>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our Privacy Policy and Terms of Service. 
                  Your information is 100% secure and will be used only for admission purposes.
                </p>
              </form>
            </div>

            {/* Additional Information */}
            <div className="mt-8 bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What Happens Next?</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Our admission counselor will contact you within 24 hours</li>
                <li>Schedule a free counseling session at your convenience</li>
                <li>Get personalized guidance on course selection</li>
                <li>Complete the admission process with scholarship assessment</li>
              </ol>
            </div>
          </div>
        </section>
      </div>
      
      <AdmissionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default AdmissionPortal;
