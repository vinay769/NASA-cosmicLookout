import Image from "next/image";
import About from "./about/page";
import Landingpage from "./landingpage/page";
import Team from "./teamsection/page";
import Astroinfosec from "./astroinfosec/page";
import Footer from "./footer/page";
import Threedsection from "./threedsection/page";
import Page from "./teamsection/page";

export default function Home() {
  return (
    <>
      <Landingpage />
      <Threedsection />

      <Astroinfosec />
      <Team />
      <About />
      <Footer />
    </>
  );
}
