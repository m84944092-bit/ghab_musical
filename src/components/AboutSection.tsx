'use client';

import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

const features = [
  {
    title: 'صنعت به روبە',
    description: 'هر قاب با مواد مقاوم و تکنولوژی روز ساخته می شود',
  },
  {
    title: 'طراحی فرخنده',
    description: 'جدیدترین ترندهای طراحو رنگ برای هر فضا',
  },
  {
    title: 'پشتیبانی شخصی',
    description: 'تیم حرفه ای ما 24/7 حاضر تر کمک است',
  },
];

const AboutSection = () => {
  return (
    <section className="py-16 bg-accent-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              درباره غاب موسیقی
            </h2>
            <p className="text-lg text-primary-700 mb-6 leading-relaxed">
              ما متخصص در ساخت قاب های عکس QR موسیقی هستیم که یادها را با موسیقی ابدی می کند. هر قاب با عشق و دقت ساخته می شود تا به یاد خاصی جان بخش شود.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-accent-gold rounded-full flex items-center justify-center text-primary-900">
                    <FiCheck size={16} />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-primary-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="bg-gradient-to-br from-accent-gold to-accent-gold-dark rounded-premium p-8 aspect-square flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-center text-white">
              <div className="text-6xl mb-4">♫</div>
              <p className="text-xl font-bold">یادها + موسیقی = ابدی</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
