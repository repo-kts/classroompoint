import { Link } from 'react-router-dom';

// Import logo if it exists - you can uncomment and adjust the path when you add your logo
// import logo from '../assets/images/logo.png';
const logo = null; // Set this to your logo import when you add the logo file

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            {logo ? (
              <img 
                src={logo} 
                alt="CLASSROOM POINT Logo" 
                className="h-12 w-auto mb-3"
              />
            ) : (
              <h3 className="text-xl font-bold mb-2">CLASSROOM POINT</h3>
            )}
            <p className="text-primary font-semibold mb-2 text-sm">Best Education for Best Score</p>
            <p className="text-gray-400 text-sm">
              Premier coaching institute for JEE, NEET, and Foundation courses.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="hover:text-white transition-colors">Programs</Link></li>
              <li><Link to="/results" className="hover:text-white transition-colors">Results</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/programs" className="hover:text-white transition-colors">JEE Main + Advanced</Link></li>
              <li><Link to="/programs" className="hover:text-white transition-colors">NEET (Medical)</Link></li>
              <li><Link to="/programs" className="hover:text-white transition-colors">Foundation Course</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">📍 Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="mb-2">
                <div className="font-semibold text-white mb-1">Address:</div>
                Shri Laxmi Sudama Complex,<br />
                Khandakpar More,<br />
                Bihar Sharif (803101)
              </li>
              <li className="mt-3">
                <div className="font-semibold text-white mb-1">📞 Phone:</div>
                <a href="tel:9534711704" className="hover:text-white transition-colors">95347 11704</a><br />
                <a href="tel:6202819264" className="hover:text-white transition-colors">62028 19264</a>
              </li>
              <li className="mt-3">
                <Link to="/contact" className="hover:text-white transition-colors underline">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Classroom Point. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
