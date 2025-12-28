import { useState, useEffect } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import AudienceSection from '@/components/sections/AudienceSection';
import ProgramSection from '@/components/sections/ProgramSection';
import SocialProofSection from '@/components/sections/SocialProofSection';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 14, minutes: 30, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за заявку! Скоро свяжемся с вами.');
    setFormData({ name: '', phone: '', message: '' });
  };

  const testimonials = [
    {
      name: 'Алексей Соколов',
      role: 'Монетчик-новичок',
      text: 'За 2 месяца совершил 8 сделок. Первая маржа была 12%, последняя уже 28%. Виталий научил смотреть на лот глазами покупателя — это изменило всё.',
      rating: 5,
      result: '+47 000 ₽ за 60 дней'
    },
    {
      name: 'Мария Кравцова',
      role: 'Коллекционер открыток',
      text: 'Программа структурировала хаос в голове. Теперь я знаю, где искать, как оценивать и кому продавать. Первые 5 лотов ушли за неделю!',
      rating: 5,
      result: '5 продаж за 7 дней'
    },
    {
      name: 'Дмитрий Петров',
      role: 'Антиквар-стажёр',
      text: 'Чек-листы подлинности спасли от покупки двух подделок. Окупил курс с третьей сделки. Поддержка в чате бесценна — отвечают за час.',
      rating: 5,
      result: 'Окупил курс за 3 недели'
    },
    {
      name: 'Ольга Смирнова',
      role: 'Галерист',
      text: 'Я всегда любила искусство, но монетизация казалась игрой в рулетку. Курс дал четкие алгоритмы, и теперь я не просто покупаю красоту, а инвестирую в будущее. Мои клиенты доверяют мне еще больше, потому что видят мою экспертность.',
      rating: 5,
      result: ''
    },
    {
      name: 'Игорь Морозов',
      role: 'Поисковик артефактов',
      text: 'До курса мои находки часто оставались нереализованными из-за страха продешевить. Теперь я знаю, как правильно оценить и куда обратиться, чтобы получить максимальную прибыль. Это открыло для меня совершенно новый уровень дохода.',
      rating: 5,
      result: ''
    },
    {
      name: 'Виталий Мельник',
      role: 'Автор курса',
      text: 'Моя система – это не просто набор знаний, это путь, который превращает увлечение в стабильный и разумный доход без лишних рисков. Я горжусь тем, что мои ученики, как Алексей и Мария, получают конкретные инструменты и мгновенно применяют их на практике, видя реальные результаты.',
      rating: 5,
      result: ''
    },
    {
      name: 'Виталий Мельник',
      role: 'Автор курса',
      text: 'Ключевая ценность нашей программы – это не только глубокая теория, но и мощная практическая поддержка. Истории Дмитрия, которого чек-листы спасли от убытков, а поддержка чата оказалась бесценной, доказывают, что вы инвестируете в безопасность, уверенность и быструю окупаемость своих знаний.',
      rating: 5,
      result: ''
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-foreground overflow-x-hidden">
      <HeroSection timeLeft={timeLeft} />
      <AudienceSection />
      <ProgramSection />
      <SocialProofSection 
        testimonials={testimonials}
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        timeLeft={timeLeft}
      />
    </div>
  );
};

export default Index;
