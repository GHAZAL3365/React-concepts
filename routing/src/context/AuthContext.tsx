import React, { createContext, useContext, useState } from 'react';

type UserRole = 'admin' | 'user';

interface AuthContextType {
  isAuth: boolean;
  role: UserRole | null;
  login: (role: UserRole) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [role, setRole] = useState<UserRole | null>(null);

  const login = (userRole: UserRole) => {
    setIsAuth(true);
    setRole(userRole);
  };

  const logout = () => {
    setIsAuth(false);
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ isAuth, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
};
