import React, { createContext, useCallback, useContext, useState } from 'react';

interface MenuContextData {
  isVisible: boolean;
  ShowMenu(): void;
}

const MenuContext = createContext<MenuContextData | null>(null);

const MenuProvider: React.FC = ({ children }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const ShowMenu = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  return (
    <MenuContext.Provider value={{ isVisible, ShowMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

function useMenu(): MenuContextData {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error(`useMenu must be used within a MenuProvider`);
  }

  return context;
}

export { MenuProvider, useMenu };
