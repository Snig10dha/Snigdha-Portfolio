import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Home, User, Code, Briefcase, Mail } from 'lucide-react';

const navItems = [
  { id: 'hero', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      // Show navigation after scrolling past hero
      setIsVisible(scrollPosition > window.innerHeight * 0.3);

      // Find active section
      const sections = navItems.map(item => item.id);
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId === 'hero' ? '' : sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isInView = rect.top <= 200 && rect.bottom >= 200;
          if (isInView) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-1/2 right-6 -translate-y-1/2 z-50 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
      }`}
    >
      <div className="flex flex-col space-y-2 bg-card/90 backdrop-blur-md border border-border/50 rounded-2xl p-3 shadow-glow-secondary">
        {navItems.map((item) => (
          <Button
            key={item.id}
            variant={activeSection === item.id ? "default" : "ghost"}
            size="sm"
            className={`w-12 h-12 p-0 transition-all duration-300 ${
              activeSection === item.id 
                ? 'bg-gradient-primary shadow-glow-secondary' 
                : 'hover:bg-primary/10'
            }`}
            onClick={() => scrollToSection(item.id)}
            title={item.label}
          >
            <item.icon className="w-5 h-5" />
          </Button>
        ))}
      </div>
    </nav>
  );
};