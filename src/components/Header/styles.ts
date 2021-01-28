import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-height: 80px;
  background-color: #fffaf3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
`;

export const MobileContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24px;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 8px;

  > img {
    height: 50px;
  }

  @media (max-width: 1023px) {
    display: none;
  }
`;

export const Button = styled.button`
  font-size: 18px;
  font-weight: bold;
  color: #035337;
  background-color: transparent;
  border: none;
`;
