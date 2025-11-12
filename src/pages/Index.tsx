import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const section = searchParams.get('section');
    if (section) {
      scrollToSection(section);
    }
  }, [searchParams]);

  const products = [
    {
      id: 1,
      name: 'Oticon Zircon 1 miniRITE T',
      description: 'Современный цифровой слуховой аппарат с технологией шумоподавления',
      price: 'от 45 000 ₽',
      features: ['Bluetooth', '24 канала', 'Защита IP68']
    },
    {
      id: 2,
      name: 'Oticon Xceed 3 BTE SP',
      description: 'Мощный аппарат для тяжелых потерь слуха',
      price: 'от 89 000 ₽',
      features: ['Супермощность', '48 каналов', 'Защита от влаги']
    },
    {
      id: 3,
      name: 'ReSound KEY KE277-DWH',
      description: 'Надежное решение с отличным качеством звука',
      price: 'от 38 000 ₽',
      features: ['12 каналов', 'Легкий вес', 'Аккумулятор']
    },
    {
      id: 4,
      name: 'Oticon Ruby 2 BTE PP 13',
      description: 'Комфортный аппарат для ежедневного использования',
      price: 'от 52 000 ₽',
      features: ['20 каналов', 'Удобная посадка', 'Долгая работа']
    },
    {
      id: 5,
      name: 'Phonak Audeo P50-312',
      description: 'Премиум-класс с технологией AutoSense OS',
      price: 'от 95 000 ₽',
      features: ['Bluetooth', 'AutoSense', 'Перезаряжаемый']
    }
  ];

  const services = [
    {
      icon: 'Stethoscope',
      title: 'Диагностика слуха',
      description: 'Полное обследование на современном оборудовании'
    },
    {
      icon: 'Settings',
      title: 'Настройка аппаратов',
      description: 'Индивидуальная настройка под ваши потребности'
    },
    {
      icon: 'RefreshCw',
      title: 'Гарантийное обслуживание',
      description: 'Бесплатный сервис и консультации'
    },
    {
      icon: 'ShoppingBag',
      title: 'Подбор устройства',
      description: 'Помощь в выборе оптимального решения'
    }
  ];

  const articles = [
    {
      title: 'Как выбрать слуховой аппарат',
      excerpt: 'Основные критерии выбора и на что обратить внимание',
      date: '15 октября 2024'
    },
    {
      title: 'Уход за слуховым аппаратом',
      excerpt: 'Правила эксплуатации и чистки устройства',
      date: '10 октября 2024'
    },
    {
      title: 'Современные технологии в слухопротезировании',
      excerpt: 'Обзор последних разработок и инноваций',
      date: '5 октября 2024'
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/30">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <img 
                src="https://cdn.poehali.dev/files/85d510e9-aaa0-4323-aaaf-04469fd887d9.png" 
                alt="Ясный слух" 
                className="h-10 w-auto"
              />
              <span className="text-2xl font-bold font-heading text-secondary">Ясный слух</span>
            </div>
          </div>
          
          <nav className="hidden md:flex gap-6">
            {['home', 'catalog', 'services', 'articles', 'about', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === section ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {section === 'home' && 'Главная'}
                {section === 'catalog' && 'Каталог'}
                {section === 'services' && 'Услуги'}
                {section === 'articles' && 'Статьи'}
                {section === 'about' && 'О нас'}
                {section === 'contact' && 'Контакты'}
              </button>
            ))}
          </nav>

          <Button className="font-medium" asChild>
            <a href="tel:+74957990926">
              <Icon name="Phone" className="mr-2 h-4 w-4" />
              +7 (495) 799-09-26
            </a>
          </Button>
        </div>
      </header>

      <section id="home" className="py-20 md:py-32 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-secondary leading-tight">
                Верните радость<br />четкого слуха
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Профессиональный центр слухопротезирования с 15-летним опытом. 
                Современное оборудование, квалифицированные специалисты и индивидуальный подход.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="font-medium" onClick={() => scrollToSection('catalog')}>
                  <Icon name="ShoppingCart" className="mr-2 h-5 w-5" />
                  Смотреть каталог
                </Button>
                <Button size="lg" variant="outline" className="font-medium" onClick={() => scrollToSection('services')}>
                  Наши услуги
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary font-heading">15+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary font-heading">5000+</div>
                  <div className="text-sm text-muted-foreground">клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary font-heading">98%</div>
                  <div className="text-sm text-muted-foreground">довольных</div>
                </div>
              </div>
            </div>
            
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
              <Icon name="Ear" className="h-48 w-48 text-primary/20" />
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary mb-4">
              Каталог слуховых аппаратов
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Современные решения от ведущих производителей мира
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card 
                key={product.id} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg mb-4 flex items-center justify-center">
                    <Icon name="Activity" className="h-20 w-20 text-primary/40" />
                  </div>
                  <CardTitle className="font-heading">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-2xl font-bold text-primary font-heading">{product.price}</div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full font-medium"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    Подробнее
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary mb-4">
              Наши услуги
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг по диагностике и слухопротезированию
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-heading">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="articles" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary mb-4">
              Полезные статьи
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Экспертные материалы о слухе и слухопротезировании
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {articles.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg mb-4 flex items-center justify-center">
                    <Icon name="FileText" className="h-12 w-12 text-primary/40" />
                  </div>
                  <CardTitle className="font-heading text-lg">{article.title}</CardTitle>
                  <CardDescription className="text-xs">{article.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{article.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="p-0">
                    Читать далее
                    <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary mb-8 text-center">
              О центре "Ясный слух"
            </h2>
            
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="about">О нас</TabsTrigger>
                <TabsTrigger value="advantages">Преимущества</TabsTrigger>
                <TabsTrigger value="team">Команда</TabsTrigger>
              </TabsList>
              
              <TabsContent value="about" className="space-y-4 mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Центр "Ясный слух" работает с 2009 года и является одним из ведущих специализированных 
                      центров слухопротезирования в России. Мы помогли более 5000 людей вернуть качественный слух 
                      и улучшить качество жизни.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Наша миссия — сделать современные технологии слухопротезирования доступными каждому, 
                      кто в них нуждается. Мы работаем только с проверенными производителями и предоставляем 
                      полную гарантию на все услуги и оборудование.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="advantages" className="space-y-4 mt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Квалифицированные специалисты с медицинским образованием',
                    'Современное диагностическое оборудование',
                    'Индивидуальный подход к каждому клиенту',
                    'Широкий выбор слуховых аппаратов',
                    'Гарантийное и постгарантийное обслуживание',
                    'Удобное расположение в центре города'
                  ].map((advantage, idx) => (
                    <Card key={idx}>
                      <CardContent className="pt-6 flex items-start gap-3">
                        <Icon name="CheckCircle" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{advantage}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="team" className="mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      В нашей команде работают сурдологи и аудиологи с опытом работы от 10 лет. 
                      Все специалисты регулярно проходят обучение и повышение квалификации.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                      <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                        <Icon name="GraduationCap" className="h-8 w-8 text-primary" />
                        <div>
                          <div className="font-semibold">Высшее образование</div>
                          <div className="text-sm text-muted-foreground">Медицинские специалисты</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                        <Icon name="Award" className="h-8 w-8 text-primary" />
                        <div>
                          <div className="font-semibold">Сертификаты</div>
                          <div className="text-sm text-muted-foreground">Международного уровня</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary mb-4">
              Запишитесь на бесплатную консультацию
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Оставьте заявку, и мы свяжемся с вами в ближайшее время
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Форма записи</CardTitle>
                <CardDescription>Заполните форму, и мы перезвоним вам</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Иван Иванов"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+7 (___) ___-__-__"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Расскажите о вашей проблеме или интересующем товаре"
                      rows={4}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg">
                    <Icon name="Send" className="mr-2 h-5 w-5" />
                    Отправить заявку
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Адрес</div>
                      <p className="text-sm text-muted-foreground">
                        ул. Люблинская д. 100 кор. 2<br />
                        Москва, Россия
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Телефон</div>
                      <a href="tel:+74957990926" className="text-sm text-muted-foreground hover:text-primary">
                        +7 (495) 799-09-26
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <a href="mailto:info@clearear.ru" className="text-sm text-muted-foreground hover:text-primary">
                        info@clearear.ru
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Режим работы</div>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <div>Пн-Пт: 9:00 - 20:00</div>
                        <div>Сб: 10:00 - 18:00</div>
                        <div>Вс: выходной</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">Как нас найти</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="w-full h-[300px] rounded-b-lg overflow-hidden">
                    <iframe
                      src="https://yandex.ru/map-widget/v1/?ll=37.742913%2C55.676584&mode=search&oid=1078664426&ol=biz&z=16"
                      width="100%"
                      height="300"
                      frameBorder="0"
                      title="Карта расположения - ул. Люблинская д. 100 кор. 2, Москва"
                      className="border-0"
                      allowFullScreen
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/85d510e9-aaa0-4323-aaaf-04469fd887d9.png" 
                  alt="Ясный слух" 
                  className="h-8 w-auto"
                />
                <span className="text-xl font-bold font-heading text-secondary">Ясный слух</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Профессиональный центр слухопротезирования
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 font-heading">Контакты</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" className="h-4 w-4" />
                  <a href="tel:+74957990926" className="hover:text-primary">+7 (495) 799-09-26</a>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" className="h-4 w-4" />
                  <a href="mailto:info@clearear.ru" className="hover:text-primary">info@clearear.ru</a>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" className="h-4 w-4" />
                  <span>ул. Люблинская д. 100 кор. 2, Москва</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 font-heading">Режим работы</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Пн-Пт: 9:00 - 20:00</div>
                <div>Сб: 10:00 - 18:00</div>
                <div>Вс: выходной</div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 font-heading">Следите за нами</h3>
              <div className="flex gap-3">
                <Button size="icon" variant="outline">
                  <Icon name="Facebook" className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline">
                  <Icon name="Instagram" className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline">
                  <Icon name="Youtube" className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 Центр слухопротезирования "Ясный слух". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;