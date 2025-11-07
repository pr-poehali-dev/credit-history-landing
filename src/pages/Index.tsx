import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

const Index = () => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => prev < 50247 ? prev + 157 : 50247);
    }, 20);
    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: "Shield",
      title: "Безопасность данных",
      description: "Все данные защищены по стандартам банковской безопасности",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "Zap",
      title: "Мгновенный результат",
      description: "Получите отчет о кредитной истории за 2 минуты",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "FileText",
      title: "Полный отчет",
      description: "Детальная информация по всем кредитам и займам",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: "TrendingUp",
      title: "Рекомендации",
      description: "Персональные советы по улучшению кредитного рейтинга",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const stats = [
    { value: "50,247", label: "Проверок выполнено", icon: "Users" },
    { value: "4.9", label: "Средняя оценка", icon: "Star" },
    { value: "2 мин", label: "Среднее время", icon: "Clock" },
    { value: "99.8%", label: "Точность данных", icon: "Target" }
  ];

  const plans = [
    {
      name: "Базовый",
      price: "499",
      description: "Для разовой проверки",
      badge: null,
      features: [
        "Кредитная история из БКИ",
        "Актуальный кредитный рейтинг",
        "Список активных кредитов",
        "Техподдержка 24/7"
      ]
    },
    {
      name: "Стандарт",
      price: "999",
      description: "Оптимальный вариант",
      badge: "Популярный",
      features: [
        "Всё из тарифа Базовый",
        "История за 3 года",
        "Анализ кредитной нагрузки",
        "Рекомендации по улучшению",
        "Уведомления об изменениях"
      ],
      popular: true
    },
    {
      name: "Премиум",
      price: "1999",
      description: "Максимальная защита",
      badge: "Лучшее предложение",
      features: [
        "Всё из тарифа Стандарт",
        "История за 10 лет",
        "Мониторинг 24/7",
        "Защита от мошенничества",
        "Персональный консультант",
        "Приоритетная поддержка"
      ]
    }
  ];

  const faqs = [
    {
      question: "Как быстро я получу результат?",
      answer: "Отчет формируется автоматически и приходит на вашу почту в течение 2-5 минут после оплаты."
    },
    {
      question: "Безопасно ли передавать свои данные?",
      answer: "Да, мы используем шифрование банковского уровня (SSL 256-бит). Все данные защищены и не передаются третьим лицам."
    },
    {
      question: "Могу ли я проверить историю другого человека?",
      answer: "Нет, по закону вы можете получить только свою кредитную историю. Для этого потребуется подтверждение личности."
    },
    {
      question: "Что делать, если обнаружил ошибку в отчете?",
      answer: "Вы можете оспорить неточности через наш сервис. Мы поможем подать заявление в БКИ для корректировки данных."
    },
    {
      question: "Влияет ли проверка на кредитный рейтинг?",
      answer: "Нет, самостоятельная проверка через наш сервис не влияет на ваш кредитный рейтинг и не отображается в истории."
    }
  ];

  const testimonials = [
    {
      name: "Алексей М.",
      rating: 5,
      text: "Быстро и удобно! Получил отчет за 3 минуты. Все понятно расписано.",
      avatar: "👨‍💼"
    },
    {
      name: "Мария К.",
      rating: 5,
      text: "Обнаружила ошибку в истории благодаря сервису. Помогли исправить!",
      avatar: "👩‍💻"
    },
    {
      name: "Дмитрий В.",
      rating: 5,
      text: "Проверял перед ипотекой. Рекомендации реально помогли улучшить рейтинг.",
      avatar: "👨‍🔧"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      
      <section className="relative container mx-auto px-4 py-24 md:py-36">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-5xl mx-auto text-center space-y-10 animate-fade-in">
          <Badge variant="secondary" className="px-6 py-2 text-sm font-semibold shine">
            <Icon name="Sparkles" size={16} className="inline mr-2" />
            Более {count.toLocaleString()} проверок выполнено
          </Badge>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight">
            Узнайте свою{" "}
            <span className="gradient-text">кредитную историю</span>
            {" "}за 2 минуты
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Полный отчет из всех бюро кредитных историй. Проверьте свой рейтинг перед подачей заявки на кредит и получите персональные рекомендации.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center pt-6">
            <Button size="lg" className="text-lg px-10 py-7 shadow-2xl shadow-primary/50 hover:shadow-3xl hover:scale-105 transition-all shine group">
              <span>Проверить историю</span>
              <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-7 glass hover-lift">
              <Icon name="Play" size={20} className="mr-2" />
              Как это работает
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 pt-12">
            {[
              { icon: "Shield", text: "Безопасно" },
              { icon: "Lock", text: "Конфиденциально" },
              { icon: "CheckCircle2", text: "Без скрытых платежей" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 glass rounded-full">
                <Icon name={item.icon as any} size={18} className="text-primary" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover-lift glass border-2">
              <CardContent className="pt-8 pb-6 space-y-3">
                <div className="w-14 h-14 mx-auto bg-gradient-to-br from-primary to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Icon name={stat.icon as any} size={28} className="text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-black gradient-text">
                  {stat.value}
                </div>
                <p className="text-sm text-slate-600 font-medium">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-black gradient-text">Почему выбирают нас</h2>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto">
            Надежный сервис проверки кредитной истории с простым интерфейсом
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover-lift glass border-2 group relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
              <CardHeader>
                <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${feature.color} rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform`}>
                  <Icon name={feature.icon as any} size={36} className="text-white" />
                </div>
                <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-black gradient-text">Выберите тариф</h2>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto">
            Прозрачные цены без скрытых комиссий
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`hover-lift glass border-2 relative overflow-hidden transition-all ${
                plan.popular 
                  ? 'border-primary shadow-2xl shadow-primary/20 scale-105' 
                  : 'hover:border-primary/50'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-0 left-0 right-0 bg-gradient-to-r from-primary via-blue-500 to-indigo-600 text-white px-4 py-2 text-center text-sm font-bold">
                  {plan.badge}
                </div>
              )}
              <CardHeader className={`text-center ${plan.badge ? 'pt-16' : 'pt-8'}`}>
                <CardTitle className="text-3xl font-black">{plan.name}</CardTitle>
                <CardDescription className="text-base text-slate-600">{plan.description}</CardDescription>
                <div className="pt-6">
                  <span className="text-6xl font-black gradient-text">{plan.price}</span>
                  <span className="text-slate-500 ml-2 text-2xl">₽</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 pb-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon name="Check" size={16} className="text-white" />
                      </div>
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full py-6 text-lg font-bold shine ${
                    plan.popular 
                      ? 'shadow-xl shadow-primary/50' 
                      : ''
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  Выбрать тариф
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-black gradient-text">Отзывы клиентов</h2>
          <p className="text-slate-600 text-xl">
            Более 50,000 довольных пользователей
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-lift glass border-2">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <div className="flex gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">{testimonial.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-black gradient-text">Частые вопросы</h2>
            <p className="text-slate-600 text-xl">
              Ответы на популярные вопросы о проверке кредитной истории
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass border-2 rounded-2xl px-6 hover:border-primary/50 transition-all overflow-hidden"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 font-bold text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <Card className="max-w-5xl mx-auto text-center bg-gradient-to-br from-primary via-blue-600 to-indigo-600 text-white border-0 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
          <CardHeader className="space-y-6 py-16 relative z-10">
            <CardTitle className="text-4xl md:text-5xl font-black">
              Готовы узнать свою кредитную историю?
            </CardTitle>
            <CardDescription className="text-white/90 text-xl max-w-2xl mx-auto leading-relaxed">
              Получите полный отчет за 2 минуты и узнайте свой реальный кредитный рейтинг. Более 50,000 пользователей уже проверили свою историю!
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-16 relative z-10">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-16 py-7 font-bold shadow-2xl hover:scale-105 transition-transform shine"
            >
              Проверить сейчас
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </CardContent>
        </Card>
      </section>

      <footer className="border-t bg-white/50 backdrop-blur-xl mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">О сервисе</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Надежный сервис проверки кредитной истории с гарантией безопасности данных.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Тарифы</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#" className="hover:text-primary transition-colors">Базовый</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Стандарт</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Премиум</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Поддержка</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#" className="hover:text-primary transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Документы</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#" className="hover:text-primary transition-colors">Пользовательское соглашение</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-600">
            <p>© 2024 КредитПроверка. Все права защищены.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Mail" size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Phone" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
