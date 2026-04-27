import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Menu() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const sliderRef = useRef<any>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
  };

  const menuImages = [
    { id: 1, label: 'Menu Page 1', src: '../images/menu1.png' },
    { id: 2, label: 'Menu Page 2', src: '../images/menu2.png' },
    { id: 3, label: 'Menu Page 3', src: '../images/menu3.png' },
    { id: 4, label: 'Menu Page 4', src: '../images/menu4.png' },
    { id: 5, label: 'Menu Page 5', src: '../images/menu5.png' },
  ];

  return (
    <section ref={ref} id="menu" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-stone-50 to-teal-50/30">
      <div className="max-w-5xl mx-auto px-3 sm:px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-900 mb-2 sm:mb-3">
            Menu Kami
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative bg-white rounded-2xl shadow-2xl overflow-hidden p-4 sm:p-6"
        >
          {/* Custom Navigation Buttons */}
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="text-teal-700" size={20} />
          </button>

          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="text-teal-700" size={20} />
          </button>

          {/* Slider */}
          <Slider ref={sliderRef} {...settings}>
            {menuImages.map((menu) => (
              <div key={menu.id} className="outline-none">
                <div className="bg-gradient-to-br from-stone-100 to-teal-50 rounded-xl overflow-hidden mx-auto" style={{ aspectRatio: '210/297' }}>
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 sm:p-8">
                    <img 
                      src={menu.src} 
                      alt={menu.label}
                      className="w-full h-full object-contain rounded-lg"
                      onError={(e) => {
                        // Fallback jika gambar tidak ditemukan
                        e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="283" viewBox="0 0 200 283"%3E%3Crect width="200" height="283" fill="%23f3f4f6"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%239ca3af" font-size="14"%3EMenu %3C/text%3E%3C/svg%3E';
                      }}
                    />
                    <div className="absolute bottom-4 left-0 right-0 text-center">
                      <p className="text-xs text-gray-600 bg-white/80 inline-block px-3 py-1 rounded-full">
                        {menu.label}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Instruction */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-4 sm:mt-6 text-center"
          >
            <p className="text-[10px] sm:text-xs text-gray-500 italic">
              Swipe atau klik panah untuk melihat halaman menu lainnya
            </p>
          </motion.div>
        </motion.div>

        {/* Custom Dots Styling */}
        <style>{`
          .slick-dots {
            bottom: -35px;
          }
          .slick-dots li button:before {
            font-size: 8px;
            color: #0d9488;
            opacity: 0.5;
          }
          .slick-dots li.slick-active button:before {
            opacity: 1;
            color: #0d9488;
          }
        `}</style>
      </div>
    </section>
  );
}