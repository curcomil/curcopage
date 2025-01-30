export const Card_proyects = ({ proyecto }) => {
  return (
    <div className="bg-[#5C5C5C] flex p-2 mt-3 rounded-lg items-center">
      <div className="avatar mr-3">
        <div className="size-16 rounded-full">
          <img src={proyecto.Imagen} />
        </div>
      </div>
      <div>
        <p className="">{proyecto.Nombre}</p>
        <p className="text-[#A8A8A8] text-xs text-justify">
          {proyecto.Descripcion_corta}
        </p>
      </div>
    </div>
  );
};
