import { useState } from 'react';
import AdmissionModal from '../components/AdmissionModal';

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format the message for WhatsApp
    const message = `*New Contact Message* 
    
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Message:* ${formData.message}`;

    // Your WhatsApp number
    const phoneNumber = "919534711704";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 px-4 transition-colors duration-200">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary dark:text-blue-400 mb-4 transition-colors duration-200">
              Contact CLASSROOM POINT
            </h1>
            <p className="text-xl text-primary font-semibold mb-2">
              Best Education for Best Score
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-300 transition-colors duration-200">
              Get in touch with us for any queries or assistance
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-colors duration-200">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-200">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-200">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-200">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-200">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200"
                      placeholder="+91 XXXXXXXXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-200">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200"
                      placeholder="Your message..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Send Message via WhatsApp
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-colors duration-200">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-200">Get in Touch</h2>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="text-3xl mr-4">📧</div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1 transition-colors duration-200">Email</h3>
                        <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">info@classroompoint.com</p>
                        <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">support@classroompoint.com</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="text-3xl mr-4">📞</div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1 transition-colors duration-200">Phone Numbers</h3>
                        <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">
                          <a href="tel:9534711704" className="hover:text-primary transition-colors">95347 11704</a>
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">
                          <a href="tel:6202819264" className="hover:text-primary transition-colors">62028 19264</a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="text-3xl mr-4">📍</div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1 transition-colors duration-200">Address</h3>
                        <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">
                          Shri Laxmi Sudama Complex,<br />
                          Khandakpar More,<br />
                          Bihar Sharif (803101)
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="text-3xl mr-4">🕒</div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1 transition-colors duration-200">Office Hours</h3>
                        <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                        <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">Sunday: 10:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary text-white rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-bold mb-4">Need Career Counseling?</h3>
                  <p className="mb-6 opacity-90">
                    Talk to our experts and get personalized guidance for your academic journey.
                  </p>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Book Free Counseling
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center transition-colors duration-200">Find Us</h2>
            <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-96 flex items-center justify-center transition-colors duration-200">
              <p className="text-gray-500 dark:text-gray-300">Map integration can be added here</p>
            </div>
          </div>
        </section>
      </div>

      <AdmissionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Contact;
