import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceEducationContact from './components/ExperienceEducationContact';

function App() {
  return (
    <div className="min-h-screen antialiased bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-bold text-gray-900">Shyam Hari</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:text-indigo-700" href="#about">About</a>
            <a className="hover:text-indigo-700" href="#projects">Projects</a>
            <a className="hover:text-indigo-700" href="#experience">Experience</a>
            <a className="hover:text-indigo-700" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceEducationContact />
      </main>

      <footer className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Shyam Hari. All rights reserved.</p>
          <div className="flex gap-5">
            <a className="hover:text-gray-700" href="#home">Home</a>
            <a className="hover:text-gray-700" href="#projects">Projects</a>
            <a className="hover:text-gray-700" href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
