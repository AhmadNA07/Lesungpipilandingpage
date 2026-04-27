import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
<<<<<<< HEAD
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
=======
  const scrollToAbout = () => {
    const element = document.getElementById('about');
>>>>>>> 5a2d94329250ca4522ac81e2424e420902f12a56
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <ImageWithFallback
<<<<<<< HEAD
          src="../images/back.jpeg"
=======
          src="https://images.unsplash.com/photo-1777113310787-d7c2fdce19ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxhZXN0aGV0aWMlMjBjYWZlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzc3Mjk3MDM5fDA&ixlib=rb-4.1.0&q=80&w=1080"
>>>>>>> 5a2d94329250ca4522ac81e2424e420902f12a56
          alt="Lesung Pipi Cafe Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60"></div>
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -100, opacity: 0 }}
            animate={{
              y: ['0vh', '100vh'],
              opacity: [0, 0.3, 0],
              x: [0, Math.random() * 100 - 50]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 2,
              ease: 'linear'
            }}
            className="absolute w-1 h-20 bg-white/20 rounded-full blur-sm"
            style={{ left: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="mb-5 sm:mb-7 flex justify-center"
          >
<<<<<<< HEAD
            <img 
              src="../images/logo.jpg" 
              alt="Lesung Pipi Logo"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shadow-2xl ring-4 ring-white/30"
              onError={(e) => {
                e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"%3E%3Crect width="80" height="80" fill="%23f97316"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="32"%3ELP%3C/text%3E%3C/svg%3E';
              }}
            />
=======
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-teal-500 via-teal-600 to-emerald-700 rounded-full flex items-center justify-center shadow-2xl ring-4 ring-white/30">
              <span className="text-white font-bold text-2xl sm:text-3xl">LP</span>
            </div>
>>>>>>> 5a2d94329250ca4522ac81e2424e420902f12a56
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4"
          >
            Lesung Pipi
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
<<<<<<< HEAD
            className="text-base sm:text-xl lg:text-2xl mb-2 sm:mb-3 text-orange-200"
          >
            Cafe & Eatery
=======
            className="text-base sm:text-xl lg:text-2xl mb-2 sm:mb-3 text-teal-200"
          >
            Cafe & Coffee Shop
>>>>>>> 5a2d94329250ca4522ac81e2424e420902f12a56
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xs sm:text-sm lg:text-base max-w-2xl mx-auto mb-6 sm:mb-10 text-gray-200 px-4 leading-relaxed"
          >
<<<<<<< HEAD
            New Cozy Space on Surakarta.
=======
            Nikmati secangkir kopi berkualitas dalam suasana yang hangat dan estetik.
            Tempat sempurna untuk bersantai, bekerja, dan bertemu teman.
>>>>>>> 5a2d94329250ca4522ac81e2424e420902f12a56
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
<<<<<<< HEAD
            onClick={scrollToMenu}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-xs sm:text-sm px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Lihat Menu Kami
=======
            onClick={scrollToAbout}
            className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white text-xs sm:text-sm px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Jelajahi Lebih Lanjut
>>>>>>> 5a2d94329250ca4522ac81e2424e420902f12a56
          </motion.button>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ opacity: { delay: 1.2 }, y: { repeat: Infinity, duration: 1.5 } }}
<<<<<<< HEAD
          onClick={scrollToMenu}
=======
          onClick={scrollToAbout}
>>>>>>> 5a2d94329250ca4522ac81e2424e420902f12a56
          className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown size={28} className="text-white" />
        </motion.button>
      </div>
    </section>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 5a2d94329250ca4522ac81e2424e420902f12a56
