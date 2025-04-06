"use client";

import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import authService from "@/providers/authServices";

interface User {
  email: string;
  name: string;

}

interface AuthContextProps {
  user: User | null | undefined;
  register: (credentials: any) => Promise<void>;
  login: (credentials: any) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string | null;
}

const AuthContext = createContext<AuthContextProps>({
  user: undefined,
  register: async () => {},
  login: async () => {},
  logout: () => {},
  isLoading: false,
  isError: false,
  errorMessage: null,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [isHydrated, setIsHydrated] = useState(false);
  const queryClient = useQueryClient();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fetchUser = async (): Promise<User | null> => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  };

  const {
    data: user,
    isLoading,
    isError,
  } = useQuery<User | null, Error>({
    queryKey: ["user"],
    queryFn: fetchUser,
    initialData: null,
  });

  const loginMutation = useMutation<User, Error, any>({
    mutationFn: async (credentials: any): Promise<User> => {
      try {
        const response = await authService.login(credentials);
        return response.data;
      } catch (error: any) {
        throw new Error(error.message || "Login failed");
      }
    },
    onSuccess: (data) => {
      localStorage.setItem("user", JSON.stringify(data));
      queryClient.setQueryData(["user"], data);
      router.push("/features");
      setErrorMessage(null);
    },
    onError: (error: any) => {
      console.error("Login failed", error.message);
      setErrorMessage(
        error.message || "Login failed. Please check your credentials."
      );
    },
  });

  const register = async (credentials: any) => {
    try {
      const response = await authService.register(credentials);
      localStorage.setItem("user", JSON.stringify(response.data));
      queryClient.setQueryData(["user"], response.data);
      router.push("/signin");
      setErrorMessage(null);
    } catch (error: any) {
      console.error("Registration failed", error.message);
      setErrorMessage(
        error.message || "Registration failed. Please try again."
      );
    }
  };


  const logout = () => {
    localStorage.removeItem("user");
    queryClient.setQueryData(["user"], null);
    router.push("/signin");
  };

  const login = async (credentials: any) => {
    setErrorMessage(null);
    loginMutation.mutate(credentials);
  };


  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const value: AuthContextProps = {
    user,
    register,
    login,
    logout,
    isLoading: isLoading,
    isError: isError || loginMutation.isError,
    errorMessage,
  };

  if (!isHydrated) {
    return null;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
