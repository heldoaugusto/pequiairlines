import React, { InputHTMLAttributes, useRef } from 'react';

import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  disabled?: boolean;
}

const Input: React.FC<IInputProps> = ({ icon: Icon, disabled, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Container isDisabled={!!disabled}>
      {Icon && <Icon size={20} />}

      <input disabled={disabled} ref={inputRef} {...rest} />
    </Container>
  );
};

export default Input;
