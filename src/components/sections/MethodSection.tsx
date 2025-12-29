import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const MethodSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Как работаем</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
          <p className="text-2xl text-gold-light font-bold">MINT-метод</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="bg-card border-gold hover:border-gold-light transition-all duration-300 hover:gold-glow">
            <CardHeader>
              <div className="flex items-center gap-4 mb-2">
                <div className="w-16 h-16 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center">
                  <span className="text-2xl font-bold text-gold">M</span>
                </div>
                <CardTitle className="text-2xl text-white">Market scan</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground">
                Где искать, как фильтровать, как читать спрос. Учишься анализировать рынок и находить прибыльные лоты.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-gold hover:border-gold-light transition-all duration-300 hover:gold-glow">
            <CardHeader>
              <div className="flex items-center gap-4 mb-2">
                <div className="w-16 h-16 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center">
                  <span className="text-2xl font-bold text-gold">I</span>
                </div>
                <CardTitle className="text-2xl text-white">Inspect authenticity</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground">
                Чек-листы подлинности, типовые фейки, запросы продавцу. Защитишься от покупки подделок.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-gold hover:border-gold-light transition-all duration-300 hover:gold-glow">
            <CardHeader>
              <div className="flex items-center gap-4 mb-2">
                <div className="w-16 h-16 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center">
                  <span className="text-2xl font-bold text-gold">N</span>
                </div>
                <CardTitle className="text-2xl text-white">Numbers</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground">
                Оценка и прайсинг, калькулятор комиссий, риск-лимиты. Считаешь прибыль до покупки, а не после.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-gold hover:border-gold-light transition-all duration-300 hover:gold-glow">
            <CardHeader>
              <div className="flex items-center gap-4 mb-2">
                <div className="w-16 h-16 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center">
                  <span className="text-2xl font-bold text-gold">T</span>
                </div>
                <CardTitle className="text-2xl text-white">Trade</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground">
                Описание лота, торг, логистика, возвраты, карта площадок РФ и Израиля. Проводишь сделки от А до Я.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-br from-gold/10 to-card border-gold gold-glow">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Что получишь в руки</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Icon name="CheckCircle2" className="text-gold mt-1 flex-shrink-0" size={24} />
                <p className="text-lg text-foreground">
                  <span className="font-semibold text-gold-light">Дорожная карта</span> от покупки до продажи
                </p>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="CheckCircle2" className="text-gold mt-1 flex-shrink-0" size={24} />
                <p className="text-lg text-foreground">
                  <span className="font-semibold text-gold-light">Чек-листы оценки и анти-фейк,</span> шаблоны описаний, калькулятор комиссий
                </p>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="CheckCircle2" className="text-gold mt-1 flex-shrink-0" size={24} />
                <p className="text-lg text-foreground">
                  <span className="font-semibold text-gold-light">Карта из 10+ площадок</span> и сценарии торга
                </p>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="CheckCircle2" className="text-gold mt-1 flex-shrink-0" size={24} />
                <p className="text-lg text-foreground">
                  <span className="font-semibold text-gold-light">Первая прибыльная сделка</span> во время обучения при соблюдении чек-листа
                </p>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="ShieldCheck" className="text-gold mt-1 flex-shrink-0" size={24} />
                <p className="text-lg text-foreground">
                  <span className="font-semibold text-gold-light">Риск-реверс:</span> если в 4 недели не вышли на первую сделку по методике, добавлю 2 недели сопровождения бесплатно
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MethodSection;
