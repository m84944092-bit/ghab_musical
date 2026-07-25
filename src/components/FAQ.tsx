'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'قاب QR موسیقی چیست؟',
    answer:
      'قاب عکس QR موسیقی دار یک محصول نوآورانه است که ترکیبی از عکس شخصی شده و یک کد QR است. وقتی کد QR را اسکن می کنید، آهنگ مورد علاقه شما پخش می شود. ایده آل برای هدایای خاص و یادگاری.',
  },
  {
    question: 'چقدر زمان برای تولید لازم است؟',
    answer:
      'معمولاً سفارش شما در 5-7 روز کاری پردازش و ساخته می شود. ارسال داخلی 2-3 روز و ارسال بین المللی 7-14 روز طول می کشد.',
  },
  {
    question: 'کیفیت چاپ چگونه است؟',
    answer:
      'ما از بهترین تکنولوژی چاپ حرارتی استفاده می کنیم که رزولوشن 1200 DPI را ارائه می دهد. تمام رنگ ها زندگی بخش و محکم هستند.',
  },
  {
    question: 'آیا می توانم هر چیزی را سفارش دهم؟',
    answer:
      'بله! ما از شما می خواهیم عکس های خود را آپلود کنید و موسیقی را انتخاب کنید. سایز قاب (A5, A4, A3) و رنگ (سفید، مشکی) را نیز تعیین می کنید.',
  },
  {
    question: 'آیا ضمانت بازگشت پول دارید؟',
    answer:
      'بله، ما 100% ضمانت رضایت ارائه می دهیم. اگر راضی نیستید، می توانید 30 روز پس از دریافت بازگشت دهید.',
  },
  {
    question: 'چطور می توانم موسیقی خود را آپلود کنم؟',
    answer:
      'می توانید لینک Spotify خود را وارد کنید یا فایل MP3 را مستقیماً آپلود کنید. هر دو روش پشتیبانی می شود.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-accent-light">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-primary-900 mb-4">سوالات متداول</h2>
          <p className="text-lg text-primary-600">پاسخ به سوالات رایج درباره محصولات ما</p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-right p-5 bg-white rounded-premium shadow-luxury hover:shadow-luxury-lg transition-all"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-primary-900 text-lg">
                    {item.question}
                  </h3>
                  <span
                    className={`text-2xl text-accent-gold transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  >
                    ⌄
                  </span>
                </div>
              </button>

              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-2 p-5 bg-white rounded-premium border-r-4 border-accent-gold"
                >
                  <p className="text-primary-600 leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
