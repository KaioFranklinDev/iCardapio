import { Inter } from "next/font/google";
import HomePage from "./Home/Home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HomePage/>
    </>
  );
}
