import React from 'react';

import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import bannerCoffee from '../../assets/banner-coffee.png';
import bannerGynCdg from '../../assets/banner-gyn-cdg.png';
import bannerSale from '../../assets/banner-sale.png';

import { CarouselContainer } from './styles';

const Carousel: React.FC = () => {
  return (
    <CarouselContainer>
      <ReactCarousel
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        infiniteLoop
        autoPlay
        interval={5000}
      >
        <div>
          <img src={bannerCoffee} alt="Banner café goiano" />
        </div>

        <div>
          <img src={bannerGynCdg} alt="Banner Goiânia a Paris" />
        </div>

        <div>
          <img src={bannerSale} alt="Banner oferta" />
        </div>
      </ReactCarousel>
    </CarouselContainer>
  );
};

export default Carousel;
