import React, { ReactNode } from "react";
import Sidebar from "./sidebar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <section className="flex gap-6">
        <Sidebar />
        <main>{children}</main>
      </section>
    </>
  );
}
