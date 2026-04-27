import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1654200828752-0f310924e1b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXN0aGV0aWMlMjBjYWZlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzc3Mjk3MDM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Cozy cafe seating',
    },
    {
      url: 'https://images.unsplash.com/photo-1770991954295-b1127cee8b01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxhZXN0aGV0aWMlMjBjYWZlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzc3Mjk3MDM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Espresso bar',
    },
    {
      url: 'https://images.unsplash.com/photo-1621087691149-1fad54f62ef9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxhZXN0aGV0aWMlMjBjYWZlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzc3Mjk3MDM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Wooden tables',
    },
    {
      url: 'https://images.unsplash.com/photo-1777113310787-d7c2fdce19ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxhZXN0aGV0aWMlMjBjYWZlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzc3Mjk3MDM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Green plants interior',
    },
    {
      url: 'https://images.unsplash.com/photo-1603472218119-290b7d178e60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxhZXN0aGV0aWMlMjBjYWZlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzc3Mjk3MDM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Aesthetic seating',
    },
    {
      url: 'https://images.unsplash.com/photo-1769501203675-919307554822?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8YWVzdGhldGljJTIwY2FmZSUyMGludGVyaW9yfGVufDF8fHx8MTc3NzI5NzAzOXww&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Bright cafe with plants',
    },
  ];

  return (
    <section ref={ref} id="gallery" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-teal-50/30 via-stone-50 to-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-900 mb-2 sm:mb-3">
            Galeri
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 max-w-3xl mx-auto px-4">
            Lihat keindahan dan kenyamanan suasana cafe kami
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {images.map((image, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? 2 : -2 }}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 aspect-square"
            >
              <ImageWithFallback
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-t from-teal-900/70 via-teal-900/30 to-transparent flex items-end justify-center pb-3 sm:pb-4"
              >
                <p className="text-white text-[10px] sm:text-xs font-medium">{image.alt}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
