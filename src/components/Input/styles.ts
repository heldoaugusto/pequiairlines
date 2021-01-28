import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  isDisabled: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;

  background: #fffaf3;
  border-radius: 2px;
  padding: 10px;
  width: 100%;
  font-size: 16px;

  margin-top: 8px;

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #3a3a3a;

    &::placeholder {
      color: #3a3a3a;
    }
  }

  svg {
    margin-right: 10px;
    color: #035337;
  }

  ${props =>
    props.isDisabled &&
    css`
      background: ${shade(0.2, '#fffaf3')};

      svg {
        color: ${shade(0.2, '#035337')};
      }
    `}
`;
