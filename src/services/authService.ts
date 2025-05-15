export const login = async (email: string, password: string): Promise<string> => {
    // Mock API logic
    if (email === "admin@gmail.com" && password === "12345678") {
      return "fake-jwt-token";
    }
    throw new Error("Invalid credentials");
  };
  