import { Suspense, lazy } from "react";
import PageLayout from "layout/PageLayout";
import SplashScreen from "pages/Splash/Splash";
import { Routes, Route, Navigate } from "react-router-dom";
import AllForms from "pages/AllForms/AllForms";

// Lazy load all pages
const Login = lazy(() => import("pages/Login/Login"));
const Registration = lazy(() => import("pages/Registration/Registration"));
const ForgotPassword = lazy(
  () => import("pages/ForgotPassword/ForgotPassword")
);
const HomePage = lazy(() => import("pages/home/Home"));

function AppRouter() {
  return (
    <Suspense fallback={<SplashScreen />}>
      <Routes>
        <Route element={<PageLayout />}>
          {/* Home route */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/allForms" element={<AllForms />} />

          {/* Redirect index to home */}
          <Route index element={<Navigate to="/home" replace />} />

          {/* 404 fallback */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
