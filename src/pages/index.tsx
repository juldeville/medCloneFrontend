import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/section/Hero";
import ArticlesContainer from "@/components/articles/ArticlesContainer";
import { useSelector } from "react-redux";
import { UserState } from "@/reducers/users";
import { useEffect, useState } from "react";

export default function Home() {
  const user = useSelector((state: { user: UserState }) => state.user.value);
  const [isConnected, setIsConnected] = useState<boolean>(false);

  useEffect(() => {
    if (user.token) {
      setIsConnected(true);
    } else {
      setIsConnected(false);
    }
  }, [user.token]);

  return (
    <div>
      <Navbar isConnected={isConnected} username={user.username} />
      <Hero />
      <ArticlesContainer />
    </div>
  );
}
