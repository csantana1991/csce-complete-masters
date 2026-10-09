import { createFileRoute } from "@tanstack/react-router";
import { MastersApp } from "@/components/masters/MastersApp";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <MastersApp />;
}
