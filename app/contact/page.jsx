"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useInput } from "@/lib/useInput";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+54) 9 387 6 109 748",
  },
  {
    icon: <FaEnvelope />,
    title: "email",
    description: "jose_moya@live.com.ar",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Salta - Argentina",
  },
];

const Contact = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const name = useInput();
  const lastName = useInput();
  const email = useInput();
  const phone = useInput();
  const message = useInput();

  const sendMail = async (e) => {
    e.preventDefault();

    const mailData = {
      name: name.value,
      lastName: lastName.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
    };

    console.log(mailData, "SOY LA INFO DEL MAIL");
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* formulario */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <motion.form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={sendMail}
            >
              <h3 className="text-4xl text-accent ">Trabajemos juntos!</h3>
              {/* <p className="text-white/60">
                No se que podria poner aqui, ya voy a inventar algo... banca!
              </p> */}
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" placeholder="Nombre" name="user_name" />
                <Input
                  type="text"
                  placeholder="Apellido"
                  lastName="last_name"
                />
                <Input type="email" placeholder="email" email="user_email" />
                <Input type="number" placeholder="Telefono" {...phone} />
              </div>
              {/* selecciones */}
              {/* <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="est"> Web Development</SelectItem>
                    <SelectItem value="cst">Diseños</SelectItem>
                    <SelectItem value="mst">Seguros</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select> */}
              {/* Area de texto */}
              <Textarea
                {...message}
                className="h-[200px]"
                placeholder="Deja tu mensaje aqui"
              />
              <Button size="md" className="max-w-40">
                Enviar
              </Button>
              {error && "Error"}
              {success && "Success"}
            </motion.form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((items, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{items.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{items.title}</p>
                      <h3 className="text-xl">{items.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
