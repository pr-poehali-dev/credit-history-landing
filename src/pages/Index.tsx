import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const features = [
    {
      icon: "Shield",
      title: "Безопасность данных",
      description: "Все данные защищены по стандартам банковской безопасности"
    },
    {
      icon: "Zap",
      title: "Мгновенный результат",
      description: "Получите отчет о кредитной истории за 2 минуты"
    },
    {
      icon: "FileText",
      title: "Полный отчет",
      description: "Детальная информация по всем кредитам и займам"
    },
    {
      icon: "TrendingUp",
      title: "Рекомендации",
      description: "Персональные советы по улучшению кредитного рейтинга"
    }
  ];

  const plans = [
    {
      name: "Базовый",
      price: "499",
      description: "Для разовой проверки",
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <section className="container mx-auto px-4 py-20 md:py-32 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Узнайте свою{" "}
            <span className="text-primary">кредитную историю</span>
            {" "}за 2 минуты
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Полный отчет из всех бюро кредитных историй. Проверьте свой рейтинг перед подачей заявки на кредит.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="text-lg px-8 py-6 hover-scale">
              Проверить историю
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover-scale">
              Как это работает
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-8 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Icon name="Check" size={20} className="text-primary" />
              <span>Без скрытых платежей</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Check" size={20} className="text-primary" />
              <span>Безопасно и конфиденциально</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Check" size={20} className="text-primary" />
              <span>Более 50 000 проверок</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Почему выбирают нас</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Надежный сервис проверки кредитной истории с простым интерфейсом
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover-scale border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name={feature.icon as any} size={32} className="text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Выберите тариф</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Прозрачные цены без скрытых комиссий
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`hover-scale transition-all duration-300 ${
                plan.popular 
                  ? 'border-primary border-2 shadow-xl relative' 
                  : 'border-2 hover:border-primary/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Популярный
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                <div className="pt-4">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">₽</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full hover-scale" 
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

      <section className="container mx-auto px-4 py-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Частые вопросы</h2>
            <p className="text-muted-foreground text-lg">
              Ответы на популярные вопросы о проверке кредитной истории
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-2 rounded-lg px-6 hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <Card className="max-w-4xl mx-auto text-center bg-primary text-primary-foreground border-0 shadow-2xl">
          <CardHeader className="space-y-6 py-12">
            <CardTitle className="text-3xl md:text-4xl font-bold">
              Готовы узнать свою кредитную историю?
            </CardTitle>
            <CardDescription className="text-primary-foreground/90 text-lg">
              Получите полный отчет за 2 минуты и узнайте свой реальный кредитный рейтинг
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-12">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-12 py-6 hover-scale"
            >
              Проверить сейчас
            </Button>
          </CardContent>
        </Card>
      </section>

      <footer className="border-t mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2024 КредитПроверка. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
              <a href="#" className="hover:text-primary transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
