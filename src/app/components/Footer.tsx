import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-900 text-white py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 bg-gradient-to-br from-teal-400 to-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">LP</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold">Lesung Pipi</h3>
            </div>
            <p className="text-teal-100 text-xs sm:text-sm leading-relaxed">
              Cafe & Coffee Shop yang menyajikan kopi berkualitas tinggi dengan suasana estetik dan nyaman.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-bold text-sm sm:text-base mb-3">Quick Links</h4>
            <ul className="space-y-1.5 text-xs sm:text-sm">
              {['home', 'about', 'menu', 'gallery', 'contact'].map((link) => (
                <li key={link}>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href={`#${link}`}
                    className="text-teal-100 hover:text-white transition-colors capitalize inline-block"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-bold text-sm sm:text-base mb-3">Kontak</h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-teal-100">
              <li>Jl. Contoh Alamat No. 123</li>
              <li>Jakarta Selatan, 12345</li>
              <li>+62 812-3456-7890</li>
              <li>info@lesungpipi.com</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-teal-700 pt-5 sm:pt-6 text-center"
        >
          <p className="text-teal-100 text-[10px] sm:text-xs">
            &copy; 2026 Lesung Pipi Cafe. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
