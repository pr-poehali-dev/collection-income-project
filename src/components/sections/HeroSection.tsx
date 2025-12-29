import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

const HeroSection = ({ timeLeft }: HeroSectionProps) => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <Badge className="bg-primary/20 text-gold border-gold px-6 py-2 text-sm font-medium">
            8 НЕДЕЛЬ • 3+ СДЕЛКИ В МЕСЯЦ • МАРЖА 15-35%
          </Badge>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-gold-light">Коллекционирование</span>{' '}
            <span className="text-white">как источник дохода</span>
          </h1>
          
          <p className="text-2xl sm:text-3xl text-gold font-bold max-w-4xl mx-auto leading-relaxed mt-6">
            Покупай и продавай как профи
          </p>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mt-6">
            Я Виталий Мельник. Коллекционный дилер и коуч. Помогаю новичкам и энтузиастам в нумизматике и смежных категориях быстро и безопасно выйти на первые деньги: понимать ценность, отличать оригинал от копии, торговать на реальных площадках.
          </p>
          
          <p className="text-lg text-gold-light max-w-3xl mx-auto">
            <span className="font-semibold">Программа 8 недель.</span> Цель: 3+ целевые сделки в месяц на старте и ориентир по марже 15–35% на малых чеках (возможен больший процент по редким категориям при росте оборота).
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              size="lg" 
              className="bg-gold hover:bg-gold-light text-black font-semibold text-lg px-8 py-6 gold-glow transition-all hover:gold-glow-strong"
              onClick={() => document.getElementById('cta-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon name="Sparkles" className="mr-2" size={20} />
              ХОЧУ
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gold text-gold hover:bg-gold/10 font-semibold text-lg px-8 py-6"
              onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Посмотреть пакеты
              <Icon name="ArrowDown" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;