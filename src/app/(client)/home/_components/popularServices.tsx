import React from "react";
import PopularServicesCard from "./reusable/popularServicesCard";
import { Button } from "@/components/ui/button";

export default function PopularServices() {
  return (
    <div>
      <div className="flex justify-between">
        <h1>Popular Services</h1>
        <Button>View All</Button>
      </div>
      <PopularServicesCard />
      <PopularServicesCard />
      <PopularServicesCard />
    </div>
  );
}
