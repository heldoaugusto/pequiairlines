import React from 'react';

import { FiMenu, FiX } from 'react-icons/fi';

import { Container, Content, MobileContent, Button } from './styles';

import { useMenu } from '../../hooks/menu';

import Logo from '../../assets/logo.svg';

const Header: React.FC = () => {
  const { isVisible, ShowMenu } = useMenu();

  return (
    <Container>
      <MobileContent>
        <img src={Logo} alt="Pequi Airlines" />

        {!isVisible && (
          <Button onClick={ShowMenu}>
            <FiMenu size={24} color="#035337" />
          </Button>
        )}

        {isVisible && (
          <Button onClick={ShowMenu}>
            <FiX size={24} color="#035337" />
          </Button>
        )}
      </MobileContent>

      <Content>
        <Button>Destinos</Button>
        <Button>Minhas viagens</Button>
        <img src={Logo} alt="Pequi Airlines" />
        <Button>Serviços</Button>
        <Button>Fale conosco</Button>
      </Content>
    </Container>
  );
};

export default Header;
