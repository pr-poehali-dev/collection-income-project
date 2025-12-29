import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const TrustSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Почему мне доверяют</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="bg-card border-gold hover:border-gold-light transition-all duration-300 hover:gold-glow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Icon name="Calendar" className="text-gold mt-1 flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-xl font-bold text-gold-light mb-2">10 лет практики</h3>
                  <p className="text-muted-foreground">И реального дохода в коллекционировании</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-gold hover:border-gold-light transition-all duration-300 hover:gold-glow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Icon name="Award" className="text-gold mt-1 flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-xl font-bold text-gold-light mb-2">Участие в проекте</h3>
                  <p className="text-muted-foreground">«Символика ММД» на Московском монетном дворе</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-gold hover:border-gold-light transition-all duration-300 hover:gold-glow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Icon name="Handshake" className="text-gold mt-1 flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-xl font-bold text-gold-light mb-2">Партнёрство</h3>
                  <p className="text-muted-foreground">С 15+ аукционными домами в РФ и Израиле</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-gold hover:border-gold-light transition-all duration-300 hover:gold-glow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Icon name="Store" className="text-gold mt-1 flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-xl font-bold text-gold-light mb-2">Свои площадки</h3>
                  <p className="text-muted-foreground">Онлайн-площадки для продаж</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-gold hover:border-gold-light transition-all duration-300 hover:gold-glow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Icon name="Youtube" className="text-gold mt-1 flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-xl font-bold text-gold-light mb-2">YouTube и ВК</h3>
                  <p className="text-muted-foreground">Канал о коллекционировании с реальными кейсами</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-gold hover:border-gold-light transition-all duration-300 hover:gold-glow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Icon name="ShieldCheck" className="text-gold mt-1 flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-xl font-bold text-gold-light mb-2">1000+ отзывов</h3>
                  <p className="text-muted-foreground">Положительных отзывов о сделках</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-br from-gold/10 to-card border-gold gold-glow">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <Icon name="AlertCircle" className="text-gold mt-1 flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Важно</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Это обучение, а не инвестиционная рекомендация. Результаты зависят от дисциплины, категории предметов и рынка. Работаем с безопасным бюджетом и понятными лимитами риска.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TrustSection;
