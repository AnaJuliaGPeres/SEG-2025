import { useAuth } from "@/case/auth/hooks/use-auth";
import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}