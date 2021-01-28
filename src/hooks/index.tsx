import React from 'react';

import { MenuProvider } from './menu';

const AppProvider: React.FC = ({ children }) => (
  <MenuProvider>{children}</MenuProvider>
);

export default AppProvider;
