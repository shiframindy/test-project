import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import CreateProject from "./CreateProject";

/* -----------------------------
   Interfaces (local to this file)
----------------------------- */
interface JoinedProject {
  id: number;
  title: string;
  course: string;
  progress: number;
}

const App: React.FC = () => {
  // ✅ App owns the joinedProjects state
  const [joinedProjects, setJoinedProjects] = useState<JoinedProject[]>([]);

  return (
    <Routes>
      {/* Default landing page */}
      <Route
        path="/"
        element={
          <Dashboard
            joinedProjects={joinedProjects}
            setJoinedProjects={setJoinedProjects}
          />
        }
      />

      {/* Dashboard route */}
      <Route
        path="/dashboard"
        element={
          <Dashboard
            joinedProjects={joinedProjects}
            setJoinedProjects={setJoinedProjects}
          />
        }
      />

      {/* CreateProject route */}
      <Route
        path="/CreateProject"
        element={<CreateProject setJoinedProjects={setJoinedProjects} />}
      />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
