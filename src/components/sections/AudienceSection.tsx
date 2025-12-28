import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const AudienceSection = () => {
  return (
    <>
      {/* Target Audience */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Кому мы помогаем</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
            <p className="text-xl text-gold-light max-w-4xl mx-auto">
              Энергичные, любознательные коллекционеры, которые хотят превратить хобби в устойчивый источник дохода и одновременно повысить финансовую безопасность
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-card border-border hover:border-gold transition-all duration-300 hover:gold-glow">
              <CardHeader>
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Shield" className="text-gold" size={24} />
                </div>
                <CardTitle className="text-xl text-gold-light">Финансовая безопасность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Тебе нужна «подушка безопасности» вне волатильности традиционных инвестиций — контролируемый, понятный актив
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-gold transition-all duration-300 hover:gold-glow">
              <CardHeader>
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="DollarSign" className="text-gold" size={24} />
                </div>
                <CardTitle className="text-xl text-gold-light">Дополнительный доход</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Систематический подход к покупке/продаже с понятными цифрами ROI, без рисков и потерь
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-gold transition-all duration-300 hover:gold-glow">
              <CardHeader>
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Star" className="text-gold" size={24} />
                </div>
                <CardTitle className="text-xl text-gold-light">Самореализация</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Превращение увлечения в экспертное положение, повышение статуса знатока и удовольствие от процесса
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-gold/10 to-card border-gold">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Главные мотивации</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-gold mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-gold font-semibold mb-1">Контроль и уверенность</p>
                    <p className="text-muted-foreground text-sm">Четкие алгоритмы действий, понятные критерии оценки и риск-менеджмент</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-gold mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-gold font-semibold mb-1">Экспертность</p>
                    <p className="text-muted-foreground text-sm">Не просто продавать, а становиться признанным знатоком в своей нише</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-gold mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-gold font-semibold mb-1">Финансовый результат</p>
                    <p className="text-muted-foreground text-sm">Маржа 15-85%, 3+ сделки в месяц — конкретные цифры, не абстракция</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-gold mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-gold font-semibold mb-1">Удовольствие от процесса</p>
                    <p className="text-muted-foreground text-sm">Зарабатывать на любимом деле — это реально!</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Course */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">О чём этот курс</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
            <p className="text-xl text-gold-light font-semibold">Монетизация коллекционирования — от хобби к стабильному доходу</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card border-border hover:border-gold transition-all duration-300 hover:gold-glow">
              <CardHeader>
                <Icon name="TrendingUp" className="text-gold mb-2" size={32} />
                <CardTitle className="text-2xl text-white">Систематический подход</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">Пошаговая дорожная карта от выбора ниши до первых 3-5 прибыльных сделок</p>
                <p className="text-muted-foreground">Не теория, а практические инструменты: чек-листы подлинности, шаблоны переговоров, формулы оценки</p>
                <p className="text-muted-foreground">Фокус на быстроликвидных лотах (оборот 1-2 недели) и редких предметах с высокой маржой</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-gold transition-all duration-300 hover:gold-glow">
              <CardHeader>
                <Icon name="Target" className="text-gold mb-2" size={32} />
                <CardTitle className="text-2xl text-white">Индивидуальная работа</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">Разбор твоей ниши, стартового бюджета и финансовых целей</p>
                <p className="text-muted-foreground">Сопровождение первых 3 сделок: от выбора лота до получения денег</p>
                <p className="text-muted-foreground">Поддержка в чате 24/7 — ответы на вопросы в течение часа</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-gold transition-all duration-300 hover:gold-glow">
              <CardHeader>
                <Icon name="ShieldCheck" className="text-gold mb-2" size={32} />
                <CardTitle className="text-2xl text-white">Безопасность сделок</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">Риск-менеджмент: как не потерять деньги на подделках и переоценённых лотах</p>
                <p className="text-muted-foreground">Стратегия стоп-лосс: максимальная цена покупки, лимиты портфеля</p>
                <p className="text-muted-foreground">Проверенные площадки и инструменты для безопасных транзакций</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-gold transition-all duration-300 hover:gold-glow">
              <CardHeader>
                <Icon name="Rocket" className="text-gold mb-2" size={32} />
                <CardTitle className="text-2xl text-white">Масштабирование</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">От 3 сделок в месяц к 5+ через автоматизацию и расширение ассортимента</p>
                <p className="text-muted-foreground">Построение портфеля активов: баланс между ликвидностью и маржинальностью</p>
                <p className="text-muted-foreground">CRM для учёта, шаблоны и чек-листы — превращение в стабильный бизнес</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default AudienceSection;
