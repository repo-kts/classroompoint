# Classroom Point - JEE, NEET & Foundation Coaching

A modern React application for Classroom Point, India's premier coaching institute for JEE (Main + Advanced), NEET, and Foundation courses.

## Features

- 🏠 **Homepage** - Hero section, programs overview, stats, testimonials, and call-to-action
- 📚 **Programs Page** - Detailed information about JEE, NEET, and Foundation courses
- ℹ️ **About Page** - Institute journey, faculty, and legacy
- 📞 **Contact Page** - Contact form and information
- 🏆 **Results Page** - Success stories and achievements
- 🎓 **Admission Portal** - Complete admission inquiry form
- 🏆 **Results Page** - Success stories and achievements
- 🎓 **Admission Portal** - Complete admission inquiry form
- 📝 **Admission Modal** - Quick inquiry popup form
- 🌙 **Dark Mode** - Fully supported dark theme for all pages

## Tech Stack

- **React 19** - UI library
- **React Router DOM** - Routing
- **Tailwind CSS** - Styling
- **Vite** - Build tool

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd classroom-point-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation bar
│   ├── Footer.jsx          # Footer component
│   └── AdmissionModal.jsx  # Admission inquiry modal
├── pages/
│   ├── Home.jsx            # Homepage
│   ├── About.jsx           # About page
│   ├── Programs.jsx         # Programs page
│   ├── Contact.jsx         # Contact page
│   ├── Results.jsx         # Results page
│   └── AdmissionPortal.jsx # Admission portal page
├── App.jsx                 # Main app component with routing
├── main.jsx                # Entry point
└── index.css               # Global styles with Tailwind
```

## Routes

- `/` - Homepage
- `/about` - About Our Institute
- `/programs` - Academic Programs
- `/contact` - Contact Us
- `/results` - Results and Success Stories
- `/admission-portal` - Student Admission Portal

## Customization

The design uses the primary color `#135bec` (blue) as defined in `tailwind.config.js`. You can customize colors, fonts, and other design tokens in the Tailwind configuration file.

## License

This project is created for Classroom Point Education Pvt. Ltd.
