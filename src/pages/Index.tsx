import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за заявку! Скоро свяжемся с вами.');
    setFormData({ name: '', phone: '', message: '' });
  };

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
              8 НЕДЕЛЬ • 3+ СДЕЛКИ В МЕСЯЦ • МАРЖА 15-35%
            </Badge>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-gold-light">Хочешь узнать</span>
              <br />
              <span className="text-white">коллекционный мир</span>
              <br />
              <span className="text-gold">изнутри?</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Устал сомневаться в ценности предметов коллекционирования, своей коллекции и бояться сделать первую продажу? 
              <span className="text-gold font-semibold"> Преврати коллекционирование в источник дохода</span> — 8 недель, 3+ целевые сделки в месяц и маржа 15–35%.
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
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Кому мы помогаем</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card border-border hover:border-gold transition-all duration-300 hover:gold-glow">
              <CardHeader>
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="TrendingUp" className="text-gold" size={24} />
                </div>
                <CardTitle className="text-2xl text-gold-light">Неопытным коллекционерам</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">
                  Энтузиастам, которым хочется быстро выйти на первые деньги безопасно
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-gold transition-all duration-300 hover:gold-glow">
              <CardHeader>
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Search" className="text-gold" size={24} />
                </div>
                <CardTitle className="text-2xl text-gold-light">Тем, кто хочет понять ценность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">
                  Отличать оригинал от копии и торговать на реальных площадках
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xl text-gold font-semibold">
              Ключевая выгода: системный подход, понятные чек-листы и дорожная карта к первым сделкам
            </p>
          </div>
        </div>
      </section>

      {/* Problems & Solutions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Проблемы и решения</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="space-y-6">
            <Card className="bg-card border-border hover:border-gold transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <Icon name="XCircle" className="text-destructive mt-1" size={24} />
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Проблема</h3>
                        <p className="text-muted-foreground">Нет первых клиентов и ясности по ценности лота</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <Icon name="CheckCircle2" className="text-gold mt-1" size={24} />
                      <div>
                        <h3 className="text-xl font-semibold text-gold mb-2">Решение</h3>
                        <p className="text-foreground">8-недельная программа с дорожной картой и инструментами оценки</p>
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
                      <Icon name="XCircle" className="text-destructive mt-1" size={24} />
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Проблема</h3>
                        <p className="text-muted-foreground">Сложно отличать подлинность от подделки</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <Icon name="CheckCircle2" className="text-gold mt-1" size={24} />
                      <div>
                        <h3 className="text-xl font-semibold text-gold mb-2">Решение</h3>
                        <p className="text-foreground">Чек-листы проверки подлинности и сравнение аналогов</p>
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
                      <Icon name="XCircle" className="text-destructive mt-1" size={24} />
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Проблема</h3>
                        <p className="text-muted-foreground">Нет конкретной методики монетизации</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <Icon name="CheckCircle2" className="text-gold mt-1" size={24} />
                      <div>
                        <h3 className="text-xl font-semibold text-gold mb-2">Решение</h3>
                        <p className="text-foreground">Пошаговая система монетизации коллекционных предметов</p>
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
            <p className="text-xl text-muted-foreground">Пошаговая карта за 6 шагов</p>
          </div>

          <div className="space-y-6">
            {[
              { step: 1, title: 'Диагностика опыта', desc: 'Базовые знания в нише (30 мин.)', icon: 'Clipboard' },
              { step: 2, title: 'Анализ аудитории', desc: 'Платежеспособная аудитория, конкуренты и ценность материала', icon: 'Users' },
              { step: 3, title: 'Создание площадок', desc: 'Торговые площадки, формат, описание', icon: 'Store' },
              { step: 4, title: 'План внедрения', desc: 'Чек-листы, каналы и форматы', icon: 'FileText' },
              { step: 5, title: 'Практика', desc: 'Корректировка лотов, секреты, фишки внутри', icon: 'Target' },
              { step: 6, title: 'Масштабирование', desc: 'Автоматизация повторяемых операций и расширение ассортимента', icon: 'Rocket' }
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

      {/* Author */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Кто я?</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <Card className="bg-gradient-to-br from-card to-card/50 border-gold gold-glow">
            <CardContent className="p-8 sm:p-12">
              <div className="text-center mb-8">
                <h3 className="text-3xl sm:text-4xl font-bold text-gold-light mb-2">Виталий Мельник</h3>
                <p className="text-xl text-muted-foreground">Коуч и наставник новичков в коллекционировании</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold mb-2">10+</div>
                  <p className="text-muted-foreground">лет практики в индустрии</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold mb-2">15+</div>
                  <p className="text-muted-foreground">аукционных домов РФ и Израиля</p>
                </div>
                <div className="text-center">
                  <Icon name="Award" className="text-gold mx-auto mb-3" size={48} />
                  <p className="text-muted-foreground">Участие в проекте Московского монетного двора</p>
                </div>
                <div className="text-center">
                  <Icon name="Trophy" className="text-gold mx-auto mb-3" size={48} />
                  <p className="text-muted-foreground">Благодарности от крупных медийных проектов</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
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
                  <span className="text-foreground">Поиск лотов, коллекционных предметов</span>
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
                <p className="text-lg text-center text-gold-light font-semibold">
                  Результат: первый поток реальных сделок, систематизация бизнеса и уверенность в сделках
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing */}
      <section id="packages" className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Пакеты и цены</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border hover:border-gold transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Базовый</CardTitle>
                <CardDescription className="text-muted-foreground">Старт в коллекционировании</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="text-5xl font-bold text-gold mb-2">5 000 ₽</div>
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
                  <div className="text-5xl font-bold text-gold mb-2">14 000 ₽</div>
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
