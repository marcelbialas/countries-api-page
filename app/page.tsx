import Countries from "@/components/Countries";
import PageToolbar from "@/components/page-toolbar";
import { ModeToggle } from "@/components/theme-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-background py-8 px-4 md:py-10 md:px-20">
      <PageToolbar />
      <Countries />
    </main>
  );
}
