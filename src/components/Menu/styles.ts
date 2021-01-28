import styled, { css } from 'styled-components';

interface ContainerProps {
  isVisible: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 80px;
  background-color: #035337;

  display: none;
  flex-direction: column;
  align-items: center;

  li {
    padding: 24px;
    color: #fffaf3;
    text-align: center;
    font-size: 24px;
  }

  ${props =>
    props.isVisible &&
    css`
      display: flex;
    `}

  @media (min-width: 1024px) {
    display: none;
  }
`;
