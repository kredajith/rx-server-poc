
import { useState } from "react";
import { login as loginService } from "@/services/authService";
import { useRouter } from "next/navigation";

export const useAuthViewModel = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const token = await loginService(email, password);
      localStorage.setItem("token", token);
      router.push("/");
    } catch (err) {
      console.log("error", err);
      alert("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return { login, loading };
};
