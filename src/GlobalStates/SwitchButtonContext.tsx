"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

interface SwitchButtonContextType {
  switchButton: string;
  setSwitchButton: React.Dispatch<React.SetStateAction<string>>;
}

const SwitchButtonContext = createContext<SwitchButtonContextType | undefined>(undefined);

interface SwitchButtonProviderProps {
  children: ReactNode;
}

export const SwitchButtonProvider: React.FC<SwitchButtonProviderProps> = ({ children }) => {
  const [switchButton, setSwitchButton] = useState<string>("Switch to Buy");

  return (
    <SwitchButtonContext.Provider value={{ switchButton, setSwitchButton }}>
      {children}
    </SwitchButtonContext.Provider>
  );        
};

export const useSwitchButton = () => {
  const context = useContext(SwitchButtonContext);
  if (!context) {
    throw new Error("useSwitchButton must be used within a SwitchButtonProvider");
  }
  return context;
};
