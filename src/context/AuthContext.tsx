import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Admin user interface
interface AdminUser {
  id: string;
  email: string;
  name?: string;
}

// Auth context type
interface AuthContextType {
  token: string | null;
  admin: AdminUser | null;
  isLoading: boolean;
  login: (token: string, admin: AdminUser) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Storage key for token
const TOKEN_KEY = "admin_token";
const ADMIN_KEY = "admin_user";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [admin, setAdmin] = useState<AdminUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load token from localStorage on mount
  useEffect(() => {
    const storedToken = localStorage.getItem(TOKEN_KEY);
    const storedAdmin = localStorage.getItem(ADMIN_KEY);

    if (storedToken && storedAdmin) {
      try {
        setToken(storedToken);
        setAdmin(JSON.parse(storedAdmin));
      } catch {
        // Invalid stored data, clear it
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(ADMIN_KEY);
      }
    }
    setIsLoading(false);
  }, []);

  // Login function - stores token and admin info
  const login = (newToken: string, adminData: AdminUser) => {
    localStorage.setItem(TOKEN_KEY, newToken);
    localStorage.setItem(ADMIN_KEY, JSON.stringify(adminData));
    setToken(newToken);
    setAdmin(adminData);
  };

  // Logout function - clears token and admin info
  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(ADMIN_KEY);
    setToken(null);
    setAdmin(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        admin,
        isLoading,
        login,
        logout,
        isAuthenticated: !!token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};