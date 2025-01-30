import { Navbar } from "@/components/navbar";

export default function Info() {
  return (
    <div className="bg-[#2D2D2D] min-h-screen w-full p-6">
      <Navbar />
      <div className="bg-[#3E3E3E] text-white p-6 rounded-lg shadow-xl justify-center flex flex-col ">
        <p>Bienvenido a mi portafolio web, desarrollado con Next.js.</p>
        <p className="text-[#A8A8A8] text-sm mt-2 text-justify ">
          Esta página está construida con un enfoque moderno y eficiente,
          aprovechando el poder del renderizado del lado del cliente para una
          experiencia de usuario ágil. La estructura del código sigue principios
          de Clean Code, lo que asegura que sea fácil de leer, mantener y
          escalar a medida que el proyecto crece. Además, utilizo un formato
          estructurado de datos en JSON, lo que facilita la integración con
          otras plataformas y la flexibilidad en la gestión de la información.
          Este portafolio refleja mi pasión por el desarrollo web y mi
          compromiso con la calidad del código.
        </p>
        <div className="avatar mt-3 flex justify-center">
          <div className="size-28 rounded-full lg:size-40">
            <img src="/idea.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
