import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

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
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center space-y-8 animate-fade-in">
            <Badge className="bg-primary/20 text-gold border-gold px-6 py-2 text-sm font-medium">
              8 НЕДЕЛЬ • 3+ СДЕЛКИ В МЕСЯЦ • МАРЖА 15-85%
            </Badge>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-gold-light">Устал сомневаться в ценности</span>{' '}
              <span className="text-white">предметов коллекционирования,</span>
              <br />
              <span className="text-gold">своей коллекции и бояться</span>
              <br />
              <span className="text-white">сделать первую продажу?</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gold-light max-w-4xl mx-auto leading-relaxed font-semibold">
              8 недель, 3+ целевые сделки в месяц и маржа 15–85%.
            </p>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Изучишь базу, научишься определять подлинность, оценивать стоимость и безопасно торговать на реальных площадках — без лишних разговоров и без риска.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button 
                size="lg" 
                className="bg-gold hover:bg-gold-light text-black font-semibold text-lg px-8 py-6 gold-glow transition-all hover:gold-glow-strong"
                onClick={() => document.getElementById('cta-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Icon name="Sparkles" className="mr-2" size={20} />
                ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ
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
                    <p className="text-gold font-semibold mb-1">Диверсификация активов</p>
                    <p className="text-muted-foreground text-sm">Альтернатива акциям и крипте — материальные активы с историей и культурной ценностью</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-gold mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-gold font-semibold mb-1">Инсайдерская информация</p>
                    <p className="text-muted-foreground text-sm">Доступ к «секретам» и «фишкам», которые недоступны новичкам</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-gold mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-gold font-semibold mb-1">Баланс удовольствия и выгоды</p>
                    <p className="text-muted-foreground text-sm">Наслаждение от предмета + реальная прибыль от сделки</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Problems & Solutions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Что тебя ждёт</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="space-y-6">
            <Card className="bg-card border-border hover:border-gold transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <Icon name="AlertCircle" className="text-muted-foreground mt-1" size={24} />
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Сейчас</h3>
                        <p className="text-muted-foreground">Нет первых клиентов и ясности по ценности лота</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <Icon name="Sparkles" className="text-gold mt-1" size={24} />
                      <div>
                        <h3 className="text-xl font-semibold text-gold mb-2">После обучения</h3>
                        <p className="text-foreground">Дорожная карта к первым сделкам: как искать интересные лоты, оценивать и выходить на целевую аудиторию безопасно</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-gold transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <Icon name="AlertCircle" className="text-muted-foreground mt-1" size={24} />
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Сейчас</h3>
                        <p className="text-muted-foreground">Риск купить подделку или переплатить в 2–3 раза</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <Icon name="Sparkles" className="text-gold mt-1" size={24} />
                      <div>
                        <h3 className="text-xl font-semibold text-gold mb-2">После обучения</h3>
                        <p className="text-foreground">Чек-листы подлинности, навыки оценки рыночной стоимости и критерии качественных лотов</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-gold transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <Icon name="AlertCircle" className="text-muted-foreground mt-1" size={24} />
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Сейчас</h3>
                        <p className="text-muted-foreground">Не хватает знаний для уверенного старта и системного подхода</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <Icon name="Sparkles" className="text-gold mt-1" size={24} />
                      <div>
                        <h3 className="text-xl font-semibold text-gold mb-2">После обучения</h3>
                        <p className="text-foreground">Полная база и пошаговая программа: от выбора категории и нюансов подлинности до юридических аспектов и маркетинга</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
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
                <div className="text-5xl font-bold text-gold mb-2">15-35%</div>
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
              { step: 8, title: 'Построение портфеля активов', desc: 'Диверсификация: баланс между быстроликвидными лотами (оборот 1-2 недели) и редкими предметами (маржа 30-50%). Формируешь свою «подушку безопасности».', icon: 'Wallet' },
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

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Отзывы учеников</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
            <p className="text-xl text-muted-foreground">Реальные результаты наших выпускников</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border-border hover:border-gold transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Avatar className="w-12 h-12 border-2 border-gold">
                      <AvatarFallback className="bg-gold/20 text-gold font-bold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-gold fill-gold" size={16} />
                    ))}
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{testimonial.text}</p>

                  <div className="pt-4 border-t border-border">
                    <Badge className="bg-gold/20 text-gold border-gold">
                      {testimonial.result}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Author */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Кто я?</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <Card className="bg-gradient-to-br from-card to-card/50 border-gold gold-glow">
            <CardContent className="p-8 sm:p-12">
              <div className="text-center mb-8">
                <h3 className="text-3xl sm:text-4xl font-bold text-gold-light mb-2">Виталий Мельник</h3>
                <p className="text-xl text-gold mb-3">Коуч и наставник новичков и коллекционеров с малым опытом</p>
                <p className="text-lg text-muted-foreground">Помогаю превратить хобби в устойчивый источник дохода через систему контролируемых, понятных и проверяемых стратегий</p>
              </div>

              <div className="mb-8">
                <h4 className="text-2xl font-bold text-white mb-4 text-center">Регалии и опыт</h4>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Briefcase" className="text-gold mt-1 flex-shrink-0" size={24} />
                    <div>
                      <p className="text-gold font-semibold">10 лет практики в индустрии</p>
                      <p className="text-muted-foreground text-sm">Системный опыт в коллекционировании и монетизации</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Award" className="text-gold mt-1 flex-shrink-0" size={24} />
                    <div>
                      <p className="text-gold font-semibold">Участие в проекте Московского монетного двора</p>
                      <p className="text-muted-foreground text-sm">Проект «Символика ММД»</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Trophy" className="text-gold mt-1 flex-shrink-0" size={24} />
                    <div>
                      <p className="text-gold font-semibold">Благодарности от крупных медийных проектов</p>
                      <p className="text-muted-foreground text-sm">Признание экспертизы в профессиональном сообществе</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Handshake" className="text-gold mt-1 flex-shrink-0" size={24} />
                    <div>
                      <p className="text-gold font-semibold">Партнерство с 15+ аукционными домами</p>
                      <p className="text-muted-foreground text-sm">РФ и Израиля — доступ к инсайдерской информации</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <p className="text-lg text-center text-foreground">
                  <span className="text-gold font-semibold">Каналы продаж:</span> онлайн-магазины, YouTube, группы в соцсетях
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Offer */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              <span className="text-gold">8-недельная программа</span>
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
            <p className="text-2xl text-gold-light font-semibold">ПРЕВРАТИ КОЛЛЕКЦИОНИРОВАНИЕ В ИСТОЧНИК ДОХОДА</p>
          </div>

          <Card className="bg-card border-gold mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-gold-light">Формат программы</CardTitle>
              <CardDescription className="text-lg">Онлайн-курс + поддержка по шагам, чек-листы, инструменты, доступ к сообществу</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Icon name="Search" className="text-gold mt-1 flex-shrink-0" size={20} />
                  <div>
                    <span className="text-foreground font-semibold">Поиск лотов, коллекционных предметов</span>
                    <p className="text-muted-foreground text-sm mt-1">Где искать недооцененные лоты с потенциалом роста</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="ShieldCheck" className="text-gold mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground">Проверка подлинности, периода</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="DollarSign" className="text-gold mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground">Оценка и формирование цены</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Package" className="text-gold mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground">Продажа и логистика</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Map" className="text-gold mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground">Дорожная карта с инструментами оценки</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="TrendingUp" className="text-gold mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground">Анализ рынка</span>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gold/10 border border-gold rounded-lg">
                <p className="text-lg text-center text-gold-light font-semibold mb-4">
                  Результат: первый поток реальных сделок, систематизация бизнеса и уверенность в сделках
                </p>
                <p className="text-base text-center text-muted-foreground">
                  <span className="text-gold font-semibold">Альтернативный взгляд на инвестиции:</span> коллекционные предметы как контролируемый, понятный и проверяемый актив — твоя «финансовая подушка» вне волатильности традиционных рынков
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing */}
      <section id="packages" className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <Badge className="bg-destructive/20 text-destructive border-destructive px-6 py-2 text-sm font-semibold mb-4 inline-flex items-center gap-2">
              <Icon name="Clock" size={16} />
              ОСТАЛОСЬ {timeLeft.days}д {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Пакеты и цены</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
            <p className="text-xl text-gold-light font-semibold">Осталось только 3 места по специальной цене</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border hover:border-gold transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Базовый</CardTitle>
                <CardDescription className="text-muted-foreground">Старт в коллекционировании</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="text-5xl font-bold text-gold mb-2">7 500 ₽</div>
                </div>
                <Button 
                  className="w-full bg-muted hover:bg-muted/80 text-foreground"
                  onClick={() => document.getElementById('cta-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Узнать детали
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gold/20 to-card border-gold gold-glow-strong relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge className="bg-gold text-black font-semibold">ПОПУЛЯРНЫЙ</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-gold-light">Стандартный</CardTitle>
                <CardDescription className="text-muted-foreground">Полное сопровождение</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="text-5xl font-bold text-gold mb-2">23 000 ₽</div>
                </div>
                <Button 
                  className="w-full bg-gold hover:bg-gold-light text-black font-semibold gold-glow"
                  onClick={() => document.getElementById('cta-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Записаться
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-gold transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Премиум</CardTitle>
                <CardDescription className="text-muted-foreground">VIP поддержка</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="text-5xl font-bold text-gold mb-2">50 000 ₽</div>
                </div>
                <Button 
                  className="w-full bg-muted hover:bg-muted/80 text-foreground"
                  onClick={() => document.getElementById('cta-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Узнать детали
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-12 bg-gradient-to-r from-gold/10 to-transparent border-gold">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <Icon name="ShieldCheck" className="text-gold" size={48} />
                  <div>
                    <h3 className="text-2xl font-bold text-gold-light mb-1">Гарантия результата</h3>
                    <p className="text-foreground">Вернём 100% стоимости, если не совершите первую сделку за 60 дней</p>
                  </div>
                </div>
                <Button 
                  size="lg"
                  className="bg-gold hover:bg-gold-light text-black font-semibold px-8 gold-glow shrink-0"
                  onClick={() => document.getElementById('cta-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Забронировать место
                </Button>
              </div>
            </CardContent>
          </Card>

          <p className="text-center text-muted-foreground mt-8 text-lg">
            Детали и условия по запросу. Открыты бонусы за раннюю оплату.
          </p>
        </div>
      </section>

      {/* Bonuses */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Бонусы при записи
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'Gift', title: '2 персональные консультации', desc: 'По выбору первых 5 лотов и их оценке' },
              { icon: 'FileText', title: 'Шаблон описания лота', desc: 'Под разные категории нумизматики' },
              { icon: 'Package', title: 'Гайд по логистике', desc: 'Безопасная упаковка и доставка' },
              { icon: 'MessageCircle', title: 'Закрытый чат Q&A', desc: 'Доступ на 90 дней' },
              { icon: 'Zap', title: 'Чек-лист подлинности', desc: 'Быстрая проверка за 5 минут' }
            ].map((bonus, index) => (
              <Card key={index} className="bg-card border-gold/50 hover:border-gold hover:gold-glow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center mb-4">
                    <Icon name={bonus.icon as any} className="text-gold" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-gold-light mb-2">{bonus.title}</h3>
                  <p className="text-muted-foreground">{bonus.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section id="cta-form" className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-gradient-to-br from-card to-card/50 border-gold gold-glow-strong">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl sm:text-4xl font-bold text-gold-light mb-2">
                Запишись на вводную консультацию
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                Не откладывай: конкретные шаги к доходу в коллекционировании уже сегодня
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Ваше имя</label>
                  <Input 
                    placeholder="Введите имя" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background border-border focus:border-gold"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Телефон</label>
                  <Input 
                    placeholder="+7 (___) ___-__-__" 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="bg-background border-border focus:border-gold"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Сообщение (опционально)</label>
                  <Textarea 
                    placeholder="Расскажите о своем опыте в коллекционировании" 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background border-border focus:border-gold min-h-[100px]"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gold hover:bg-gold-light text-black font-semibold text-lg py-6 gold-glow hover:gold-glow-strong transition-all"
                >
                  <Icon name="Send" className="mr-2" size={20} />
                  ОТПРАВИТЬ ЗАЯВКУ
                </Button>

                <p className="text-sm text-center text-muted-foreground">
                  Или напишите «ХОЧУ» в директ
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Виталий Мельник. Все категории коллекций с адаптацией под каждую.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;