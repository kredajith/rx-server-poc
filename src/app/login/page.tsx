"use client";
import AuthForm from "@/components/AuthForm";
import { useAuthViewModel } from "@/viewmodels/authViewModel";

const LoginPage = () => {
  const { loading,login } = useAuthViewModel();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <AuthForm onSubmit={login} loading={loading} />
    </div>
  );
};

export default LoginPage;
