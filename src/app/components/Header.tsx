import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
<<<<<<< HEAD
  const [isMobile, setIsMobile] = useState(false);
=======
>>>>>>> 5a2d94329250ca4522ac81e2424e420902f12a56

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
<<<<<<< HEAD
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleScroll();
    checkMobile();
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    
    // Tunggu sedikit agar menu tertutup dulu
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = isMobile ? 60 : 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
=======
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
>>>>>>> 5a2d94329250ca4522ac81e2424e420902f12a56
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
<<<<<<< HEAD
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-sm'
=======
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white/80 backdrop-blur-sm'
>>>>>>> 5a2d94329250ca4522ac81e2424e420902f12a56
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center py-2.5 sm:py-3">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
<<<<<<< HEAD
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <img 
              src="../images/logo.jpg" 
              alt="Lesung Pipi Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover shadow-md"
              onError={(e) => {
                e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"%3E%3Crect width="40" height="40" fill="%23f97316"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="16"%3ELP%3C/text%3E%3C/svg%3E';
              }}
            />
            <div>
              <h1 className="text-base sm:text-lg font-bold text-orange-800">Lesung Pipi</h1>
              <p className="text-[10px] sm:text-xs text-orange-600 hidden sm:block">Cafe & Eatery</p>
=======
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-teal-600 via-teal-700 to-emerald-800 rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm sm:text-base">LP</span>
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-bold text-teal-900">Lesung Pipi</h1>
              <p className="text-[10px] sm:text-xs text-teal-700 hidden sm:block">Cafe & Coffee</p>
>>>>>>> 5a2d94329250ca4522ac81e2424e420902f12a56
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 lg:gap-8">
            {['home', 'about', 'menu', 'gallery', 'contact'].map((section) => (
              <motion.button
                key={section}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(section)}
<<<<<<< HEAD
                className="text-sm text-gray-700 hover:text-orange-600 transition-colors capitalize font-medium"
=======
                className="text-sm text-gray-700 hover:text-teal-700 transition-colors capitalize"
>>>>>>> 5a2d94329250ca4522ac81e2424e420902f12a56
              >
                {section}
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
<<<<<<< HEAD
            className="md:hidden p-1.5 text-gray-700 hover:text-orange-600 transition-colors"
=======
            className="md:hidden p-1.5 text-gray-700 hover:text-teal-700 transition-colors"
>>>>>>> 5a2d94329250ca4522ac81e2424e420902f12a56
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
<<<<<<< HEAD
              className="md:hidden overflow-hidden border-t border-orange-100"
            >
              <div className="flex flex-col py-3 bg-white/95">
=======
              className="md:hidden overflow-hidden border-t border-gray-200"
            >
              <div className="flex flex-col py-3">
>>>>>>> 5a2d94329250ca4522ac81e2424e420902f12a56
                {['home', 'about', 'menu', 'gallery', 'contact'].map((section, idx) => (
                  <motion.button
                    key={section}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => scrollToSection(section)}
<<<<<<< HEAD
                    className="text-left text-sm text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-colors py-2.5 px-2 rounded capitalize font-medium"
=======
                    className="text-left text-sm text-gray-700 hover:text-teal-700 hover:bg-teal-50 transition-colors py-2.5 px-2 rounded capitalize"
>>>>>>> 5a2d94329250ca4522ac81e2424e420902f12a56
                  >
                    {section}
                  </motion.button>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 5a2d94329250ca4522ac81e2424e420902f12a56
