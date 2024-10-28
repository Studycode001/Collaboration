"use client"

import { Sidebar } from "./sidebar";
import { Toolbar } from "./toolbar";

interface WorkspaceIdLayoutProps {
    children: React.ReactNode;
}

const WorkspaceIdLayout = ({children}: WorkspaceIdLayoutProps) => {
  return (
    <div className="h-full">
        <Toolbar />
        <div className="flex h-screen">
          <Sidebar />
          {children}
        </div>
    </div>
  )
}

export default WorkspaceIdLayout