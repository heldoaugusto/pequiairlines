import React from 'react';

import { Container } from './styles';

import { useMenu } from '../../hooks/menu';

const Menu: React.FC = () => {
  const { isVisible } = useMenu();

  return (
    <Container isVisible={isVisible}>
      <ul>
        <li>Destinos</li>
        <li>Minhas viagens</li>
        <li>Serviços</li>
        <li>Fale conosco</li>
      </ul>
    </Container>
  );
};

export default Menu;
