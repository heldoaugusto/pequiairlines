import React, { useCallback, useState } from 'react';

import { GiAirplaneDeparture, GiAirplaneArrival } from 'react-icons/gi';
import { BiCalendar } from 'react-icons/bi';
import { FiArrowRight } from 'react-icons/fi';

import 'react-toggle/style.css';

import Toggle from 'react-toggle';
import Carousel from '../../components/Carousel';
import Input from '../../components/Input';

import {
  Container,
  SearchContainer,
  SearchInputsContent,
  Button,
  SearchToggleContent,
} from './styles';

const Home: React.FC = () => {
  const [oneWayToggle, setOneWayToggle] = useState<boolean>(false);

  const handleToggleChange = useCallback(() => {
    setOneWayToggle(!oneWayToggle);
  }, [oneWayToggle]);

  return (
    <Container>
      <Carousel />

      <SearchContainer>
        <SearchInputsContent>
          <Input
            name="departure-airport"
            placeholder="Aeroporto de partida"
            icon={GiAirplaneDeparture}
          />
          <FiArrowRight size={24} />
          <Input
            name="arrival-airport"
            placeholder="Aeroporto de chegada"
            icon={GiAirplaneArrival}
          />

          <Input name="departure-date" placeholder="Ida" icon={BiCalendar} />

          <FiArrowRight size={24} />
          <Input
            name="return-date"
            placeholder="Volta"
            icon={BiCalendar}
            disabled={oneWayToggle}
          />
        </SearchInputsContent>

        <SearchToggleContent>
          <Toggle defaultChecked={oneWayToggle} onChange={handleToggleChange} />
          <p>Somente ida</p>
        </SearchToggleContent>

        <Button>Pesquisar</Button>
      </SearchContainer>
    </Container>
  );
};

export default Home;
