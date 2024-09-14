import Image from "next/image";
import About from "./about/page";
import Landingpage from "./landingpage/page";
import Team from "./teamsection/page";
import Astroinfosec from "./astroinfosec/page";

export default function Home() {
  return (
    <>
      <Landingpage />
      <Astroinfosec />
      <Team />
      <About />
    </>
  );
}
