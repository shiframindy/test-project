import React from "react";
import FolderBackground from "./layouts/FolderBackground";
import CreateProjectForm from "./create/CreateProjectForm";
import DashNavbar from "./DashboardNavbar";

// ⭐ Either define or import JoinedProject
interface JoinedProject {
  id: number;
  title: string;
  course: string;
  progress: number;
}

interface CreateProjectProps {
  setJoinedProjects: React.Dispatch<React.SetStateAction<JoinedProject[]>>;
}

// Page component to create a new project within the folder-style layout
const CreateProject: React.FC<CreateProjectProps> = ({ setJoinedProjects }) => {
  return (
    <>
      <DashNavbar onHomeClick={() => {}} onProfileClick={() => {}} />
      <FolderBackground>
        <CreateProjectForm setJoinedProjects={setJoinedProjects} />
      </FolderBackground>
    </>
  );
};

export default CreateProject;
