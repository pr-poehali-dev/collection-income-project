import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
  result: string;
}

interface SocialProofSectionProps {
  testimonials: Testimonial[];
  formData: { name: string; phone: string; message: string };
  setFormData: (data: { name: string; phone: string; message: string }) => void;
  handleSubmit: (e: React.FormEvent) => void;
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

const SocialProofSection = ({ testimonials, formData, setFormData, handleSubmit, timeLeft }: SocialProofSectionProps) => {
  return (
    <>
      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Отзывы учеников</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
            <p className="text-xl text-muted-foreground">Реальные результаты наших выпускников</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className={`bg-card border-border hover:border-gold transition-all duration-300 ${
                  index >= 6 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''
                }`}
              >
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

                  <p className="text-muted-foreground mb-4 leading-relaxed italic">{testimonial.text}</p>

                  {testimonial.result && (
                    <div className="pt-4 border-t border-border">
                      <Badge className="bg-gold/20 text-gold border-gold">
                        {testimonial.result}
                      </Badge>
                    </div>
                  )}
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
                <p className="text-xl text-gold mb-3">Коллекционный дилер, наставник новичков и коллекционеров с малым опытом</p>
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
                    <Icon name="Medal" className="text-gold mt-1 flex-shrink-0" size={24} />
                    <div>
                      <p className="text-gold font-semibold">Принимал участие в создании</p>
                      <p className="text-muted-foreground text-sm">Официального символического жетона "Второй Сталинград"</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Trophy" className="text-gold mt-1 flex-shrink-0" size={24} />
                    <div>
                      <p className="text-gold font-semibold">Благодарности от крупных медийных проектов</p>
                      <p className="text-muted-foreground text-sm">За вклад в освещении и продвижении проекта "Символика ММД" и творческих инициатив в других проектах</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="ThumbsUp" className="text-gold mt-1 flex-shrink-0" size={24} />
                    <div>
                      <p className="text-gold font-semibold">Более 1000 положительных отзывов</p>
                      <p className="text-muted-foreground text-sm">О проведённых сделках</p>
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
                  <span className="text-gold font-semibold">Каналы продаж:</span> Более 3-х торговых точек онлайн
                </p>
                <p className="text-lg text-center text-foreground mt-2">
                  <span className="text-gold font-semibold">YouTube канал:</span> "Make in collection" — о коллекционировании
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
                  <Icon name="BookOpen" className="text-gold mt-1 flex-shrink-0" size={20} />
                  <div>
                    <span className="text-foreground font-semibold">Базовые знания</span>
                    <p className="text-muted-foreground text-sm mt-1">Находим твою нишу</p>
                  </div>
                </div>
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

      {/* Important Notice */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-amber-900/20 to-card border-gold">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <Icon name="AlertCircle" className="text-gold flex-shrink-0 mt-1" size={32} />
                <h3 className="text-2xl font-bold text-gold-light">Важное уточнение</h3>
              </div>
              <div className="space-y-4 text-foreground">
                <p className="leading-relaxed">
                  Обратите внимание: Это комплексное обучение, а не инвестиционная рекомендация. Ваши результаты зависят от вашей дисциплины, выбранной категории предметов и текущей конъюнктуры рынка.
                </p>
                <p className="leading-relaxed">
                  Мы научим вас работать с безопасным бюджетом и всегда держать риски под контролем. Наша цель — дать вам инструменты, чтобы вы могли принимать обоснованные и выгодные решения самостоятельно, открывая для себя новые возможности и меняя свою жизнь.
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
            <Badge className="bg-destructive/20 text-destructive border-destructive px-6 py-2 text-sm font-medium mb-4">
              <Icon name="Clock" className="mr-2" size={16} />
              ОСТАЛОСЬ {timeLeft.days}д {timeLeft.hours}ч {timeLeft.minutes}м {timeLeft.seconds}с ДО ПОВЫШЕНИЯ ЦЕН
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Выбери свой тариф</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card className="bg-card border-border hover:border-gold transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-gold-light">Базовый</CardTitle>
                <CardDescription>Для самостоятельного старта</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <p className="text-4xl font-bold text-white">7 000 ₽</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-gold mt-1 flex-shrink-0" size={18} />
                    <span className="text-foreground">Онлайн-курс (4 недели)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-gold mt-1 flex-shrink-0" size={18} />
                    <span className="text-foreground">Выбор тематики коллекционирования, с чего начать (темы, подтемы)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-gold mt-1 flex-shrink-0" size={18} />
                    <span className="text-foreground">Классификация по состоянию, ликвидности и редкости</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-gold mt-1 flex-shrink-0" size={18} />
                    <span className="text-foreground">Систематизация</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-gold mt-1 flex-shrink-0" size={18} />
                    <span className="text-foreground">Все чек-листы и шаблоны</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-gold mt-1 flex-shrink-0" size={18} />
                    <span className="text-foreground">Доступ к материалам 1 год</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-gold mt-1 flex-shrink-0" size={18} />
                    <span className="text-foreground">Поддержка в чате</span>
                  </li>
                </ul>
                <Button 
                  className="w-full bg-gold hover:bg-gold-light text-black font-semibold"
                  onClick={() => document.getElementById('cta-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  ВЫБРАТЬ
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gold/20 to-card border-gold gold-glow relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gold text-black font-bold px-4 py-1">ПОПУЛЯРНЫЙ</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-gold-light">Стандарт</CardTitle>
                <CardDescription>С личной поддержкой наставника</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <p className="text-4xl font-bold text-white">15 000 ₽</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-gold mt-1 flex-shrink-0" size={18} />
                    <span className="text-foreground">Всё из тарифа «Базовый»</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-gold mt-1 flex-shrink-0" size={18} />
                    <span className="text-foreground">Монетизация хобби</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-gold mt-1 flex-shrink-0" size={18} />
                    <span className="text-foreground">2 индивидуальные консультации</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-gold mt-1 flex-shrink-0" size={18} />
                    <span className="text-foreground">Разбор первых 3 сделок</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-gold mt-1 flex-shrink-0" size={18} />
                    <span className="text-foreground">Приоритетная поддержка</span>
                  </li>
                </ul>
                <Button 
                  className="w-full bg-gold hover:bg-gold-light text-black font-semibold gold-glow"
                  onClick={() => document.getElementById('cta-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  ВЫБРАТЬ
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-gold transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-gold-light">Премиум</CardTitle>
                <CardDescription>Максимальное сопровождение</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <p className="text-4xl font-bold text-white">50 000 ₽</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-gold mt-1 flex-shrink-0" size={18} />
                    <span className="text-foreground">Всё из тарифа «Стандарт»</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-gold mt-1 flex-shrink-0" size={18} />
                    <span className="text-foreground">Быстрая оценка материала (секреты, лайфхаки)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-gold mt-1 flex-shrink-0" size={18} />
                    <span className="text-foreground">Инвестирование (выбор предметов, оценка, мониторинг, анализ рынка)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-gold mt-1 flex-shrink-0" size={18} />
                    <span className="text-foreground">5 личных консультаций</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-gold mt-1 flex-shrink-0" size={18} />
                    <span className="text-foreground">Разбор до 7 сделок</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-gold mt-1 flex-shrink-0" size={18} />
                    <span className="text-foreground">Доступ к инсайдам 24/7</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-gold mt-1 flex-shrink-0" size={18} />
                    <span className="text-foreground">Персональная CRM-система</span>
                  </li>
                </ul>
                <Button 
                  className="w-full bg-gold hover:bg-gold-light text-black font-semibold"
                  onClick={() => document.getElementById('cta-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  ВЫБРАТЬ
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

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Частые вопросы</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-card border-gold rounded-lg px-6">
              <AccordionTrigger className="text-gold-light hover:text-gold">
                Какой стартовый бюджет нужен для первых сделок?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Рекомендуем начинать с суммы от 10 000 ₽. Это позволит купить несколько недорогих лотов для практики и понимания рынка. В курсе подробно разбираем стратегии для разных бюджетов.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-card border-gold rounded-lg px-6">
              <AccordionTrigger className="text-gold-light hover:text-gold">
                Я новичок в коллекционировании. Подойдёт ли мне курс?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Для новичка подойдёт тариф Базовый, но сам курс предназначен для тех, кто обладает уже некоторым опытом, базовыми знаниями и прочим. Мы начинаем с базовых понятий и постепенно переходим к продвинутым техникам. Главное — желание учиться и практиковаться.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-card border-gold rounded-lg px-6">
              <AccordionTrigger className="text-gold-light hover:text-gold">
                Гарантируете ли вы прибыль после курса?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Мы даём вам все инструменты и знания для успешных сделок. Однако результат зависит от вашей дисциплины, выбранной ниши и рыночной ситуации. Это не инвестиционная рекомендация, а образовательная программа.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-card border-gold rounded-lg px-6">
              <AccordionTrigger className="text-gold-light hover:text-gold">
                Сколько времени нужно уделять в неделю?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Минимум 5-7 часов в неделю: 2-3 часа на изучение материалов и 3-4 часа на практику (поиск лотов, анализ, общение с продавцами). Чем больше практики — тем быстрее результат.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-card border-gold rounded-lg px-6">
              <AccordionTrigger className="text-gold-light hover:text-gold">
                Какие площадки для торговли вы рекомендуете?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                В курсе разбираем все популярные площадки: Авито, специализированные форумы коллекционеров, аукционы и соцсети. Выбор зависит от вашей ниши — научим определять оптимальные каналы.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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
    </>
  );
};

export default SocialProofSection;