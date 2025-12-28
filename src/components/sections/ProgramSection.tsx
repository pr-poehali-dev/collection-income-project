import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ProgramSection = () => {
  return (
    <>
      {/* How it Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Как работает решение</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-card border-gold/50">
              <CardHeader>
                <div className="text-5xl font-bold text-gold mb-2">8</div>
                <CardTitle className="text-white">недель</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Структурированная программа</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-gold/50">
              <CardHeader>
                <div className="text-5xl font-bold text-gold mb-2">3+</div>
                <CardTitle className="text-white">сделки в месяц</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Целевые продажи на старте</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-gold/50">
              <CardHeader>
                <div className="text-5xl font-bold text-gold mb-2">15-45%</div>
                <CardTitle className="text-white">маржа</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">На малых чеках (больше на редкие)</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-card to-card/50 border-gold">
            <CardContent className="p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <Icon name="Check" className="text-gold mt-1 flex-shrink-0" size={24} />
                  <span className="text-lg text-foreground">Прямой, конкретный подход: пошаговая система монетизации</span>
                </li>
                <li className="flex items-start gap-4">
                  <Icon name="Check" className="text-gold mt-1 flex-shrink-0" size={24} />
                  <span className="text-lg text-foreground">Структурированная покупка и продажа как единая дорожная карта</span>
                </li>
                <li className="flex items-start gap-4">
                  <Icon name="Check" className="text-gold mt-1 flex-shrink-0" size={24} />
                  <span className="text-lg text-foreground">Инструменты для оценки и анализа рынка</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Как придём к результату</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
            <p className="text-xl text-gold-light font-semibold">Система из 9 этапов для превращения хобби в стабильный доход</p>
          </div>

          <div className="space-y-6">
            {[
              { step: 1, title: 'Выбор тематики коллекционирования', desc: 'Особенности, востребованность. Базовые знания в распространённых темах, классификация, градация. Находим твою нишу с максимальным потенциалом.', icon: 'Target' },
              { step: 2, title: 'Введение в монетизацию коллекций', desc: 'Ниши и спрос: выбор приоритетной категории. Анализируем рынок по критериям ликвидности, маржинальности (15-45% на малых чеках) и барьерам входа.', icon: 'DollarSign' },
              { step: 3, title: 'Оценка и прайсинг', desc: 'Калькулятор комиссий, риск-лимиты. Чек-листы подлинности, методики оценки рыночной стоимости. Учишься видеть ценность за секунды.', icon: 'Calculator' },
              { step: 4, title: 'Каналы продаж', desc: 'Торговые точки, аукционы, рынки, форумы. Изучаем площадки, создаем продающие описания и визуал, который конвертирует в продажу.', icon: 'Store' },
              { step: 5, title: 'Ценообразование и маржа', desc: 'Формулы расчета максимальной цены покупки и оптимальной цены продажи. Риск-менеджмент: стоп-лосс и лимиты портфеля.', icon: 'TrendingUp' },
              { step: 6, title: 'Стратегии лояльности и повторных продаж', desc: 'Алгоритмы привлечения целевых покупателей и построения долгосрочных отношений. Скрипты общения и закрытие сделок.', icon: 'Users' },
              { step: 7, title: 'Безопасность сделок и правовая сторона', desc: 'Защита от мошенничества, проверка подлинности, юридические аспекты купли-продажи. Безопасные транзакции и документооборот.', icon: 'ShieldCheck' },
              { step: 8, title: 'Автоматизация продаж', desc: 'Систематизация процессов: шаблоны, чек-листы, CRM для учета. Расширение ассортимента и переход на 5+ сделок в месяц.', icon: 'Zap' },
              { step: 9, title: 'Финансовый контроль и учет', desc: 'Построение портфеля активов, баланс между ликвидностью и маржинальностью. Учет доходов, расходов, прибыли. Превращение в стабильный бизнес.', icon: 'PieChart' }
            ].map((item, index) => (
              <Card key={index} className="bg-card border-border hover:border-gold transition-all duration-300 hover:gold-glow">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center">
                        <span className="text-xl sm:text-2xl font-bold text-gold">{item.step}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-2">
                        <Icon name={item.icon as any} className="text-gold mt-1 flex-shrink-0" size={24} />
                        <h3 className="text-xl sm:text-2xl font-semibold text-white">{item.title}</h3>
                      </div>
                      <p className="text-base sm:text-lg text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProgramSection;