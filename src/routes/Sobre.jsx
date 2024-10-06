import eu from "../assets/imgs/eu.png";
import { Footer } from "../components/Footer";

export function Sobre() {
  return (
    <>
      <div className="h-screen max-w-5xl mx-auto  mt-20">
        <h2 className="text-4xl font-bold mb-7">Sobre Mim</h2>
        <div className="flex  gap-16">
          <img src={eu} alt="Minha foto" className="w-96 h-96 rounded-md" />
          <div className="flex flex-col space-y-4 text-xl">
            <p>
              Olá! Eu sou o{" "}
              <strong className="text-green-700 font-bold">Gabriel!</strong>,
              tenho 21 anos.
            </p>
            <p>
              Sou estudante de engenharia de software, tenho conhecimento nas
              seguintes tecnologias: HTML, CSS, Tailwind, JavaScript, React,
              Vite, Git, GitHub, entre outras...
            </p>
            <p>
              Estou sempre motivado a aprender sobre tecnologia e crescer,
              determinado a alcançar meus objetivos pessoais e profissionais
              enquanto busco oportunidades para expandir minha experiência e{" "}
              <strong className="text-green-700 font-bold">
                impactar positivamente minha comunidade e ambiente de trabalho.
              </strong>
            </p>
            <div className="flex gap-16">
              <div className="flex flex-col gap-2 text-lg">
                <h3 className="text-2xl font-bold mb-7">Acadêmica</h3>
                <span>Engenharia de Software (Noturno)</span>
                <span className="text-xl">FIAP - Paulista</span>
                <span>jan 2024 - dez 2027</span>
              </div>
              <div className="flex flex-col gap-2 text-lg">
                <h3 className="text-2xl font-bold mb-7">Profissional</h3>
                <span>Garçom</span>
                <span className="text-xl">Restaurante Spot</span>
                <span>abril 2023 - atual</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
