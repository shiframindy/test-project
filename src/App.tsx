import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import CreateProject from "./CreateProject";

const App: React.FC = () => {
  return (
    <Routes>
      {/* Default landing page */}
      <Route path="/" element={<CreateProject />} />

      {/* Dashboard route */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
