import ProtectedRoute from "@/components/ProtectedRoute";
import SidePanel from "@/components/SidePanel";

export default function Home() {
  return (
    <ProtectedRoute>
      <div className="flex h-screen">
        <SidePanel />
        <main className="flex-1 p-6 bg-gray-50">
          <h1 className="text-3xl font-bold mb-4">Welcome to the Home</h1>
          <p>This is the home page with a side panel.</p>
        </main>
      </div>
    </ProtectedRoute>
  );
}
