import {useEffect, useState} from 'react';
import {Navigation} from "./components/navigation.tsx";
import {Profile} from "./components/profile.tsx";
import {Experience} from "./components/experiences.tsx";
import {Skills} from "./components/skills.tsx";
import {Projects} from "./components/projects.tsx";
import {Footer} from "./components/footer.tsx";
import {FinancialDocAnalyzerDemo} from "./components/financialDocAnalyzerDemo.tsx";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('profile');
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  const readDemoFromUrl = () => {
    const params = new URLSearchParams(window.location.search);
    const demo = params.get('demo');
    setActiveDemo(demo);
  };

  useEffect(() => {
    readDemoFromUrl();

    const handleScroll = () => {
      const sections = ['profile', 'experience', 'skills', 'projects'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleUrlChange = () => {
      readDemoFromUrl();
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('popstate', handleUrlChange);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const closeDemoPage = () => {
    const url = new URL(window.location.href);
    url.searchParams.delete('demo');
    window.history.pushState({}, '', url);
    setActiveDemo(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (activeDemo === 'financial-doc-analyzer') {
    return <FinancialDocAnalyzerDemo onBack={closeDemoPage} />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <Navigation
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
      />

      {/* Profile Section */}
      <Profile/>

      {/* Experience Section */}
      <Experience/>

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;