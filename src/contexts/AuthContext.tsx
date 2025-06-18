// src/contexts/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { getToken, loginStorepay, logout } from '../services/authService';
import { useGlobalLoading } from './GlobalLoadingContext';
import { useMessage } from './MessageContext';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { showLoading, hideLoading } = useGlobalLoading();
  const { showSuccess, showError } = useMessage();
  const [isAuthenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    getToken().then(t => {
      if (t) setAuthenticated(true);
    });
  }, []);

  const handleLogin = async (username: string, password: string) => {
    try {
      showLoading();
      await loginStorepay(username, password);
      setAuthenticated(true);
      showSuccess('Амжилттай нэвтэрлээ 🎉');
    } catch (e: any) {
      showError(e?.message || 'алдаа гарлаа');
      console.error('Login error', e);
    } finally {
      hideLoading();
    }
}

  const handleLogout = () => {
    logout();
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login: handleLogin, logout: handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
};
