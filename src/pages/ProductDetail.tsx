import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const products = [
  {
    id: 1,
    name: 'Oticon Zircon 1 miniRITE T',
    description: 'Современный цифровой слуховой аппарат с технологией шумоподавления',
    price: 'от 45 000 ₽',
    features: ['Bluetooth', '24 канала', 'Защита IP68'],
    fullDescription: 'Oticon Zircon 1 miniRITE T — это современное решение для людей с потерей слуха от легкой до тяжелой степени. Аппарат оснащен технологией BrainHearing, которая помогает мозгу лучше обрабатывать звуки.',
    specifications: {
      'Тип устройства': 'Заушный с выносным ресивером (miniRITE)',
      'Количество каналов': '24',
      'Степень потери слуха': 'От легкой до тяжелой',
      'Батарея': 'Перезаряжаемая',
      'Беспроводные функции': 'Bluetooth, телефон, ТВ',
      'Защита': 'IP68 (водо- и пылезащита)',
      'Управление': 'Кнопка, приложение',
      'Гарантия': '2 года'
    },
    advantages: [
      'Естественное качество звука',
      'Подавление обратной связи',
      'Направленные микрофоны',
      'Автоматическая адаптация к окружению',
      'Возможность потоковой передачи звука',
      'Удобное управление через приложение'
    ]
  },
  {
    id: 2,
    name: 'Oticon Xceed 3 BTE SP',
    description: 'Мощный аппарат для тяжелых потерь слуха',
    price: 'от 89 000 ₽',
    features: ['Супермощность', '48 каналов', 'Защита от влаги'],
    fullDescription: 'Oticon Xceed 3 BTE SP создан специально для людей с тяжелой и глубокой потерей слуха. Это самый мощный слуховой аппарат в линейке Oticon с революционной технологией обработки звука.',
    specifications: {
      'Тип устройства': 'Заушный супермощный (BTE SP)',
      'Количество каналов': '48',
      'Степень потери слуха': 'Тяжелая и глубокая',
      'Батарея': 'Батарейка 13',
      'Беспроводные функции': 'Bluetooth, Made for iPhone',
      'Защита': 'IP68',
      'Управление': 'Кнопка, пульт, приложение',
      'Гарантия': '3 года'
    },
    advantages: [
      'Максимальная мощность усиления',
      'Технология OpenSound Optimizer',
      'Подавление обратной связи 360°',
      'Потоковая передача с iPhone',
      'Длительное время работы',
      'Прочная конструкция'
    ]
  },
  {
    id: 3,
    name: 'ReSound KEY KE277-DWH',
    description: 'Надежное решение с отличным качеством звука',
    price: 'от 38 000 ₽',
    features: ['12 каналов', 'Легкий вес', 'Аккумулятор'],
    fullDescription: 'ReSound KEY KE277-DWH — это доступное решение с базовыми, но надежными функциями. Идеально подходит для повседневного использования с отличным соотношением цены и качества.',
    specifications: {
      'Тип устройства': 'Заушный (BTE)',
      'Количество каналов': '12',
      'Степень потери слуха': 'От легкой до средне-тяжелой',
      'Батарея': 'Перезаряжаемая Li-ion',
      'Беспроводные функции': 'Нет',
      'Защита': 'Nano-покрытие',
      'Управление': 'Кнопка регулировки громкости',
      'Гарантия': '2 года'
    },
    advantages: [
      'Доступная цена',
      'Простота использования',
      'Легкий и комфортный',
      'Надежная конструкция',
      'Долгий срок службы батареи',
      'Быстрая зарядка'
    ]
  },
  {
    id: 4,
    name: 'Oticon Ruby 2 BTE PP 13',
    description: 'Комфортный аппарат для ежедневного использования',
    price: 'от 52 000 ₽',
    features: ['20 каналов', 'Удобная посадка', 'Долгая работа'],
    fullDescription: 'Oticon Ruby 2 BTE PP 13 — практичное решение среднего класса с отличным балансом функциональности и цены. Подходит для активных людей, ценящих комфорт и качество.',
    specifications: {
      'Тип устройства': 'Заушный мощный (BTE PP)',
      'Количество каналов': '20',
      'Степень потери слуха': 'От средней до глубокой',
      'Батарея': 'Батарейка 13',
      'Беспроводные функции': 'Опционально',
      'Защита': 'Nano-покрытие',
      'Управление': 'Кнопка, опциональный пульт',
      'Гарантия': '2 года'
    },
    advantages: [
      'Комфортная эргономика',
      'Четкий звук в разных ситуациях',
      'Адаптивное шумоподавление',
      'Длительная автономность',
      'Простое обслуживание',
      'Надежность бренда Oticon'
    ]
  },
  {
    id: 5,
    name: 'Phonak Audeo P50-312',
    description: 'Премиум-класс с технологией AutoSense OS',
    price: 'от 95 000 ₽',
    features: ['Bluetooth', 'AutoSense', 'Перезаряжаемый'],
    fullDescription: 'Phonak Audeo P50-312 — флагманский слуховой аппарат премиум-класса. Оснащен искусственным интеллектом AutoSense OS 4.0, который автоматически адаптируется к любой звуковой среде.',
    specifications: {
      'Тип устройства': 'Внутриушной с ресивером (RIC)',
      'Количество каналов': '20',
      'Степень потери слуха': 'От легкой до тяжелой',
      'Батарея': 'Перезаряжаемая Li-ion',
      'Беспроводные функции': 'Bluetooth, Roger, AirStream',
      'Защита': 'IP68',
      'Управление': 'Приложение myPhonak, Roger',
      'Гарантия': '3 года'
    },
    advantages: [
      'Искусственный интеллект AutoSense OS 4.0',
      'Универсальное Bluetooth-соединение',
      'Потоковая передача звука любых устройств',
      'Отличное речепонимание в шуме',
      'Быстрая зарядка (3 часа = полный день)',
      'Премиальное качество звука'
    ]
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Товар не найден</h1>
          <Button onClick={() => navigate('/')}>Вернуться на главную</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/30">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="https://cdn.poehali.dev/files/85d510e9-aaa0-4323-aaaf-04469fd887d9.png" 
              alt="Ясный слух" 
              className="h-10 w-auto"
            />
            <span className="text-2xl font-bold font-heading text-secondary">Ясный слух</span>
          </Link>
          
          <Button onClick={() => navigate('/')}>
            <Icon name="ArrowLeft" className="mr-2 h-4 w-4" />
            На главную
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="sticky top-24">
              <div className="h-[400px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                <Icon name="Activity" className="h-48 w-48 text-primary/40" />
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl font-heading text-primary">{product.price}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full" size="lg" onClick={() => navigate('/?section=contact')}>
                    <Icon name="Calendar" className="mr-2 h-5 w-5" />
                    Записаться на консультацию
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    <Icon name="Phone" className="mr-2 h-5 w-5" />
                    +7 (495) 799-09-26
                  </Button>
                  
                  <div className="pt-4 space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="h-4 w-4 text-primary" />
                      <span>Гарантия {product.specifications['Гарантия']}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="h-4 w-4 text-primary" />
                      <span>Бесплатная настройка</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="h-4 w-4 text-primary" />
                      <span>Тестовый период 30 дней</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold font-heading text-secondary mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                {product.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {product.features.map((feature, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Описание</TabsTrigger>
                <TabsTrigger value="specs">Характеристики</TabsTrigger>
                <TabsTrigger value="advantages">Преимущества</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {product.fullDescription}
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="specs" className="mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-3">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-3 border-b last:border-0">
                          <span className="font-medium text-secondary">{key}</span>
                          <span className="text-muted-foreground">{value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="advantages" className="mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-3">
                      {product.advantages.map((advantage, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <Icon name="CheckCircle" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{advantage}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Icon name="Info" className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-secondary mb-2">Бесплатный тест-драйв</h3>
                    <p className="text-sm text-muted-foreground">
                      Вы можете протестировать этот слуховой аппарат в течение 30 дней совершенно бесплатно. 
                      Запишитесь на консультацию, и мы подберем оптимальное решение именно для вас.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
