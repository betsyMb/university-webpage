import { createBrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
// Pages
import { LoginPage, ProfilePage } from "../pages";

// Routes
import { ProtectedRoute } from "./ProtectedRoute";

// Hooks
import { AuthProvider } from "../hooks";

export const Router = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<App />} path="/" />
        <Route element={<LoginPage />} path="/login" />
        {/* Protected */}
        <Route
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
          path="/profile"
        />
      </Routes>
    </AuthProvider>
  );
};
