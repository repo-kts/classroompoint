import { useState } from 'react';

const AdmissionModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    class: '',
    course: '',
    phone: '',
    city: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format the message for WhatsApp
    const message = `*New Admission Inquiry* 🎓
    
*Name:* ${formData.name}
*Class:* ${formData.class}
*Course:* ${formData.course}
*Phone:* ${formData.phone}
*City:* ${formData.city}`;

    // Your WhatsApp number (India code +91 assumed)
    const phoneNumber = "919534711704";

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');

    onClose();
    setFormData({ name: '', class: '', course: '', phone: '', city: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Mastering the Future of Engineering & Medicine
          </h2>
          <p className="text-gray-600">
            India's premier coaching institute for competitive excellence. Join over 50,000 students achieving their dreams.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-4">Get Free Career Counselling</h3>
          <p className="text-gray-600 text-sm mb-4">
            Talk to our experts and choose the right path for JEE, NEET & Foundation.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <span className="inline-block mr-2">🎓</span> Student Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <span className="inline-block mr-2">👤</span> Class
            </label>
            <select
              name="class"
              value={formData.class}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
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
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Course Interest
            </label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="">Select Course</option>
              <option value="JEE Main/Adv">JEE Main/Adv</option>
              <option value="NEET (Medical)">NEET (Medical)</option>
              <option value="Foundation">Foundation</option>
              <option value="Olympiads">Olympiads</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <span className="inline-block mr-2">📞</span> Phone Number
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                +91
              </span>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="flex-1 px-4 py-2 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter phone number"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <span className="inline-block mr-2">📍</span> City
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Enter your city"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
          >
            Get Free Counselling
            <span className="ml-2">→</span>
          </button>

          <p className="text-xs text-gray-500 text-center">
            By clicking "Get Free Counselling", you agree to our Privacy Policy and Terms of Service. Your information is 100% secure.
          </p>
        </form>
      </div>
    </div>
  );
};

export default AdmissionModal;
