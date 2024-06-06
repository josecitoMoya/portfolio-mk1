"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Fullstack",
    title: "TMDB",
    description:
      "Es un proyecto construido sobre la API de The Movie Database (TMDB), aprovechando su extensa colección de datos de películas y programas de televisión. Al utilizar la API de TMDB, el repositorio permite a los usuarios hacer solicitudes para obtener información detallada sobre películas, incluyendo detalles del elenco y equipo, fechas de lanzamiento, resúmenes de la trama y calificaciones. La integración con la API de TMDB mejora la funcionalidad del repositorio, proporcionando una manera perfecta para que los usuarios accedan e interactúen con una gran cantidad de contenido de entretenimiento.",
    stack: [
      { name: "Javascript" },
      { name: "Postgres" },
      { name: "JWT" },
      { name: "ReactJS" },
      { name: "ChakraUI" },
    ],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "https://github.com/josecitoMoya/TMDB-v3-back",
  },
  {
    num: "02",
    category: "Fullstack",
    title: "miPark",
    description:
      "miPark es un proyecto que introduce un modelo de negocio novedoso inspirado en plataformas como Booking, pero con un enfoque en espacios de estacionamiento privados. Esta plataforma tiene como objetivo conectar a los usuarios con proveedores de estacionamiento privado, ofreciendo una manera eficiente y sin problemas de reservar lugares de estacionamiento exclusivos. Los usuarios pueden explorar los espacios de estacionamiento disponibles, ver detalles como ubicación, precios y servicios, y hacer reservaciones a través del repositorio miPark. El sistema facilita una solución conveniente para personas que buscan opciones de estacionamiento seguras y personalizadas, creando una situación beneficiosa tanto para los usuarios como para los propietarios de los espacios de estacionamiento.",
    stack: [
      { name: "Javascript" },
      { name: "Postgres" },
      { name: "JWT" },
      { name: "ReactJS" },
      { name: "Vite" },
      { name: "ChakraUI" },
    ],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "https://github.com/josecitoMoya/MiPark",
  },
  {
    num: "03",
    category: "Fullstack",
    title: "Bluehouse",
    description:
      "Este proyecto representa una solución de comercio electrónico diseñada para BLUEHOUSE, proporcionando una robusta plataforma en línea para los productos y servicios de la empresa. Aprovechando los principios modernos de comercio electrónico, el repositorio ofrece una interfaz amigable para los clientes, permitiéndoles explorar, seleccionar y comprar artículos. Las características clave incluyen pasarelas de pago seguras, seguimiento de pedidos y un carrito de compras personalizable. El repositorio de comercio electrónico de BLUEHOUSE tiene como objetivo mejorar la experiencia general de compra en línea para los clientes, al mismo tiempo que proporciona a la empresa una plataforma optimizada para gestionar el inventario, procesar pedidos y cultivar una presencia digital.",
    stack: [
      { name: "Javascript" },
      { name: "Postgres" },
      { name: "JWT" },
      { name: "ReactJS" },
      { name: "Vite" },
      { name: "ChakraUI" },
      { name: "WooCommerce" },
    ],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "https://github.com/josecitoMoya/blueHouse-backend",
  },
  {
    num: "04",
    category: "Backend",
    title: "Fast-Delivery",
    description:
      "Este proyecto encapsula la aplicación Fast Delivery, una solución diseñada para una empresa de entregas. Fast Delivery optimiza el proceso de entrega, ofreciendo una interfaz amigable tanto para los clientes como para el personal de entrega. El repositorio integra características clave como seguimiento de pedidos en tiempo real, optimización eficiente de rutas y procesamiento seguro de transacciones. Con un enfoque en mejorar la velocidad y la fiabilidad de las entregas, Fast Delivery proporciona un conjunto de herramientas completo para que la empresa gestione pedidos, monitoree el progreso de las entregas y optimice la logística. Este repositorio está diseñado para elevar la eficiencia y efectividad de los servicios de entrega proporcionados por la empresa.",
    stack: [
      { name: "Typescript" },
      { name: "MongoDB" },
      { name: "JWT" },
      { name: "NextJs" },
      { name: "Tailwind" },
    ],
    image: "/assets/work/thumb4.png",
    live: "",
    github: "https://github.com/josecitoMoya/fast-delivery-back",
  },
];

const Work = () => {
  const [project, setProyect] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //obtengo el index actual
    const currentIndex = swiper.activeIndex;

    //actualizo el index
    setProyect(projects[currentIndex]);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* numeros de proy */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* Categoria del proyecto */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/* descripcion del proyecto */}
              <p className="text-white/60">{project.description}</p>
              {/* tecnologias */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* chau coma "," */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* boredes */}
              <div className="border border-white/20 "></div>
              {/* Botones */}
              <div className="flex items-center gap-4">
                {/* Github */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>GitHub repository</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 x-10"></div>
                      {/* Imagenes */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* botones para el slider */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
