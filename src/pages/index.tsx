import { Inter } from "next/font/google";
import Header from "@/Components/Header";
import HomePage from "./Home/Home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HomePage/>
    </>
  );
}
