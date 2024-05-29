"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

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
      "My repository is a project built upon The Movie Database (TMDB) API, leveraging its extensive collection of movie and TV show data. By utilizing the TMDB API, the repository allows users to make requests for detailed information about films, including cast and crew details, release dates, plot summaries, and ratings. The integration with the TMDB API enhances the repository's functionality, providing a seamless way for users to access and interact with a wealth of entertainment content.",
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
      "miPark is a repository that introduces a novel business model inspired by the likes of Booking, but with a focus on private parking spaces. This platform aims to connect users with private parking providers, offering a seamless and efficient way to book exclusive parking spots. Users can browse available parking spaces, view details such as location, pricing, and amenities, and make reservations through the miPark repository. The system facilitates a convenient solution for individuals seeking secure and personalized parking options, creating a win-win scenario for both users and parking space owners.",
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
      "This repository represents an e-commerce solution tailored for BLUEHOUSE, providing a robust online platform for the company's products and services. Leveraging modern e-commerce principles, the repository offers a user-friendly interface for customers to browse, select, and purchase items. Key features include secure payment gateways, order tracking, and a customizable shopping cart. The BLUEHOUSE e-commerce repository aims to enhance the overall online shopping experience for customers, while also providing the company with a streamlined platform to manage inventory, process orders, and cultivate a digital presence.",
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
      "This repository encapsulates the Fast Delivery application, a solution tailored for a delivery-focused company. Fast Delivery streamlines the delivery process, offering a user-friendly interface for both customers and delivery personnel. The repository integrates key features such as real-time order tracking, efficient route optimization, and secure transaction processing. With a focus on enhancing the speed and reliability of deliveries, Fast Delivery provides a comprehensive toolset for the company to manage orders, monitor delivery progress, and optimize logistics. This repository is designed to elevate the efficiency and effectiveness of the delivery services provided by the company",
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
                {/* en teoria los que estan funcionando */}
                {/* <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>Live Project</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link> */}
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
