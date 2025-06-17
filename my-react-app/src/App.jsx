import React from 'react';
import ProductSlider from './components/ProductSlider';
import wheelImage from './assets/wheel.png';

const App = () => {
  const products = [
    {
      id: 1,
      name: '205/55R16 PIRELLI CINTURATO P7 91VPIRELLI CINTURATO P7 91V',
      price: '6 750 ₽',
      oldPrice: '6 750 ₽',
      badge: 'Акция',
      image: wheelImage
    },
    {
      id: 2,
      name: '205/55R16 PIRELLI CINTURATO P7 91VPIRELLI CINTURATO P7 91V',
      price: '6 750 ₽',
      oldPrice: '6 750 ₽',
      image: wheelImage
    },
    {
      id: 3,
      name: '205/55R16 PIRELLI CINTURATO P7 91VPIRELLI CINTURATO P7 91V',
      price: '6 750 ₽',
      oldPrice: '6 750 ₽',
      badge: 'Скидка',
      image: wheelImage
    },
    {
      id: 4,
      name: '205/55R16 PIRELLI CINTURATO P7 91VPIRELLI CINTURATO P7 91V',
      price: '6 750 ₽',
      oldPrice: '6 750 ₽',
      image: wheelImage
    },
    {
      id: 5,
      name: '205/55R16 PIRELLI CINTURATO P7 91VPIRELLI CINTURATO P7 91V"',
      price: '6 750 ₽',
      oldPrice: '6 750 ₽',
      badge: 'Новинка',
      image: wheelImage
    },
    {
      id: 6,
      name: '205/55R16 PIRELLI CINTURATO P7 91VPIRELLI CINTURATO P7 91V',
      price: '6 750 ₽',
      oldPrice: '6 750 ₽',
      image: wheelImage
    },
    {
      id: 7,
      name: '205/55R16 PIRELLI CINTURATO P7 91VPIRELLI CINTURATO P7 91V',
      price: '6 750 ₽',
      oldPrice: '6 750 ₽',
      image: wheelImage
    },
    {
      id: 8,
      name: '205/55R16 PIRELLI CINTURATO P7 91VPIRELLI CINTURATO P7 91V',
      price: '6 750 ₽',
      oldPrice: '6 750 ₽',
      badge: 'Хит',
      image: wheelImage
    }
  ];

  return (
    <div className="app">
      <ProductSlider products={products} />
    </div>
  );
};

export default App;