import { MapPin, Phone, Instagram, Send, Clock } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: Phone,
      url: 'https://wa.me/6281234567890',
      color: 'bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
      label: '+62 812-3456-7890',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/lesungpipicafe',
      color: 'bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600',
      label: '@lesungpipicafe',
    },
    {
      name: 'TikTok',
      icon: Send,
      url: 'https://tiktok.com/@lesungpipicafe',
      color: 'bg-gradient-to-br from-gray-900 to-black hover:from-black hover:to-gray-900',
      label: '@lesungpipicafe',
    },
    {
      name: 'Google Maps',
      icon: MapPin,
      url: 'https://maps.google.com',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
      label: 'Lihat Lokasi',
    },
  ];

  return (
    <section ref={ref} id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-stone-50 to-teal-100">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-900 mb-2 sm:mb-3">
            Hubungi Kami
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 max-w-3xl mx-auto px-4">
            Temukan kami dan ikuti perjalanan kopi kami di media sosial
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 sm:space-y-5"
          >
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-teal-700" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-gray-900 mb-1.5">Alamat</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Jl. Contoh Alamat No. 123<br />
                    Jakarta Selatan, 12345<br />
                    Indonesia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="text-teal-700" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-gray-900 mb-1.5">Jam Buka</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Senin - Jumat: 08:00 - 22:00<br />
                    Sabtu - Minggu: 09:00 - 23:00
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-teal-700" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-gray-900 mb-1.5">Telepon</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    +62 812-3456-7890
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3 sm:space-y-4"
          >
            <h3 className="text-base sm:text-lg font-bold text-teal-900 mb-3 sm:mb-4 px-1">
              Ikuti Kami
            </h3>
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + idx * 0.1 }}
                whileHover={{ scale: 1.03, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className={`${social.color} text-white rounded-xl p-3.5 sm:p-4 flex items-center gap-3 shadow-md hover:shadow-xl transition-all duration-300`}
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <social.icon size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-xs sm:text-sm mb-0.5">{social.name}</h4>
                  <p className="text-[10px] sm:text-xs opacity-90">{social.label}</p>
                </div>
                <Send size={16} className="opacity-70 flex-shrink-0" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Map Embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 sm:mt-12 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg"
        >
          <div className="bg-gradient-to-br from-stone-100 to-teal-100 h-52 sm:h-72 flex items-center justify-center">
            <div className="text-center text-gray-600">
              <MapPin size={40} className="mx-auto mb-3 text-teal-700" />
              <p className="text-xs sm:text-sm font-medium">Embed Google Maps di sini</p>
              <p className="text-[10px] sm:text-xs mt-1.5 text-gray-500">
                (Ganti dengan iframe Google Maps yang sebenarnya)
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
