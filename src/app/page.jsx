"use client";

import { Card_proyects } from "@/components/card_proyects";
import { db } from "@/db/page_contain";
import { useState } from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { Navbar } from "@/components/navbar";
import Link from "next/link";

export default function Home() {
  const [showContactOptions, setShowContactOptions] = useState(false);

  const handleContactClick = () => {
    setShowContactOptions(true);
  };

  return (
    <div className="bg-[#2D2D2D] min-h-screen w-full p-6">
      <Navbar />
      <div className="main lg:flex items-center">
        <div className="bg-[#3E3E3E] text-white p-6 rounded-lg shadow-xl justify-center flex flex-col items-center lg:mr-3 h-full">
          <div className="flex  flex-col">
            <p className="text-xl">Sadiel Salgado</p>
            <div className="flex lg:items-center">
              <div>
                <p>Full Stack Jr.</p>
                <p className="text-[#A8A8A8] text-xs mr-2">
                  Desarrollador Full Stack con pasión por el diseño Front-End,
                  creando interfaces dinámicas y funcionales con React y Node.js
                </p>
              </div>
              <div className="avatar">
                <div className="size-28 rounded-full border-2 bg-[#bad2e9]">
                  <img src="/myselft.png" />
                </div>
              </div>
            </div>
          </div>

          {!showContactOptions ? (
            <button
              className="bg-black shadow-xl border-white p-2 rounded-lg mt-4 text-xs"
              onClick={handleContactClick}
            >
              ¡Contáctame!
            </button>
          ) : (
            <div className="flex space-x-2 mt-4">
              <a
                href="mailto:sadielsalgado98@gmail.com"
                className="bg-red-500 shadow-xl border-white p-2 rounded-lg text-xs"
              >
                Gmail
              </a>
              <a
                href="https://wa.me/5530604342"
                className="bg-green-500 shadow-xl border-white p-2 rounded-lg text-xs"
              >
                Whatsapp
              </a>
            </div>
          )}
        </div>
        <div className="bg-[#3E3E3E] text-white p-6 rounded-lg shadow-xl mt-4">
          <div className="flex justify-between">
            <p>Proyectos</p>
            <Link href="/proyects">Ver todos</Link>
          </div>
          <div>
            {db.Proyectos.map((proyecto) => (
              <Card_proyects key={proyecto.id} proyecto={proyecto} />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#3E3E3E] text-white p-6 rounded-lg shadow-xl mt-4">
        <p>Perfil</p>
        <div className="text-[#A8A8A8] text-justify mt-3 text-sm">
          <p>
            Soy un desarrollador full stack con experiencia en la creación de
            aplicaciones web modernas y escalables. Mi enfoque principal está en
            el desarrollo front-end con tecnologías como React, Next.js y
            Tailwind CSS, pero también tengo una sólida experiencia en el
            back-end utilizando Node.js, Express y MongoDB.
          </p>
          <p className="mt-3">
            Además de mi conocimiento técnico, tengo una formación en Ciencias
            Políticas, lo que me ha dado una perspectiva analítica y habilidades
            para resolver problemas de manera estructurada. Me apasiona el
            diseño y la experiencia de usuario, por lo que combino mis
            habilidades en Figma, Photoshop y CorelDRAW para crear interfaces
            intuitivas y atractivas.
          </p>
          <p className="mt-3">
            He trabajado en proyectos que integran sistemas de pago con Stripe y
            MercadoPago, gestión de bases de datos con MongoDB y autenticación
            segura con JWT. También tengo experiencia en despliegue en la nube
            con GCP y AWS. Siempre estoy aprendiendo nuevas tecnologías y
            buscando mejorar mis habilidades para construir soluciones
            innovadoras y eficientes.
          </p>
        </div>

        <div className="mt-3">
          <button className="bg-black rounded-lg p-2">
            <IoLogoGithub size={35} />
          </button>
          <button className="ml-3 bg-black rounded-lg p-2">
            <CiLinkedin size={35} />
          </button>
          <button className="ml-3 bg-black rounded-lg p-2">
            <FaWhatsapp size={35} />
          </button>
          <p>sadielsalgado98@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
