import Articles from "@/components/articles/Articles";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/section/Hero";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Articles />
    </div>
  );
}
