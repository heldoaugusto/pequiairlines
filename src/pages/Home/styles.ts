import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
  }
`;

export const SearchContainer = styled.div`
  background-color: #035337;
  margin: 10px;
  padding: 16px;
  border-radius: 5px;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: baseline;

  @media (min-width: 1024px) {
    position: absolute;
    width: 80%;
    top: 100px;
  }
`;

export const SearchInputsContent = styled.div`
  width: 100%;

  > svg {
    display: none;
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 45fr 5fr 45fr;
    grid-template-rows: 1fr 1fr;

    align-items: center;
    justify-items: center;

    > svg {
      display: initial;
      color: #fffaf3;
    }
  }
`;

export const SearchToggleContent = styled.aside`
  margin: 8px 8px 8px 0;
  display: flex;
  flex-direction: row;
  align-items: center;

  .react-toggle-track {
    border: 2px solid #fffaf3;
    background-color: #035337;
  }

  .react-toggle--checked .react-toggle-track {
    background-color: #ff4100;
  }

  .react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track {
    background-color: #035337;
  }

  .react-toggle--checked:hover:not(.react-toggle--disabled)
    .react-toggle-track {
    background-color: #ff4100;
  }

  .react-toggle-thumb {
    border: 1px solid #fffaf3;
    background-color: #fffaf3;
  }

  .react-toggle--checked .react-toggle-thumb {
    border-color: none;
  }

  > p {
    color: #fffaf3;
    font-size: 18px;
    font-weight: 700;
    padding-left: 8px;
  }
`;

export const Button = styled.button`
  background: #ff4100;
  width: 50%;
  border-radius: 2px;
  border: 0;
  padding: 10px;
  color: #fffaf3;
  font-weight: 700;
  margin-top: 16px;
  transition: background-color 0.3s;
  align-self: center;

  &:hover {
    background: ${shade(0.1, '#FF4100')};
  }
`;
