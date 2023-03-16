// React
import { Navigate } from "react-router-dom";

// Hooks
import { useAuth } from "../../hooks";

// Props interface
type Props = {
  children: JSX.Element;
};

export const ProtectedRoute = ({ children }: Props) => {
  const auth = useAuth();
  if (!auth.user) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
};
