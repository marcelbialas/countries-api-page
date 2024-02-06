import { ModeToggle } from "@/components/theme-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <p className="">Hello World!</p>
      <ModeToggle />
    </main>
  );
}
