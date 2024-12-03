import AboutMe from "@/components/about-me";
import Introduction from "@/components/introduction";
import Navbar from "@/components/navbar";
import Services from "@/components/services";

import Portafolio from "@/components/portafolio";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="pb-40">
      <Navbar />
      <Introduction />
      <AboutMe />
      <Portafolio />

      <Services />

      <Contact />
      <Footer />
    </main>
  );
}
