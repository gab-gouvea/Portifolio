import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export function CardProjetos() {
  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    fetch("/projetos.json")
      .then((response) => response.json())
      .then((jsonData) => setProjetos(jsonData))
      .catch((error) => console.error("Erro ao carregar o JSON:" + error));
  }, []);

  return (
    <>
      <div className="h-screen space-y-6 ">
        {projetos.map((i) => (
          <div className="flex border border-green-700 rounded-lg flex-col p-5 space-y-4 max-w-5xl mx-auto">
            <h2 className="font-bold text-2xl">{i.nome}</h2>
            <p className="text-[#A3A3A3]">{i.desc}</p>
            <ul className="flex gap-4 ">
              {i.tecs.map((tech) => (
                <li className="w-max px-2  bg-green-700 rounded ">{tech}</li>
              ))}
            </ul>
            <div className="flex gap-4">
              <NavLink to={i.page} target="_blank" className="w-max px-3 py-2 border border-green-700 rounded">
                Conheça o projeto
              </NavLink>
              <NavLink to={i.repo} target="_blank" className="w-max px-3 py-2 border rounded">
                Github
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
