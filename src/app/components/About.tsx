import { Coffee, Heart, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: Coffee,
      title: 'Kopi Berkualitas',
      description: 'Biji kopi pilihan terbaik yang disangrai dengan sempurna untuk cita rasa istimewa.',
    },
    {
      icon: Heart,
      title: 'Dibuat dengan Cinta',
      description: 'Setiap minuman dan makanan dibuat dengan dedikasi untuk pengalaman terbaik.',
    },
    {
      icon: Users,
      title: 'Suasana Hangat',
      description: 'Interior estetik dan nyaman seperti di rumah sendiri. Perfect untuk work from cafe!',
    },
  ];

  return (
    <section ref={ref} id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-stone-50 via-teal-50/30 to-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-900 mb-2 sm:mb-3">
            Tentang Kami
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 max-w-3xl mx-auto px-4">
            Lesung Pipi adalah lebih dari sekadar cafe. Kami adalah tempat di mana cerita dimulai,
            persahabatan terbentuk, dan kenangan tercipta.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto"
              >
                <feature.icon className="text-teal-700" size={22} />
              </motion.div>
              <h3 className="text-base sm:text-lg font-bold text-teal-900 mb-2 sm:mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center text-xs sm:text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
