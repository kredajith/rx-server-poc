import { useLoading } from "@/contexts/LoadingContext";
import { useState } from "react";

interface AuthFormProps {
  onSubmit: (email: string, password: string) => void;
  loading?: boolean;
}

const AuthForm = ({ onSubmit, loading }: AuthFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setLoading } = useLoading();

  const handleSubmit = (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    onSubmit(email, password);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 p-4 border rounded"
    >
      <h2 className="text-2xl mb-4 text-center">Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border mb-4"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 border mb-4"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded"
        disabled={loading}
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
};

export default AuthForm;
