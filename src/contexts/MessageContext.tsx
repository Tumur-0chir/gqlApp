import React, { createContext, useContext } from 'react';
import { showMessage } from 'react-native-flash-message';

interface MessageContextType {
  showSuccess: (msg: string) => void;
  showError: (msg: string) => void;
}

const MessageContext = createContext<MessageContextType | null>(null);

export const MessageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const showSuccess = (msg: string) =>
    showMessage({
      message: msg,
      type: 'success',
      icon: 'success',
      duration: 3000,
    });

  const showError = (msg: string) =>
    showMessage({
      message: msg,
      type: 'danger',
      icon: 'danger',
      duration: 4000,
    });

  return (
    <MessageContext.Provider value={{ showSuccess, showError }}>
      {children}
    </MessageContext.Provider>
  );
};

export const useMessage = () => {
  const context = useContext(MessageContext);
  if (!context)
    throw new Error('useMessage must be used within MessageProvider');
  return context;
};
