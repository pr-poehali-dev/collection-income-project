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
              { step: 1, title: 'Финансовая диагностика и целеполагание', desc: 'Определяем твой текущий уровень, желаемый доход и финансовые цели. Строим индивидуальную дорожную карту с конкретными цифрами ROI.', icon: 'Target' },
              { step: 2, title: 'Выбор прибыльной ниши', desc: 'Анализируем категории коллекционных предметов по критериям ликвидности, маржинальности (15-45% на малых чеках) и барьерам входа. Находим твою «голубую зону».', icon: 'Search' },
              { step: 3, title: 'Система оценки и экспертизы', desc: 'Чек-листы подлинности, методики оценки рыночной стоимости, весовые коэффициенты для быстрого анализа. Учишься видеть ценность за секунды.', icon: 'ShieldCheck' },
              { step: 4, title: 'Стратегия закупок', desc: 'Где искать недооцененные лоты, как вести переговоры, формулы расчета максимальной цены покупки. Риск-менеджмент: стоп-лосс и лимиты портфеля.', icon: 'ShoppingCart' },
              { step: 5, title: 'Позиционирование и площадки', desc: 'Изучаем и выбираем торговые площадки, доски объявлений и прочее. Создаем продающие описания и визуал, который конвертирует в продажу.', icon: 'Store' },
              { step: 6, title: 'Воронка продаж и маркетинг', desc: 'Алгоритмы привлечения целевых покупателей: онлайн-магазины, соцсети, профильные сообщества. Скрипты общения и закрытие сделок.', icon: 'TrendingUp' },
              { step: 7, title: 'Первые 3 сделки под контролем', desc: 'Практикуешься на реальных лотах с моей поддержкой: от выбора предмета до получения денег. Разбираем ошибки и корректируем стратегию.', icon: 'CheckCircle2' },
              { step: 8, title: 'Построение портфеля активов', desc: 'Диверсификация: баланс между быстроликвидными лотами (оборот 1-2 недели) и редкими предметами (маржа 30-85%). Формируешь свою «подушку безопасности».', icon: 'Wallet' },
              { step: 9, title: 'Масштабирование и автоматизация', desc: 'Систематизация процессов: шаблоны, чек-листы, CRM для учета. Расширение ассортимента и переход на 5+ сделок в месяц. Превращение в стабильный бизнес.', icon: 'Rocket' }
            ].map((item, index) => (
              <Card key={index} className="bg-card border-border hover:border-gold transition-all duration-300 hover:gold-glow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center">
                        <span className="text-2xl font-bold text-gold">{item.step}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon name={item.icon as any} className="text-gold" size={24} />
                        <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                      </div>
                      <p className="text-lg text-muted-foreground">{item.desc}</p>
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
