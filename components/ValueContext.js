import { useState, createContext } from 'react';

export const ValueContext = createContext();

export default function ValueProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <ValueContext.Provider value={{isLoggedIn, setIsLoggedIn}}>{children}</ValueContext.Provider>
  )
}
