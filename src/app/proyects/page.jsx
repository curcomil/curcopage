"use client";

import { Navbar } from "@/components/navbar";
import { db } from "@/db/page_contain";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { IoLogoGithub } from "react-icons/io";
import { GrDeploy } from "react-icons/gr";

export default function Proyects() {
  const [selection, setSelection] = useState("Urbania");
  const [proyect, setProyect] = useState({});

  const select_proyect = (a) => {
    return db.Proyectos.find((proyect) => proyect.Nombre === a);
  };

  useEffect(() => {
    setProyect(select_proyect(selection));
  }, [selection]);

  return (
    <div className="bg-[#2D2D2D] min-h-screen w-full p-6">
      <Navbar />
      <h1 className="text-lg text-white mb-3">Proyectos</h1>
      <div className="">
        {db.Proyectos.map((proyect) => (
          <button
            key={proyect.Nombre}
            onClick={() => setSelection(proyect.Nombre)}
            className={clsx(
              "p-2 rounded-t-lg text-sm mr-2 text-white",
              proyect.Nombre === selection && "bg-[#3E3E3E] text-white"
            )}
          >
            {proyect.Nombre}
          </button>
        ))}
      </div>
      {proyect.Nombre ? (
        <div className="bg-[#3E3E3E] text-white p-6 rounded-tl-none  rounded-lg shadow-xl lg:text-xl">
          <p>{proyect.Nombre}</p>
          <div>
            {proyect.Descripcion.map((parrafo) => (
              <p
                key={parrafo}
                className="text-[#A8A8A8] text-xs text-justify mt-3 lg:text-base"
              >
                {parrafo}
              </p>
            ))}
          </div>

          <div className="lg:flex flex-col">
            {proyect.AppSS &&
              proyect.AppSS.map((imagen) => (
                <img
                  key={imagen}
                  src={imagen}
                  className="w-full  object-cover mt-3 lg:mr-3"
                />
              ))}
          </div>

          <p className="mt-3 lg:text-xl">Tecnologías</p>
          <div className="flex flex-wrap font-semibold">
            {proyect.Tecnologias.map((tecnologia) => (
              <span key={tecnologia} className="mr-2 text-xs lg:text-lg">
                {tecnologia}
              </span>
            ))}
          </div>

          <p className="mt-3 lg:text-xl">Código</p>
          <div className="flex items-center">
            <a href={proyect.Repo} target="_blank" rel="noreferrer">
              <IoLogoGithub size={35} />
            </a>
            {proyect.Despliegue && (
              <a
                className="ml-3"
                href={proyect.Despliegue}
                target="_blank"
                rel="noreferrer"
              >
                <GrDeploy size={25} />
              </a>
            )}
          </div>
        </div>
      ) : (
        <p className="text-white mt-4">No project selected.</p>
      )}
    </div>
  );
}
