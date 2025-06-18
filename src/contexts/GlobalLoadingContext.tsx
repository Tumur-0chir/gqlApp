// src/contexts/GlobalLoadingContext.tsx
import React, { createContext, useContext, useState } from 'react';

interface LoadingContextType {
  showLoading: () => void;
  hideLoading: () => void;
  isLoading: boolean;
}

const GlobalLoadingContext = createContext<LoadingContextType | null>(null);

export const GlobalLoadingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const showLoading = () => setIsLoading(true);
  const hideLoading = () => setIsLoading(false);

  return (
    <GlobalLoadingContext.Provider
      value={{ isLoading, showLoading, hideLoading }}
    >
      {children}
    </GlobalLoadingContext.Provider>
  );
};

export const useGlobalLoading = () => {
  const ctx = useContext(GlobalLoadingContext);
  if (!ctx)
    throw new Error(
      'useGlobalLoading must be used inside GlobalLoadingProvider',
    );
  return ctx;
};
