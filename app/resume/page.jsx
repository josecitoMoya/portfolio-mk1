"use client";

import { FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

//about data
const about = {
  title: "Acerca de mi",
  description:
    "Mis experiencias me han permitido desarrollar habilidades críticas como la gestión de equipos, la atención al cliente y la capacidad de liderar proyectos complejos. Estoy en constante interés en aprender más y seguir creciendo profesionalmente. Comparto mis datos de contacto para que podamos trabajar juntos y explorar nuevas oportunidades. No dudes en ponerte en contacto conmigo para discutir cómo puedo contribuir a tu equipo.",
  info: [
    {
      fieldName: "name",
      fieldValue: "Jose Moya",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Argentinian",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+54) 9387 6109748",
    },
    {
      fieldName: "email",
      fieldValue: "jose_moya@live.com.ar",
    },
    {
      fieldName: "Laguages",
      fieldValue: "Spanish, English",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: " Mis experiencias",
  description:
    "Aunque aún no tengo experiencia profesional en el ámbito de la programación, he acumulado una vasta experiencia en diversos roles de importancia en otras industrias. He demostrado mi compromiso, adaptabilidad y responsabilidad en cada uno de estos puestos. Mi trayectoria incluye:",
  items: [
    {
      company: "Broker ROCA S.R.L.",
      position: "Coordinador de Grandes Clientes",
      duration: "2019 - 2024",
    },
    {
      company: "VidaMovil S.R.L.",
      position: "Jefe de producto",
      duration: "2016 - 2019",
    },
    {
      company: "Centro Distribuidor del Norte S.A",
      position: "Supervisor de Expedición",
      duration: "2014 - 2016",
    },
    {
      company: "Centro de Contactos Salta S.A.",
      position: "Asesor telefonico / Capacitador",
      duration: "2011 - 2014",
    },
    {
      company: "Karam Automotores S.A.",
      position: "Gerente post-venta",
      duration: "2007 - 2010",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "Mi educacion",
  description:
    "He estudiado en rubros variados para poder cooperar en distintas áreas. De estos estudios, destacan los siguientes:",
  items: [
    {
      institution: "Escuela de comercio 5083",
      degree: "Teoria y gestión de organizaciones",
      duration: "1998 - 2003",
    },
    {
      institution: "F.A.P.A.S.A",
      degree: "Productor Asesor de Seguros",
      duration: "2018 - 2019",
    },
    {
      institution: "Plataforma 5",
      degree: "JS Full Stack Developer",
      duration: "2023 - 2024",
    },
    {
      institution: "Universidad Siglo XXI",
      degree: "Licenciado en Seguridad & Higiene",
      duration: "2024 - Current",
    },
  ],
};

const skills = {
  title: "Mis habilidades",
  description:
    "Durante más de 800 horas, he estado aprendiendo y practicando estas tecnologías. Estoy constantemente actualizándome y mejorando mis habilidades para estar al día con las últimas tendencias y mejores prácticas en el desarrollo de software.",
  skillList: [
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiMongodb />,
      name: "mongoDB",
    },
    {
      icon: <SiPostgresql />,
      name: "postgres",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experiencias</TabsTrigger>
            <TabsTrigger value="education">Educacion</TabsTrigger>
            <TabsTrigger value="skills">Habilidades</TabsTrigger>
            <TabsTrigger value="about">Acerca de mi</TabsTrigger>
          </TabsList>
          {/* contenido */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* Viñeta */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* educacion */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* Viñeta */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Habilidades */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((item, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {item.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* Acerca de mi */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold ">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
