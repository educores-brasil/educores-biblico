import { useEffect } from 'react';
import { toast } from 'sonner';

const FakeNotifications = () => {
  const names = [
    'Maria Silva', 'João Santos', 'Ana Costa', 'Pedro Oliveira', 'Carla Souza',
    'Lucas Ferreira', 'Juliana Lima', 'Rafael Alves', 'Fernanda Rocha', 'Gabriel Martins',
    'Beatriz Cardoso', 'Diego Ribeiro', 'Camila Dias', 'Thiago Pereira', 'Larissa Monteiro'
  ];

  const cities = [
    'São Paulo, SP', 'Rio de Janeiro, RJ', 'Belo Horizonte, MG', 'Salvador, BA',
    'Fortaleza, CE', 'Brasília, DF', 'Curitiba, PR', 'Recife, PE', 'Porto Alegre, RS',
    'Goiânia, GO', 'Belém, PA', 'Guarulhos, SP', 'Campinas, SP', 'São Luís, MA',
    'Maceió, AL', 'Natal, RN', 'Campo Grande, MS', 'João Pessoa, PB', 'Aracaju, SE'
  ];

  const products = [
    'Pacote Básico - 30 Livros de Colorir',
    'Pacote Premium - 30 Livros + Bônus'
  ];

  const getRandomItem = (array: string[]) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString('pt-BR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const showNotification = () => {
    const name = getRandomItem(names);
    const city = getRandomItem(cities);
    const product = getRandomItem(products);
    const time = getCurrentTime();

    toast.success(
      `🎉 Nova compra realizada!`,
      {
        description: `${name} de ${city} comprou "${product}" às ${time}`,
        duration: 4000,
        position: 'top-right',
      }
    );
  };

  useEffect(() => {
    // Primeira notificação após 2 segundos
    const initialTimer = setTimeout(() => {
      showNotification();
    }, 2000);

    // Notificações a cada 5 segundos
    const interval = setInterval(() => {
      showNotification();
    }, 10000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return null;
};

export default FakeNotifications;