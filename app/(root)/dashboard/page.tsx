import React from "react";
import { SignedIn, UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
  return (
    <div className="flex justify-between pt-2 px-4">
      <div>DashboardPage</div>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default DashboardPage;
