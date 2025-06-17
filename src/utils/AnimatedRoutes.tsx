import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { AppRouteConfig } from "./Routeconfig";
import ProtectedRoute from "./ProtectedRoute";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Public Routes */}
          {AppRouteConfig.public.map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={
                <motion.div
                  initial={{ opacity: 0, }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {element}
                </motion.div>
              }
            />
          ))}

          {/* Protected Routes */}
          {AppRouteConfig.protected.map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={
                <ProtectedRoute>
                  <motion.div
                    initial={{ opacity: 0, }}
                    animate={{ opacity: 1, }}
                    exit={{ opacity: 0, }}
                    transition={{ duration: 0.2 }}
                  >
                    {element}
                  </motion.div>
                </ProtectedRoute>
              }
            />
          ))}
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default AnimatedRoutes;
