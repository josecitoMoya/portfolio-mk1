"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

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

  const form = useRef();

  const sendMail = async (e) => {
    e.preventDefault();

    try {
      const sent = await emailjs.sendForm(
        "service_8ru3r3s",
        "template_8g9tohf",
        form.current,
        "7bRGUa7sertZZ4oaP"
      );

      sent && setSuccess(true);

      console.log(sent.text);
    } catch (error) {
      setError(error);

      console.log(error);
    }
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
              ref={form}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={sendMail}
            >
              <h3 className="text-4xl text-accent ">Trabajemos juntos!</h3>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" placeholder="Nombre" name="user_name" />
                <Input type="text" placeholder="Apellido" name="last_name" />
                <Input type="email" placeholder="email" name="user_email" />
                <Input type="number" placeholder="Telefono" name="phone" />
              </div>
              {/* Area de texto */}
              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Dejame tu mensaje, en cuanto pueda me voy a comunicar. Muchas gracias!"
              />
              <Button size="md" className="max-w-40">
                Enviar
              </Button>
              <div>
                {error && "Error"}
                {success && "Mensaje enviado"}
              </div>
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
