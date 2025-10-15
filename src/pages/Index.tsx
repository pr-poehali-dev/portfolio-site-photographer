import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const portfolioItems = [
    {
      id: 1,
      image: 'https://cdn.poehali.dev/projects/47bec507-1603-4994-9723-10e1fd2f3507/files/87465e28-884e-430c-89ab-410da7086794.jpg',
      title: 'Портретная съёмка',
      category: 'Портрет'
    },
    {
      id: 2,
      image: 'https://cdn.poehali.dev/projects/47bec507-1603-4994-9723-10e1fd2f3507/files/afb4d5f3-b3a2-4967-bbca-cd0adb6cb408.jpg',
      title: 'Свадебная фотосессия',
      category: 'Свадьба'
    },
    {
      id: 3,
      image: 'https://cdn.poehali.dev/projects/47bec507-1603-4994-9723-10e1fd2f3507/files/03276151-b458-4662-bfe1-bd4270813090.jpg',
      title: 'Fashion съёмка',
      category: 'Fashion'
    }
  ];

  const pricingPlans = [
    {
      title: 'Портретная съёмка',
      price: '5 000 ₽',
      duration: '1 час',
      features: ['15-20 обработанных фото', 'Съёмка в студии или на локации', 'Базовая ретушь']
    },
    {
      title: 'Свадебная съёмка',
      price: '30 000 ₽',
      duration: 'Полный день',
      features: ['100+ обработанных фото', 'Съёмка от сборов до банкета', 'Профессиональная ретушь', 'Онлайн-галерея']
    },
    {
      title: 'Fashion съёмка',
      price: '10 000 ₽',
      duration: '2 часа',
      features: ['30-40 обработанных фото', 'Работа с визажистом', 'Профессиональная ретушь', 'Стилизация образа']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight">PHOTOGRAPHER</h1>
            <div className="hidden md:flex gap-8">
              <button
                onClick={() => scrollToSection('home')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'home' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'portfolio' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Портфолио
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'pricing' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Прайс
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'contact' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Контакты
              </button>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
            >
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-16 animate-fade-in">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-6xl md:text-8xl font-light mb-6 tracking-tight">
              Останавливаю<br />мгновения
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Профессиональная фотосъёмка для тех, кто ценит искусство и качество
            </p>
            <Button
              size="lg"
              onClick={() => scrollToSection('portfolio')}
              className="text-base px-8"
            >
              Смотреть работы
            </Button>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-light mb-4 text-center">Портфолио</h2>
            <p className="text-muted-foreground text-center mb-16">Избранные работы</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item, index) => (
                <Card
                  key={item.id}
                  className="group overflow-hidden border-0 shadow-none bg-white animate-scale-in cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button variant="outline" className="bg-white text-black border-0">
                        Смотреть
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-muted-foreground mb-2">{item.category}</p>
                    <h3 className="text-lg font-medium">{item.title}</h3>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-light mb-4 text-center">Прайс</h2>
            <p className="text-muted-foreground text-center mb-16">Выберите подходящий пакет услуг</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <Card
                  key={index}
                  className="p-8 border-2 hover:border-foreground transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-6">
                    <Icon name="Camera" size={32} className="mb-4" />
                    <h3 className="text-2xl font-medium mb-2">{plan.title}</h3>
                    <p className="text-muted-foreground text-sm">{plan.duration}</p>
                  </div>
                  <div className="mb-6">
                    <p className="text-4xl font-light">{plan.price}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Icon name="Check" size={16} className="mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant="outline">
                    Заказать
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-light mb-4 text-center">Контакты</h2>
            <p className="text-muted-foreground text-center mb-16">
              Свяжитесь со мной для обсуждения съёмки
            </p>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Icon name="Mail" size={24} className="mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-muted-foreground">hello@photographer.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Phone" size={24} className="mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={24} className="mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Локация</h3>
                    <p className="text-muted-foreground">Москва, Россия</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon">
                    <Icon name="Instagram" size={20} />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Icon name="Facebook" size={20} />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Icon name="Send" size={20} />
                  </Button>
                </div>
              </div>

              <Card className="p-6 border-2">
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <Input type="tel" placeholder="Телефон" />
                  </div>
                  <div>
                    <Textarea placeholder="Расскажите о вашей идее съёмки" rows={4} />
                  </div>
                  <Button className="w-full">
                    Отправить заявку
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm text-muted-foreground">
            © 2024 Photographer Portfolio. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
