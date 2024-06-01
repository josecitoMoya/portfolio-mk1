import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div>
        <Spotlight
          className="-top-35 -left-28 md:left-32 md:top-1 h-screen w-screen"
          fill="lightblue"
        />
        <Spotlight className="top-22 left-28 h-screen w-screen" fill="white" />

        <Spotlight
          className="-top-10 -left-28 md:left-1 md:top-60 h-screen w-screen"
          fill="lightblue"
        />
      </div>
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* textos */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">FullStack developer</span>
            <h1 className="h1 mb-6">
              Hola, soy <br /> <span className="text-accent w">Jose</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Soy una persona proactiva, organizada y responsable, con
              excelentes habilidades interpersonales y una fuerte capacidad para
              el trabajo en equipo. Mi experiencia abarca roles variados en
              diferentes rubros. Mi motivación se centra en la innovación, la
              optimización de procesos y la mejora continua, siempre buscando
              aportar valor a la organización y alcanzar resultados
              sobresalientes.
            </p>
            {/* fotos y redes sociales */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                href="/assets/cv/jM.pdf"
                target="_blank"
              >
                <span>Descargar CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* foto */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
